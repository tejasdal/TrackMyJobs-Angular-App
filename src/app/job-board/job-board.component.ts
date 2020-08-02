import { NotificationServiceService } from './notification-service.service';
import { Component, OnInit, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Job } from "./job";
import { CreateJobDialogComponent } from '../create-job-dialog/create-job-dialog.component';
import { JobStatus } from './jobStatus';

import { NotifierService } from "angular-notifier";
import { ViewChild } from "@angular/core";
import { combineAll } from 'rxjs/operators';

import { ActivatedRoute, Router } from '@angular/router';
import { JobBoardService } from './job-board.service';
import { Observable } from 'rxjs';
import { JobBoardData } from './jobBoardData';
import { JobApplication } from './jobApplication';

import { catchError } from 'rxjs/operators';

// @author: Tejas Patel
@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css'],
})
export class JobBoardComponent implements OnInit {


  user_id = JSON.parse(localStorage.getItem('userData'))['email'];


  listOfNotification: any
  @ViewChild("customNotification", { static: true }) customNotificationTmpl;
  private readonly notifierDeadline: NotifierService;
  public jobBoardId: number;
  public jobBoardDetails: Array<JobStatus>;
  public jobBoardData: JobBoardData;
  public showSpinner: boolean;
  private readonly notifier: NotifierService;
  private user: string;

  constructor(public dialog: MatDialog,
    notifierService: NotifierService,
    private notificationServiceDeadline: NotificationServiceService,
    private route: ActivatedRoute,
    private jobBoardService: JobBoardService,
    private router: Router) {

    this.notifier = notifierService;
    this.notifierDeadline = notifierService;
  }

  ngOnInit(): void {

    this.getJobBoardId();
    // This method that handles deadline notification is implemented by Roshan Kirtikumar Patel
    this.notificationServiceDeadline.get_deadline_notificatione(this.user_id).subscribe(res => {

      this.listOfNotification = res;

      var notify_user = localStorage.getItem('NotifyTheUser');
      //DO NOT DELETE
      if (notify_user != 'true') {
        for (var notify of this.listOfNotification) {

          this.showNotification(notify);
        }

      }
    });


  }

  // Function to fetch job board from DB for current logged in user.
  getJobBoardId() {
    this.showSpinner = true;
    this.jobBoardService.getJobBoardForUser(this.user_id).subscribe((dbJobBoard) => {
      this.jobBoardId = dbJobBoard.id;
      this.getJobAppByStatus();
    },
      error => {
        this.showSpinner = false;
        this.showErrorNotification(this.JOB_BOARD_ID_ERROR_MSG);
      });
  }

  // Method to delete a job application from a job board.
  public delete(listNumber: number, jobId: number) {
    this.showSpinner = true;
    // delete job details from the arrr
    this.jobBoardDetails.forEach((list) => {
      if (listNumber === list.id) {
        list.jobs.forEach((job, currentIndex) => {
          if (job.id === jobId) {
            // API call to delete from DB.
            this.jobBoardService.deleteJobAppForJobBoard(jobId).subscribe(res => {
              list.jobs.splice(currentIndex, 1);
              this.showSpinner = false;
              this.showSuccessNotification(this.DELETE_SUCCESS_MSG);
            },
              error => {
                this.showSpinner = false;
                this.showErrorNotification(this.DELETE_ERROR_MSG);
              });
          }
        });
      }
    });
  }

  private DELETE_SUCCESS_MSG = "Successfully deleted the job application!";
  private DELETE_ERROR_MSG = "Failed to deleted the job application!";
  private STATUS_CHANGE_SUCCESS_MSG = "Successfully change status of the job application!";
  private STATUS_CHANGE_ERROR_MSG = "Failed to change status of the job application!";
  private ADD_JOB_SUCCESS_MSG = "Successfully added the job application!";
  private ADD_JOB_ERROR_MSG = "Failed to added the job application!";
  private FETCH_JOB_ERROR_MSG = "Failed to fetch job applications from the server!";
  private JOB_BOARD_ID_ERROR_MSG = "Failed to load a job board from the server!";

  public showSuccessNotification(message: string) {
    this.notifier.show({
      type: "success",
      message: message
    });
  }

  public showErrorNotification(message: string) {
    this.notifier.show({
      type: "error",
      message: message
    });
  }

  // Function to open a dialog to create a new job.
  addNewJobApp(status: string): void {
    let job: JobApplication = new JobApplication();
    job.status = status;

    const dialogRef = this.dialog.open(CreateJobDialogComponent, {
      width: '300px',
      data: job
    });

    dialogRef.afterClosed().subscribe(result => {
      this.add(result);
    });
  }

  //Add new job to JobBoardDetails array.
  add(result: JobApplication) {
    this.showSpinner = true;

    this.jobBoardDetails.forEach(jobStatus => {
      if (jobStatus.listName === result.status) {
        //Add new job in job list of the matched JobStatus.
        result.jobBoardId = this.jobBoardId;
        result.userId = this.user_id;
        this.jobBoardService.createJobAppForJobBoard(result).subscribe(jobApp => {
          let colorId: number = Math.floor((Math.random() * 13) + 1);
          jobApp.color = this.colors[colorId];
          jobStatus.jobs.push(jobApp);
          this.showSpinner = false;
          this.showSuccessNotification(this.ADD_JOB_SUCCESS_MSG);
        },
          error => {
            this.showSpinner = false;
            this.showErrorNotification(this.ADD_JOB_ERROR_MSG);
          });
      }
    });
  }

  // Function to load all job application status-wise for a job board from DB.
  getJobAppByStatus() {
    this.jobBoardService.getAllJobAppForJobBoard(this.jobBoardId).subscribe((jobBoardData) => {
      this.jobBoardData = jobBoardData;
      this.getJobBoardDetails();
      this.showSpinner = false;
    }, error => {
      this.showSpinner = false;
      this.showErrorNotification(this.FETCH_JOB_ERROR_MSG);
    });
  }

  private colors = ["#654062", "#726a95", "#ff9234", "#cf7500", "#0e9aa7", "#1b6ca8", "#45046a", "#5c2a9d", "#562349", "#26191b", "#6a097d", "#007892", "#6f0000", "#bb3b0e"];

  // Set a random colour to a job application card.
  setColorToJob(jobs: Array<JobApplication>) {
    for (let index = 0; index < jobs.length; index++) {
      const element = jobs[index];
      let colorId: number = Math.floor((Math.random() * 13) + 1);
      element.color = this.colors[colorId];
    }
  }

  //Prepare array of status wise job application to be displayed in HTML.
  getJobBoardDetails() {

    this.setColorToJob(this.jobBoardData.WHISHLIST);
    this.setColorToJob(this.jobBoardData.APPLIED);
    this.setColorToJob(this.jobBoardData.INTERVIEW);
    this.setColorToJob(this.jobBoardData.OFFER);
    this.setColorToJob(this.jobBoardData.REJECT);

    let whishlistJobStatus = this.getJobStatus(0, "WHISHLIST", this.jobBoardData.WHISHLIST);
    let appliedJobStatus = this.getJobStatus(1, "APPLIED", this.jobBoardData.APPLIED);
    let interviewJobStatus = this.getJobStatus(2, "INTERVIEW", this.jobBoardData.INTERVIEW);
    let offerJobStatus = this.getJobStatus(3, "OFFER", this.jobBoardData.OFFER);
    let rejectJobStatus = this.getJobStatus(4, "REJECT", this.jobBoardData.REJECT);

    let jobBoardDetails: Array<JobStatus> = [];
    jobBoardDetails.push(whishlistJobStatus);
    jobBoardDetails.push(appliedJobStatus);
    jobBoardDetails.push(interviewJobStatus);
    jobBoardDetails.push(offerJobStatus);
    jobBoardDetails.push(rejectJobStatus);

    this.jobBoardDetails = jobBoardDetails;
  }

  //Function to get new JobStatus Object.
  getJobStatus(id: number, listName: string, jobs: Array<JobApplication>): JobStatus {
    let jobStatus: JobStatus = new JobStatus();
    jobStatus.id = id;
    jobStatus.listName = listName;
    jobStatus.jobs = jobs;
    return jobStatus;
  }

  // Function to change status of a job application.
  drop(event: CdkDragDrop<JobApplication[]>, listName: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.showSpinner = true;
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      for (let index = 0; index < event.container.data.length; index++) {
        let job = event.container.data[index];
        if (job.status != listName) {
          job.status = listName;
          // API call to change status of job application in database.
          this.jobBoardService.updateJobAppForJobBoard(job).subscribe(newJob => {
            job = newJob;
            this.showSpinner = false;
            this.showSuccessNotification(this.STATUS_CHANGE_SUCCESS_MSG);
          },
            err => {
              this.showSpinner = false;
              this.showErrorNotification(this.STATUS_CHANGE_ERROR_MSG);
            });
        }
      }
    }
  }


  showNotification(msg: any) {
    localStorage.setItem('NotifyTheUser', 'true');
    this.notifierDeadline.show({
      message: '"' + msg['data'] + '".' + 'Dealine for this activity is ' + msg['deadline'],
      type: "error",
      template: this.customNotificationTmpl
    });
  }

  setSession() {
    const session = localStorage.getItem('NotifyTheUser');
    if (session == 'false') {
      localStorage.setItem('NotifyTheUser', 'true');
    }
  }

}

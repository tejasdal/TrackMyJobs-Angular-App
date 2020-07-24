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


@Component({
  selector: 'app-job-board',
  templateUrl: './job-board.component.html',
  styleUrls: ['./job-board.component.css'],
})
export class JobBoardComponent implements OnInit {

  user_id=JSON.parse(localStorage.getItem('userData'))['email'];


  listOfNotification:any
  @ViewChild("customNotification", { static: true }) customNotificationTmpl;
  private readonly notifierDeadline: NotifierService;

  constructor(public dialog: MatDialog
    ,notifierService: NotifierService
    ,private notificationServiceDeadline:NotificationServiceService) {
    this.notifierDeadline = notifierService;
   }

  ngOnInit(): void {
   
    this.notificationServiceDeadline.get_deadline_notificatione(this.user_id).subscribe(res=>{
 
     this.listOfNotification =res;
  
     var notify_user = localStorage.getItem('NotifyTheUser');
     console.log("length is"+this.listOfNotification.length);
     //DO NOT DELETE
    // if(notify_user != 'true')
    //  {
      for(var notify of this.listOfNotification)
      {
   
       this.showNotification(notify);
      }

    //}
    });
    
  }

  colors = ["#654062", "#726a95", "#ff9234", "#cf7500", "#0e9aa7", "#1b6ca8", "#45046a", "#5c2a9d", "#562349", "#26191b", "#6a097d", "#007892", "#6f0000", "#bb3b0e"];
  maxJobStatusId: number = 1;
  maxJobId: number = 1;

  public delete(listNumber: number, jobId: number) {
    // delete job details from the arrr
    this.jobBoardDetails.forEach((list) => {
      if (listNumber === list.id) {
        list.jobs.forEach((job, currentIndex) => {
          if (job.id === jobId) {
            list.jobs.splice(currentIndex, 1);
            console.log("Item deleted: " + job.jobTitle+ " jobID: "+ job.id + "listID: "+ list.id);
          }
        });
      }
    });
  }

  // Function to open a dialog to create a new job.
  addNewJobApp(status: number): void {
    let job: Job = new Job();
    job.status = status;

    const dialogRef = this.dialog.open(CreateJobDialogComponent, {
      width: '300px',
      data: job
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.add(result);
    });
  }

  //Add new job to JobBoardDetails array.
  add(result: Job) {

    this.jobBoardDetails.forEach(jobStatus => {
      if (jobStatus.id === result.status) {
        //Add new job in job list of the matched JobStatus.
        jobStatus.jobs.push(this.getJobs(result.jobTitle, result.company));
        console.log("Added a new job!");
      }
    });
  }

  public jobBoardDetails: Array<JobStatus> = this.getJobBoardDetails();

  getJobBoardDetails(): Array<JobStatus> {

    //Static data for Applied Status
    let appliedJobs: Array<Job> = [];
    appliedJobs.push(this.getJobs("SE", "Google"));
    appliedJobs.push(this.getJobs("Git Developer", "GitHub"));
    appliedJobs.push(this.getJobs("QA", "Yahoo!"));
    let appliedJobStatus = this.getJobStatus("Applied", appliedJobs);

    //Static data for Interview Status
    let interviewJobs: Array<Job> = [];
    interviewJobs.push(this.getJobs("SE", "ManuLife"));
    let interviewJobStatus = this.getJobStatus("Interview", interviewJobs);

    //Static data for Offer Status
    let offerJobs: Array<Job> = [];
    offerJobs.push(this.getJobs("Programer Analyst", "RBC"));
    offerJobs.push(this.getJobs("QA", "Gracenote"));
    let offerJobStatus = this.getJobStatus("Offer", offerJobs);

    //Static data for Reject Status
    let rejectJobs: Array<Job> = [];
    rejectJobs.push(this.getJobs("Programer Analyst", "Facebook"));
    let rejectJobStatus = this.getJobStatus("Reject", rejectJobs);

    let jobBoardDetails: Array<JobStatus> = [];
    jobBoardDetails.push(appliedJobStatus);
    jobBoardDetails.push(interviewJobStatus);
    jobBoardDetails.push(offerJobStatus);
    jobBoardDetails.push(rejectJobStatus);
    return jobBoardDetails;
  }

  //Function to get new JobStatus Object.
  getJobStatus(listName: string, jobs: Array<Job>): JobStatus {
    let jobStatus1: JobStatus = new JobStatus();
    jobStatus1.id = this.maxJobStatusId;
    this.maxJobStatusId++;
    jobStatus1.listName = listName;
    jobStatus1.jobs = jobs;
    return jobStatus1;
  }

  getJobs(jobTitle: string, company: string): Job {
    let job: Job = new Job();
    job.id = this.maxJobId;
    this.maxJobId++;
    job.jobTitle = jobTitle;
    job.company = company;
    let colorId: number = Math.floor((Math.random() * 13) + 1);
    job.color = this.colors[colorId];
    return job;
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  showNotification(msg:any)
  {
  
    this.notifierDeadline.show({
      message:'"'+ msg['data']+'".'+ 'Dealine for this activity is '+msg['deadline'],
      type: "error",
      template: this.customNotificationTmpl
  });
  }

  setSession()
  {
    const session = localStorage.getItem('NotifyTheUser');
    if(session =='false')
    {
      localStorage.setItem('NotifyTheUser', 'true');
      console.log('session is set to true');
    }
  }

}

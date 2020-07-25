import { Component, OnInit } from '@angular/core';
import { ActivityItem } from './ActivityItem';
import { CreateActivityDialogComponent } from '../create-activity-dialog/create-activity-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JobActivityService } from './job-activity.service';
import { Activity } from './Activity';
import { tap, catchError, map} from 'rxjs/operators';
@Component({
  selector: 'app-job-activity',
  templateUrl: './job-activity.component.html',
  styleUrls: ['./job-activity.component.css']
})

export class JobActivityComponent implements OnInit {
  public readonly notifier: NotifierService;
  public maxActivityId: number = 1;
  public completedItems: Activity[] = this.getCompletedItems();
  public toDoItems: Activity[] = this.getToDoItems();
  public allActivityList: Activity[];

  myDate = new Date();
  
  constructor(public dialog: MatDialog, private router:Router, private activityService: JobActivityService,notifierService: NotifierService, private _snackBar : MatSnackBar) { 
    this.notifier = notifierService;
  }

  private ADD_ACTIVITY_SUCCESS_MSG = "Successfully added the Activity to ToDo Items!";
  private ADD_ACTIVITY_ERROR_MSG = "Failed to added the Activity!";
  private FETCH_ACTIVITY_ERROR_MSG = "Failed to fetch Activities from the server!";
  private CHANGE_SUCCESS_MSG = "Successfully updated the Activity!";
  private CHANGE_ERROR_MSG = "Failed to update the Activity!";

  user_id = JSON.parse(localStorage.getItem('userData'))['email'];

  ngOnInit(): void {
    this.populateItems();
  }

  // Function to open a dialog to create a new ActivityItem.
  addNewActivity(): void {
    let activityItem: Activity = new ActivityItem();
    const dialogRef = this.dialog.open(CreateActivityDialogComponent, {
      width: '300px',
      data: activityItem
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.add(result);
      }
    });
  
  }

  public showSuccessNotification(message:string){
    this.notifier.show({
      type: "success",
      message: message
  });
  }
  
  public showErrorNotification(message:string){
    this.notifier.show({
      type: "error",
      message: message
  });
  }

  add(result: ActivityItem){
    let newActivity:ActivityItem;
    newActivity = this.getActivityDetails(result.activityDetail,result.activityDeadline,0,null);
    this.activityService.addActivity(newActivity).subscribe(jobActivity => {
      this.populateItems();
      debugger;
      this._snackBar.open(this.ADD_ACTIVITY_SUCCESS_MSG,'',{
        duration:2000,
      });
    });
  }

  moveToToDo(event, uncheckedId){
    if(!event.target.checked){
      this.completedItems.forEach((item, index)=> {
        if (item.id === uncheckedId) {
          //move check item from toDoItems list to completedItems list with completedOn date.
          let unCheckedActivity = this.completedItems[index];
          unCheckedActivity.date_completed = null;
          unCheckedActivity.activity_status = 0;
          this.update(unCheckedActivity);
          }
      });
    }
  }

  moveToCompleted(event, checkedId){
    if(event.target.checked)
    {
      this.toDoItems.forEach((item,index)=>{
        if(item.id === checkedId){
        //move check item from toDoItems list to completedItems list with completedOn date.
          let checkedActivity = this.toDoItems[index];
          checkedActivity.date_completed = new Date();
          checkedActivity.activity_status = 1;
          this.update(checkedActivity);
          }
      });
    }
  }

  update(body:Activity){
    body.user_id = this.user_id;
    this.activityService.updateActivity(body).subscribe(jobActivity =>{
          console.log("Updated Activities");
          this.populateItems();
          this._snackBar.open(this.CHANGE_SUCCESS_MSG,'',{
            duration:2000,
          });  
    });
  }

  getCompletedItems():Activity[]{
    let activites:Activity[];
    let uniqueItem:Activity;

    if(this.allActivityList != null){
      for( const a in this.allActivityList)
      {
        
      }
    }
    return activites;
    
  }

  getToDoItems():Activity[]{
    let activites:Activity[];

    return activites;
  }

  populateItems(){
    let userID:string = this.user_id;
    this.activityService.getAllActivities(userID).subscribe((data) => {
     this.toDoItems = data[0];
      this.completedItems = data[1];
      }, error => {
      this.showErrorNotification(this.FETCH_ACTIVITY_ERROR_MSG);
    });
  }

  getActivityDetails(activityName: string, deadline: Date, isCompleted: number, completionDate: Date):ActivityItem{
    let newActivity:ActivityItem = new ActivityItem();
    newActivity.id = this.maxActivityId;
    this.maxActivityId++;
    newActivity.user_id= this.user_id;
    newActivity.activity_detail = activityName;
    newActivity.activity_deadline = deadline;
    newActivity.date_created = new Date();
    newActivity.activity_status = isCompleted;
    newActivity.date_completed = completionDate;
    return newActivity;
  }

}

export interface ActivityResponse{
  status?:boolean;
  activity?:any;
}
import { Component, OnInit } from '@angular/core';
import { ActivityItem } from './ActivityItem';
import { CreateActivityDialogComponent } from '../create-activity-dialog/create-activity-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-job-activity',
  templateUrl: './job-activity.component.html',
  styleUrls: ['./job-activity.component.css']
})
export class JobActivityComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  maxActivityId: number = 1;

  ngOnInit(): void {
  }

  completedItems: Array<ActivityItem> = this.getCompletedItems();
  toDoItems: Array<ActivityItem> = this.getToDoItems();

  // Function to open a dialog to create a new ActivityItem.
  addNewActivity(): void {
    let activityItem: ActivityItem = new ActivityItem();
    
    const dialogRef = this.dialog.open(CreateActivityDialogComponent, {
      width: '300px',
      data: activityItem
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.add(result);
    });
  }

  add(result: ActivityItem){
    this.toDoItems.push(this.getActivity(result.activity, result.deadline, false));
  }

  moveToCompleted(event, checkedId){
    if(event.target.checked){
      this.toDoItems.forEach((item, index)=> {
        if (item.id === checkedId) {
          //move check item from toDoItems list to completedItems list with completedOn date.
          let checkedActivity = this.toDoItems[index];
          checkedActivity.completedOn = new Date();
          checkedActivity.isCompleted = true;
          this.completedItems.push(checkedActivity);
          this.toDoItems.splice(index,1);
        }
      });
    }
  }

  moveToToDo(event, uncheckedId){
    if(!event.target.checked){
      this.completedItems.forEach((item, index)=> {
        if (item.id === uncheckedId) {
          //move check item from toDoItems list to completedItems list with completedOn date.
          let unCheckedActivity = this.completedItems[index];
          unCheckedActivity.completedOn = null;
          unCheckedActivity.isCompleted = false;
          this.toDoItems.push(unCheckedActivity);
          this.completedItems.splice(index,1);
        }
      });
    }
  }

  getCompletedItems(): Array<ActivityItem> {

    let activities: Array<ActivityItem> = [];
    let activity = this.getActivity("Prepare Resume and Cover Letter", new Date("2020-06-20"), true);
    activity.completedOn =  new Date("2020-05-20");
    activities.push(activity);
  
    return activities;
  }

  getToDoItems(): Array<ActivityItem> {
    let activities: Array<ActivityItem> = [];
    activities.push(this.getActivity("Read blog of best practice to prepare resume", new Date("2020-06-20"), false));
    activities.push(this.getActivity("Contact Julie for a reference", new Date("2020-07-20"), false));
    activities.push(this.getActivity("Apply for Software Developer position at Facebook", new Date("2020-06-20"), false));
    return activities;
  }

  getActivity(activityName: string, deadline: Date, isCompleted: boolean): ActivityItem {
    let activity: ActivityItem = new ActivityItem();
    activity.id = this.maxActivityId;
    this.maxActivityId++;
    activity.activity = activityName;
    activity.deadline = deadline;
    activity.isCompleted = isCompleted;
    return activity;
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivityItem } from '../job-activity/ActivityItem';

@Component({
  selector: 'app-create-activity-dialog',
  templateUrl: './create-activity-dialog.component.html',
  styleUrls: ['./create-activity-dialog.component.css']
})
export class CreateActivityDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ActivityItem) {}
    
  ngOnInit(): void {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

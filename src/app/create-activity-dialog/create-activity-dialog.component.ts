import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivityItem } from '../job-activity/ActivityItem';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-create-activity-dialog',
  templateUrl: './create-activity-dialog.component.html',
  styleUrls: ['./create-activity-dialog.component.css']
})
export class CreateActivityDialogComponent implements OnInit {
  activityForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    public dialogRef: MatDialogRef<CreateActivityDialogComponent>,
    private customValidator: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: ActivityItem) {}
    
  ngOnInit(): void {
    this.activityForm = this.formBuilder.group({
      activityDeadline:['', [Validators.required,Validators.nullValidator]],
      activityDetail:['',[Validators.required, Validators.nullValidator]]
     });
  }

  get formControl() {
    return this.activityForm.controls;
  }

  onAddingContact(){
    this.submitted = true;
    if (this.activityForm.valid) {
      this.dialogRef.close(this.activityForm.value);
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

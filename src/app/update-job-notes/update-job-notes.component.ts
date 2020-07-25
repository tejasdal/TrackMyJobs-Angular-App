import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { jobnotes } from '../job-notes/job-notes';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-update-job-notes',
  templateUrl: './update-job-notes.component.html',
  styleUrls: ['./update-job-notes.component.css']
})
export class UpdateJobNotesComponent implements OnInit {
  noteForm: FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder,
    private router:Router,
    public dialogRef: MatDialogRef<UpdateJobNotesComponent>, 
    private customValidator: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: jobnotes) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      noteDetails:[,[Validators.required,Validators.nullValidator]]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  get formControl() {
    return this.noteForm.controls;
  }

  onUpdatingContact(){
    this.submitted = true;
    if (this.noteForm.valid) {
      this.dialogRef.close(this.data);
    }

  }

}

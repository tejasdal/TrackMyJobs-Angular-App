import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../services/validation.service';
import {Notes} from '../job-notes/Notes';
import {jobnotes} from '../job-notes/job-notes';

@Component({
  selector: 'app-create-note-dialog',
  templateUrl: './create-note-dialog.component.html',
  styleUrls: ['./create-note-dialog.component.css']
})
export class CreateNoteDialogComponent implements OnInit {
  noteForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,  private router:Router,
    public dialogRef: MatDialogRef<CreateNoteDialogComponent>,private customValidator: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: Notes) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      note:['',[Validators.required,Validators.nullValidator]]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  get formControl(){
    return this.noteForm.controls;
  }

  onAddingNote(){
    this.submitted = true;
    if (this.noteForm.valid) {
      this.dialogRef.close(this.noteForm.value);
    }

  }
}

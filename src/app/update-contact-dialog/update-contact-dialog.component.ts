import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Contact} from '../contact/contact';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-update-contact-dialog',
  templateUrl: './update-contact-dialog.component.html',
  styleUrls: ['./update-contact-dialog.component.css']
})
export class UpdateContactDialogComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  ID : number;
  contactname: string;
  contactemail: string;
  contactcompany: string;
  positionofPerson:string;

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    public dialogRef: MatDialogRef<UpdateContactDialogComponent>,
    private customValidator: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: Contact) {
     }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      contactID:[this.data.contactID],
      contactName:[this.data.contactName, [Validators.required,Validators.nullValidator]],
      company:[this.data.company,[Validators.required, Validators.nullValidator]],
      jobPosition:[this.data.jobPosition,[Validators.required, Validators.nullValidator]],     
      contactEmail: [this.data.contactEmail,[Validators.required, this.customValidator.emailValidator()]
       ]
     });
  }

  get formControl() {
    return this.contactForm.controls;
  }

  onUpdatingContact(){
    this.submitted = true;
    if (this.contactForm.valid) {
      this.dialogRef.close(this.data);
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

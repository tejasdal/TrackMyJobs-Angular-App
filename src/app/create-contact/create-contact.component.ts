import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Contact} from '../contact/contact';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder,
    private router:Router,
    public dialogRef: MatDialogRef<CreateContactComponent>,
    private customValidator: ValidationService,
    @Inject(MAT_DIALOG_DATA) public data: Contact) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      Name:['', [Validators.required,Validators.nullValidator]],
      Company:['',[Validators.required, Validators.nullValidator]],
      Position:['',[Validators.required, Validators.nullValidator]],     
      Email: ['',[Validators.required, this.customValidator.emailValidator()]
       ]
     });
  }

  get formControl() {
    return this.contactForm.controls;
  }

  onAddingContact(){
    this.submitted = true;
    if (this.contactForm.valid) {
      alert('This contact will be added to teh Contact List ');
      this.dialogRef.close(this.contactForm.value);
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

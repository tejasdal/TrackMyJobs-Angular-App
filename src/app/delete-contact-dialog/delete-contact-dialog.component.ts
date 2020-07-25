import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {Contact} from '../contact/contact';

@Component({
  selector: 'app-delete-contact-dialog',
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.css']
})
export class DeleteContactDialogComponent implements OnInit {

  constructor( private router:Router,
    public dialogRef: MatDialogRef<DeleteContactDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact) { }

  ngOnInit(): void {
  }
  onClickDelete(){
    var text = "Delete";
    this.dialogRef.close(text);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Contact} from './contact';
import { CreateContactComponent } from '../create-contact/create-contact.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  contactlist: any[] = [
    { id: "1", Name: 'Dolor Sit Amet', Email: 'adipiscing@elit.com', Company: "consectetur adipiscing", Position: "HR Representative"},
    { id: "2", Name: 'Cras lacinia', Email: 'ubitlq12@gmail.com', Company: "sed do eiusmod", Position: "Vice President Sales Department"},
    { id: "3", Name: 'Cras malesuada', Email: 'lorem@yahoo.com', Company: "sed do eiusmod", Position: "Regional Manager"},
    { id: "4", Name: 'Proin pulvinar', Email: 'onsectetuer@inf.lis.', Company: "dolore magna aliqua", Position: "Business Analyst"},
    { id: "5", Name: 'Etiam egestas', Email: 'orgkctaf@grol.com.', Company: "mofera sdreha", Position: "Senior HR Representative"}
  ];
contactSearch: String;

onCreateContact(){
  let contactDetail: Contact = new Contact();
 
  const dialogRef = this.dialog.open(CreateContactComponent, {
    width: '300px',
    height: 'auto',
    data: contactDetail
  });

  dialogRef.afterClosed().subscribe(
    result => console.log("Contact Details:", result)
  );

}
}

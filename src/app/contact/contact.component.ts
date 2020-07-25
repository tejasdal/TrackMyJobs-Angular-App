import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Contact} from './contact';
import { CreateContactComponent } from '../create-contact/create-contact.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactsService} from './contacts.service';
import { NotifierService } from "angular-notifier";
import { MatSnackBar } from "@angular/material/snack-bar";
import { DeleteContactDialogComponent } from '../delete-contact-dialog/delete-contact-dialog.component';
import { UpdateContactDialogComponent } from '../update-contact-dialog/update-contact-dialog.component';
import { JobContacts } from './jobcontacts';
import { User} from '../auth/user.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactlist: Contact[];
  contactSearch: String;
  private readonly notifier: NotifierService;
 
  userID = JSON.parse(localStorage.getItem('userData'))['email'];
  
  private DELETE_SUCCESS_MSG = "Successfully deleted the contact!";
  private DELETE_ERROR_MSG = "Failed to deleted the contact!";
  private CHANGE_SUCCESS_MSG = "Successfully updated the contact!";
  private CHANGE_ERROR_MSG = "Failed to update the contact!";
  private ADD_CONTACT_SUCCESS_MSG = "Successfully added the contact!";
  private ADD_CONTACT_ERROR_MSG = "Failed to added the contact!";
  private FETCH_CONTACT_ERROR_MSG = "Failed to fetch contacts from the server!";

  
  constructor(private router: Router,public dialog: MatDialog, private contactService:ContactsService,notifierService: NotifierService, private _snackBar : MatSnackBar) { 
    this.notifier = notifierService;
  }

  ngOnInit(){
    this.popualateContactDetails();
  }

 onCreateContact(){
  let contactDetails: Contact = new JobContacts();
  const dialogRef = this.dialog.open(CreateContactComponent, {
    width: '300px',
    height: 'auto',
    data:contactDetails
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if(result){
     this.add(result);
    }
  });

}

// Add new Contact
add(result:Contact){
  result.userID = this.userID;
  this.contactService.addContact(result).subscribe(jobContact => {
        console.log("Added a new contact!");
        this.popualateContactDetails();
        this._snackBar.open(this.ADD_CONTACT_SUCCESS_MSG,'',{
          duration:2000,
        
        });
      });
}

onDeleteContact(deleteData:Contact){
  const dialogRef = this.dialog.open(DeleteContactDialogComponent, {
    width: '300px',
    height: 'auto',
    data: deleteData
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if(result){
      console.log(result);
      this.delete(deleteData);

    }
  });

}

// Delete Contact
delete(result:Contact){
  this.contactService.deleteContact(result.contactID).subscribe(jobContact => {
        console.log("Deleted contact!");
        this.popualateContactDetails();
        this._snackBar.open(this.DELETE_SUCCESS_MSG,'',{
          duration:2000,
        });

      });  
}

onUpdateContact(updateData:Contact){
  
  const dialogRef = this.dialog.open(UpdateContactDialogComponent, {
    width: '300px',
    height: 'auto',
    data: updateData,
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    if(result){
     this.update(result);
    }
    else{
      this.popualateContactDetails();
    }
  });
}

// Update Contact
update(result:Contact){
  this.contactService.updateContact(result).subscribe(jobContact => {
        console.log("Updated contact!");
        this.popualateContactDetails();
        this._snackBar.open(this.CHANGE_SUCCESS_MSG,'',{
          duration:2000,
        });

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

popualateContactDetails(){
  let userID:string = this.userID;
  this.contactService.getAllContacts(userID).subscribe((data: ContactResponse) =>{   
  this.contactlist = data as Contact[];
  }, error => {
    this.showErrorNotification(this.FETCH_CONTACT_ERROR_MSG);
  });
}
}

export interface ContactResponse{
  status?:boolean;
  contact?:any;
}
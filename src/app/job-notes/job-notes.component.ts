import { Component, OnInit } from '@angular/core';
import { Notes } from './Notes';
import { jobnotes } from './job-notes'
import { CreateNoteDialogComponent } from '../create-note-dialog/create-note-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { JobNotesService } from './job-notes.service';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteJobNotesComponent } from '../delete-job-notes/delete-job-notes.component';
import { UpdateJobNotesComponent } from '../update-job-notes/update-job-notes.component';

@Component({
  selector: 'app-job-notes',
  templateUrl: './job-notes.component.html',
  styleUrls: ['./job-notes.component.css']
})
export class JobNotesComponent implements OnInit {
  public readonly notifier: NotifierService;
  public maxNoteId: number = 1;
  public noteList: jobnotes[];
  
  user_id = JSON.parse(localStorage.getItem('userData'))['email'];

  constructor(public dialog: MatDialog, private router:Router, private noteService:JobNotesService,notifierService: NotifierService, private _snackBar : MatSnackBar) { 
    this.notifier = notifierService;
  }

  private DELETE_SUCCESS_MSG = "Successfully deleted the note!";
  private DELETE_ERROR_MSG = "Failed to deleted the note!";
  private CHANGE_SUCCESS_MSG = "Successfully updated the note!";
  private CHANGE_ERROR_MSG = "Failed to update the note!";
  private ADD_NOTE_SUCCESS_MSG = "Successfully added the note!";
  private ADD_NOTE_ERROR_MSG = "Failed to added the note!";
  private FETCH_NOTE_ERROR_MSG = "Failed to fetch notes from the server!";
  
  ngOnInit(): void {
    this.getNotes();
  }

  // Function to open a dialog to create a new ActivityItem.
  addNewNote(): void {
    let note:jobnotes = new Notes();

    const dialogRef = this.dialog.open(CreateNoteDialogComponent, {
      width: '300px',
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result){
        this.add(result);
    }
    });

  }

  add(result: jobnotes){
    result.userID = this.user_id;
    this.noteService.addNote(result).subscribe(jobNotes=>{
      debugger;
      this.getNotes();
      this._snackBar.open(this.ADD_NOTE_SUCCESS_MSG,'',{
        duration:2000,
      });
    });    
  }

  onDeleteNote(deleteData:jobnotes){
    const dialogRef = this.dialog.open(DeleteJobNotesComponent, {
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
  
  // Delete Note
  delete(result:jobnotes){
    this.noteService.deleteNote(result.noteID).subscribe(jobNote => {
          console.log("Deleted contact!");
          this.getNotes();
          this._snackBar.open(this.DELETE_SUCCESS_MSG,'',{
            duration:2000,
          });
  
        });  
  }
  
  onUpdateNote(updateData:jobnotes){
    
    const dialogRef = this.dialog.open(UpdateJobNotesComponent, {
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
        this.getNotes();
      }
    });
  }
  
  // Update Notes
  update(result:jobnotes){
    this.noteService.updateNotes(result).subscribe(jobNotes => {
          console.log("Updated contact!");
          this.getNotes();
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
  
  getNotes(){
   let userID: string = this.user_id;
   this.noteService.getAllNotes(userID).subscribe((data: NoteResponse) => {
    this.noteList = data as jobnotes[];
   }, error => {
    this.showErrorNotification(this.FETCH_NOTE_ERROR_MSG);
  });
}

}

export interface NoteResponse{
  status?:boolean;
  notes?:any;
}
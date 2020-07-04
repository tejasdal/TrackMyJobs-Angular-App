import { Component, OnInit } from '@angular/core';
import { Notes } from './Notes';
import { CreateNoteDialogComponent } from '../create-note-dialog/create-note-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-job-notes',
  templateUrl: './job-notes.component.html',
  styleUrls: ['./job-notes.component.css']
})
export class JobNotesComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  maxNoteId: number = 1;
  noteList: Array<Notes> = this.getNotes();

  ngOnInit(): void {
   
  }

  // Function to open a dialog to create a new ActivityItem.
  addNewNote(): void {
    let note: Notes = new Notes();
    
    const dialogRef = this.dialog.open(CreateNoteDialogComponent, {
      width: '300px',
      data: note
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.add(result);
    });

  }

  add(result: Notes){
    this.noteList.push(this.getNote(result.note));
  }

  getNotes(): Array<Notes> {
    let notes: Array<Notes> = [];
    notes.push(this.getNote("Prepare Resume for application to ABC Pvt. Ltd."));
    notes.push(this.getNote("Get CV verified before starting application for xyz.com"));
    notes.push(this.getNote("Prepare for Software Developer position Interview of Gracenote"));
    
    return notes;
  }

  getNote(noteBody: string): Notes {
    let note: Notes = new Notes();
    note.id = this.maxNoteId;
    this.maxNoteId++;
    note.note = noteBody;
    return note;
  }
}

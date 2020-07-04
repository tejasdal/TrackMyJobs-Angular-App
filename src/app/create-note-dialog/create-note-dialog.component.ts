import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Notes} from '../job-notes/Notes';


@Component({
  selector: 'app-create-note-dialog',
  templateUrl: './create-note-dialog.component.html',
  styleUrls: ['./create-note-dialog.component.css']
})
export class CreateNoteDialogComponent implements OnInit {

  constructor(    public dialogRef: MatDialogRef<CreateNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Notes) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { jobnotes } from '../job-notes/job-notes';

@Component({
  selector: 'app-delete-job-notes',
  templateUrl: './delete-job-notes.component.html',
  styleUrls: ['./delete-job-notes.component.css']
})
export class DeleteJobNotesComponent implements OnInit {

  constructor(private router:Router,
    public dialogRef: MatDialogRef<DeleteJobNotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: jobnotes) { }

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

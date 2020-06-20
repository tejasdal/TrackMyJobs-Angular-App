import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  sendmail() {
    var msg = "Mail Sent Successfully";
    this.snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] })
  }
}

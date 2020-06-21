import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgetPasswordDialogComponent } from '../forget-password-dialog/forget-password-dialog.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private router: Router, public dialog: MatDialog) { }
  ngOnInit(): void {
  }

  signinconfirmation() {
    var msg = "Login Successful";
    this.snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] })
    this.router.navigate(['/home'])
  }

  openForgetPasswordDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ForgetPasswordDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      email => console.log("Forget password dialog output:", email)
    );
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ForgetPasswordDialogComponent } from '../forget-password-dialog/forget-password-dialog.component';
import { AuthService, AuthReturnData } from '../auth/auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @ViewChild('signin') form: NgForm;
  error: string = "";

  constructor(private snackbar: MatSnackBar, private router: Router, public dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  signinconfirmation(form: NgForm) {

    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs = new Observable<AuthReturnData>();

    authObs = this.authService.Login(email,password);
    
    authObs.subscribe(
      (response) => {
        var msg = "SignIn Successful";
        this.snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] });
        this.router.navigate(['/home']);
      }
    ,errorMessage => {
      this.error = errorMessage;
    });

    form.reset();
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

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private router: Router) { }
  ngOnInit(): void {
  }

  signinconfirmation() {
    var msg = "Login Successful";
    this.snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] })
    this.router.navigate(['/home'])
  }

}

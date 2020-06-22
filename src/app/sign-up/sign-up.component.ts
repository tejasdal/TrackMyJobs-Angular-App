import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService, AuthReturnData } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('signin') form: NgForm;
  submitted = false;
  error: string = "";

  constructor(private router: Router, private authService: AuthService, private snackbar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs = new Observable<AuthReturnData>();

    authObs = this.authService.signUp(email,password);
    
    authObs.subscribe(
      (response) => {
        var msg = "SignUp Successful";
        this.snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] });
        this.router.navigate(['/home']);
      }
    ,errorMessage => {
      this.error = errorMessage;
    });
    form.reset();
  }
}

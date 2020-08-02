import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfileService } from './profile.service';
import { MatSnackBar } from "@angular/material/snack-bar";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @ViewChild('registrationForm') form: NgForm;
  userName: string = "";

  constructor(private service: ProfileService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    const userData: {
      email: string;
      id: string;
      _token: string;
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (userData.email != null) {
      this.service.getProfile(userData.email).subscribe(res => {
        this.userName = res.firstName + " " + res.lastName;
        this.form.setValue({
          first_name: res.firstName,
          last_name: res.lastName,
          phone: res.phone,
          email: res.email,
          link: res.linkedInURL,
          password: res.password
        })
      });
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      let fname = form.value.first_name;
      let lname = form.value.last_name;
      let phone = form.value.phone;
      let email = form.value.email;
      let url = form.value.link;
      let pass = form.value.password;

      this.service.updateProfile(email, fname, lname, phone, url, pass).subscribe(res => {
        this._snackBar.open('User Data Updated Successfully', 'close', { duration: 1500, horizontalPosition: "end", verticalPosition: "bottom", panelClass: ["snackbar_confirm"] })
      })
    }
  }

}
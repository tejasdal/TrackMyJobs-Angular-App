import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  isAuthenticated:boolean = false;
  userSub:Subscription;

  home = 'Home';
  blog = 'Blogs';
  jobs = 'Jobs';
  contact = 'Contact';
  about = 'About';
  sign_in_btn = "Sign in";
  sign_up_btn = "Sign up";
  writeBlog="Write blogs";
  analysis = "Analysis";
  job_board = "Job Board";
  job_activity = "Job Activity";

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = user ? true : false;
    })
  }

  onLogout(){
    this.authService.logOut();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

}

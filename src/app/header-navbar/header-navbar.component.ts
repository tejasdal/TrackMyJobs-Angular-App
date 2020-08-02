import { NotificationServiceService } from './../job-board/notification-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  isAuthenticated: boolean = false;
  userSub: Subscription;
  notificationCount = 0;
  listOfNotification: any


  home = 'Home';
  blog = 'Blogs';
  readblog = 'Read Blogs';
  writeBlog = "Write Blogs";
  jobs = 'Jobs';
  job_discover = 'Discover Jobs';
  job_board = "Job Board";
  job_activity = "Job Activity";
  contact = 'Job Contacts';
  about = 'About';
  sign_in_btn = "Sign in";
  sign_up_btn = "Sign up";
  analysis = "Analysis";

  constructor(private authService: AuthService, private notificationService: NotificationServiceService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = user ? true : false;

      if (this.isAuthenticated) {

        this.showNotificationCount();
      }
    })
  }

  onLogout() {
    this.authService.logOut();
    this.isAuthenticated = false;
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  showNotificationCount() {

    var user_id = JSON.parse(localStorage.getItem('userData'))['email'];


    this.notificationService.get_deadline_notificatione(user_id).subscribe(res => {
      this.listOfNotification = res;
      this.notificationCount = this.listOfNotification.length;
    });

  }
}

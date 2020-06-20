import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavbarComponent implements OnInit {

  constructor() { }
  home = 'Home';
  blog = 'Blogs';
  jobs = 'Jobs';
  contact = 'Contact';
  about = 'About';
  sign_in_btn = "Sign in";
  sign_up_btn = "Sign up";



  ngOnInit(): void {
  }

}

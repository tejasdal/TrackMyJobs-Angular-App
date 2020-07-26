// @author Zankrut Thakkar B00856858

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from './Blog';
import { BlogsService } from './blogs.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotifierService } from "angular-notifier";



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {

  public blogposts: Blog[];
  blogSearch: string;
  public showSpinner: boolean;
  private readonly notifier: NotifierService;

  private FETCH_BLOG_ERROR = "Failed to fetch contacts from the server!";

  constructor(private router: Router, private blogService: BlogsService, private _snackBar: MatSnackBar, notifierService: NotifierService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.getAllBlogPost();
  }
  getAllBlogPost() {
    this.blogService.fetchAllBlog().subscribe((data: BlogResponse) => {
      this.blogposts = data as Blog[];
      this.showSpinner = false;
    }, error => {
      this.showSpinner = false;
      this.showError(this.FETCH_BLOG_ERROR);
    });
  }


  showError(message: string) {
    this.notifier.show({
      type: "error",
      message: message
    })
  }

  onBlogCard(blog) {
    let encodedName = encodeURIComponent(blog.id);
    this.router.navigate(['/blogs', encodedName])

  }

  onWriteBlog() {
    this.router.navigate(['/writeBlog']);
  }

}

export interface BlogResponse {
  status?: Boolean;
  blog?: any;
}
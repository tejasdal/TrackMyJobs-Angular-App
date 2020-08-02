// @author Zankrut Thakkar B00856858

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from './Blog';
import { BlogsService } from './blogs.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotifierService } from "angular-notifier";
import { log } from 'console';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {

  //Variable  to store values
  public blogposts: Blog[];
  blogSearch: string;
  public showSpinner: boolean;
  private readonly notifier: NotifierService;

  //Messages
  private FETCH_BLOG_ERROR = "Failed to fetch blogs from the server!";
  private NO_BLOG_ERROR = "There are No Blog post to show!";

  constructor(private router: Router, private blogService: BlogsService, private _snackBar: MatSnackBar, notifierService: NotifierService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.getAllBlogPost();
  }

  //API call to fetch all blog posts
  getAllBlogPost() {
    this.showSpinner = true;
    this.blogService.fetchAllBlog().subscribe((data: BlogResponse) => {
      this.blogposts = data as Blog[];
      if (this.blogposts.length === 0) {
        this.showSpinner = false;
        this._snackBar.open(this.NO_BLOG_ERROR, 'close', { duration: 1500, horizontalPosition: "end", verticalPosition: "bottom", panelClass: ["snackbar_confirm"] });
        //this.router.navigate(['/writeBlog']);
      }
      for (var i = 0; i < this.blogposts.length; i++) {
        let temp = this.blogposts[i].image;
        this.blogposts[i].image = 'data:image/jpeg;base64,' + temp;
        this.showSpinner = false;
      }
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

  //navigate to speicfic blog
  onBlogCard(blog) {
    let encodedName = encodeURIComponent(blog.id);
    this.router.navigate(['/blogs', encodedName])

  }

  //navigate to write blogs page
  onWriteBlog() {
    this.router.navigate(['/writeBlog']);
  }

}

export interface BlogResponse {
  status?: Boolean;
  blog?: any;
}
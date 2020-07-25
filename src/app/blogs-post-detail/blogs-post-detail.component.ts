//@author Zankrut Thakkar B00856858
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../blogs/blogs.service';
import { MatSnackBar } from "@angular/material/snack-bar";
import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-blogs-post-detail',
  templateUrl: './blogs-post-detail.component.html',
  styleUrls: ['./blogs-post-detail.component.css']
})
export class BlogsPostDetailComponent implements OnInit {


  constructor(private route: ActivatedRoute, private blogService: BlogsService, private router: Router, private _snackBar: MatSnackBar) { }
  public blog_id;
  public blogPost: any[];
  public user: Boolean;
  private DELETE_SUCCESS_MSG = "Successfully deleted the Blog Post!";


  ngOnInit() {
    let blog_id = this.route.snapshot.params['id'];
    this.blog_id = decodeURIComponent(blog_id);
    this.blogPost = this.getBlogbyId();
    console.log("blogpost");
  }

  onload() {
    if (this.blogPost[1] === JSON.parse(localStorage.getItem("userData"))["email"]) {
      return true;
    }
    else { return false; }
  }

  delete() {
    this.blogService.deleteblog(this.blog_id).subscribe(blog => {
      console.log("Deleted blog!");
      this.router.navigate(['/blogs']);
      this._snackBar.open(this.DELETE_SUCCESS_MSG, '', {
        duration: 2000,
      });
    });
  }

  getBlogbyId() {
    var blog: any = [];
    console.log("inside getblogbyid");
    console.log(this.blog_id);
    this.blogService.getSpecificBlog(this.blog_id).subscribe(bp => {
      console.log(typeof (bp))
      for (var bb in bp) {
        blog.push(bp[bb]);
      }
    });
    console.log(blog);
    return blog;
  }

}

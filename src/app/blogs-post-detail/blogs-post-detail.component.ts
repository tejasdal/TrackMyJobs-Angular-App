//@author Zankrut Thakkar B00856858
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogsService } from '../blogs/blogs.service';
import { MatSnackBar } from "@angular/material/snack-bar";

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
  public showSpinner: boolean;

  ngOnInit() {
    let blog_id = this.route.snapshot.params['id'];
    this.blog_id = decodeURIComponent(blog_id);
    this.blogPost = this.getBlogbyId();
    this.showSpinner = true;
  }

  onload() {
    if (this.blogPost[0]?.userId === JSON.parse(localStorage.getItem("userData"))["email"]) {
      return true;
    }
    else { return false; }
  }

  delete() {
    this.blogService.deleteblog(this.blog_id).subscribe(blog => {
      this.router.navigate(['/blogs']);
      this._snackBar.open(this.DELETE_SUCCESS_MSG, 'close', { duration: 1500, horizontalPosition: "end", verticalPosition: "bottom", panelClass: ["snackbar_confirm"] });
    });
  }

  getBlogbyId() {
    this.showSpinner = true;
    var blog: any = [];
    this.blogService.getSpecificBlog(this.blog_id).subscribe(bp => {
      let temp = bp.image;
      bp.image = 'data:image/jpeg;base64,' + temp;
      console.log(typeof (bp));
      blog.push(bp);
      this.showSpinner = false;
    });
    return blog;
  }

}

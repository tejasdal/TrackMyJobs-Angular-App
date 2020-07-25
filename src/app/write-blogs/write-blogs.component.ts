import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogsComponent } from './../dialogs/dialogs.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../blogs/Blog';
import { BlogsService } from '../blogs/blogs.service';
import { from } from 'rxjs';
import { error } from 'protractor';
import { NotifierService } from "angular-notifier";
import { MatSnackBar } from "@angular/material/snack-bar";
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-write-blogs',
  templateUrl: './write-blogs.component.html',
  styleUrls: ['./write-blogs.component.css']
})
export class WriteBlogsComponent implements OnInit {

  //Counter for checking length of each input text
  headingCounter: number;
  subHeadingCounter: number;
  bodyCounter: number;
  tagCOunt = 0;


  //Variables to store each string input
  heading: string;
  subHeading: string;
  bodyContent: string;
  bodyContentWithHtml: string;
  tagsList: string;
  btndisable: boolean;


  id: number;
  blog: Blog = new Blog();
  submitted = false;
  private ADD_BlOG_SUCCESS_MSG = "Successfully added the contact!";


  constructor(public dialog: MatDialog, private _router: Router, private blogsService: BlogsService, notifierService: NotifierService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  add() {
    this.blogsService.insertBlog(this.blog).subscribe(blog => {
      console.log("Added a new contact!");
      this.navigatetoblog();
      this._snackBar.open(this.ADD_BlOG_SUCCESS_MSG, '', {
        duration: 2000,

      });
    });
  }

  navigatetoblog() {
    this._router.navigate(['/blogs']);
  }

  onTagChange(value) {
    if (value == null || value.trim().length == 0) {
      this.tagCOunt = 0;
    }
    this.tagCOunt = value.trim().split(',').length;
    this.tagsList = value;
  }

  onBlogHeadingChange(value) {
    this.heading = value;
    this.headingCounter = value.length
  }

  onSubHeadingChange(value) {
    this.subHeading = value;
    this.subHeadingCounter = value.length
  }

  onBodyTextChnage(innerHtmlText, value) {
    this.bodyContentWithHtml = innerHtmlText;
    this.bodyContent = value;
    this.bodyCounter = value.length
  }

  checkValue() {
    if (this.headingCounter > 0 && this.bodyCounter > 0 && this.subHeadingCounter > 0 && this.tagCOunt > 0) {
      return true;
    }
    return false;
  }

  openDialog(id: number) {

    this.id = id
    const dialogRef = this.dialog.open(DialogsComponent, {
      width: '400px',
      data: { id: this.id }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.blog.userId = JSON.parse(localStorage.getItem("userData"))["email"];
      console.log(JSON.parse(localStorage.getItem("userData"))["email"]);
      this.blog.title = this.heading;
      this.blog.subTitle = this.subHeading;
      this.blog.content = this.bodyContentWithHtml;
      this.blog.keyword = this.tagsList;
      console.log(this.blog);
      this.add();
    });
  }


  openDialoghelp(id: number) {

    this.id = id
    const dialogRef = this.dialog.open(DialogsComponent, {
      width: '400px',
      data: { id: this.id }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

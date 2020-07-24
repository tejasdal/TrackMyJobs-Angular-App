import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogsComponent } from './../dialogs/dialogs.component';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-write-blogs',
  templateUrl: './write-blogs.component.html',
  styleUrls: ['./write-blogs.component.css']
})
export class WriteBlogsComponent implements OnInit {

  //Counter for checking length of each input text
  headingCounter:number;
  subHeadingCounter:number;
  bodyCounter:number;
  tagCOunt=0;
  temp="<h1>heeelo user</h1>";

//Variables to store each string input
  heading:String;
  subHeading:String;
  bodyContent:String;
  bodyContentWithHtml:String;
  tagsList:string;
  btndisable:boolean;

  
  id:number;


  constructor(public dialog: MatDialog,private _router:Router) { }

  ngOnInit(): void {
  }
  
  onTagChange(value)
  {
   if(value==null || value.trim().length==0)
   {
     this.tagCOunt=0;
   }
      this.tagCOunt=value.trim().split(',').length
  }

  onBlogHeadingChange(value)
  {
    this.heading=value;
  this.headingCounter=value.length
  }

  onSubHeadingChange(value)
  {
    this.subHeading=value;
  this.subHeadingCounter=value.length
  }

  onBodyTextChnage(innerHtmlText,value)
  {
    this.bodyContentWithHtml=innerHtmlText;
  this.bodyContent=value;
  this.bodyCounter=value.length
  }

  checkValue()
  {
    if(this.headingCounter >0 && this.bodyCounter>0 && this.subHeadingCounter>0 && this.tagCOunt>0) 
    {
      return true;
    }
    return false;
  }
  
  openDialog(id:number) {
      
    this.id=id
    const dialogRef = this.dialog.open(DialogsComponent,{
      width:'400px',
      data:{id:this.id}});
      console.log(this.bodyContentWithHtml);
      console.log(this.heading);
      console.log(this.tagsList);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

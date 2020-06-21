import { DialogsComponent } from './../dialogs/dialogs.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import  AOS from 'aos';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private snackbar: MatSnackBar,public dialog: MatDialog,private _router:Router) { }
  name:String;
  id:number;
  ngOnInit(): void {
    AOS.init()
  }

  sendmail() {
    var msg = "Mail Sent Successfully";
    this.snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] })
  }

  openDialog(id:number) {
      
    this.id=id
    const dialogRef = this.dialog.open(DialogsComponent,{
      width:'400px',
      data:{id:this.id}});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
   
  registerNavigate():void
  {
    this._router.navigate(['/sign-up']);
  }
}

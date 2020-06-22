import { DialogsComponent } from './../dialogs/dialogs.component';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarHorizontalPosition } from '@angular/material/snack-bar';
import { MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {MatDialog,MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import  AOS from 'aos';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isAuthenticated:boolean = false;
  userSub:Subscription;

  constructor(private snackbar: MatSnackBar,public dialog: MatDialog,private _router:Router,private authService: AuthService) { }
  name:String;
  id:number;
  ngOnInit(): void {
    AOS.init();
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = user ? true : false;
    })
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

  signInNavigate():void
  {
    this._router.navigate(['/sign-in']);
  }
}

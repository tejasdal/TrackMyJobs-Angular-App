import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grp21-trackmyjobs';

  constructor(private authService: AuthService){
  }

  ngOnInit(){
    this.authService.autoLogin();
  }
}

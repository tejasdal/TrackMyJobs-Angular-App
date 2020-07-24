import { Injectable } from '@angular/core';
import { throwError, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';
import { HttpClient ,HttpParams} from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  constructor(private http:HttpClient) { }

  url="https://app-jobtracker.herokuapp.com/"

  public get_deadline_notificatione(user_id:any)
  {
    return this.http.get(this.url+"Notifications/getdeadline/"+user_id)
    .pipe(map(data =>data));
  }
}

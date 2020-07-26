import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ActivityItem } from './ActivityItem';
import {ActivityResponse} from './job-activity.component';
import { Activity } from './Activity';

@Injectable({
  providedIn: 'root'
})
export class JobActivityService {
  apiUrl: string = 'https://app-jobtracker.herokuapp.com/job-activity/';

  constructor(private http: HttpClient) { }
  private handleError(error: any) {
    return throwError(error);
  }

  getAllActivities(userID:string){
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('user_id',userID);
    let API_URL = this.apiUrl;
    return this.http.get<ActivityResponse>(API_URL,{headers,params});
 }

 updateActivity(body : Activity){
    let API_URL = this.apiUrl;
    return this.http.put<Activity>(API_URL, body)
    .pipe(
      tap(data => data),catchError(this.handleError)
    );
}

 addActivity(body : Activity){
    let API_URL = this.apiUrl;
    return this.http.post<Activity>(API_URL, body)
    .pipe(
      tap(data => data),catchError(this.handleError)
    );
}
 
}

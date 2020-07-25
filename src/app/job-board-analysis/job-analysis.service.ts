import { throwError, observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Params } from '@angular/router';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class JobAnalysisService {

  constructor(private http:HttpClient) { }

  url="https://app-jobtracker.herokuapp.com/jobAnalysis/"

    public get_jobapplication_data(month:any,user_id:any)
    {
        return this.http.get(this.url+"application_status_count/"+month+"/"+user_id)
        .pipe(map(data =>data),catchError(this.handleError));
    }

    public get_writtenblogs_data(user_id:any)
    {
      return this.http.get(this.url+"blogs_count/"+user_id)
      .pipe(map(data =>data));
    }

    public get_activity_list(month:any,user_id:any)
    {
      return this.http.get(this.url+"job_activity/"+month+"/"+user_id)
      .pipe(map(data=>data))
    }
    handleError(error) {
      let errorMessage = 'There is an error from server';
      if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
      } else {
          // server-side error

          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      
      return throwError("Error from server side has Occured.The server may have down. Sorry for your inconvience..");
  }
}

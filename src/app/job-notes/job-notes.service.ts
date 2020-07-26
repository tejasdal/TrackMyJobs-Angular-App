import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { jobnotes } from './job-notes';
import { NoteResponse } from './job-notes.component'
@Injectable({
  providedIn: 'root'
})
export class JobNotesService {
  apiUrl: string = 'https://app-jobtracker.herokuapp.com/notes/';
  
  constructor(private http: HttpClient) { }
  private handleError(error: any) {
    return throwError(error);
  }
 
  getAllNotes(userID: string){
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('userID',userID);
    let API_URL = this.apiUrl;
    return this.http.get<NoteResponse>(API_URL,{headers,params}).pipe(
      tap(data => data),catchError(this.handleError)
    );    
  }

  updateNotes(body : jobnotes){
    let API_URL = this.apiUrl;
    return this.http.put<jobnotes>(API_URL, body)
    .pipe(
      tap(data => data),catchError(this.handleError)
    );
}

  addNote(body : jobnotes){
    let API_URL = this.apiUrl;
    return this.http.post<jobnotes>(API_URL, body)
    .pipe(
      tap(data => data),catchError(this.handleError)
    );
}

  deleteNote(noteID){
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('noteID',noteID);
    let API_URL = this.apiUrl;
    return this.http.delete(API_URL,{headers,params}).pipe(
      tap(data => data),catchError(this.handleError)
    );    
  }
}

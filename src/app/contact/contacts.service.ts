import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { ContactResponse } from './contact.component';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  apiUrl: string = 'https://app-jobtracker.herokuapp.com/contact/';
 
  constructor(private http: HttpClient) { }
  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }
  getAllContacts(userID:string){
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('userID',userID);
    let API_URL = this.apiUrl;
    return this.http.get<ContactResponse>(API_URL,{headers,params}).pipe(
      tap(data => console.log(data)),catchError(this.handleError)
    );
  }

  updateContact(body : Contact){
    let API_URL = this.apiUrl;
    return this.http.put<Contact>(API_URL, body)
    .pipe(
      tap(data => console.log(data)),catchError(this.handleError)
    );
}

  addContact(body : Contact){
    let API_URL = this.apiUrl;
    return this.http.post<Contact>(API_URL, body)
    .pipe(
      tap(data => console.log(data)),catchError(this.handleError)
    );
}

  deleteContact(contactID){
    
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('contactID',contactID);
    let API_URL = this.apiUrl;
    return this.http.delete(API_URL,{headers,params}).pipe(
      tap(data => console.log(data)),catchError(this.handleError)
    );
  }
}
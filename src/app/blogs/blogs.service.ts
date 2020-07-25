//@author Zankrut Thakkar B00856858
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BlogResponse } from './blogs.component';
import { Blog } from './Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  apiUrl: string = 'https://app-jobtracker.herokuapp.com/blogs/';

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  };

  fetchAllBlog() {
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let API_URL = this.apiUrl;
    return this.http.get<BlogResponse>(API_URL, { headers });
  }

  getSpecificBlog(id: String) {
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    var blog_id = encodeURIComponent(id.toString());
    console.log(blog_id);
    return this.http.get<BlogResponse>(`https://app-jobtracker.herokuapp.com/blogs/blogid?id=${blog_id}`, { headers })
  }

  insertBlog(body: Blog) {
    let API_URL = `https://app-jobtracker.herokuapp.com/blogs/`;
    console.log(body);
    return this.http.post<BlogResponse>(API_URL, body)
      .pipe(
        tap(data => console.log(data)), catchError(this.handleError)
      );
  }

  deleteblog(id: number) {
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let API_URL = `https://app-jobtracker.herokuapp.com/blogs/blogid?id=${id}`;
    return this.http.delete(API_URL, { headers }).pipe(
      tap(data => console.log(data)), catchError(this.handleError)
    );

  }
}

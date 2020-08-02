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
    return this.http.get<Blog>(`https://app-jobtracker.herokuapp.com/blogs/blogid?id=${blog_id}`, { headers })
  }

  insertBlog(body: Blog) {
    let API_URL = `https://app-jobtracker.herokuapp.com/blogs/`;
    let formdata = new FormData();
    formdata.append('userId', body.userId);
    formdata.append('title', body.title);
    formdata.append('subTitle', body.subTitle);
    formdata.append('content', body.content);
    formdata.append('keyword', body.keyword);
    formdata.append('blogImage', body.img);
    return this.http.post<Response>(API_URL, formdata)
      .pipe(
        tap(data => data), catchError(this.handleError)
      );
  }

  deleteblog(id: number) {
    let headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    let API_URL = `https://app-jobtracker.herokuapp.com/blogs/blogid?id=${id}`;
    return this.http.delete(API_URL, { headers }).pipe(
      tap(data => data), catchError(this.handleError)
    );

  }
}

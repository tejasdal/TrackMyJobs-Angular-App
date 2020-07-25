import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobBoardData } from './jobBoardData';
import { JobApplication } from './jobApplication';
import { JobBoard } from './jobBoard';

// @author: Tejas Patel
@Injectable({
  providedIn: 'root'
})
export class JobBoardService {

  private URL:string = "https://app-jobtracker.herokuapp.com";
  private JOB_APP_URL: string = "/job-application/";

  constructor(private http: HttpClient) {
  }

  // API call to fetch job applications for a job board.
  getAllJobAppForJobBoard(id: number){

    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('id', ''+id);
    let boardsData: Observable<JobBoardData>;
    boardsData = this.http.get<JobBoardData>(this.URL+this.JOB_APP_URL+ 'job-board',{ headers, params});
    return boardsData;
  }

  // API call to create a new job application on a job board.
  createJobAppForJobBoard(newJob: JobApplication){

    let job: Observable<JobApplication>;
    job = this.http.post<JobApplication>(this.URL+this.JOB_APP_URL, newJob);
    return job;
  }

  // API call to delete a job application from a job board.
  deleteJobAppForJobBoard(id: number){

    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('id', ''+id);
    return this.http.delete(this.URL+this.JOB_APP_URL, {headers, params});
  }

  // API call to update a job application data.
  updateJobAppForJobBoard(updatedJob: JobApplication){

    let job: Observable<JobApplication>;
    job = this.http.put<JobApplication>(this.URL+this.JOB_APP_URL, updatedJob);
    return job;
  }

  // API call to fetch job board for a user.
  getJobBoardForUser(userId: string){

    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('userId', ''+userId);
    let board: Observable<JobBoard>;
    board = this.http.get<JobBoard>(this.URL+ '/job-board/user',{ headers, params});
    return board;
  }
}

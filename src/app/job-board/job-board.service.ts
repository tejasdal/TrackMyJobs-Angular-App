import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobBoardData } from './jobBoardData';
import { JobApplication } from './jobApplication';

@Injectable({
  providedIn: 'root'
})
export class JobBoardService {

  private URL:string = "https://app-jobtracker.herokuapp.com";
  private JOB_APP_URL: string = "/job-application/";

  constructor(private http: HttpClient) {
  }

  getAllJobAppForJobBoard(id: number){
    console.log("Fetching all job applications for a job board with ID: "+ id + " from server.");

    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('id', ''+id);
    let boardsData: Observable<JobBoardData>;
    boardsData = this.http.get<JobBoardData>(this.URL+this.JOB_APP_URL+ 'job-board',{ headers, params});
    return boardsData;
  }

  createJobAppForJobBoard(newJob: JobApplication){
    console.log("Creating a new job applications with job role: "+ newJob.jobRole + " for a job board with ID: "+ newJob.jobBoardId + " to server.");

    let job: Observable<JobApplication>;
    job = this.http.post<JobApplication>(this.URL+this.JOB_APP_URL, newJob);
    return job;
  }

  deleteJobAppForJobBoard(id: number){
    console.log("Deleting a new job applications with job id: "+ id + " for a job board to server.");

    let headers: HttpHeaders = new HttpHeaders().set('Content-Type','application/json');
    let params: HttpParams = new HttpParams().set('id', ''+id);
    return this.http.delete(this.URL+this.JOB_APP_URL, {headers, params});
  }

  updateJobAppForJobBoard(updatedJob: JobApplication){
    console.log("Updating a  job applications with job role: "+ updatedJob.jobRole + " for a job board with ID: "+ updatedJob.jobBoardId + " to server.");

    let job: Observable<JobApplication>;
    job = this.http.put<JobApplication>(this.URL+this.JOB_APP_URL, updatedJob);
    return job;
  }
}

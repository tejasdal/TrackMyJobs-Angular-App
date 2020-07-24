// author: Jan Chayopathum
// job filter service

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import adzunaApi from '../../../assets/data/adzuna/adzuna_api.json';
import jobTypes from '../../../assets/data/adzuna/job-filter/jobTypes.json';
import sortBy from '../../../assets/data/adzuna/job-filter/sortBy.json';

@Injectable({
  providedIn: 'root'
})
export class JobFilterService {
  
  constructor(private _http: HttpClient) {
   }

  getCategories(): Observable<any> {
    const url = `https://api.adzuna.com/v1/api/jobs/gb/categories?app_id=${adzunaApi.app_id}&app_key=${adzunaApi.app_key}&&content-type=application/json`;
    return this._http.get(url);
  }

  getJobTypes(): Observable<any>{
    return of(jobTypes);
  }

  getSortBy(): Observable<any>{
    return of(sortBy);
  }
}

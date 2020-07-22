// author: Jan Chayopathum
// job search using Adzuna API (http://www.adzuna.co.uk/)

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import adzunaApi from '../../../assets/data/adzuna/adzuna_api.json';

@Injectable({
  providedIn: 'root'
})

export class JobService {

  itemPerPage: number = 10;
  canada: string = "ca";

  KEYWORD: string = "KEYWORD";
  LOCATION: string = "LOCATION";
  PAGE_NUMBER: string = "PAGE_NUMBER";

  // Adzuna URL format for fetching data from Adzuna API
  adzunaUrl: string = "https://api.adzuna.com/v1/api/jobs/" + this.canada + "/search/" + this.PAGE_NUMBER + "?app_id=" + adzunaApi.app_id + "&app_key=" + adzunaApi.app_key + "&what=" + this.KEYWORD + "&where=" + this.LOCATION + "&results_per_page=" + this.itemPerPage + "&content-type=application/json";

  constructor(private _http: HttpClient) { }

  // get jobs from Adzuna API
  getJobs(word: string, loc: string, pageNumber: number): Observable<any> {
    var keyword = encodeURIComponent(word.toString());
    var location = encodeURIComponent(loc.toString());
    var url = this.adzunaUrl;
    url = url.replace(this.KEYWORD, keyword);
    url = url.replace(this.LOCATION, location);
    url = url.replace(this.PAGE_NUMBER, String(pageNumber));
    return this._http.get(url);
  }

  // add optional filter to Adzuna URL
  addFilterAdzunaUrl(filter){
    this.adzunaUrl = this.adzunaUrl.concat(filter);
  }

  // remove optional filter from Aduzuna URL
  removeFilterAdzunaUrl(filter){
    this.adzunaUrl = this.adzunaUrl.replace(filter, "");
  }

  // clear all the filters from Adzuna URL
  resetAdzunaUrl(){
    let remove = this.adzunaUrl.split("content-type=application/json").pop();
    this.adzunaUrl = this.adzunaUrl.replace(remove, "");
  }

  // get number of items per page
  getItemPerPage(): number {
    return this.itemPerPage;
  }

  // getJobByJobKey(jobkey) : Observable<any> {
  //   for (let job of this.jobs.results) {
  //     if(job.jobkey == jobkey){
  //       return of(job);
  //     }
  //   }
  // }
}

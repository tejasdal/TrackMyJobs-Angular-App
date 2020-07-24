// author: Jan Chayopathum
// job search result page with search and filter

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap, Params, Data } from '@angular/router'
import { JobService } from '../services/job.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  jobCount$: number;
  searchJobs$: any;

  ITEMS_PER_PAGE: number;

  @Output() firstPage = new EventEmitter<number>();

  constructor(private _snackbar: MatSnackBar, private _jobService: JobService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ITEMS_PER_PAGE = this._jobService.getItemPerPage();
    this.search();
  }

  // show search result
  search(page: number = 1) {
    this.subscription = this._activatedRoute.params.subscribe(params => {
      const keyword = params['keyword'];
      const location = params['location'];
      // const page = (this.isFirstPage) ? 1 : num;
      // console.log("param page: " + params['page']);
      // const pageNum = (queryParam == undefined) ? page : queryParam;
      this._jobService.getJobs(keyword, location, page).subscribe(jobs => {
        this.jobCount$ = jobs.count;
        this.searchJobs$ = jobs.results;
        // this.loading = false;
      }, error => {
        this.errorMessage();
      })
    });

    if (page == 1) {
      this.firstPage.emit(page);
    }
  }

  // error message if can't fetch data from Adzuna API
  errorMessage() {
    var msg = "Error in fetching data. Please try to refresh again.";
    this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_error"] });
  }

  // get number of jobs
  getSearchJobsLength() {
    if (this.jobCount$ == 0 || this.jobCount$ == undefined) {
      return;
    } else if (this.jobCount$ == 1) {
      return this.jobCount$ + " Job Found";
    } else {
      return this.jobCount$.toLocaleString() + " Jobs Found";
    }
  }

  // clean string from Adzuna search result
  cleanString(str) {
    return str.replace(/<strong>|<\/strong>/g, '');
  }

  // subtract the created date&time with current date&time
  getTimeFromNow(datetime) {
    let now = new Date();
    let date = new Date(datetime);
    let timeDiff = now.getTime() - date.getTime();
    return this.calculateTimeDiff(timeDiff);
  }

  // calculate time difference
  calculateTimeDiff(timeDiff) {
    const HOUR: number = 1000 * 60 * 60;
    const DAY: number = HOUR * 24;
    const WEEK: number = DAY * 7;
    const MONTH: number = WEEK * 4;
    const YEAR: number = MONTH * 12;

    switch (true) {
      case (timeDiff < HOUR): {
        return "Less than 1 hour";
      }
      case (timeDiff < DAY): {
        let hours = Math.trunc(timeDiff / HOUR);
        return (hours > 1) ? hours + " hours ago" : hours + " hour ago";
      }
      case (timeDiff < WEEK): {
        let days = Math.trunc(timeDiff / DAY);
        return (days > 1) ? days + " days ago" : days + " day ago";
      }
      case (timeDiff < MONTH): {
        let weeks = Math.trunc(timeDiff / WEEK);
        return (weeks > 1) ? weeks + " weeks ago" : weeks + " week ago";
      }
      case (timeDiff < YEAR): {
        let months = Math.trunc(timeDiff / MONTH);
        return (months > 1) ? months + " months ago" : months + " month ago";
      }
      default: {
        let years = Math.trunc(timeDiff / YEAR);
        return (years > 1) ? years + " years ago" : years + " year ago";
      }
    }
  }

  // show job detail via linking to Adzuna API
  showDetail(jobUrl) {
    window.location.href = jobUrl;
  }

  // add to job application with status "wish list" in database (if it not exists yet)
  saveToWishList() {
    var msg = "Save to Wish List";
    this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] });
  }

  // add to job application with status "applied" in database (if it not exists yet)
  apply(jobUrl) {
    var msg = "Save to applied";
    this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] });
    this.showDetail(jobUrl);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

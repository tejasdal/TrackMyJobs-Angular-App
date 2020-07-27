// author: Jan Chayopathum
// job search result page with search and filter

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap, Params, Data } from '@angular/router'
import { JobService } from '../services/job.service';
import { JobBoardService } from '../../job-board/job-board.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PaginationComponent } from '../pagination/pagination.component';

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
  pageNumber: number;
  @Output() firstPage = new EventEmitter<number>();
  @ViewChild(PaginationComponent) pagination: PaginationComponent;

  WISHLIST: string = "WHISHLIST";
  APPLIED: string = "APPLIED";
  jobBoardId: number;
  userId = JSON.parse(localStorage.getItem('userData'))['email'];

  private colors = ["#654062", "#726a95", "#ff9234", "#cf7500", "#0e9aa7", "#1b6ca8", "#45046a", "#5c2a9d", "#562349", "#26191b", "#6a097d", "#007892", "#6f0000", "#bb3b0e"];

  constructor(private _snackbar: MatSnackBar, private _jobService: JobService, private jobBoardService: JobBoardService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.ITEMS_PER_PAGE = this._jobService.getItemPerPage();
    this.search();

    this.getJobBoardId();

  }

  // show search result
  search(page: number = 1) {
    this._activatedRoute.queryParams.subscribe(params => {
      this.pageNumber = params['page'];
    });

    this.subscription = this._activatedRoute.params.subscribe(params => {
      const keyword = params['keyword'];
      const location = params['location'];

      this._jobService.getJobs(keyword, location, page).subscribe(jobs => {
        this.jobCount$ = jobs.count;
        this.searchJobs$ = jobs.results;
      }, error => {
        this.errorMessage();
      })
    });

    // if (this.pageNumber == 1) {
    //   console.log("page been 1")
      // this.firstPage.emit(this.pageNumber);
      // this.pagination.setFirstPage();
    // }
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

  // add to job application with status "wish list" in database
  saveToWishList(job) {
    let result = this.getJobApp(job, this.WISHLIST);

    //Add new job to database
    this.jobBoardService.createJobAppForJobBoard(result).subscribe(jobApp => {
      var msg = "Save to Wish List";
      this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] });
    },
      error => {
        var msg = "Can't save to Wish List, please try again.";
        this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] });
      });
  }

  // add to job application with status "applied" in database
  apply(job) {
    let result = this.getJobApp(job, this.APPLIED);

    //Add new job to database
    this.jobBoardService.createJobAppForJobBoard(result).subscribe(jobApp => {
      var msg = "Save to applied";
      this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] });
    },
      error => {
        var msg = "Can't save to applied, please try again.";
        this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] });
      });

    this.showDetail(job.redirect_url);
  }

  // show job detail via linking to Adzuna API
  showDetail(jobUrl) {
    window.open(jobUrl, "_blank");
  }

  getJobApp(job, jobStatus) {
    let colorId: number = Math.floor((Math.random() * 13) + 1);

    return {
      id: +job.id,
      userId: this.userId,
      jobBoardId: this.jobBoardId,
      jobRole: this.cleanString(job.title),
      company: job.company.display_name,
      status: jobStatus,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      color: this.colors[colorId]
    }
  }

  // Function to fetch job board from DB for current logged in user. Adapted from Tejas Patel
  getJobBoardId() {
    this.subscription = this.jobBoardService.getJobBoardForUser(this.userId).subscribe((dbJobBoard) => {
      this.jobBoardId = dbJobBoard.id;
    },
      error => {
        var msg = "Failed to load a job board from the server!";
        this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_confirm"] });
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

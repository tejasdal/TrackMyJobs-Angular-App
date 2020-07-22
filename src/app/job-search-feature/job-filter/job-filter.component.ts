// author: Jan Chayopathum
// provide job filter from Adzuna API, consume data via jobFilterService

import { Component, OnInit, OnDestroy,  EventEmitter, Output } from '@angular/core';
import { JobFilterService } from '../services/job-filter.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-filter',
  templateUrl: './job-filter.component.html',
  styleUrls: ['./job-filter.component.css']
})

export class JobFilterComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  jobCategories$: any;
  jobTypes$: any;
  sortBy$: any;

  CATEGORY: string = "CATEGORY";
  checkedCategoryCount: number = 0;

  JOB_TYPE: string = "JOB_TYPE";
  checkedJobTypeCount: number = 0;

  SORT_BY: string = "SORT_BY";
  checkedSortByCount: number = 0;

  limitNumber = 1;

  @Output() filter = new EventEmitter();

  constructor(private _snackbar: MatSnackBar, private _jobService: JobService, private _jobFilterService: JobFilterService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // load data to jobCategories$ from jobFilterService
    this.subscription = this._jobFilterService.getCategories().subscribe(categories => {
      let sortCategories = categories.results.sort((a,b) => a.tag.localeCompare(b.tag));
      this.jobCategories$ = sortCategories;
    }, error => {
      this.errorMessage();
    });

    // load data to jobTypes$ from jobFilterService
    this.subscription = this._jobFilterService.getJobTypes().subscribe(jobTypes => {
      this.jobTypes$ = jobTypes.results;
    }, error => {
      this.errorMessage();
    });

    // load data to sortBy$ from jobFilterService
    this.subscription = this._jobFilterService.getSortBy().subscribe(sortBy => {
      this.sortBy$ = sortBy.results;
    }, error => {
      this.errorMessage();
    });
  }

  // Error message if can't fetching data from service
  errorMessage(){
    var msg = "Error in fetching data";
    this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_error"] });
  }

  // interact with checkbox in job filter
  checked(item, type) {
    if (item.checked) {
      this.addFilter(item, type);
    } else {
      this.removeFilter(item, type);
    }
  }

  // When checkbox is checked, add filter
  addFilter (item, type) {
    switch (type){
      case this.CATEGORY: {
        var url = `&category=${item.tag}`;
        this._jobService.addFilterAdzunaUrl(url);
        this.checkedCategoryCount++;
        this.filter.emit();
        break;
      }
      case this.JOB_TYPE: {
        var url = `&${item.tag}=1`;
        this._jobService.addFilterAdzunaUrl(url);
        this.checkedJobTypeCount++;
        this.filter.emit();
        break;
      }
      case this.SORT_BY: {
        var url = `&sort_by=${item.tag}`;
        this._jobService.addFilterAdzunaUrl(url);
        this.checkedSortByCount++;
        this.filter.emit();
        break;
      }
    }
  }

  // When checkbox is unchecked, remove filter
  removeFilter (item, type){
    switch (type){
      case this.CATEGORY: {
        var url = `&category=${item.tag}`;
        this._jobService.removeFilterAdzunaUrl(url);
        this.checkedCategoryCount--;
        this.filter.emit();
        break;
      }
      case this.JOB_TYPE: {
        var url = `&${item.tag}=1`;
        this._jobService.removeFilterAdzunaUrl(url);
        this.checkedJobTypeCount--;
        this.filter.emit();
        break;
      }
      case this.SORT_BY: {
        var url = `&sort_by=${item.tag}`;
        this._jobService.removeFilterAdzunaUrl(url);
        this.checkedSortByCount--;
        this.filter.emit();
        break;
      }
    }
  }

  //  clear all filters in the checkbox
  clearAllFilters() {
    this.jobCategories$.forEach((item) => {
      if(item.checked){
        item.checked = false;
      }  
    })
    this.checkedCategoryCount = 0;

    this.jobTypes$.forEach((item) => {
      if(item.checked){
        item.checked = false;
      }  
    })
    this.checkedJobTypeCount = 0;
    
    this.sortBy$.forEach((item) => {
      if(item.checked){
        item.checked = false;
      }
    })
    this.checkedSortByCount = 0;

    this._jobService.resetAdzunaUrl();
    this.filter.emit();
  }

  ngOnDestroy() {
    this._jobService.resetAdzunaUrl();
    this.clearAllFilters();
    this.subscription.unsubscribe();
  }
}

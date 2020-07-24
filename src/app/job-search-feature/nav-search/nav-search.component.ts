// author: Jan Chayopathum
// job search bar: user provide keyword and location for job search

import { Component, OnInit, OnDestroy, EventEmitter, Output  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params, Data } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { NavSearchService } from '../services/nav-search.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent implements OnInit  {

  // subscription: Subscription;

  jobSearch: string;

  queryParams: any;

  options$: string[];
  filteredOptions: Observable<string[]>;

  searchForm: FormGroup;
  submitted = false;

  constructor(private _snackbar: MatSnackBar, private _navSearchService: NavSearchService, private _router: Router, private _activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.options$ = this._navSearchService.getCaLocations();

    var queryParamKeyword = this._activatedRoute.snapshot.paramMap.get('keyword');
    var queryParamLocation = this._activatedRoute.snapshot.paramMap.get('location');

    var queryKeyword = queryParamKeyword == null ? '' : queryParamKeyword;
    var queryLocation = queryParamLocation == null ? '' : queryParamLocation;

    this.searchForm = this._formBuilder.group({
      keyword: [queryKeyword],
      location: new FormControl(queryLocation)
    });

    this.filteredOptions = this.searchForm.get('location').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  // show error message if can't fetch data from the service
  errorMessage(){
    var msg = "Error in fetching data";
    this._snackbar.open(msg, 'close', { duration: 3000, horizontalPosition: "center", verticalPosition: "top", panelClass: ["snackbar_error"] });
  }

  // filter the word in search bar
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options$.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  get searchFormControl() {
    return this.searchForm.controls;
  }

  // send form and navigate to job search result page
  onSearch() {
    this.submitted = true;

    if (this.searchForm.valid) {
      this._router.navigate(['job-search/jobs', this.searchForm.value]);
    }
  }
}

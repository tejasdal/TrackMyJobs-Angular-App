import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params, Data } from '@angular/router';

@Component({
  selector: 'app-nav-search',
  templateUrl: './nav-search.component.html',
  styleUrls: ['./nav-search.component.css']
})
export class NavSearchComponent implements OnInit {

  queryParams: any;

  searchForm: FormGroup;
  submitted = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    var queryParamKeyword = this.activatedRoute.snapshot.paramMap.get('keyword');
    var queryParamLocation = this.activatedRoute.snapshot.paramMap.get('location');

    var queryKeyword = queryParamKeyword == null ? '' : queryParamKeyword;
    var queryLocation = queryParamLocation == null ? '' : queryParamLocation;

    this.searchForm = this._formBuilder.group({
      keyword: [queryKeyword,
        [Validators.required]
      ],
      location: [queryLocation]
    });
  }

  get searchFormControl() {
    return this.searchForm.controls;
  }

  onSearch() {
    this.submitted = true;

    if (this.searchForm.valid) {
      console.table(this.searchForm.value);
      this.router.navigate(['/jobs', this.searchForm.value]);
    }
  }
}

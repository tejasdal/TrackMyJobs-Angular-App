import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap, Params, Data } from '@angular/router'
import { JobService } from '../services/job.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-jobs-detail',
  templateUrl: './jobs-detail.component.html',
  styleUrls: ['./jobs-detail.component.css']
})
export class JobsDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  selectedJob$ : any;
  jobkey : number;

  constructor(private _jobService: JobService, private _location: Location, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.jobkey = +this._activatedRoute.snapshot.paramMap.get('jobkey');
    console.log(this.jobkey);

    this.subscription = this._jobService.getJobByJobKey(this.jobkey).subscribe(job => {
      this.selectedJob$ = job;
    });
    console.log(this.selectedJob$);
  }

  saveToWishList(){
    alert("Save to Wish List");
  }

  goBack(){
      this._location.back();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
// author: Jan Chayopathum
// pagination for job search result page

import { Component, OnInit, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { PaginationService } from '../services/pagination.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() allItems: number;
  @Input() ITEMS_PER_PAGE: number;
  @Input() firstPage: number;

  pageObject$: any = {};
  totalPages: number = Math.ceil(this.allItems / this.ITEMS_PER_PAGE);

  @Output() pageNumber = new EventEmitter<number>();

  constructor(private _pageService: PaginationService, private _router: Router, private _activatedRoute: ActivatedRoute, private _changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setPage(1);
  }

  // add page number to route
  setRouter(num){
    this._router.navigate([], {
      queryParams: {
        page: num
      },
      queryParamsHandling: 'merge'
    });
  }

  // set page in pagination
  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    // get page object from service
    this.pageObject$ = this._pageService.getPages(this.allItems, page);

    this.setRouter(page);
    // console.log("some other page: " + page);
    this.pageNumber.emit(page);
  }

  setFirstPage(){
    // get page object from service
    this.pageObject$ = this._pageService.getPages(this.allItems, 1);
  }
}
// author: Jan Chayopathum
// pagination for job search result page

import { Injectable } from '@angular/core';
import { JobService } from '../services/job.service';

@Injectable({
    providedIn: 'root'
})

export class PaginationService {
    MAX_PAGES = 3;
    ITEMS_PER_PAGE: number;

    constructor(private _jobService: JobService) {
        this.ITEMS_PER_PAGE = _jobService.getItemPerPage();
    }

    // get pages to render in pagination component
    getPages(totalItems: number, currentPage: number = 1, pageSize: number = this.ITEMS_PER_PAGE) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage: number, endPage: number;

        if (totalPages <= this.MAX_PAGES) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= Math.ceil(this.MAX_PAGES/2)) {
                startPage = 1;
                endPage = this.MAX_PAGES;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - (this.MAX_PAGES - 1);
                endPage = totalPages;
            } else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }

        let pages;
        // create an array of pages to ng-repeat in the pager control
        if (totalPages < this.MAX_PAGES) { // if pages less than MAX_PAGES
            pages = Array.from(Array(totalPages), (_, i) => i + startPage);
        } else { // if pages more than MAX_PAGES
            pages = Array.from(Array(this.MAX_PAGES), (_, i) => i + startPage);
        }

        // return object with all properties required by the view
        return {
            currentPage: currentPage,
            totalPages: totalPages,
            pages: pages
        };
    }
}

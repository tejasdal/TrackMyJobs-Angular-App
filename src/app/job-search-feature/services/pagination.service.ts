// author: Jan Chayopathum
// pagination for job search result page

import { Injectable } from '@angular/core';
import { JobService } from '../services/job.service';

@Injectable({
    providedIn: 'root'
})

export class PaginationService {
    MAX_PAGES = 5;
    ITEMS_PER_PAGE: number;

    constructor(private _jobService: JobService) {
        this.ITEMS_PER_PAGE = _jobService.getItemPerPage();
    }

    // get pages to render in pagination component
    getPages(totalItems: number, currentPage: number = 1, pageSize: number = this.ITEMS_PER_PAGE) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);
        let startPage: number, endPage: number;

        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (currentPage + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = currentPage - 2;
                endPage = currentPage + 2;
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

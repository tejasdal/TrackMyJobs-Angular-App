# Assignment 4 - Jan Chayopathum

The feature for assignment 4 is job search feature. Job search feature focuses on search jobs that related to the keyword and location from Adzuna API. It works by interacting with [Adzuna API](https://developer.adzuna.com/) to getting the job availabilities in Canada. Job search result page show the result from Adzuna API.
We choose Angular as our framework because it provides MVC framework which make it is easier to maintain when working as group project.

Front-end design is based on usability of web application:

* *Navigation*: Provide top navigation bar for users to navigate web application easily.
* *Familiarity & Consistency*: Using similar layout (navigation bar always at the top of the web application) and applying same color scheme for entire web application.
* *Flexibility and Efficiency*: The current front-end is designed for laptop and mobile (no tablet). For mobile, it tested with Android, but not iPhone. The web application is compatible with Google Chrome, Firefox, and Microsoft Edge.

Noted that the front-end design is changed because first, I expected to use Indeed or LinkedIn API because it is free. However, I found out later that it is not available for the public, only selected publisher can use their API.
Most of well-known job search API (e.g. Glassdoor, CareerBuilder) are private and need trusted publisher. Therefore, Aduzuna API is selected because it is still available for public use.
The difference and limitation of Adzuna API affect the change of job search result page.

* *Date Created*: 20 July 2020
* *Last Modification Date*: 21 July 2020

## Authors

* [Jan Chayopathum](nw814986@dal.ca) - *Developer*

## Deployment

* *GitHub Repository Link*: https://github.com/Zankrut97/grp21-trackmyjobs
* *My Branch GitHub Repository Link*: https://github.com/Zankrut97/grp21-trackmyjobs/tree/Jan_branch

The project is deployed on Heroku which connected to GitHub repository.

The link for remote access:
* [Job Search Page](https://track-my-jobs.herokuapp.com/job-search): Search for job by keyword and location. If no keyword or location, it will search for all jobs availanilities in Canada.
* [Job Search Result Page](https://track-my-jobs.herokuapp.com/job-search/jobs;keyword=;location=?page=1): Show the result from keyword and location. The difference between large screen (e.g. laptop) and small screen (e.g. mobile phone) is the small screen don't have job filter.

## Project Structure

### File Structure
Angular separate folder as component. Each component has HTML, CSS, and TS file.

Job search feature is organized as below:
- job-search-feature folder (src/app/job-search-feature)
	- job-filter component
	- job-search component
	- jobs component
	- jobs-detail component (not used in this version because the limitation of Adzuna API resulting link the job detail to Adzuna API link - to get tracffic to their website. This component can still be used for future.)
	- nav-search component
	- pagination component
	- services folder
		- job-filter service
		- job service
		- nav-search service
		- pagination service

Data that stored in files are organized as below:
- data folder (src/assets/data)
	- adzuna folder
		- adzuna_api.json --> include app id and app key for Adzuna API
		- job-filter folder --> the job filter comes from parameters in [Adzuna API documentation](https://developer.adzuna.com/activedocs#!/adzuna/search). Each type of filter can appear once. For example, only 1 type of job category is allowed to add when searching in Adzuna API.
			- jobTypes.json
			- sortBy.json
	- location folder
		- ca.json --> comes from [simplemaps](https://simplemaps.com/data/ca-cities)

The data such as canada location are stored in client side because it is faster and contain no confidentiality.
The reason to choose file over database for job-search-feature is because the data is unstructured.
When handling unstructured small dataset, file is more efficient than database.
For simple operations, read operations are faster and simple. The client app don't need to communicate with server, and can get the data faster on its own.
However, there are disadvantage to run on client side as stated in "Limitation and deficiencies" section.

### Components & Services
There is two main pages in job search feature:
1. *Job search page*: 
	- Parent component: job-search component
	- Child component: nav-search component (interact with nav-search service)
2. *Job search result page*:
	- Parent component: jobs component (interact with job service)
	- Child component: 
		- nav-search component (interact with nav-search service)
		- job-filter component (interact with job-filter service)
		- pagination component (interact with pagination service)

The image for UI component is "UI diagram.png"

## Limitation and deficiencies

- The page number is not updated when click on "search" at job search result page. However, the data that populate is correct. 
For example, if the user click on page "5" and search with new keyword, the UI on pagination will still be page "5", but the data is page "1." 
If user click on other page number, it will show result related to the correct page number. The cause is from the program still remember the old value. With time constraint, I didn't fix this bug.
- Noted that the current version, all the code is run on client side. There is no confidential data (Adzuna API is also publicly available).
Noted that running on client also has more risk on performance as we have no control on client's environment.
However, if the application uses multiple web API, it will be better to run on server side due to performance and security.
Moreover, if web application uses well-known web API such as Indeed which required trusted publisher, it will be more important to keep control of the data.
Another solution is to move the operation to serverless. Using server or serverless will reduce the risk for broken access control.
Because of time contraint, I implemented this feature on client side.

## Built With

* [Angular](https://angular.io/) - Web framework used
* [Bootstrap](https://getbootstrap.com/) - CSS framework used

## Sources Used

### job-filter.component.html

*Lines 13 - 18*

```
        <input class="form-check-input" type="checkbox" value={{category.tag}} id={{category.tag}}
          [(ngModel)]="category.checked" [disabled]="!category.checked && checkedCategoryCount === limitNumber"
          (change)="checked(category, CATEGORY)">
        <label class="form-check-label m-1" for={{category.tag}}>
          {{category.label}}
        </label>
```
*Lines 24 - 29*

```
        <input class="form-check-input" type="checkbox" value={{jobtype.tag}} id={{jobtype.tag}}
          [(ngModel)]="jobtype.checked" [disabled]="!jobtype.checked && checkedJobTypeCount === limitNumber"
          (change)="checked(jobtype, JOB_TYPE)">
        <label class="form-check-label m-1" for={{jobtype.tag}}>
          {{jobtype.label}}
        </label>
```
*Lines 36 - 41*

```
        <input class="form-check-input" type="checkbox" value={{sortBy.tag}} id={{sortBy.tag}}
          [(ngModel)]="sortBy.checked" [disabled]="!sortBy.checked && checkedSortByCount === limitNumber"
          (change)="checked(sortBy, SORT_BY)">
        <label class="form-check-label m-1" for={{sortBy.tag}}>
          {{sortBy.label}}
        </label>
```

The code above was created by adapting the code in [Codepen](https://codepen.io/dichao/pen/NxPvbG) as shown below: 

```
  <label ng-repeat="item in items">
    <input type="checkbox" ng-model="item.checked" ng-click="check(item, $index)" ng-disabled="!item.checked && checkedNumber === limitNumber">{{item.name}}
  </label>
```

* The code in [Codepen](https://codepen.io/dichao/pen/NxPvbG) was implemented by dichao to demonstrate limit number of checkbox.
* [Codepen](https://codepen.io/dichao/pen/NxPvbG)'s Code was used because in Adzuna API, it can only filter one type of thing at a time. For example, multiple job categories caused the Adzuna API error.
* [Codepen](https://codepen.io/dichao/pen/NxPvbG)'s Code was modified by adding and adjusting content that related to job filter for web application.

### pagination.component.html

*Lines 3 - 19*

```
    <ul class="pagination justify-content-center" *ngIf="pageObject$.pages && pageObject$.pages.length">
        <li class="page-item" [ngClass]="{disabled:pageObject$.currentPage === 1}">
            <a class="page-link" (click)="setPage(1)">First</a>
        </li>
        <li class="page-item" [ngClass]="{disabled:pageObject$.currentPage === 1}">
            <a class="page-link" (click)="setPage(pageObject$.currentPage - 1)">Previous</a>
        </li>
        <li class="page-item" *ngFor="let page of pageObject$.pages" [ngClass]="{active:pageObject$.currentPage === page}">
            <a class="page-link" (click)="setPage(page)">{{page}}</a>
        </li>
        <li class="page-item" [ngClass]="{disabled:pageObject$.currentPage === pageObject$.totalPages}">
            <a class="page-link" (click)="setPage(pageObject$.currentPage + 1)">Next</a>
        </li>
        <li class="page-item" [ngClass]="{disabled:pageObject$.currentPage === pageObject$.totalPages}">
            <a class="page-link" (click)="setPage(pageObject$.totalPages)">Last</a>
        </li>
    </ul>
```

The code above was created by adapting the code in [Plnkr](https://embed.plnkr.co/plunk/KQ8xrl) as shown below: 

```
            <ul *ngIf="pager.pages && pager.pages.length" class="pagination">
                <li [ngClass]="{disabled:pager.currentPage === 1}">
                    <a (click)="setPage(1)">First</a>
                </li>
                <li [ngClass]="{disabled:pager.currentPage === 1}">
                    <a (click)="setPage(pager.currentPage - 1)">Previous</a>
                </li>
                <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}">
                    <a (click)="setPage(page)">{{page}}</a>
                </li>
                <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">
                    <a (click)="setPage(pager.currentPage + 1)">Next</a>
                </li>
                <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}">
                    <a (click)="setPage(pager.totalPages)">Last</a>
                </li>
            </ul>
```

### pagination.component.ts

*Lines 41 - 51*

```
  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    // get page object from service
    this.pageObject$ = this._pageService.getPages(this.allItems, page);

    this.setRouter(page);
    this.pageNumber.emit(page);
  }
```

The code above was created by adapting the code in [Plnkr](https://embed.plnkr.co/plunk/KQ8xrl) as shown below: 

```
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
```

### pagination.service.ts

*Lines 20 - 55*

```
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
```

The code above was created by adapting the code in [Plnkr](https://embed.plnkr.co/plunk/KQ8xrl) as shown below: 

```
    getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
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
                endPage = currentPage+2;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
```

* The code in [Plnkr](https://embed.plnkr.co/plunk/KQ8xrl) was implemented by Jason Watmore to demonstrate pagination.
* [Plnkr](https://embed.plnkr.co/plunk/KQ8xrl)'s Code was used to populate the job that related to page number.
* [Plnkr](https://embed.plnkr.co/plunk/KQ8xrl)'s Code was modified by adding and adjusting content that related to page number for job search result page.

## Acknowledgments

[1] Adzuna, "Build with Adzuna," Adzuna, [Online]. Available: https://developer.adzuna.com/. [Accessed 20 July 2020].
[2] simplemaps, "Canada Cities Database," simplemaps, [Online]. Available: https://simplemaps.com/data/ca-cities. [Accessed 20 July 2020].
[3] dichao, "Angular limit checkbox number," Codepen, [Online]. Available: https://codepen.io/dichao/pen/NxPvbG. [Accessed 20 July 2020].
[4] J. Watmore, "Angular 2 - Pagination Example 5 page," Plnkr, [Online]. Available: https://embed.plnkr.co/plunk/KQ8xrl. [Accessed 20 July 2020].
[5] Angular Material, "Autocomplete," Angular Material, [Online]. Available: https://material.angular.io/components/autocomplete/overview. [Accessed 20 July 2020].
[6] Bootstrap, "Pagination," Bootstrap, [Online]. Available: https://getbootstrap.com/docs/4.0/components/pagination/. [Accessed 20 July 2020].
[7] Angular, "Component interaction," Angular, [Online]. Available: https://angular.io/guide/component-interaction. [Accessed 20 July 2020].

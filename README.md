### TrackMyJobs (Front-end application)
* * *
The purpose of TrackMyJobs is to help the users search their dream job and keep track of their job applications to help users manage their job application more effectively. Moreover, TrackMyJobs targets to help users manage and organize activities related to job application by using job boards, activities, notes, and notification which can keep them notified and easy to follow up with their job applications. TrackMyJobs also provide blog which will help users to find tips for job application. It is a feature that users can share their experience to others.

* Date Created: 20 Jun 2020
* Last Modification Date: 07 Aug 2020

### Authors
* * *
##### Group 21

* Parth Bagaria     (pr270476@dal.ca)       B00839783
* Jan Chayopathum   (nw814986@dal.ca)       B00837398
* Anudish Jinturkar (an455254@dal.ca)       B00839915
* Roshan K. Patel   (roshan.patel23@dal.ca) B00853917
* Tejas Patel       (tejas.patel@dal.ca)    B00846296
* Zankrut B.Thakkar (zn834201@dal.ca)       B00856858

## Getting Started
* * *
This is front-end application of TrackMyJobs that provides user-centeric and easy to use user interface to users. More details on how to run this project in your local machine is describe in the following sections.

### Prerequisites
* * *
To run the front-end application of this project on your local machine for development or testing purposes, please make sure you have the [Node](https://nodejs.org/en/download/) and the [Angular CLI](https://cli.angular.io/) installed globally. I have used npm to manage the dependencies, so I strongly recommend you to use it. You can install it from [here](https://www.npmjs.com/get-npm).

```
1. Node
2. Angular CLI
3. NPM
```

### Installing (Setting up local environment)
* * *
Run the following commands in CMD to check whether Node is installed successfully or not on your machine:
```
node -v
npm -v
```
Run the following `npm` command to install the Angular CLI on your machine:
```
npm install -g @angular/cli
```
Run the following command to check whether Angular CLI is installed successfully or not on your machine:
```
ng --version
```

##### Run TrackMyJobs Angular application

- Copy either SSH or HTTPS clone link of the git project to clone this git project on your local machine.
- Next, run the `git clone` command that clones files from a remote server to your local machine. (Make sure you have git installed.)
```
git clone https://github.com/Zankrut97/grp21-trackmyjobs.git
```
- After cloning the application from git, execute the `npm install` command to resolve all packages and dependencies of the project.
```
npm install
```
- Finally, run `ng serve` command on your terminal to build the project locally and start the development server to host the application. It will display some log-like compiling dependencies and progress of the process of building the project.
```
ng serve
```
- Browse http://localhost:4200 on your browser that navigates to the home page of the application.

### Deployment ###
* * *
We have implemented continuous integration and continuous deployment (CI/CD) by hosting our code repositories on GitHub and deploying both applications on Heroku. After executing every `git push` command to the master branch of the GitHub repositories, its respective Heroku application will build and deployed again with the latest changes.

Our website is hosted on Heroku app server and the following is the URL to access it:
```
https://track-my-jobs.herokuapp.com/
```
,and our back-end Spring Boot application is also hosted on Heroku app server and it can be accessed using the following URL:
```
https://app-jobtracker.herokuapp.com/
```

Following are the steps to deploy the application on Heroku server:

1) Go to Heroku and sign in with your account - https://www.heroku.com/
2) Create new app and give app name and region and click on create app
3) Choose Gihub integration as our code can be directly used from our github repositiry
4) Select Repository and branch
5) Select option `Enable Automatic Deploys` it will automaically build and deploy the project after new changes pushed to the repository branch.
6) Install express using following command
	`npm install express`
7) Build the project which will create a 'dist' folder
	`ng build`
8) Create a server.js file (create by following Tutorial 2)
9) Add start script in our package.json
	`"start": "ng serve"`
10) run server.js and check everything is working as required
	`node server.js`
11) After checking, push the code to github repository
12) Heroku will build the project and deploy it.
13) After build is successful click on open app to view the deployed app. 
	
### Built With
* * *
* [Angular](https://angular.io/) - The web framework used
* [Node Package Manager (NPM)](https://www.npmjs.com/get-npm) - Dependency Management
* [NodeJS](https://nodejs.org/en/download/) - Runtime Environment Platform
* [Heroku](https://www.heroku.com/) - Production Server to host the application on the Internet
* [Bootstrap](https://getbootstrap.com/) - Front-end CSS Framework
* [Angular Material](https://material.angular.io/guide/getting-started) - Used for styling and form validation 

### Access Information
* * *
Our website is hosted on Heroku app server and the following is the URL to access it:
```
https://track-my-jobs.herokuapp.com/
```
,and our back-end Spring Boot application is also hosted on Heroku app server and it can be accessed using the following URL:
```
https://app-jobtracker.herokuapp.com/
```

The following link provides access to the GitHub repository of our front-end Angular application:
```
https://github.com/Zankrut97/grp21-trackmyjobs.git
```
,and the following link provides access to the GitHub repository of our back-end Spring application:
```
https://github.com/parth1229/web-project-jobtracker.git
```
We have used the MySQL database of AWS RDS to host our application database on the cloud. 
```
web-group-21.cvrfhckf0rla.us-east-1.rds.amazonaws.com
```
is the link to access the database. The full credentials are provided on request. 

### Folder structure
* * *

In the front-end application our team decided to group the packages based on feature. This organize simillar business logic in a one group. However, each feature folder of the front-end application is also divided into three files which are:
```
1. CSS file
2. HTML file
3. Component file
4. Service file
```
CSS file contains styling logic for the layout of the feature. HTML file contains each UI components of the feature. Component.ts file contains all computing logic according to user actions. Service.ts file contains functions to make HTTP requests to the back-end server to communicate with the application database over the internet.

### HTML W3C Compliance
* * *
To check the HTML W3C compliance of the front-end application of TrackMyJobs, we have used  [Markup Validation Service](https://validator.w3.org/) provided by W3 organization. The service provides options to upload HTML files and URI of the file. It also provides other configurations like to display error by group type of error, to choose encoding type, to get verbose level log information of the error etc.  

### Sources Used
* * *

#### blogsfilter.pipe.ts
*Lines 8 - 14*

```
 transform(blogs: any, keyword: any): any {
    if (keyword === undefined) return blogs;

    return blogs.filter(function (blog) {
      return blog.title.toLowerCase().includes(keyword.toLowerCase())
    })
```

The code above was created by adapting the code in [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) as shown below: 

```
    transform(items: any[], term: string): any {
        // I am unsure what id is here. did you mean title?
        return items.filter(item => item.id.indexOf(term) !== -1);
    }

```

- The code in [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) was implemented by creating a pipe file for blogs component.
- [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) Code was used to filter out the blogs based on the search term
- [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) Code was modified by adding the null check as well as filtering the list using the id of the blog which is obtained uisng angular routing parameter.


### jobsfilter.pipe.ts

*Lines 8 - 14*

```
transform(jobs: any, keyword: any): any {
    if (keyword === undefined) return jobs;

    return jobs.filter(function (job) {
      return job.post.toLowerCase().includes(keyword.toLowerCase())
    })
  }

```
The code above was created by adapting the code in [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) as shown below: 

```
 transform(items: any[], term: string): any {
        // I am unsure what id is here. did you mean title?
        return items.filter(item => item.id.indexOf(term) !== -1);
    }
```

- The code in [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) was implemented by creating a pipe file for jobs component.
- [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) Code was used to filter out the jobs based on the search term
- [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) Code was modified by adding the null check as well as filtering the list using the id of the blog which is obtained uisng angular routing parameter.

#### header-navbar.component.html

*Lines 3 - 40*

```
<header class="head my-3">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="navbar-brand d-flex align-items-center" routerLink="/home">
                <img class="navbar-logo" src="/assets/briefcase.svg" alt="website-icon">
                <span class="header-name" style="font-family: Lato;">TrackMyJobs</span>
            </a>
            <button class="navbar-toggler border-0 " type="button" data-toggle="collapse" data-target="#header-navbar">
                <span><img class="toggle-img" src="/assets/icons8-menu.svg" alt=""></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="header-navbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link nav-link-menu" routerLink="/home" routerLinkActive="nav-active">{{home}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-menu" routerLink="/blogs" routerLinkActive="nav-active">{{blog}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-menu" routerLink="/jobs" routerLinkActive="nav-active">{{jobs}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-menu" routerLink="/contact"
                            routerLinkActive="nav-active">{{contact}}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link nav-link-menu" routerLink="/about"
                            routerLinkActive="nav-active">{{about}}</a>
                    </li>
                </ul>
                <div class="my-2 my-lg-0">
                    <button class="btn btn-primary mr-sm-2 signin" type="button"
                        [routerLink]="['/sign-in']">{{sign_in_btn}}</button>
                    <button class="btn btn-outline-primary my-2 my-sm-0 signup" type="button"
                        [routerLink]="['/sign-up']">{{sign_up_btn}}</button>
                </div>
            </div>
        </nav>
    </header>
```
The code above was created by adapting the code in [Bootstrap - Navbar](https://getbootstrap.com/docs/4.0/components/navbar/) as shown below: 

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
```

- The code in [Bootstrap - Navbar](https://getbootstrap.com/docs/4.0/components/navbar/) was implemented by creating a responsive navbar.
- [Bootstrap - Navbar](https://getbootstrap.com/docs/4.0/components/navbar/) Code was used create a responsive nav bar.
- [Bootstrap - Navbar](https://getbootstrap.com/docs/4.0/components/navbar/) Code was modified by adding the adding the navigation links and the using angular components to get the menu items from the typescript file,


#### sign-in.component.html

*Lines 19 - 27*

```
 <mat-form-field appearance="outline" style="width: 100%; border-radius:25px !important;">
                                <mat-label>Email</mat-label>
                                <input #email="ngModel" matInput required ngModel name="email" placeholder="abc@abc.com"
                                    pattern="^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$">
                                <mat-icon matSuffix>email</mat-icon>
                                <mat-error *ngIf=" !email.touched && email.invalid">Email is required</mat-error>
                                <mat-error *ngIf=" email.touched && email.invalid">
                                    <div *ngIf="email.errors.required">Email is required</div>
                                    <div *ngIf="email.errors.pattern">Enter valid Email id(abc@abc.com)</div>
                                </mat-error>

```
The code above was created by adapting the code in [Angular - Form Validation](https://angular.io/guide/form-validation) as shown below: 

```
<input id="name" name="name" class="form-control"
      required minlength="4" appForbiddenName="bob"
      [(ngModel)]="hero.name" #name="ngModel" >

<div *ngIf="name.invalid && (name.dirty || name.touched)"
    class="alert alert-danger">

  <div *ngIf="name.errors.required">
    Name is required.
  </div>
  <div *ngIf="name.errors.minlength">
    Name must be at least 4 characters long.
  </div>
  <div *ngIf="name.errors.forbiddenName">
    Name cannot be Bob.
  </div>

</div> 

```

- The code in [Angular - Form Validation](https://angular.io/guide/form-validation) was implemented by creating a email and password validation
- [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) Code was used to validate the email and password in sign-in component
- [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) Code was modified by adding the validation based on pattern for email and min-length for password. Also used angular <mat-error> to show the error.


#### blogs.component.html

*Lines 15 - 29*

```
 <div class="row" style="margin-top:25px;">
            <div class="col-lg-3 col-md-4 col-sm-6" *ngFor="let blog of blogs | blogsfilter:blogSearch"
                (click)="onBlogCard(blog)">
                <div class="card" style="margin:10px;box-shadow: 0.5rem 1rem 1rem 0.5rem rgba(0, 0, 0, 0.1);">
                    <img style="margin:5px;" class=" card-img-top" width="150" height="150" src={{blog.img}}
                        alt="Blog-image">
                    <div class="card-body">
                        <h4 style="font-weight: 600;" class="card-title">{{blog.title}}</h4>
                        <p class="card-text">{{blog.description}}
                        </p>
                        <button (click)="onBlogCard(blog)" class="btn btn-primary">View More</button>
                    </div>
                </div>
            </div>
        </div>
```
The code above was created by adapting the code in [Bootstrap - Card](https://getbootstrap.com/docs/4.0/components/card/) as shown below: 

```
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

- The code in [Bootstrap - Card](https://getbootstrap.com/docs/4.0/components/card/) was implemented by creating a card for blogs and jobs
- [Bootstrap - Card](https://getbootstrap.com/docs/4.0/components/card/) Code was used to create card for blogs and jobs post.
- [Bootstrap - Card](https://getbootstrap.com/docs/4.0/components/card/) Code was modified by adding creating dynamic and responsive cards from the list of blogs and jobs using angular


#### sign-in.component.ts and home.component.ts

*Lines 17 - 22 and Lines 19-22*
 

```
  signinconfirmation() {
    var msg = "Login Successful";
    this.snackbar.open(msg, 'close', {duration: 3000,horizontalPosition: "center",verticalPosition: "top",panelClass: ["snackbar_confirm"]})
    this.router.navigate(['/home'])
  }

sendmail() {
    var msg = "Mail Sent Successfully";
    this.snackbar.open(msg, 'close', {duration: 3000,horizontalPosition: "center",verticalPosition: "top",panelClass: ["snackbar_confirm"]})
  }

```

The code above was created by adapting the code in [Angular Material - Snackbar](https://material.angular.io/components/snack-bar/examples) as shown below: 

```
   openSnackBar() {
    this._snackBar.open('Cannonball!!', 'End now', {
      duration: 500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

```

- The code in [Angular Material - Snackbar](https://material.angular.io/components/snack-bar/examples) was implemented by creating a snackbar to show login and email confirmation.
- [Angular Material - Snackbar](https://material.angular.io/components/snack-bar/examples) Code was used to create login and email confirmation.
- [stackoverflow.com](https://stackoverflow.com/questions/44769748/angular-4-pipe-filter) Code was modified by adding the confirmation message using variable as well as applying custom css class to modify the look and feel

#### job-board.component.ts

*Lines 231 - 259*

```
// Function to change the status of a job application.
  drop(event: CdkDragDrop<JobApplication[]>, listName: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.showSpinner = true;
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      for (let index = 0; index < event.container.data.length; index++) {
        let job = event.container.data[index];
        if (job.status != listName) {
          job.status = listName;
          // API call to change status of job application in database.
          this.jobBoardService.updateJobAppForJobBoard(job).subscribe(newJob => {
            job = newJob;
            this.showSpinner = false;
            this.showSuccessNotification(this.STATUS_CHANGE_SUCCESS_MSG);
          },
            err => {
              this.showSpinner = false;
              this.showErrorNotification(this.STATUS_CHANGE_ERROR_MSG);
            });
        }
      }
    }
  }
```

The code above was created by adapting the code in [Drag&Drop connected sorting group(TS)- Angular](https://material.angular.io/cdk/drag-drop/overview#transferring-items-between-lists) as shown below: 

```
drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
```

- To used this code, first I have installed dependency `@angular/cdk/drag-drop` for drag and drop from angular. Also, I have imported `MatDialog`, `MAT_DIALOG_DATA`, `MatDialogRef` components of this dependency in my job-board.component.ts file. 
- I have used this code too along with a change in UI, list of data in the TS file should also be changed and move among lists of groups when a drag and drop event happened in UI. 
- There are no changes in the reference code. However, I have added a function call to change the status of a job application in the database and also added logic to move from one job status array to another.

#### job-board.component.css

*Lines 64 - 86*

```
  .cdk-drag-preview {
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  
  .cdk-drag-placeholder {
    opacity: 0;
  }
  
  .cdk-drag-animating {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
  
  .example-box:last-child {
    border: none;
  }
  
  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
```

The code above was created by adapting the code in [Drag&Drop connected sorting group(CSS)- Angular](https://material.angular.io/cdk/drag-drop/overview#transferring-items-between-lists) as shown below: 

```
.cdk-drag-preview {
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
              0 8px 10px 1px rgba(0, 0, 0, 0.14),
              0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.cdk-drag-placeholder {
  opacity: 0;
}

.cdk-drag-animating {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.example-box:last-child {
  border: none;
}

.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
```

- To used this code, first I have installed dependency `@angular/cdk/drag-drop` for drag and drop from angular. Also, I have imported `MatDialog`, `MAT_DIALOG_DATA`, `MatDialogRef` components of this dependency in my job-board.component.ts file. 
- I have used this code as provided by Angular to add animation and shadow to placeholder during drag and drop.
- The code was implemented as it is in reference and no changes are added.


### Acknowledgments
***
[Navigation menu was created using Bootstrap]
(https://getbootstrap.com/docs/4.5/components/navbar/)

[All the cards were created using the Bootstrap card]
(https://getbootstrap.com/docs/4.0/components/card/) 

[Sign-up page was developed by taking inspiration from link]
(https://startbootstrap.com/snippets/login/)

[All the form field were created and validated using angular material forms]
(https://material.angular.io/components/form-field/overview)

[Snackbar to show confirmation msg was created using angular material]
(https://material.angular.io/components/snack-bar/examples)

[text used in blogs and jobs was generated using lorem-ipsum generator]
(https://loremipsum.io/)
 
 https://www.digitalocean.com/community/tutorials/angular-drag-drop by Sumit Vekariya - This blog was very helpful to me to gain ideas about how I can implement my job board screen and knowledge about angular drag and drop.

[Font Awesome](https://fontawesome.com/) library is used for icons and the list of icons are as follow:
- Plus icon and Delete icon on the Job Board page.


### References
***
[1] Angular, “Angular Material,” Angular Material, 2020. [Online]. Available: [2] https://material.angular.io/. [Accessed: 14-Jun-2020].
[2] Start Bootstrap, “Bootstrap 4 Login Page Snippet,” Start Bootstrap, 2019. [Online]. Available: [4] https://startbootstrap.com/snippets/login/. [Accessed: 14-Jun-2020].
[3] The Net Ninja, “Angular 2 Tutorial #22 - Custom Filter Pipe,” YouTube. 2020
[4] Codevolution, “Angular Forms Tutorial,” YouTube. 2020.
[5] “Lorem Ipsum,” Lorem Ipsum, 2020. [Online]. Available: https://loremipsum.io/. [Accessed: 14-Jun-2020].
[6] "Typography on the web", Medium, 2020. [Online]. Available: https://medium.com/rareview/typography-on-the-web-4cd494d6b165. [Accessed: 14- Jun- 2020].
[7] "CSS box-shadow property", W3schools.com, 2020. [Online]. Available: https://www.w3schools.com/cssref/css3_pr_box-shadow.asp. [Accessed: 15- Jun- 2020].
[8] Tejas Patel, "CSCI 5709 ASSIGNMENT 4." Dalhousie University, [online document], 2020. [Accessed 06-Jul-2020]

### Images Reference ###
***
[Home Page]
https://www.flaticon.com/free-icon/briefcase_138228
https://www.delesign.com/free-designs/graphics/?category=illustrations&asset=scrum-board
https://www.flaticon.com/free-icon/keywords_2721524?term=discover&page=1&position=9
https://www.flaticon.com/free-icon/profile_3050410?term=job%20applications&page=1&position=7
https://www.flaticon.com/free-icon/to-do-list_3014563?term=to%20do&page=1&position=6
https://www.flaticon.com/free-icon/statistics_2920323?term=analytics&page=1&position=3
https://www.delesign.com/free-designs/graphics/?category=illustrations&asset=blog

[Blogs Page]
https://undraw.co/illustrations
https://undraw.co/search

[Jobs Page]
https://commons.wikimedia.org/wiki/Category:Google_SVG_logos#/media/File:Google_%22G%22_Logo.svg
https://logotyp.us/logo/microsoft/

[Sign-in Page]
https://www.delesign.com/free-designs/graphics/?category=illustrations&asset=scrum-board

[Contact, About, Sign-up]
https://lukaszadam.com/illustrations









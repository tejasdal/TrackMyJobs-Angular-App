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









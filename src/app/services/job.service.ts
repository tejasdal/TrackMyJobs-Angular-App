// Dummy data from Indeed, "Job Search API," Indeed, [Online]. Available: https://opensource.indeedeng.io/api-documentation/docs/job-search/. [Accessed 10 June 2020].
// Dummy text from Lorem Ipsum, "Lorem Ipsum," Lorem Ipsum, [Online]. Available: https://www.lipsum.com/. [Accessed 10 June 2020].

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class JobService {
  
  jobs = {
    version: 2,
    query: "java",
    location: "austin, tx",
    dupefilter: true,
    highlight: false,
    radius: 25,
    start: 1,
    end: 10,
    totalResults: 8,
    pageNumber: 0,
    results: [
      {
        jobtitle: "Java Developer 1",
        company: "XYZ Corp., 1",
        city: "Austin",
        state: "TX",
        country: "US",
        formattedLocation: "Austin, TX",
        source: "Dice",
        date: "Mon, 02 Aug 2017 16:21:00 GMT",
        snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        url: "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
        onmousedown: "indeed_clk(this, '0000');",
        latitude: 30.27127,
        longitude: -97.74103,
        jobkey: "12345111",
        sponsored: false,
        expired: false,
        indeedApply: true,
        formattedLocationFull: "Austin, TX",
        formattedRelativeTime: "11 hours ago"
      },
      {
        jobtitle: "Java Developer 2",
        company: "XYZ Corp., 2",
        city: "Austin",
        state: "TX",
        country: "US",
        formattedLocation: "Austin, TX",
        source: "Dice",
        date: "Mon, 02 Aug 2017 16:21:00 GMT",
        snippet: "looking for an object-oriented Java Developer... Java Servlets, HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with Tomcat and the Java...",
        url: "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
        onmousedown: "indeed_clk(this, '0000');",
        latitude: 30.27127,
        longitude: -97.74103,
        jobkey: "54321222",
        sponsored: false,
        expired: false,
        indeedApply: true,
        formattedLocationFull: "Austin, TX",
        formattedRelativeTime: "11 hours ago"
      },
      {
        jobtitle: "Java Developer 3",
        company: "XYZ Corp., 3",
        city: "Austin",
        state: "TX",
        country: "US",
        formattedLocation: "Austin, TX",
        source: "Dice",
        date: "Mon, 02 Aug 2017 16:21:00 GMT",
        snippet: "looking for an object-oriented Java Developer... Java Servlets, HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with Tomcat and the Java...",
        url: "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
        onmousedown: "indeed_clk(this, '0000');",
        latitude: 30.27127,
        longitude: -97.74103,
        jobkey: "123453",
        sponsored: false,
        expired: false,
        indeedApply: true,
        formattedLocationFull: "Austin, TX",
        formattedRelativeTime: "11 hours ago"
      },
      {
        jobtitle: "Java Developer 4",
        company: "XYZ Corp., 4",
        city: "Austin",
        state: "TX",
        country: "US",
        formattedLocation: "Austin, TX",
        source: "Dice",
        date: "Mon, 02 Aug 2017 16:21:00 GMT",
        snippet: "looking for an object-oriented Java Developer... Java Servlets, HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with Tomcat and the Java...",
        url: "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
        onmousedown: "indeed_clk(this, '0000');",
        latitude: 30.27127,
        longitude: -97.74103,
        jobkey: "543214",
        sponsored: false,
        expired: false,
        indeedApply: true,
        formattedLocationFull: "Austin, TX",
        formattedRelativeTime: "11 hours ago"
      },
      {
        jobtitle: "Java Developer 5",
        company: "XYZ Corp., 5",
        city: "Austin",
        state: "TX",
        country: "US",
        formattedLocation: "Austin, TX",
        source: "Dice",
        date: "Mon, 02 Aug 2017 16:21:00 GMT",
        snippet: "looking for an object-oriented Java Developer... Java Servlets, HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with Tomcat and the Java...",
        url: "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
        onmousedown: "indeed_clk(this, '0000');",
        latitude: 30.27127,
        longitude: -97.74103,
        jobkey: "123455",
        sponsored: false,
        expired: false,
        indeedApply: true,
        formattedLocationFull: "Austin, TX",
        formattedRelativeTime: "11 hours ago"
      },
      {
        jobtitle: "Java Developer 6",
        company: "XYZ Corp., 6",
        city: "Austin",
        state: "TX",
        country: "US",
        formattedLocation: "Austin, TX",
        source: "Dice",
        date: "Mon, 02 Aug 2017 16:21:00 GMT",
        snippet: "looking for an object-oriented Java Developer... Java Servlets, HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with Tomcat and the Java...",
        url: "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
        onmousedown: "indeed_clk(this, '0000');",
        latitude: 30.27127,
        longitude: -97.74103,
        jobkey: "543216",
        sponsored: false,
        expired: false,
        indeedApply: true,
        formattedLocationFull: "Austin, TX",
        formattedRelativeTime: "11 hours ago"
      },
      {
        jobtitle: "Java Developer 7",
        company: "XYZ Corp., 7",
        city: "Austin",
        state: "TX",
        country: "US",
        formattedLocation: "Austin, TX",
        source: "Dice",
        date: "Mon, 02 Aug 2017 16:21:00 GMT",
        snippet: "looking for an object-oriented Java Developer... Java Servlets, HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with Tomcat and the Java...",
        url: "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
        onmousedown: "indeed_clk(this, '0000');",
        latitude: 30.27127,
        longitude: -97.74103,
        jobkey: "123457737",
        sponsored: false,
        expired: false,
        indeedApply: true,
        formattedLocationFull: "Austin, TX",
        formattedRelativeTime: "11 hours ago"
      },
      {
        jobtitle: "Java Developer 8",
        company: "XYZ Corp., 8",
        city: "Austin",
        state: "TX",
        country: "US",
        formattedLocation: "Austin, TX",
        source: "Dice",
        date: "Mon, 02 Aug 2017 16:21:00 GMT",
        snippet: "looking for an object-oriented Java Developer... Java Servlets, HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with Tomcat and the Java...",
        url: "https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
        onmousedown: "indeed_clk(this, '0000');",
        latitude: 30.27127,
        longitude: -97.74103,
        jobkey: "543214888",
        sponsored: false,
        expired: false,
        indeedApply: true,
        formattedLocationFull: "Austin, TX",
        formattedRelativeTime: "11 hours ago"
      }
    ]
  };

  constructor() { }

  getJobs(): Observable<any> {
    return of(this.jobs);
  }

  getJobByJobKey(jobkey) : Observable<any> {
    for (let job of this.jobs.results) {
      if(job.jobkey == jobkey){
        return of(job);
      }
    }
  }
}

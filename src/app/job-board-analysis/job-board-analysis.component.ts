import { JobAnalysisService } from './job-analysis.service';
import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-job-board-analysis',
  templateUrl: './job-board-analysis.component.html',
  styleUrls: ['./job-board-analysis.component.css']
})
export class JobBoardAnalysisComponent implements OnInit,AfterViewInit {
  
  constructor(private service:JobAnalysisService) { }
  lineGraph = [];
  horizontalBar;
  stackedBar; 
  Job_data_01:any;
  job_data_02:any;
  job_data_03:any;
  job_data_04:any;
  written_blog_counts:any;
  pending_activity_count:any;
  completed_activity_count:any;
  errormessage:any
  



ngAfterViewInit():void
{
 // this.applyDateFilter(1);
}
  ngOnInit(): void {

    

    this.service.get_writtenblogs_data(101).subscribe(res=>{
      this.written_blog_counts=res;
     
          //Starting of line grah about blog writting analysis
     this.lineGraph = new Chart('lineGraph', {
      type: 'line',
      data: {
        labels: ['January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'],
        datasets: [
          {
            label: 'You wrote',
            data: this.written_blog_counts,
            backgroundColor: '#fee3b8',
            fill: true,
          },

        ]
      },
      options:
      {
        title:
        {
          display: true,
          text: ''
        },
        legend:
        {
          display: false,
          position: 'right'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },

        scales: {
          xAxes: [
            {

              ticks: {
                display: true,
                beginAtZero: true//this will remove only the label
              },
              gridLines: {
                display: false
              }
            }],
          yAxes: [{
            ticks: {
              precision:0
            },
            gridLines: {
              display: true
            }
          }]
        }
      }

    })
    //Ending of line grah about blog writting analysis
    })

//Initlially fetching the data of the first month in the ngOnInit
   this.service.get_jobapplication_data(1,101).subscribe(res=>{

     this.Job_data_01=res;
     //Starting of horizontal bar about job stage analysis
     this.horizontalBar = new Chart('horizontalBar', {
       type: 'horizontalBar',
       data: {
         labels: ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'],
         datasets: [
           {
             data:this.Job_data_01,
             backgroundColor: ['#9013fe', '#0088ff', '#29db0e', '#f8e82c', '#ed382b'],
             hoverBorderColor: '#e6e6ff',
             hoverBorderWidth: 2,
 
           }
         ]
       },
       options:
       {
         title:
         {
           fontSize: 12,
           display: true,
           text: ''
         },
         legend:
         {
           display: false,
           position: 'right'
         },
         animation: {
           animateScale: true,
           animateRotate: true
         },
         scales: {
           xAxes: [
             {
 
               ticks: {
                 display: false,
                 beginAtZero: true//this will remove only the label
               },
               gridLines: {
                 display: false
               }
             }],
           yAxes: [{
             gridLines: {
               display: false
             }
           }]
         }
       }
     })
     //Ending of horizontal bar about job stage analysis
     },
     error => this.errormessage=error
   );


     this.service.get_activity_list(7,101).subscribe(res=>{
       this.pending_activity_count=res[0];
       this.completed_activity_count=res[1];

        
     //Starting of Stacked bar about activity completion anaysis
     this.stackedBar = new Chart('stackedBar', {
      type: 'bar',
      data: {
        labels: ['Jan',
          'Feb',
          'March',
          'April',
          'May',
          'June', 'july'
        ],
        datasets: [
          {
            label: "Completed Activity",
            data: this.completed_activity_count,
            backgroundColor: '#0088ff',
            hoverBorderColor: '#e6e6ff',
            hoverBorderWidth: 2,
            
          },
          {
            label: "Panding Activity",
            data: this.pending_activity_count,
            backgroundColor: '#f8e82c',
            hoverBorderColor: '#e6e6ff',
            hoverBorderWidth: 2,

          }

        ]
      },
      options:
      {
        title:
        {
          fontSize: 15,
          display: true,
          text: ''
        },
        legend:
        {

          display: false,
          position: 'right'
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                display: true,
                beginAtZero: true//this will remove only the label
              },
              gridLines: {
                display: false
              }
            }],
          yAxes: [{
            stacked: true,
            ticks: {
              precision:0,
              min: 0,
              max:10 // minimum value
             
          },
            gridLines: {
              display: false
            }
          }]
        }
      }
    })
     })



     this.service.get_jobapplication_data(1,101).subscribe(res=>{
     this.Job_data_01=res;
      });
      this.service.get_jobapplication_data(2,101).subscribe(res=>{
        this.job_data_02=res;
        });
        this.service.get_jobapplication_data(3,101).subscribe(res=>{
          this.job_data_03=res;
          });
        this.service.get_jobapplication_data(6,101).subscribe(res=>{
          this.job_data_04=res;
          });
  }


  


   applyDateFilter(value) {

if (value == 1) {
  console.log(this.Job_data_01);
  this.horizontalBar.data.datasets[0].data =this.Job_data_01;
  this.horizontalBar.options.title.text = "Last month";
}

    if (value == 2) {
      console.log(this.job_data_02);
      this.horizontalBar.data.datasets[0].data =this.job_data_02;
      this.horizontalBar.options.title.text = "Last month";
    }
    if (value == 3) {
      console.log(this.job_data_03);
      this.horizontalBar.data.datasets[0].data = this.job_data_03;
      this.horizontalBar.options.title.text = "Past three months";
    }
    if (value == 6) {
      console.log(this.job_data_04);
      this.horizontalBar.data.datasets[0].data = this.job_data_04;
      this.horizontalBar.options.title.text = "Half year(6 month)";
    }
  
    this.horizontalBar.update();
  }

}



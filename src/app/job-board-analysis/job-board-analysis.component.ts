import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-job-board-analysis',
  templateUrl: './job-board-analysis.component.html',
  styleUrls: ['./job-board-analysis.component.css']
})
export class JobBoardAnalysisComponent implements OnInit {

  constructor() { }
  lineGraph = [];
  horizontalBar;
  stackedBar;
  intialdata = [10, 20, 5, 10, 2];

  ngOnInit(): void {
    
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
            data: [1, 2, 0, 0, 0, 5, 3, 4, 1, 1, 6, 1],
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
            gridLines: {
              display: true
            }
          }]
        }
      }

    })
    //Ending of line grah about blog writting analysis


    //Starting of horizontal bar about job stage analysis
    this.horizontalBar = new Chart('horizontalBar', {
      type: 'horizontalBar',
      data: {
        labels: ['Wishlist', 'Applied', 'Interview', 'Offer', 'Rejected'],
        datasets: [
          {
            data: [10, 20, 5, 10, 2],
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

    //Starting of Stacked bar about activity completion anaysis
    this.stackedBar = new Chart('stackedBar', {
      type: 'bar',
      data: {
        labels: ['Jan',
          'Feb',
          'March',
          'April',
          'May',
          'June', 'july', 'aug'
        ],
        datasets: [
          {
            label: "Completed Activity",
            data: [10, 20, 5, 10, 2],
            backgroundColor: '#0088ff',
            hoverBorderColor: '#e6e6ff',
            hoverBorderWidth: 2,
          },
          {
            label: "Panding Activity",
            data: [1, 20, 6, 10, 2, 6],
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
            gridLines: {
              display: false
            }
          }]
        }
      }
    })
  }

   //Ending of Stacked bar about activity completion anaysis

   applyDateFilter(value) {
    if (value == 2) {
      this.horizontalBar.data.datasets[0].data = [1, 1, 5, 1, 2];
      this.horizontalBar.options.title.text = "Last month";
    }
    if (value == 3) {
      this.horizontalBar.data.datasets[0].data = [5, 2, 2, 1, 4];
      this.horizontalBar.options.title.text = "Past three months";
    }
    if (value == 4) {
      this.horizontalBar.data.datasets[0].data = [100, 60, 30, 80, 19];
      this.horizontalBar.options.title.text = "Half year(6 month)";
    }
    console.log(value)
    this.horizontalBar.update();
  }

}



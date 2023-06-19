import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';

@Component({
  selector: 'app-trackingpost',
  templateUrl: './trackingpost.component.html',
  styleUrls: ['./trackingpost.component.scss']
})
export class TrackingpostComponent  {

  

  title = 'angular-chart';
  constructor() {
    Chart.register(...registerables);
  }
  ngOnInit(): void {
    // Line Chart
    const lineCanvasEle: any = document.getElementById('line_chart')
    const lineChar = new Chart(lineCanvasEle.getContext('2d'), {
      type: 'line',
        data: {
          labels: ['Like', 'Comments', 'Share', 'Reaction'],
          datasets: [
            { data: [12, 15, 18, 14, 11, 19, 12], label: 'Like', borderColor: 'rgba(54, 162, 235)' },
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Comments', borderColor: 'rgb(75, 192, 192)' },
          ],
        },
        options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
      });
    // Bar chart
    const barCanvasEle: any = document.getElementById('bar_chart')
    const barChart = new Chart(barCanvasEle.getContext('2d'), {
      type: 'bar',
        data: {
          labels: ['Positive', 'Negative', 'Neutral'],
          datasets: [{
            label: 'Positive',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
      });
  }
  }


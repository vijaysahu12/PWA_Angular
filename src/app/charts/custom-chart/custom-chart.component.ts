import { Component, OnInit } from '@angular/core';
import { Charts, Chart } from 'src/app/Modal/ChartModal';
import { AnimateList, PopUp  , ScaleAnimation , UpAndDown , ChartBottomTop } from 'src/app/Animation';

@Component({
  // tslint:disable-next-line: use-host-property-decorator
  host: { class: 'pageContainer' },
  selector: 'app-custom-chart',
  templateUrl: './custom-chart.component.html',
  styleUrls: ['./custom-chart.component.css'],
  animations: [AnimateList , PopUp , ScaleAnimation , UpAndDown , ChartBottomTop]
})
export class CustomChartComponent implements OnInit {

  ChartData: Chart[];
  constructor() { }

  ngOnInit() {
    this.GetChartValues();
  }


  GetChartValues() {

    this.ChartData = [{
      BarTopValue: 20 + '%',
      Height: 40 + '%',
      MarginLeft: 2 + '%',
      Width: 2 + '%',
      bgColor: '#ffaeae',
      EmployeeName: 'Vijay Sahu'
    },
    {
      BarTopValue: 60 + '%',
      Height: 60 + '%',
      MarginLeft: 6 + '%',
      Width: 2 + '%',
      bgColor: 'pink',
      EmployeeName: 'Annkur Shandilya'
    },
    {
      BarTopValue: 90 + '%',
      Height: 90 + '%',
      MarginLeft: 10 + '%',
      Width: 2 + '%',
      bgColor: '#95d595',
      EmployeeName: 'Swati Chintapatla'
    },
    {
      BarTopValue: 10 + '%',
      Height: 10 + '%',
      MarginLeft: 14 + '%',
      Width: 2 + '%',
      bgColor: 'rgb(179, 179, 179)',
      EmployeeName: 'Aman Pamecha'
    },
    {
      BarTopValue: 55 + '%',
      Height: 55 + '%',
      MarginLeft: 14 + '%',
      Width: 2 + '%',
      bgColor: 'rgb(194, 235, 226)',
      EmployeeName: 'Garima Khare'
    },
    {
      BarTopValue: 35 + '%',
      Height: 35 + '%',
      MarginLeft: 14 + '%',
      Width: 2 + '%',
      bgColor: 'rgb(249, 203, 220)',
      EmployeeName: 'Amit Bhujwal'
    },
    {
      BarTopValue: 72 + '%',
      Height: 72 + '%',
      MarginLeft: 14 + '%',
      Width: 2 + '%',
      bgColor: 'pink',
      EmployeeName: 'Shivangi Rao'
    },
    {
      BarTopValue: 67 + '%',
      Height: 67 + '%',
      MarginLeft: 14 + '%',
      Width: 2 + '%',
      bgColor: '#ffaeae',
      EmployeeName: 'Shivangi Rao'
    },
    {
      BarTopValue: 89 + '%',
      Height: 89 + '%',
      MarginLeft: 14 + '%',
      Width: 2 + '%',
      bgColor: 'rgb(252, 238, 189)',
      EmployeeName: 'Shivangi Rao'
    },
    {
      BarTopValue: 62 + '%',
      Height: 62 + '%',
      MarginLeft: 14 + '%',
      Width: 2 + '%',
      bgColor: 'rgb(179, 179, 179)',
      EmployeeName: 'Shivangi Rao'
    }
  ];
    let calculatedWidth = (100 / this.ChartData.length);
    if (calculatedWidth > 6) {
      calculatedWidth = 6;
    }

    for (let i = 0; this.ChartData.length > i; i++) {
      this.ChartData[i].Width = calculatedWidth.toString() + '%';
      if ( i === 0 ) {
        this.ChartData[i].MarginLeft = '1%';
      } else {
        this.ChartData[i].MarginLeft =
        (calculatedWidth + parseInt(this.ChartData[i - 1].MarginLeft.split('%')[0])  + 1).toString() + '%';
      }
      console.log( 'Margin Left' + this.ChartData[i].MarginLeft);
    }
  }
}

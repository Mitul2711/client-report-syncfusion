import { Component } from '@angular/core';
import { data0, data1, data2, data3 } from './dataSource';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent {

  constructor() { }
  data: any;
  station: any[] = [];
  analogChannel: any[] = [];
  analogChannelData: any[] = [];
  digitalChannel: any[] = [];
  digitalChannelData: any[] = [];

  data0: any[]=[];

  public primaryXAxis?: Object;
  public title?: string;
  public primaryYAxis?: Object;
  public marker?: Object;
  public series?: Object;
  public chartData1?: Object[]; public chartData2?: Object[]; public chartData3?: Object[];
  public chartData4?: Object[];
  public tooltip?: Object;


  ngOnInit(): void {




    // this.getChannel()
    this.primaryXAxis = {
      interval: 1, valueType: 'Category'
    };
    this.primaryYAxis =
      {
        title: 'Expense',
        interval: 100,
        labelFormat: '${value}',
      },
      this.tooltip = { enable: true };
    console.log(this.data0);

    this.chartData1 = data0;
    this.chartData2 = data1;
    this.chartData3 = data2;
    this.chartData4 = data3;
    this.marker = { visible: true };
  }


  // getChannel() {
  //   this.dataService.getData().subscribe((res) => {
  //     this.data = res;
  //     this.data.forEach((e: any) => {
  //       this.station.push(e.name);
  //       this.station.forEach(element => {
  //         if (element == e.name) {
  //           this.analogChannel.push(e.analog_channels)
  //           this.digitalChannel.push(e.digital_channels)
  //         }
  //       });
  //
  //     });
  //     this.analogChannel.forEach(element => {
  //       element.forEach((e: any) => {
  //         this.data0.push({
  //           x: e.channel_number, y:e.data
  //         })
  //       });
  //     });
      // console.log(this.data0);

  //   });
  //
  //   // console.log(this.analogChannel);
  //   // console.log(this.analogChannelData);
  //
  //
  // }

}

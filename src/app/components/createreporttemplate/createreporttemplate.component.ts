import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MatSelectChange } from "@angular/material/select";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { DataService } from "../../service/data.service";
import { Router } from "@angular/router";
import { ChangeEventArgs, MultiSelectComponent } from '@syncfusion/ej2-angular-dropdowns';
import { PopupService } from 'src/app/service/popup.service';
import { AddStationComponent } from '../add-station/add-station.component';
import { AddUserComponent } from 'src/app/forms/add-user/add-user.component';
import { PermissionComponent } from 'src/app/forms/permission/permission.component';
import {PermisiionTreeComponent} from "../../forms/permisiion-tree/permisiion-tree.component";
import {GridtreeCheckboxComponent} from "../../forms/gridtree-checkbox/gridtree-checkbox.component";
import {PermisiionTreeClientComponent} from "../../forms/permisiion-tree-client/permisiion-tree-client.component";

@Component({
  selector: 'app-createreporttemplate',
  templateUrl: './createreporttemplate.component.html',
  styleUrls: ['./createreporttemplate.component.scss']
})
export class CreatereporttemplateComponent implements OnInit {


  StationNames: string = "stationName";
  public selectedChannels: { channel_number: string, data: number }[] = [];
  checkboxArray: any;
  data: any;
  stationData: string[] = [];
  analogChannel: any[] = [];
  analogChannelData: any[] = [];
  digitalChannel: any[] = [];
  digitalChannelData: any[] = [];
  analogData: any[] = [];
  digitalData: any[] = [];
  allChannels: any[] = [];

  operation: any[] = ["Add", "Merge", "Total"]

  waterMark: string = 'Select channels';
  fields: Object = { text: 'ChannelName', value: 'Id' }

  stationForm: FormGroup;
  Box: any;
  setDataOfAD: any;


  @ViewChild('sampleList2') sampleList2: MultiSelectComponent;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router , private popupService: PopupService,  private viewContainerRef: ViewContainerRef) {
    this.stationForm = fb.group({
      station: ['']
    })
  }


  selectedReportType: { channelType: string, operationType: string, channelType2: string, templateName: string } = {
    channelType: '',
    operationType: '',
    channelType2: '',
    templateName: ''
  };

  newTableData: any[] = [];

  selectAllStations: boolean = false;




  ReportForm!: FormGroup
  checkboxlist: any = ["checkbox1", "checkbox2", "checkbox3"]
  graphData: any = [
    {
      checkbox1: {
        analog: ["value1", "value2", "value3"],
        digital: ["value4", "value5", "value6"]
      }
    },
    {
      checkbox2: {
        analog: ["value7", "value8", "value9"],
        digital: ["value10", "value11", "value12"]
      }
    },
    {
      checkbox3: {
        analog: ["value13", "value14", "value15"],
        digital: ["value16", "value17", "value18"]
      }
    }
  ]

  ngOnInit() {
    this.getData();
    this.ReportForm = this.fb.group({
      templateName: [''],
      reportType: [''],
      reportName: [''],
      remark1: [''],
      remark2: [''],
      remark3: [''],
      autoSave: ["true"],
      autoMail: ["false"]
    })

    this.dataService.dataArray$.subscribe(data => {
      // console.log(data);
    })

  }



  selectedChannelData: any[] = [];
  channelEdited: { [key: string]: string } = {};
  OpeChannel: any[]=[];

  public onSelectionChange(args: any): void {

    this.sampleList2.dataSource = this.allChannels;
    this.sampleList2.refresh();
    this.selectedChannelData = [];
    this.OpeChannel = [];
    this.selectedChannels = args.value as { channel_number: string, data: number }[];

    this.analogChannel.forEach((analog: any) => {
      analog.forEach((ch: any) => {
        this.selectedChannels.forEach(element => {
          if (ch.channel_number == element) {
            this.selectedChannelData.push(ch);
            this.OpeChannel.push(ch.channel_number);
          }
        });
      });
    });
    this.digitalChannel.forEach((digital: any) => {
      digital.forEach((ch: any) => {
        this.selectedChannels.forEach(element => {
          if (ch.channel_number == element) {
            this.selectedChannelData.push(ch);
            this.OpeChannel.push(ch.channel_number);
          }
        });
      });
    });

    this.selectedChannelData.forEach(channel => {
      this.channelEdited[channel.channel_number] = channel.channel_number;
    });
    this.tableChannel = [];
    this.selectedChannelData.forEach(element => {
      this.tableChannel.push(element.channel_number);
    });
  }

  tableSelectedData: any;
  tableSelectedData2: any;

  onTableSelectionChange(args: ChangeEventArgs) {
    // Access the selected data from the args object
    this.tableSelectedData = args.value;
    this.tableSelectedData2 = this.tableChannel.filter(item => !this.tableSelectedData.includes(item));
    console.log('tableSelectedData2 :', this.tableSelectedData2);

  }

  addRow() {
    this.selectedChannelData.push({
      channel_number: '', // Initialize with empty values
      channelEdited: '', // Initialize with empty values
      isNewlyAdded: true, // Newly added row flag
      data: '' // Initialize with empty values
    });
  }


  ReportType = [
    { value: 'DR', viewValue: 'Data Report' },
    { value: 'GR', viewValue: 'Graph Report' },
  ];

  popUpMethod = [
    { value: 'ADD', viewValue: 'Add Data' },
    { value: 'merge', viewValue: 'Merge Collumn' },
    { value: 'SUM', viewValue: 'Total' },

  ]

  selected(event: MatSelectChange) {
    this.checkboxArray = this.checkboxlist
  }

  selectedCheckBox(event: MatCheckboxChange) {
    this.analogData = []
    this.digitalData = []
    this.graphData.forEach((element: any) => {
      if (Object.keys(element).includes(event.source.value)) {
        this.analogData.push(...element[event.source.value].analog);
        this.digitalData.push(...element[event.source.value].digital);
        return
      }
    });
  }

  selectedStations: string[] = [];
  selectedAnalogChannel: any[] = [];
  selectedDigitalChannel: any[] = [];

  onCheckboxChangeStation(event: any) {
    const station = event.source.value;
    if (event.checked) {
      this.selectedStations.push(station);
    } else {
      const index = this.selectedStations.indexOf(station);
      if (index >= 0) {
        this.selectedStations.splice(index, 1);
      }
    }
    // console.log(this.selectedStations);

  }

  onCheckboxChangeAnalog(event: any) {
    const station = event.source.value;
    if (event.checked) {
      this.selectedAnalogChannel.push(station);
      this.allChannels.push(station);
    } else {
      const index = this.selectedAnalogChannel.indexOf(station);
      if (index >= 0) {
        this.selectedAnalogChannel.splice(index, 1);
      }
      const allChannelsIndex = this.allChannels.indexOf(station);
      if (allChannelsIndex >= 0) {
        this.allChannels.splice(allChannelsIndex, 1);
      }
    }
  }


  onCheckboxChangeDigital(event: any) {
    const station = event.source.value;
    if (event.checked) {
      this.selectedDigitalChannel.push(station);
      this.allChannels.push(station);
    } else {
      const index = this.selectedDigitalChannel.indexOf(station);
      if (index >= 0) {
        this.selectedDigitalChannel.splice(index, 1);
      }
      const allChannelsIndex = this.allChannels.indexOf(station);
      if (allChannelsIndex >= 0) {
        this.allChannels.splice(allChannelsIndex, 1);
      }
    }
  }


  showValue() {
    this.digitalChannelData = [];
    this.analogChannelData = [];
    this.analogChannel = [];
    this.digitalChannel = [];
    this.dataService.getData().subscribe((res) => {
      this.data = res;
      this.data.forEach((e: any) => {

        this.selectedStations.forEach(element => {
          if (element == e.name) {
            this.analogChannel.push(e.analog_channels)
            this.digitalChannel.push(e.digital_channels)
          }
        });

      });
      this.analogChannel.forEach(element => {
        element.forEach((e: any) => {
          this.analogChannelData.push(e.channel_number);
        });
      });
      this.digitalChannel.forEach(element => {
        element.forEach((e: any) => {
          this.digitalChannelData.push(e.channel_number);
        });
      });
    })
  }

  // showData() {
  //   this.analogChannel.forEach(element => {
  //     element.forEach((e: any) => {
  //       this.selectedAnalogChannel.forEach((data) => {
  //         if (data == e.channel_number) {
  //           this.analogData.push(e);
  //         }
  //       });
  //     });
  //   });
  //   console.log(this.analogData);

  //   this.digitalChannel.forEach(element => {
  //     element.forEach((e: any) => {
  //       this.selectedDigitalChannel.forEach((data) => {
  //         if (data == e.channel_number) {
  //           this.digitalData.push(e);
  //         }
  //       });
  //     });
  //   });
  // }

  getData() {
    this.dataService.getData().subscribe((res) => {
      this.data = res;
      this.data.forEach((e: any) => {
        this.stationData.push(e.name);
      });
    })
  }

  tableChannel: any[]=[];

  onsubmit() {

    this.sampleList2.dataSource = this.allChannels;
    this.sampleList2.refresh();

    if (this.ReportForm.valid) {
      const formData = this.ReportForm.value;
      const combinedData = {
        ...formData,
        analogData: this.analogData,
        digitalData: this.digitalData
      };
      this.dataService.sendData(combinedData).subscribe(() => {
        this.router.navigate(['/report']);
        this.analogData = [];
        this.digitalData = [];

      }, (error) => {
        console.log("Error in update", error);
      });
    }

  }

  save() {
    if (
      this.selectedReportType.channelType &&
      this.selectedReportType.operationType &&
      this.selectedReportType.channelType2 &&
      this.selectedReportType.templateName
    ) {
      this.newTableData.push(this.selectedReportType);
      console.log('Selected Report Type:', this.selectedReportType);
      this.resetForm();
    } else {
      console.error('Please fill in all required fields.');
    }
  }

  resetForm() {
    this.selectedReportType = {
      channelType: '',
      operationType: '',
      channelType2: '',
      templateName: ''
    };
  }

  selectedValueFromChild: any

  onItemSelected(value: any) {
    this.selectedValueFromChild = value;
    console.log(this.selectedValueFromChild)
  }

   openPopup() {

    this.popupService.openModal(AddStationComponent, this.viewContainerRef);
  }

  openPopup2() {

    this.popupService.openModal(AddUserComponent, this.viewContainerRef);
  }

  openPopup3() {

    this.popupService.openModal(PermissionComponent, this.viewContainerRef);
  }

  openPopup4(){
    this.popupService.openModal(PermisiionTreeComponent, this.viewContainerRef);
  }

  openPopup5(){
    this.popupService.openModal(GridtreeCheckboxComponent, this.viewContainerRef);
  }

  openPopup6(){
    this.popupService.openModal(PermisiionTreeClientComponent, this.viewContainerRef);
  }



}

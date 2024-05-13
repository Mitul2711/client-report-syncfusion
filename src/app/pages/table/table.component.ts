import { Component, OnInit, ViewChild } from '@angular/core';
import { PageSettingsModel, ColumnModel } from '@syncfusion/ej2-angular-grids';
// import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { enableRipple } from '@syncfusion/ej2-base';
// import {HttpClient} from "@angular/common/http";
import {DataManager, ODataV4Adaptor, Query} from "@syncfusion/ej2-data"
import {DataService} from "../../service/data.service";

enableRipple(true);
//
enableRipple(true);
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  public param : Query= new Query().where('status', 'equal', 'Closed');

  public pageSettings: PageSettingsModel = {pageSize: 15};


  data :any []=[];



  columns: ColumnModel[] = [
    { field: 'StationName', headerText: 'Station Name', visible: true },
    { field: 'Date', headerText: 'Date', visible: true },
    { field: 'Time', headerText: 'Time', visible: true },
    { field: 'TagNo1_1', headerText: 'TagNo1_1 (Volts)', visible: true },
    { field: 'TagNo2_1', headerText: 'TagNo2_1 (Amps)', visible: true },
    { field: 'TagNo3_1', headerText: 'TagNo3_1 (Volts)', visible: true },
    { field: 'TagNo4_1', headerText: 'TagNo4_1 (Volts)', visible: true },
    { field: 'TagNo5_1', headerText: 'TagNo5_1 (DegC)', visible: true },
    { field: 'TagNo1_1-Digital', headerText: 'TagNo1_1', visible: true },
    { field: 'TagNo2_1-Digital', headerText: 'TagNo2_1', visible: true },
    { field: 'TagNo3_1-Digital', headerText: 'TagNo3_1', visible: true },
    { field: 'TagNo16_1-Digital', headerText: 'TagNo16_1', visible: true },
  ];



  contextMenuItems!: Object[];

  ngOnInit(): void {
    // this.data = this.datalist
   this.getData()
    this.contextMenuItems = ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending', 'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
      'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage', 'LastPage', 'NextPage', 'ColumnChooser'];
  }

  getData() {
    this.dataService.Tabledata().subscribe((res: any) => {
      this.data = res;
    })
  }
}

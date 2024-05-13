import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {DropDownTreeComponent} from '@syncfusion/ej2-angular-dropdowns'
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-ropdownlist',
  templateUrl: './ropdownlist.component.html',
  styleUrls: ['./ropdownlist.component.scss']
})
export class RopdownlistComponent implements OnInit
{
    @Input() typeofdata: string;
    @Output() selectedValue = new EventEmitter<string>();
  
    hierarchicalData: Object[] = [];
    stationData: string[] = [];
    data: any = null; 
    selectedItemId: any;
  
    fields: Object = { dataSource: [], };
  
    constructor(private dataService: DataService) { }
  
    ngOnInit(): void {
      if (this.typeofdata === "stationName") {
        this.onStation();
        console.log('Works');
      }
    }
  
    onStation() {
      this.dataService.getData().subscribe((res) => {
        this.data = res;
        this.data.forEach((e: any) => {
          this.stationData.push(e.name);
        });
        this.fields = { dataSource: this.data ,value: 'id', text: 'name' };
      });
    }


    // onItemSelected(event: any) {
    //   this.selectedItemId = event; 
    //   this.selectedValue.emit(this.selectedItemId); 
    //   console.log(this.selectedItemId);
      
    // }
    onItemSelected(event: any) {
      if (event && event.itemData && event.itemData.text) {
        this.selectedItemId = event.itemData.text;
        this.selectedValue.emit(this.selectedItemId);
      }
    }
    
  }
import {Component, OnInit} from '@angular/core';
import {sampleData} from "./data";
import {RowDataBoundEventArgs} from "@syncfusion/ej2-angular-grids";
import {PopupService} from "../../service/popup.service";

@Component({
  selector: 'app-permisiion-tree',
  templateUrl: './permisiion-tree.component.html',
  styleUrls: ['./permisiion-tree.component.scss']
})
export class PermisiionTreeComponent implements OnInit {

  public selectionSettings: any = { type: 'Multiple' };


  constructor(private dilogopenservcie: PopupService){
  }

  public data?: Object[];

  ngOnInit(): void {
    this.data = sampleData;


  }

  onSubmit() {
    console.log('Ok');

  }

  onCancel() {
    console.log("cancel")
    this.dilogopenservcie.cancel()
  }

  onRowDataBound(args: RowDataBoundEventArgs): void {
    const row: HTMLElement | null = args.row as HTMLElement | null;
    const data = args.data as any;

    if (row && data && data.parentItem) {
      row.style.backgroundColor = '#FFFWFC';
    }
  }


  private rowMethod(args: any): void {
    // Your rowMethod logic here
    // console.log("Row Method");
  }

  public rowSelected(args: any): void {
    // this.rowMethod(args);
    // console.log("Row Selected");

  }

  public rowDeselected(args: any): void {
    // this.rowMethod(args);
    console.log("Row Data:", args.data);
    // console.log("Row Deselected");

  }

  // public checkboxChange(args: any): void {
  //   // Your checkboxChange logic here
  //   console.log("Row Data:", args.rowData);
  //   console.log("Checkbox Change");
  //
  //   const isChecked = !args.checked;
  //   const rowData = !args.rowData;
  //
  //   // Update all fields of the row data to the checked status
  //   Object.keys(rowData).forEach(key => {
  //     rowData[key] = isChecked;
  //   });
  //
  //   // Log the updated row data
  //   console.log("Updated Row Data:", rowData);
  // }


  public checkboxChange(args: any): void {

    console.log("Row Data:", args.rowData);
    console.log("Checkbox Change");

    const isChecked = args.checked;
    const rowData = args.rowData;

    // Find the index of the changed row in the data array
    const rowIndex = this.data.findIndex(item => item === rowData);

    // Update all fields of the row data to the checked status
    if (rowIndex !== -1) {
      Object.keys(rowData).forEach(key => {
        this.data[rowIndex][key] = isChecked;
        this.data[key] = isChecked;
      });

      // Log the updated row data
      console.log("Updated Row Data:", this.data[rowIndex]);
    } else {
      console.error("Row data not found in the data array.");
    }


  }


  template = '<div class="arrow"></div>';
}

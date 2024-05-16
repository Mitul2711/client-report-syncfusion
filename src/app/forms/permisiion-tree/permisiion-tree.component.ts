import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {sampleData} from "./data";
import {RowDataBoundEventArgs} from "@syncfusion/ej2-angular-grids";
import {PopupService} from "../../service/popup.service";
import {findChildrenRecords} from "@syncfusion/ej2-angular-treegrid";

@Component({
  selector: 'app-permisiion-tree',
  templateUrl: './permisiion-tree.component.html',
  styleUrls: ['./permisiion-tree.component.scss']
})
export class PermisiionTreeComponent implements OnInit {

  public selectionSettings: any = { type: 'Multiple' };
  public toolbar: string[] = ['Search'];


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

  public checkboxChange(args: any): void {
    // Your checkboxChange logic here
    console.log("Row Data:", args.rowData);
    console.log("Checkbox Change");

  }


  template = '<div class="arrow"></div>';
}

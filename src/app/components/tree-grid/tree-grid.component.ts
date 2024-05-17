import { Component, OnInit } from '@angular/core';
import { sampleData } from '../datasource';
import { RowDataBoundEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-tree-grid',
  templateUrl: './tree-grid.component.html',
  styleUrls: ['./tree-grid.component.scss']
})
export class TreeGridComponent implements OnInit {
  public data?: Object[];

  ngOnInit(): void {
    this.data = sampleData;
  }

  public onRowDataBound(args: RowDataBoundEventArgs): void {
    const row: HTMLElement | null = args.row as HTMLElement | null;
    const data = args.data as any;

    // Check if the row and data are defined and if the row is a child row
    if (row && data && data.parentItem) {
      row.style.backgroundColor = '#D3D3D3'; // Set your desired background color
    }
  }
}

import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { sampleData, sampleData2 } from './data';
import { ActionEventArgs, RowDataBoundEventArgs, RowDeselectEventArgs, RowSelectEventArgs } from '@syncfusion/ej2-grids';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { PopupService } from "../../service/popup.service";

@Component({
  selector: 'app-permisiion-tree-client',
  templateUrl: './permisiion-tree-client.component.html',
  styleUrls: ['./permisiion-tree-client.component.scss']
})
export class PermisiionTreeClientComponent implements OnInit {

  fieldData: any;
  data: any[];
  dynamicColumns: any[] = [];
  editSettings: any;
  toolbar: String[];

  headerText: { text: string }[] = [
    { text: "Feature Rights" },
    { text: "Field Rights" }
  ];

  @ViewChild('treegrid', { static: true }) treegrid!: TreeGridComponent;

  public selectionOptions?: SelectionSettingsModel;
  @ViewChild('grid', { static: false }) grid: GridComponent;

  constructor(private modelDialogService: PopupService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.data = sampleData;
    this.fieldData = sampleData2;

    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbar = ['Update', 'Cancel'];
    this.selectionOptions = {
      cellSelectionMode: 'Box',
      type: 'Multiple',
      mode: 'Cell',
    };
  }

  onActionComplete(args: ActionEventArgs): void {
    if (args.requestType === 'save') {
      console.log(args.data);
    }
  }

  onSubmit() {
    console.log('Ok');
  }

  onCancel() {
    this.modelDialogService.cancel();
  }

  onRowDataBound(args: RowDataBoundEventArgs): void {
    const row: HTMLElement | null = args.row as HTMLElement | null;
    const data = args.data as any;

    if (row && data && data.parentItem) {
      row.style.backgroundColor = '#FFFEFC';
    }
  }

  template = '<div class="arrow"></div>';


  public rowSelected(args: any): void {
    // this.rowMethod(args);
    console.log("Row Selected:", args.data);

  }

  public rowDeselected(args: any): void {
    // this.rowMethod(args);
    console.log("Row Des Data:", args.data);
    // console.log("Row Deselected");

  }

  checkboxChange(args: any): void {
    console.log(args)

    this.checkboxState[args.rowData.FeatureId] = args.checked;


    const isChecked = args.checked;
    const featureId = args.rowData.FeatureId;
    const ParentPage = args.rowData.ParentPage;
    const ChildPage = args.rowData.ChildPage;
    const ParentId = args.rowData.ParentId;

    console.log(ParentId)

    if (ParentPage && !ChildPage) {
      this.data = this.data || [];
      let updatedData = this.updateFeaturePermissions(this.data, featureId, isChecked);
      if (updatedData) {
        this.data = updatedData;
        this.updateCheckboxState(this.data);
      }
    }if (!ParentPage && ChildPage) {
      this.data = this.data || [];
      let updatedData = this.updateFeaturePermissions(this.data, featureId, isChecked);
      if (updatedData) {
        this.data = updatedData;
        this.updateCheckboxState(this.data);
      }
    }if (args.name === 'checkboxChange') {
      // If a user checks the checkbox associated with a feature name
      console.log(" ALl Selected")
    }

  }

  checkboxState: { [key: string]: boolean } = {};

  updateCheckboxState(data: any[]): void {
    data.forEach((item: any) => {
      this.checkboxState[item.FeatureId] = item.View; // Assuming FeatureId is unique
    });
  }






  // updateFeaturePermissions(data: any[], featureId: number, isChecked: boolean): any[] | null {
  //   return data.map((item: any) => {
  //     if (item.FeatureId === featureId) {
  //       // Update the parent item
  //       item.View = isChecked;
  //       item.Add = isChecked;
  //       item.Edit = isChecked;
  //       item.Active = isChecked;
  //       item.Delete = isChecked;
  //       item.Export = isChecked;
  //
  //       // Recursively update child items
  //       if (item.subtasks) {
  //         item.subtasks = this.updateSubtaskPermissions(item.subtasks, isChecked);
  //       }
  //     } else if (item.subtasks) {
  //       // If the item has subtasks, recursively update them
  //       item.subtasks = this.updateSubtaskPermissions(item.subtasks, isChecked);
  //     }
  //     return item;
  //   });
  // }
  updateFeaturePermissions(data: any[], featureId: number, isChecked: boolean): any[] | null {
    return data.map((item: any) => {
      if (item.FeatureId === featureId || item.ParentId === featureId) {
        // Update the current item
        item.View = isChecked;
        item.Add = isChecked;
        item.Edit = isChecked;
        item.Active = isChecked;
        item.Delete = isChecked;
        item.Export = isChecked;

        // Recursively update child items
        if (item.subtasks) {
          item.subtasks = this.updateFeaturePermissions(item.subtasks, item.FeatureId, isChecked);
        }
      } else if (item.subtasks) {
        // If the item has subtasks, recursively update them
        item.subtasks = this.updateFeaturePermissions(item.subtasks, featureId, isChecked);
      }
      return item;
    });
  }




  updateSubtaskPermissions(subtasks: any[], isChecked: boolean): any[] {
    return subtasks.map((subtask: any) => {
      // Update each subtask with the same state as the parent
      subtask.View = isChecked;
      subtask.Add = isChecked;
      subtask.Edit = isChecked;
      subtask.Active = isChecked;
      subtask.Delete = isChecked;
      subtask.Export = isChecked;

      // Recursively update nested subtasks if available
      if (subtask.subtasks) {
        subtask.subtasks = this.updateSubtaskPermissions(subtask.subtasks, isChecked);
      }
      return subtask;
    });
  }



}

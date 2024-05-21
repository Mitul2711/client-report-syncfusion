import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { sampleData, sampleData2 } from './data';
import { ActionEventArgs, RowDataBoundEventArgs, RowDeselectEventArgs, RowSelectEventArgs } from '@syncfusion/ej2-grids';
import { GridComponent, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import {PopupService} from "../../service/popup.service";


@Component({
  selector: 'app-permisiion-tree-client-shubham',
  templateUrl: './permisiion-tree-client-shubham.component.html',
  styleUrls: ['./permisiion-tree-client-shubham.component.scss']
})
export class PermisiionTreeClientShubhamComponent implements OnInit {

  fieldData: any;
  data: any[];
  dynamicColumns: any[] = [];
  editSettings: any;
  toolbar: String[];

  @ViewChild('treegrid', { static: true }) treegrid!: TreeGridComponent;

  public selectionOptions?: SelectionSettingsModel;
  @ViewChild('grid', { static: false }) grid: GridComponent;
  constructor(private modelDialogService: PopupService, private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.data = sampleData
    this.fieldData = sampleData2

    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbar = ['Update', 'Cancel'];
    this.selectionOptions = {
      cellSelectionMode: 'Box',
      type: 'Multiple',
      mode: 'Cell',
    };
    console.log(this.selectionOptions)

  }

  private rowMethod(args: any): void {

    console.log("Row Method");
  }

  rowSelected(args: any): void {
    // this.rowMethod(args);
    console.log("Row Selected");

  }
  rowDeselected(args: any): void {
    // this.rowMethod(args);
    console.log("Row Deselected");

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


  headerText: { text: string }[] = [
    { text: "Feature Rights" },
    { text: "Field Rights" }
  ];

  onRowDataBound(args: RowDataBoundEventArgs): void {
    const row: HTMLElement | null = args.row as HTMLElement | null;
    const data = args.data as any;

    if (row && data && data.parentItem) {
      row.style.backgroundColor = '#FFFEFC';
    }
  }

  template = '<div class="arrow"></div>';



  // checkboxChange(args: any): void {
  //   debugger
  //   const isChecked = args.checked;
  //   const featureId = args.rowData.FeatureId;
  //   const parentId = args.rowData.ParentId
  //   const featureName = args.rowData?.FeatureName
  //   const childParentId = args.rowData?.parentItem?.FeatureId
  //   console.log(args);
  //   this.data = this.data || [];
  //
  //
  //   if (args.rowData.subtasks) {
  //     let updatedData = this.updateFeaturePermissions(this.data, featureId, isChecked, parentId);
  //     if (updatedData) {
  //       this.data = updatedData;
  //     }
  //   } else {
  //     this.updateIndivisualPermissions(this.data, childParentId, featureName, isChecked);
  //
  //   }
  //
  // }
  //
  // updateFeaturePermissions(data: any[], featureId: number, isChecked: boolean, parentId: number): any[] | null {
  //   return data.map((item: any) => {
  //     if (item.FeatureId === featureId) {
  //       item.View = isChecked;
  //       item.Add = isChecked;
  //       item.Edit = isChecked;
  //       item.Active = isChecked;
  //       item.Delete = isChecked;
  //       item.Export = isChecked;
  //       if (item.subtasks) {
  //         debugger
  //         item.subtasks = this.updateSubtaskPermissions(item.subtasks, featureId, parentId, isChecked);
  //       }
  //     }
  //     // else if (item.subtasks) {
  //     //   item.subtasks = this.updateSubtaskPermissions(item.subtasks, featureId, parentId, isChecked);
  //     // }
  //     return item;
  //   });
  // }
  //
  // updateSubtaskPermissions(subtasks: any[], featureId: number, parentId: number, isChecked: boolean): any[] {
  //   return subtasks.map((subtask: any) => {
  //     if (subtask.ParentId === parentId) {
  //       subtask.View = isChecked;
  //       subtask.Add = isChecked;
  //       subtask.Edit = isChecked;
  //       subtask.Active = isChecked;
  //       subtask.Delete = isChecked;
  //       subtask.Export = isChecked;
  //     }
  //     return subtask;
  //   });
  // }
  //
  // updateIndivisualPermissions(data: any[], childParentId: number, featureName: any, isChecked: boolean): void {
  //   const parentModule = data.find((item: any) => item.FeatureId === childParentId);
  //
  //   if (parentModule && parentModule.subtasks) {
  //     const subtaskToUpdate = parentModule.subtasks.find((subtask: any) => subtask.FeatureName === featureName);
  //
  //     if (subtaskToUpdate) {
  //       subtaskToUpdate.View = isChecked;
  //       subtaskToUpdate.Add = isChecked;
  //       subtaskToUpdate.Edit = isChecked;
  //       subtaskToUpdate.Active = isChecked;
  //       subtaskToUpdate.Delete = isChecked;
  //       subtaskToUpdate.Export = isChecked;
  //     }
  //   }
  //
  //   this.data = [...this.data];
  // }

  checkboxChange(args: any): void {
    const isChecked = args.checked;
    const featureId = args.rowData.FeatureId;
    const parentId = args.rowData.ParentId;
    const featureName = args.rowData?.FeatureName;
    const childParentId = args.rowData?.parentItem?.FeatureId;

    this.data = this.data || [];

    // If the row has subtasks, update feature permissions for the parent item
    if (args.rowData.subtasks) {
      this.updateFeaturePermissions(this.data, featureId, isChecked, parentId);
    } else {
      // If the row does not have subtasks, update individual permissions
      this.updateIndividualPermissions(this.data, childParentId, featureName, isChecked);
    }
  }

  updateFeaturePermissions(data: any[], featureId: number, isChecked: boolean, parentId: number): void {
    data.forEach((item: any) => {
      if (item.FeatureId === featureId) {
        // Update permissions for the parent item
        item.View = isChecked;
        item.Add = isChecked;
        item.Edit = isChecked;
        item.Active = isChecked;
        item.Delete = isChecked;
        item.Export = isChecked;

        // Recursively update permissions for child items
        if (item.subtasks) {
          this.updateSubtaskPermissions(item.subtasks, featureId, parentId, isChecked);
        }
      }
    });
  }

  updateSubtaskPermissions(subtasks: any[], featureId: number, parentId: number, isChecked: boolean): void {
    subtasks.forEach((subtask: any) => {
      if (subtask.ParentId === parentId) {
        // Update permissions for the child item
        subtask.View = isChecked;
        subtask.Add = isChecked;
        subtask.Edit = isChecked;
        subtask.Active = isChecked;
        subtask.Delete = isChecked;
        subtask.Export = isChecked;

        // Recursively update permissions for nested subtasks
        if (subtask.subtasks) {
          this.updateSubtaskPermissions(subtask.subtasks, featureId, parentId, isChecked);
        }
      }
    });
  }

  updateIndividualPermissions(data: any[], childParentId: number, featureName: string, isChecked: boolean): void {
    const parentModule = data.find((item: any) => item.FeatureId === childParentId);

    if (parentModule && parentModule.subtasks) {
      const subtaskToUpdate = parentModule.subtasks.find((subtask: any) => subtask.FeatureName === featureName);

      if (subtaskToUpdate) {
        // Update permissions for the individual item
        subtaskToUpdate.View = isChecked;
        subtaskToUpdate.Add = isChecked;
        subtaskToUpdate.Edit = isChecked;
        subtaskToUpdate.Active = isChecked;
        subtaskToUpdate.Delete = isChecked;
        subtaskToUpdate.Export = isChecked;
      }
    }

    this.data = [...this.data];
  }


}

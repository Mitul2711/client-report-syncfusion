import { Component, OnInit } from '@angular/core';
import { sampleData } from './data';
import {RowDataBoundEventArgs} from "@syncfusion/ej2-angular-grids";

  interface Feature {
  RoleId: number;
  Code: any;
  FeatureId: number;
  FeatureName: string;
  ProgrammerCode: any;
  Controller: any;
  Action: any;
  Url: any;
  ParentId: number;
  SortIndex: number;
  IsDisplayForRoleRights: boolean;
  View: boolean;
  Add: boolean;
  Edit: boolean;
  Active: boolean;
  Delete: boolean;
  Export: boolean;
  IsHeader: boolean;
  FeatureCode: number;
  subtasks?: Feature[];
}

@Component({
  selector: 'app-gridtree-checkbox',
  templateUrl: './gridtree-checkbox.component.html',
  styleUrls: ['./gridtree-checkbox.component.scss']
})
export class GridtreeCheckboxComponent implements OnInit {
   data: Feature[] = [];
  allChecked: boolean = false;


  constructor() {}

  ngOnInit(): void {
    this.data = sampleData as Feature[];
  }

  onSubmit() {
    console.log('Save functionality');
    // Implement your save functionality here
  }

  onCancel() {
    console.log('Cancel functionality');
    // Implement your cancel functionality here
  }

  onCheckboxChange(feature: Feature, value: any): void {
    feature.View = value;
    feature.Add = value;
    feature.Edit = value;
    feature.Active = value;
    feature.Delete = value;
    feature.Export = value;

    if (feature.subtasks && feature.subtasks.length > 0) {
      feature.subtasks.forEach((child) => {
        this.updateChildCheckbox(child, value);
      });
    }

    if (feature.ParentId !== 0) {
      this.updateParentCheckbox(feature);
    }
  }

  private updateChildCheckbox(feature: Feature, value: boolean): void {
    feature.View = value;
    feature.Add = value;
    feature.Edit = value;
    feature.Active = value;
    feature.Delete = value;
    feature.Export = value;

    if (feature.subtasks && feature.subtasks.length > 0) {
      feature.subtasks.forEach((child) => {
        this.updateChildCheckbox(child, value);
      });
    }
  }

  private updateParentCheckbox(feature: Feature): void {
    const parent = this.findParent(feature.ParentId);
    if (parent) {
      const allChecked = parent.subtasks?.every(child => child.View && child.Add && child.Edit && child.Active && child.Delete && child.Export);
      parent.View = allChecked || false;
      parent.Add = allChecked || false;
      parent.Edit = allChecked || false;
      parent.Active = allChecked || false;
      parent.Delete = allChecked || false;
      parent.Export = allChecked || false;
      this.updateParentCheckbox(parent);
    }
  }

  private findParent(parentId: number): Feature | undefined {
    for (const feature of this.data) {
      if (feature.FeatureId === parentId) {
        return feature;
      }
      const parent = this.findParentRecursive(feature.subtasks, parentId);
      if (parent) {
        return parent;
      }
    }
    return undefined;
  }

  private findParentRecursive(subtasks: Feature[] | undefined, parentId: number): Feature | undefined {
    if (!subtasks) {
      return undefined;
    }
    for (const feature of subtasks) {
      if (feature.FeatureId === parentId) {
        return feature;
      }
      const parent = this.findParentRecursive(feature.subtasks, parentId);
      if (parent) {
        return parent;
      }
    }
    return undefined;
  }



  onRowDataBound(args: RowDataBoundEventArgs): void {
    const row: HTMLElement | null = args.row as HTMLElement | null;
    const data = args.data as any;

    if (row && data && data.parentItem) {
      row.style.backgroundColor = '#FFFWFC';
    }
  }

  onAllCheckboxChange(checked: boolean): void {
    // Set the checked state of all other checkboxes based on the state of the "All" checkbox
    this.data.forEach(feature => {
      feature.View = checked;
      feature.Add = checked;
      feature.Edit = checked;
      feature.Active = checked;
      feature.Delete = checked;
      feature.Export = checked;
    });
  }
}

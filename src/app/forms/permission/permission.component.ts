import { Component, OnInit, ViewChild } from '@angular/core';
import { CheckBoxComponent } from '@syncfusion/ej2-angular-buttons';
import { ActionEventArgs, EditSettingsModel, GridComponent, GroupSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-grids';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  @ViewChild('grid') public grid: GridComponent;
  @ViewChild('checkbox') public checkbox: CheckBoxComponent;


  constructor(private dataService: DataService) {}

  featureData: any;
  fieldData: any;
  dynamicColumns: any[] = [];
  check: boolean = false;
  data: Object[];
  editSettings: any;
  toolbar: string[];


  ngOnInit(): void {
    this.getData(); // Assuming this method fetches your data
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' };
    this.toolbar = ['Edit', 'Update', 'Cancel'];
  }

  onActionComplete(args: ActionEventArgs): void {
    if (args.requestType === 'save') {
      console.log(args.data);
    }
  }

  onChange(event) {
    this.check = event.checked;
  }

  // getData() {
  //   this.dataService.getFeatureData().subscribe(res => {
  //     this.featureData = res;      
  //   });
  //   this.dataService.getFieldData().subscribe(res => {
  //     this.fieldData = res;
  //   })
  // }
  getData() {
    this.featureData = [
      {
        "RoleId": 5,
        "Code": null,
        "FeatureId": 7,
        "FeatureName": "Company Master",
        "ProgrammerCode": null,
        "Controller": null,
        "Action": null,
        "Url": null,
        "ParentId": 0,
        "SortIndex": 0,
        "IsDisplayForRoleRights": false,
        "View": true,
        "Add": false,
        "Edit": false,
        "Active": true,
        "Delete": false,
        "Export": false,
        "IsHeader": false,
        "FeatureCode": 0
      },
      {
        "RoleId": 5,
        "Code": null,
        "FeatureId": 8,
        "FeatureName": "Zone Details",
        "ProgrammerCode": null,
        "Controller": null,
        "Action": null,
        "Url": null,
        "ParentId": 0,
        "SortIndex": 0,
        "IsDisplayForRoleRights": false,
        "View": false,
        "Add": false,
        "Edit": false,
        "Active": false,
        "Delete": true,
        "Export": false,
        "IsHeader": false,
        "FeatureCode": 0
      },
      {
        "RoleId": 5,
        "Code": null,
        "FeatureId": 3111,
        "FeatureName": "Depolarisation",
        "ProgrammerCode": null,
        "Controller": null,
        "Action": null,
        "Url": null,
        "ParentId": 0,
        "SortIndex": 0,
        "IsDisplayForRoleRights": false,
        "View": false,
        "Add": false,
        "Edit": true,
        "Active": false,
        "Delete": false,
        "Export": false,
        "IsHeader": true,
        "FeatureCode": 0
      },
      {
        "RoleId": 5,
        "Code": null,
        "FeatureId": 3120,
        "FeatureName": "Set Depol",
        "ProgrammerCode": null,
        "Controller": null,
        "Action": null,
        "Url": null,
        "ParentId": 0,
        "SortIndex": 0,
        "IsDisplayForRoleRights": false,
        "View": true,
        "Add": false,
        "Edit": false,
        "Active": true,
        "Delete": false,
        "Export": true,
        "IsHeader": false,
        "FeatureCode": 0
      },
      {
        "RoleId": 5,
        "Code": null,
        "FeatureId": 3121,
        "FeatureName": "Create Depol Group",
        "ProgrammerCode": null,
        "Controller": null,
        "Action": null,
        "Url": null,
        "ParentId": 0,
        "SortIndex": 0,
        "IsDisplayForRoleRights": false,
        "View": false,
        "Add": false,
        "Edit": false,
        "Active": false,
        "Delete": false,
        "Export": true,
        "IsHeader": false,
        "FeatureCode": 0
      }
    ];

    this.fieldData = [
      {
        "RoleId": 5,
        "FieldId": 37,
        "FieldName": "GSMSignalAndRegistration",
        "DisplayName": "Are you sure to show GSM Signal Strength and Registration?",
        "Edit": false
      },
      {
        "RoleId": 5,
        "FieldId": 14,
        "FieldName": "IsAllowAcknowledgeMultiple",
        "DisplayName": "Are you sure to allow this role to set Acknowledge Alarm?",
        "Edit": true
      },
      {
        "RoleId": 5,
        "FieldId": 35,
        "FieldName": "IsAllowAddDeleteDeviceOnOff",
        "DisplayName": "Are you sure to allow user to add/delete device in device On/Off Popup ?",
        "Edit": true
      },
      {
        "RoleId": 5,
        "FieldId": 1,
        "FieldName": "IsAllowAutoEmail",
        "DisplayName": "Are you sure to allow this role to access auto email in report template?NA",
        "Edit": true
      }

    ];
  }

  public headerText: Object = [{ text: "Feature Rights" },
  { text: "Field Rights" }];

}

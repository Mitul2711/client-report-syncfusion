import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.scss']
})
export class PermissionComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  featureData: any;
  fieldData: any;
  dynamicColumns: any[] = [];

  ngOnInit(): void {
    
    this.getData();
    // this.fetchData();
  }

 
  onAllCheckboxChange(checkbox: any, data: any, event: any) {
    if (event.checked) {
      data.View = true;
      data.Add = true;
      data.Edit = true;
      data.Active = true;
      data.Delete = true;
      data.Export = true;
    } else {
      data.View = false;
      data.Add = false;
      data.Edit = false;
      data.Active = false;
      data.Delete = false;
      data.Export = false;
    }
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

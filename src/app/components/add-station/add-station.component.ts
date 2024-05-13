import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import { DataService } from 'src/app/service/data.service';
import { PopupService } from 'src/app/service/popup.service';



@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.scss']
})
export class AddStationComponent implements OnInit {

  // @ViewChild('toggleBtn')
  // public toggleBtn: ButtonComponent;

  addStation!: FormGroup

  StationNames: string = "stationName";
  selectedValueFromChild: any;

  constructor(private fb: FormBuilder, private modelDialogService: PopupService, private route: Router, private dataService: DataService) {

    this.addStation = fb.group({
      stationId: ['', Validators.required],
      stationName: [''],
      channelDes: [''],
      area: [''],
      truRating: [''],
      backColor: [''],
      foreColor: [''],
      notes: ['']
    })

  }

  ngOnInit(): void {
      
  }


  onSubmit() {
    // this.dataService.sendDataFromPopup(this.addStation.value);
    console.log(this.addStation.value)
  }

  onCancel(){
    console.log("cancel");
    this.modelDialogService.cancel();
  }

  onItemSelected(value: any) {
    this.selectedValueFromChild = value;
    console.log(this.selectedValueFromChild)
  }

//   btnClick() {
//     if (this.toggleBtn.element.classList.contains('e-active')) {
//         this.toggleBtn.content = 'Play';
//         this.toggleBtn.iconCss = 'e-btn-sb-icons e-play-icon';
//     } else {
//         this.toggleBtn.content = 'Pause';
//         this.toggleBtn.iconCss = 'e-btn-sb-icons e-pause-icon';
//     }
// }

}

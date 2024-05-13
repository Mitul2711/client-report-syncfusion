import { Component, OnInit, ViewChild } from '@angular/core';
import { RemovingEventArgs, UploaderComponent } from '@syncfusion/ej2-angular-inputs';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  data = ["Admin", "Super Admin", "User"];

  constructor() {}

  ngOnInit(): void {
    const form1 = document.querySelector('.form-1') as HTMLElement;
    const form2 = document.querySelector('.form-2') as HTMLElement;
    const downArrow = document.querySelector('.down') as HTMLElement;
    const sideArrow= document.querySelector('.side') as HTMLElement;
    const downArrow2= document.querySelector('.down2') as HTMLElement;
    const sideArrow2= document.querySelector('.side2') as HTMLElement;
    const prevButton = document.querySelector('.prevButton') as HTMLElement;
    const nextButton = document.querySelector('.nextButton') as HTMLElement;

    prevButton.addEventListener('click', () => {
      form2.style.display = 'none'
      form1.style.display = 'block';
      downArrow2.style.display = 'none'
      sideArrow2.style.display = 'block'
      downArrow.style.display = 'block'
      sideArrow.style.display = 'none'
    });
    nextButton.addEventListener('click', () => {
      form2.style.display = 'block'
      form1.style.display = 'none';
      downArrow.style.display = 'none'
      sideArrow.style.display = 'block'
      downArrow2.style.display = 'block'
      sideArrow2.style.display = 'none'
    });
  }

  // image code

  @ViewChild('chunkupload') chunkupload: UploaderComponent;

  isInteraction: boolean = false;

  public path: Object = {
    saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove',
    chunkSize: 500000
  };

  public dropElement: HTMLElement = document.getElementsByClassName('control-section')[0] as HTMLElement;

  public onPausing(args: any): void {
    if (args.event !== null && !navigator.onLine) {
      this.isInteraction = true;
    } else {
      this.isInteraction = false;
    }
  }
  // to update flag variable value for automatic pause and resume
  public onResuming(args: any): void {
    if (args.event !== null && !navigator.onLine) {
      this.isInteraction = true;
    } else {
      this.isInteraction = false;
    }
  }

  onFileRemove(args: any): void {
    args.postRawFile = false;
  }

  public onBeforefailure(args: any): void {
    let proxy: any = this;
    args.cancel = !this.isInteraction;
    /* tslint:disable */
    // interval to check network availability on every 500 milliseconds
    let clearTimeInterval: any = setInterval(() => {
      if (navigator.onLine && !isNullOrUndefined(proxy.chunkupload.filesData[0]) && proxy.chunkupload.filesData[0].statusCode == 4) {
        proxy.chunkupload.resume(proxy.chunkupload.filesData);
        clearSetInterval();
      } else {
        if (!proxy.isInteraction && !isNullOrUndefined(proxy.chunkupload.filesData[0]) && proxy.chunkupload.filesData[0].statusCode == 3) {
          proxy.chunkupload.pause(proxy.chunkupload.filesData);
        }
      }
    }, 500);
    // clear Interval after when network is available.
    function clearSetInterval(): void {
      clearInterval(clearTimeInterval);
    }
  }

  //



}

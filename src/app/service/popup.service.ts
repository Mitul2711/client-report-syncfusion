// import { Injectable, ViewContainerRef } from '@angular/core';
// import { DialogUtility } from '@syncfusion/ej2-angular-popups';
//
//
//
// @Injectable({ providedIn: 'any' })
// export class PopupService {
//     dialogInstance: any
//     componentRef: any;
//     constructor() { }
//
//     openModal<T>(component: any, viewContainerRef: ViewContainerRef) {
//         this.componentRef = viewContainerRef.createComponent(component);
//         this.dialogInstance = DialogUtility.confirm({
//             content: this.componentRef.location.nativeElement,
//             showCloseIcon: true,
//             closeOnEscape: true,
//             animationSettings: { effect: 'Zoom' },
//             okButton: {
//                 cssClass: 'hidden-button'
//             },
//             cancelButton: {
//                 cssClass: 'hidden-button'
//             }
//         });
//         this.dialogInstance.beforeOpen = () => {
//         };
//         this.dialogInstance.close = () => {
//             this.componentRef.destroy();
//         };
//     }
//
//     cancel() {
//         this.componentRef.destroy();
//         this.dialogInstance.destroy();
//     }
//
// }

import { Injectable, ViewContainerRef } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-angular-popups';

@Injectable({ providedIn: 'any' })
export class PopupService {
  dialogInstance: any;
  componentRef: any;
  constructor() { }

  openModal<T>(component: any, viewContainerRef: ViewContainerRef) {
    this.componentRef = viewContainerRef.createComponent(component);
    const contentElement = this.componentRef.location.nativeElement;

    // Calculate the width of the content (table) and set the dialog width
    const contentWidth = contentElement.offsetWidth; // Calculate the content width here
    const dialogWidth = `${contentWidth}px`; // Set the dialog width based on content width

    this.dialogInstance = DialogUtility.confirm({
      content: contentElement,
      showCloseIcon: true,
      closeOnEscape: true,
      animationSettings: { effect: 'Zoom' },
      okButton: {
        cssClass: 'hidden-button'
      },
      cancelButton: {
        cssClass: 'hidden-button'
      },
      width: dialogWidth // Set the dialog width dynamically
    });

    this.dialogInstance.beforeOpen = () => {
      // Optionally, you can perform additional actions before the dialog is opened
    };

    this.dialogInstance.close = () => {
      this.componentRef.destroy();
    };
  }

  cancel() {
    this.componentRef.destroy();
    this.dialogInstance.destroy();
  }
}

import { Injectable } from '@angular/core';
import { Dialog } from '@syncfusion/ej2-popups';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  private dialogObj: Dialog;

  constructor() {
    // Initialize Dialog
    this.dialogObj = new Dialog({
      // Set dialog properties
      // You can set properties like width, height, target, etc. as needed
      width: '400px',
      height: '200px',
      target: document.getElementById('container'), // Set the target element where dialog will be appended
      buttons: [
        // Define buttons for the dialog
        {
          click: this.closeDialog.bind(this), // Bind click event to closeDialog method
          buttonModel: { content: 'Close', isPrimary: true } // Close button
        }
      ]
    });
  }

  // Method to open the dialog
  public openDialog(): void {
    this.dialogObj.show();
  }

  // Method to close the dialog
  public closeDialog(): void {
    this.dialogObj.hide();
  }
}

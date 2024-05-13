import { Component, ViewChild } from '@angular/core';
import { content } from '@syncfusion/ej2-angular-grids';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { EmitType } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent {

  @ViewChild('dialogComponent') dialogObject: DialogComponent
  public closeIcon: boolean = true;

  public hideDialog: EmitType<object> = () => {
    this.dialogObject.hide();
  }

  public dialogBtn: Object = [
    {
      'click': this.hideDialog.bind(this),
      buttonModel: {
        content: 'Cancel'
      }
    }
  ]

}

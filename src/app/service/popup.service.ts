import { Injectable, ViewContainerRef } from '@angular/core';
import { DialogUtility } from '@syncfusion/ej2-angular-popups';



@Injectable({ providedIn: 'any' })
export class PopupService {
    dialogInstance: any
    componentRef: any;
    constructor() { }

    openModal<T>(component: any, viewContainerRef: ViewContainerRef) {
        this.componentRef = viewContainerRef.createComponent(component);
        this.dialogInstance = DialogUtility.confirm({
            content: this.componentRef.location.nativeElement,
            showCloseIcon: true,
            closeOnEscape: true,
            animationSettings: { effect: 'Zoom' },
            okButton: {
                cssClass: 'hidden-button' 
            },
            cancelButton: {
                cssClass: 'hidden-button'
            }
        });
        this.dialogInstance.beforeOpen = () => {
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
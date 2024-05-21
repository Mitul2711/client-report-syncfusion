import { Component, OnInit } from '@angular/core';
import {sampleData} from "./data";

@Component({
  selector: 'app-html-tree-table',
  templateUrl: './html-tree-table.component.html',
  styleUrls: ['./html-tree-table.component.scss']
})
export class HtmlTreeTableComponent implements  OnInit {

  constructor() { }

  Invoiceheader: any;

  ngOnInit(): void {

    this.LoadInvoice();
  }

  LoadInvoice() {
    this.Invoiceheader = sampleData;
  }




  isAllChecked(mainTaskIndex: number, fieldName: string): boolean {
    for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
      if (!subtask[fieldName]) {
        return false;
      }
    }
    return true;
  }

  // toggleAll(event: any, mainTaskIndex: number, fieldName: string): void {
  //   const checked = event.target.checked;
  //   for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
  //   subtask[fieldName] = checked;
  // }
  //
  // let allChecked = true;
  // for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
  //   if (!subtask[fieldName]) {
  //     allChecked = false;
  //     break;
  //   }
  // }
  // const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
//   if (allChecked) {
//     headerCheckbox.checked = true;
//   } else {
//     headerCheckbox.checked = false;
//   }
// }

  toggleAll(event: any, mainTaskIndex: number, fieldName: string): void {
    const checked = event.target.checked;
    const mainTask = this.Invoiceheader[mainTaskIndex];

    // Update the state of the clicked column
    for (const subtask of mainTask.subtasks) {
      subtask[fieldName] = checked;
    }

    // Check if any of the subtask checkboxes are unchecked
    const anyUnchecked = mainTask.subtasks.some(subtask => !subtask[fieldName]);

    // If any of the subtask checkboxes are unchecked, uncheck the header checkbox
    if (anyUnchecked) {
      const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
      headerCheckbox.checked = false;
    }
    // // Update the header checkbox accordingly
    // const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
    // headerCheckbox.checked = true;
  }









  isMainTaskSelected(mainTaskIndex: number): boolean {
    const mainTask = this.Invoiceheader[mainTaskIndex];
    return mainTask.subtasks.every((subtask: any) => subtask.View && subtask.Add && subtask.Edit && subtask.Active && subtask.Delete && subtask.Export);
  }

//   toggleMainTask(event: any, mainTaskIndex: number): void {
//     const checked = event.target.checked;
//     for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
//     subtask.View = checked;
//     subtask.Add = checked;
//     subtask.Edit = checked;
//     subtask.Active = checked;
//     subtask.Delete = checked;
//     subtask.Export = checked;
//   }
//   this.updateParentTaskCheckbox(mainTaskIndex);
// }
  toggleMainTask(event: any, mainTaskIndex: number): void {
    const checked = event.target.checked;
    for (const subtask of this.Invoiceheader[mainTaskIndex].subtasks) {
      subtask.View = checked;
      subtask.Add = checked;
      subtask.Edit = checked;
      subtask.Active = checked;
      subtask.Delete = checked;
      subtask.Export = checked;
    }

    // Update the header checkbox based on the status of checkboxes in the main task
    this.updateHeaderCheckbox();
  }

  toggleCheckbox(event: any, mainTaskIndex: number, subtaskIndex: number, fieldName: string): void {
    const checked = event.target.checked;
    this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex][fieldName] = checked;

    // Update the header checkbox based on the status of checkboxes in the main task
    this.updateHeaderCheckbox();
  }

  updateHeaderCheckbox(): void {
    let allChecked = true;
    for (const item of this.Invoiceheader) {
      for (const subtask of item.subtasks) {
        if (!subtask.View || !subtask.Add || !subtask.Edit || !subtask.Active || !subtask.Delete || !subtask.Export) {
          allChecked = false;
          break;
        }
      }
      if (!allChecked) {
        break;
      }
    }

    // Update the header checkbox state
    const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
    headerCheckbox.checked = allChecked;
  }

  isAllSubtaskChecked(mainTaskIndex: number, subtaskIndex: number): boolean {
    const subtask = this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex];
    return subtask.View && subtask.Add && subtask.Edit && subtask.Active && subtask.Delete && subtask.Export;
  }


  updateParentTaskCheckbox(mainTaskIndex: number): void {
    const mainTask = this.Invoiceheader[mainTaskIndex];
    mainTask.View = mainTask.subtasks.every((subtask: any) => subtask.View);
    mainTask.Add = mainTask.subtasks.every((subtask: any) => subtask.Add);
    mainTask.Edit = mainTask.subtasks.every((subtask: any) => subtask.Edit);
    mainTask.Active = mainTask.subtasks.every((subtask: any) => subtask.Active);
    mainTask.Delete = mainTask.subtasks.every((subtask: any) => subtask.Delete);
    mainTask.Export = mainTask.subtasks.every((subtask: any) => subtask.Export);
  }


  toggleSubtask(event: any, mainTaskIndex: number, subtaskIndex: number): void {
    const checked = event.target.checked;
    const subtask = this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex];
    subtask.View = checked;
    subtask.Add = checked;
    subtask.Edit = checked;
    subtask.Active = checked;
    subtask.Delete = checked;
    subtask.Export = checked;

    // Check if all subtasks are unchecked
    const allUnchecked = this.Invoiceheader[mainTaskIndex].subtasks.every(sub =>
      !sub.View && !sub.Add && !sub.Edit && !sub.Active && !sub.Delete && !sub.Export
    );

    // If all subtasks are unchecked, uncheck the header checkbox
    if (allUnchecked) {
      const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
      headerCheckbox.checked = false;
    } else {
      // Check if all subtasks are checked, then check the header checkbox
      // const allChecked = this.Invoiceheader[mainTaskIndex].subtasks.every(sub =>
      //   sub.View && sub.Add && sub.Edit && sub.Active && sub.Delete && sub.Export
      // );
      // const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
      // headerCheckbox.checked = allChecked;
    }
  }


//   toggleSubtask(event: any, mainTaskIndex: number, subtaskIndex: number): void {
//     const checked = event.target.checked;
//     const subtask = this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex];
//     subtask.View = checked;
//     subtask.Add = checked;
//     subtask.Edit = checked;
//     subtask.Active = checked;
//     subtask.Delete = checked;
//     subtask.Export = checked;
//
//     const mainTask = this.Invoiceheader[mainTaskIndex];
//     if (!checked) {
//     mainTask.View = false;
//     mainTask.Add = false;
//     mainTask.Edit = false;
//     mainTask.Active = false;
//     mainTask.Delete = false;
//     mainTask.Export = false;
//   } else {
//     mainTask.View = mainTask.subtasks.every((subtask: any) => subtask.View);
//     mainTask.Add = mainTask.subtasks.every((subtask: any) => subtask.Add);
//     mainTask.Edit = mainTask.subtasks.every((subtask: any) => subtask.Edit);
//     mainTask.Active = mainTask.subtasks.every((subtask: any) => subtask.Active);
//     mainTask.Delete = mainTask.subtasks.every((subtask: any) => subtask.Delete);
//     mainTask.Export = mainTask.subtasks.every((subtask: any) => subtask.Export);
//   }
// }

//   toggleCheckbox(event: any, mainTaskIndex: number, subtaskIndex: number, fieldName: string): void {
//     const checked = event.target.checked;
//     this.Invoiceheader[mainTaskIndex].subtasks[subtaskIndex][fieldName] = checked;
//
//     let allChecked = true;
//     for (const item of this.Invoiceheader) {
//     for (const subtask of item.subtasks) {
//       if (!subtask[fieldName]) {
//         allChecked = false;
//         break;
//       }
//     }
//     if (!allChecked) {
//       break;
//     }
//   }
//
//   const headerCheckbox = document.getElementById('headerCheckbox') as HTMLInputElement;
//   if (allChecked) {
//     headerCheckbox.checked = true;
//   } else {
//     headerCheckbox.checked = false;
//   }
// }



  toggleAllCheckboxes(event: any): void {
    const checked = event.target.checked;
    for (const item of this.Invoiceheader) {
    for (const subtask of item.subtasks) {
      subtask.View = checked;
      subtask.Add = checked;
      subtask.Edit = checked;
      subtask.Active = checked;
      subtask.Delete = checked;
      subtask.Export = checked;
    }
    item.View = checked;
    item.Add = checked;
    item.Edit = checked;
    item.Active = checked;
    item.Delete = checked;
    item.Export = checked;
  }
}



}

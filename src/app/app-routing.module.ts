import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatereporttemplateComponent} from "./components/createreporttemplate/createreporttemplate.component";
import {ReportComponent} from "./components/report/report.component";
import {TableComponent} from "./pages/table/table.component";
import {ChartsComponent} from "./pages/chart/charts.component";
import { PopUpComponent } from './popup/pop-up/pop-up.component';
import { HomeComponent } from './popup/home/home.component';
import { TreeGridComponent, treeGridDetails } from '@syncfusion/ej2-angular-treegrid';

const routes: Routes = [
  {path:'',component:CreatereporttemplateComponent},
  // {path: '', component: TreeGridComponent}
  {path:'report', component:ReportComponent},
  {path:'table', component:TableComponent},
  {path:'chart' , component: ChartsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

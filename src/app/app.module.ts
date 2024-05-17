import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatereporttemplateComponent } from './components/createreporttemplate/createreporttemplate.component';
import { ReportComponent } from './components/report/report.component';
import { TableComponent } from './pages/table/table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  GridModule,
  GroupModelGenerator,
  GroupService,
} from "@syncfusion/ej2-angular-grids";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {
  CategoryService,
  DataLabelService,
  LegendService,
  LineSeriesService, StackingLineSeriesService,
  TooltipService
} from "@syncfusion/ej2-angular-charts";
import {MatMenuModule} from "@angular/material/menu";
import {DataService} from "./service/data.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {ChartsComponent} from "./pages/chart/charts.component";
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { HomeComponent } from './popup/home/home.component';
import { PopUpComponent } from './popup/pop-up/pop-up.component';

import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';
import {TextAreaModule} from '@syncfusion/ej2-angular-inputs';
import { DropDownTreeModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { RopdownlistComponent } from './shared/ropdownlist/ropdownlist.component';
import { AddStationComponent } from './components/add-station/add-station.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { AddUserComponent } from './forms/add-user/add-user.component';
import { UploaderModule  } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { PermissionComponent } from './forms/permission/permission.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { TreeGridComponent } from './components/tree-grid/tree-grid.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import {
  PageService,
  SortService,
  FilterService,
} from '@syncfusion/ej2-angular-treegrid';


@NgModule({
  declarations: [
    AppComponent,
    CreatereporttemplateComponent,
    ReportComponent,
    ChartsComponent,
    TableComponent,
    HomeComponent,
    PopUpComponent,
    RopdownlistComponent,
    AddStationComponent,
    AddUserComponent,
    PermissionComponent,
    TreeGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    GridModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatCardModule,  
    ChartModule,
    TextBoxModule,
    TextAreaModule,
    MultiSelectModule,
    DropDownTreeModule,
    ButtonModule,
    ColorPickerModule,
    UploaderModule,
    DropDownListModule,
    DialogModule,
    TabModule,
    CheckBoxModule,
    GridAllModule,
    NumericTextBoxAllModule,
    TreeGridModule
  ],
  providers: [PageService, SortService, PageService, FilterService, GroupService , CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService,StackingLineSeriesService, DataService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

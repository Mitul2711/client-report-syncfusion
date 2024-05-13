import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit{

  reportForm: FormGroup;
  data: any[]=[]

  constructor(private fb: FormBuilder , private router:Router, private service:DataService) {
    this.reportForm = fb.group({
      reportType: [''],
      reportTemplate: [''],
      reportDuration: [''],
      startDate: [''],
      endDate: ['']
    })
  }

  reportTypes = [
    {value: 'DR', viewValue: 'Data Report'},
    {value: 'GR', viewValue: 'Graph Report'},
  ];

  reportTemplate = [
    // {value: 'DT', viewValue: 'Data'},
    // {value: 'GT', viewValue: 'Graph'},
  ];

  reportDuration = [
    { value: "all", viewValue: 'All'},
    { value: "daily", viewValue: 'Daily'},
    { value: "monthly", viewValue: 'Monthly'},
    { value: "hourly", viewValue: 'Hourly'},
  ]

  chart:boolean=false;
  table:boolean=false;
  ngOnInit() {
    this.getdata()
  }

  reportTemplateList(reportValue:any){
debugger
     this.reportTemplate = this.data[0].filter((x:any)=>x.reportType === reportValue)



  }
  submitReport() {
    if(this.reportForm.value.reportType === 'DR'){
      this.table = !this.table
      this.chart=false;
    }  if(this.reportForm.value.reportType === 'GR'){
      this.chart=!this.chart;
      this.table=false;
    }
    console.log("Graph shows")
  }

  getdata(){
    this.service.getTemplateData().subscribe((res )=>{
      // console.log(res)
      this.data.push(res)
      console.log(this.data)
    })
  }

}

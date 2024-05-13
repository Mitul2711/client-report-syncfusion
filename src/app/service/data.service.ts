import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  
  private dataArraySubject = new BehaviorSubject<any[]>([]);
  dataArray$ = this.dataArraySubject.asObservable();

  url: string = "http://localhost:3000/stations";
  apiUrl: string = "http://localhost:2000/Templated";
  table:string = "http://localhost:2200/formData";
  feature: string = "http://localhost:2300/rows";
  field: string = "http://localhost:2400/rows";
  
  sendDataFromPopup(data: any[]) {
    // console.log(data);
    this.dataArraySubject.next(data);
  }


  getData() {
    return this.http.get(this.url)
  }

  getTemplateData(){  
    return this.http.get(this.apiUrl)
  }


  Tabledata(){
    return this.http.get(this.table)
  }

  getFeatureData() {
    return this.http.get(this.feature);
  }

  getFieldData() {
    return this.http.get(this.field);
  }

  sendData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

}

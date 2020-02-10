import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';

import { DataServiceProvider } from './data-service';

@Injectable()
export class AjaxServiceProvider {


  constructor(private http: HttpClient,
    private dataService: DataServiceProvider
  ) {
      console.log("ajax is called")
  }

  jsonMenuReading(url) {
    console.log("json is called menu",url)
    this.http.get(url, {}).subscribe(resp => {
        console.log("resp ", resp);
        this.dataService.languageDatasItms(resp);
    });
  }


  jsonTableReading(url) {
    console.log("json is called table",url)
    this.http.get(url, {}).subscribe(resp => {
        console.log("resp ", resp);
        this.dataService.tableDataItms(resp);
    });
  }

}
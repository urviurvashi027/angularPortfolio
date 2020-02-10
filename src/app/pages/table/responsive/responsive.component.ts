import { Component, OnInit } from '@angular/core';
import { AjaxServiceProvider } from '../../../services/ajax-service';
import { DataServiceProvider } from '../../../services/data-service';

@Component({
  selector: 'app-responsive',
  templateUrl: './responsive.component.html',
  styleUrls: ['./responsive.component.css']
})
export class ResponsiveComponent implements OnInit {

  public tableData:any;
  public tableHeading:any = ["Name","Age","company"]

  constructor(private _ajaxService:AjaxServiceProvider,private _dataService:DataServiceProvider) {
    this.getTableData();
   }

  ngOnInit() {
    this._dataService.tableDataObs.subscribe(tableDataResp => {
      this.tableData = tableDataResp['data'];
      console.log(this.tableData)
    }); 
  }

  getTableData() {
    console.log("getMane")
    this._ajaxService.jsonTableReading('assets/json/tableData.json');
  }

}

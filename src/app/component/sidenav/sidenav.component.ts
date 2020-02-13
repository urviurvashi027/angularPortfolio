import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/sideNav.json';
import { AjaxServiceProvider } from '../../services/ajax-service';
import { DataServiceProvider } from '../../services/data-service';
declare var $: any;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  // public JSONdata = JSON.parse(data);
  public menuItems : any;
  public selectedMenuCls: any;
  public subMenuItem : any;
  public isCollapsed: boolean;
  public clickedMenuItem:any;
  public expand

  constructor(private _ajaxService:AjaxServiceProvider,private _dataService:DataServiceProvider) { 
    this.isCollapsed = false;
    this.getMenu();
  }

  ngOnInit() {
    this._dataService.languageDatasObs.subscribe(languageDataResp => {
      this.menuItems = languageDataResp['data'];
     
    });
  }

  getMenu() {
    console.log("getMane")
    this._ajaxService.jsonMenuReading('assets/json/sideNav.json');
  }

  lMenuClk(ev,i){
    this.selectedMenuCls = i;
    i.isCollapsed = ! i.isCollapsed;
    this.isCollapsed = !this.isCollapsed;
    this.clickedMenuItem = i.web_menu_id;
    var x = document.getElementById(i.web_menu_id+"abc1");
    if(i.isCollapsed){
      x.className = "fa fa-plus";
    }
    else{
      x.className = "fa fa-minus"
    }
   
    console.log(i,"Menu clicked");
  }

  lSubMenuClk(ev,i){
    this.subMenuItem = i;
    this.isCollapsed = !this.isCollapsed;
  }

}

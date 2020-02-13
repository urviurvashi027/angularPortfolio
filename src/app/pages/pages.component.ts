import { Component, OnInit } from '@angular/core';
import { DataServiceProvider } from '../services/data-service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  public _opened: boolean = true;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(private _dataService:DataServiceProvider) { 
    // this._opened = true;
    this._dataService.toggleMenuObs.subscribe(toggleProp => {
      console.log(toggleProp,"toggleProp");
      if(toggleProp.length > 0 || toggleProp.hasOwnProperty('data')){
         this._opened = toggleProp['data'];
         console.log(this._opened ,"indside");
         if(this._opened){
           var d = document.getElementById('sidenav').style.display = "block";
         }
      }
   
    });
  }

  ngOnInit() {}

}

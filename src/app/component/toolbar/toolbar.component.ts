import { Component, OnInit } from '@angular/core';
import { DataServiceProvider } from '../../services/data-service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public menuclicked:boolean;

  constructor(private _dataService:DataServiceProvider) {
    this.menuclicked = true;
    console.log("constructor")
   }

  ngOnInit() {
  }

  toggleMenu(){
    this.menuclicked = !this.menuclicked;
    this._dataService.toggleMenu({data: !this.menuclicked});
  }

}

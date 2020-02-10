import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  private _opened: boolean = true;
 
  public _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor() { }

  ngOnInit() {}

}

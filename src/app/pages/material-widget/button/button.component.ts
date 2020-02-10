import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  public statuses = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  public shapes = [ 'rectangle', 'semi-round', 'round' ];
  public sizes= [ 'tiny', 'small', 'medium', 'large', 'giant' ];
  public action= [ 'fa fa-pause-circle-o', 'fa fa-cog', 'fa fa-play-circle-o', 'fa fa-backward', 'fa fa-sign-out' ];
  public icon = [{
    name: 'fa fa-home',
    text: "Home"
  },{
  name: 'fa fa-bars',
  text: "Menu"
},{
  name: 'fa fa-trash',
  text: "Trash"
},{
  name: 'fa fa-close',
  text: "Close"
},{
  name: 'fa fa-folder',
  text: "Folder"
}
]

  constructor() { }

  ngOnInit() {
  }

  getBackgroundImage(s){
    switch (s) {
      case 'primary':
        return 'linear-gradient(to right,#598bff,#36f)';
      case 'success':
        return 'linear-gradient(to right,#2ce69b,#00d68f)';
      case 'info':
        return 'linear-gradient(to right,#42aaff,#0095ff)';
      case 'warning':
        return 'linear-gradient(to right,#ffc94d,#fa0)';
      case 'danger':
        return 'linear-gradient(to right,#ff708d,#ff3d71)';
    }
  }

  getBackgroundColor(s){
    switch (s) {
      case 'primary':
        return '#36f';
      case 'success':
        return '#00d68f';
      case 'info':
        return '#0095ff';
      case 'warning':
        return '#fa0';
      case 'danger':
        return '#ff3d71';
    }
  }

  getPadding(s){
    switch (s) {
      case 'tiny':
        return '.25rem .625rem';
      case 'small':
        return '.375rem .875rem';
      case 'medium':
        return '.625rem 1.125rem';
      case 'large':
        return '.75rem 1.125rem';
      case 'giant':
        return '.875rem 1.375rem';
    }
  }

  getColor(s){
    switch (s) {
      case 'primary':
        return '#36f';
      case 'success':
        return '#00d68f';
      case 'info':
        return '#0095ff';
      case 'warning':
        return '#fa0';
      case 'danger':
        return '#ff3d71';
    }
  }

  getBorder(s){
    switch (s) {
      case 'rectangle':
        return '.25rem;';
      case 'semi-round':
        return '.75rem;';
      case 'round':
        return '1.5rem';
    }
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  public color = 'primary';
  public mode = 'determinate';
  public value = 50;
  public width = 20;
  public progessText = "default";
  public bufferValue = 75;
  public progressStatus = [{
    "width" : 20,
    "text " : "primary",
    "background-color" : "#36f"
  },{
    "width" : 30,
    "text " : "info",
    "background-color" : "#0095ff"
  },{
    "width" : 40,
    "text " : "success",
    "background-color" : "#00d68f"
  },{
    "width" : 50,
    "text " : "warning",
    "background-color" : "#fa0"
  },{
    "width" : 60,
    "text " : "danger",
    "background-color" : "#ff3d71"
  }];

  constructor() { }

  ngOnInit() {
  }

  progressBarClick(val){
    if(val == 'plus'){
      this.width += 20;
      if(this.width >= 100){
        this.width = 100;
      }
      (<HTMLDivElement>document.getElementById('progressValue')).style.width = this.width.toString() + "%";
    }
    else{
      this.width -= 20;
      if(this.width <= 20){
        this.width = 20;
      }
      (<HTMLDivElement>document.getElementById('progressValue')).style.width = this.width.toString() + "%";
    }
    if(this.width == 20){
      (<HTMLDivElement>document.getElementById('progressValue')).style.backgroundColor = "#36f";
    }
    else if(this.width == 40){
      (<HTMLDivElement>document.getElementById('progressValue')).style.backgroundColor = "#0095ff;";
    }
    else if(this.width == 60){
      (<HTMLDivElement>document.getElementById('progressValue')).style.backgroundColor = "#00d68f";
    }
    else if(this.width == 80){
      (<HTMLDivElement>document.getElementById('progressValue')).style.backgroundColor = "#fa0";
    }
    else if(this.width == 100){
      (<HTMLDivElement>document.getElementById('progressValue')).style.backgroundColor = "#ff3d71";
    }
  }

}

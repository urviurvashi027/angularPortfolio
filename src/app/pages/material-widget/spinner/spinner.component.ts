//library
import { Component, OnInit } from '@angular/core';
import { MatProgressButtonOptions } from 'mat-progress-buttons';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 10;
  strokeWidth = 20;
  constructor() { }

  ngOnInit() {}

  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Spinner Button',
    spinnerSize: 18,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
  }

  fabSpinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Spinner Button',
    spinnerSize: 18,
    raised: true,
    fab: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
    icon: 'favorite'
  }

  barButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Progress Bar Button',
    buttonColor: 'accent',
    barColor: 'primary',
    raised: true,
    stroked: false,
    mode: 'indeterminate',
    value: 0,
    disabled: false,
    fullWidth: false
  }

  someFunc(): void {
    this.spinnerButtonOptions.active = true;
    setTimeout(() => {
      this.spinnerButtonOptions.active = false;
    }, 3500)
  }

  someFunc2(): void {
    this.barButtonOptions.active = true;
    this.barButtonOptions.text = 'Saving Data...';
    setTimeout(() => {
      this.barButtonOptions.active = false;
      this.barButtonOptions.text = 'Progress Bar Button';
    }, 3500)
  }

  someFunc3(): void {
    this.fabSpinnerButtonOptions.active = true;
    this.fabSpinnerButtonOptions.text = 'Saving Data...';
    setTimeout(() => {
      this.fabSpinnerButtonOptions.active = false;
      this.fabSpinnerButtonOptions.text = 'Progress Bar Button';
    }, 3500)
  }

}

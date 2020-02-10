import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  Steps: Array<any> = [
    {
      name: 1, id: 1, subnames: [
        {
          name: 1, id: 1, subnames: {
            name: 1, id: 1,

          }
        },
        {
          name: 2, id: 2,
          subnames: {
            name: 2, id: 2,

          }
        },

        {
          name: 3, id: 3,
          subnames: {
            name: 3, id: 3,

          }
        }

      ]
    },
    {
      name: 2, id: 2,
      subnames: [
        {
          name: 1, id: 1, subnames: {
            name: 1, id: 1,

          }
        },
        {
          name: 2, id: 2,
          subnames: {
            name: 2, id: 2,

          }
        },

        {
          name: 3, id: 3,
          subnames: {
            name: 3, id: 3,

          }
        }

      ]
    },
    {
      name: 3, id: 3,
      subnames: [
        {
          name: 1, id: 1, subnames: {
            name: 1, id: 1,

          }
        },
        {
          name: 2, id: 2,
          subnames: {
            name: 2, id: 2,

          }
        },
        {
          name: 3, id: 3,
          subnames: {
            name: 3, id: 3,

          }
        }
      ]
    }

  ]

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}

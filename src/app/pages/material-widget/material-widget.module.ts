//library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import { MatCheckboxModule  } from '@angular/material/checkbox';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressButtonsModule } from 'mat-progress-buttons';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
// import {CdkTreeModule} from '@angular/cdk/tree';

//module
import { MaterialWidgetRoutingModule } from './material-widget-routing.module';
//component
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { StepperComponent } from './stepper/stepper.component';
import { ListComponent } from './list/list.component';
import { TypeFormComponent } from './type-form/type-form.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SliderComponent } from './slider/slider.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { MaterialWidgetComponent } from './material-widget.component';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSliderModule,
    NgbModule.forRoot(),
    MatIconModule,
    MatSlideToggleModule,
    MaterialWidgetRoutingModule,
    MatProgressSpinnerModule,
    MatProgressButtonsModule,
    MatCardModule,
    MatStepperModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatExpansionModule,
    MatSliderModule,
    MatListModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatSliderModule,
    CdkStepperModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    MatMenuModule
    // CdkTreeModule,
  ],
  declarations: [
    MaterialWidgetComponent,
    IconComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    StepperComponent,
    ListComponent,
    TypeFormComponent,
    ExpansionComponent,
    SpinnerComponent,
    DatepickerComponent,
    SliderComponent,
    ProgressbarComponent,
    CardComponent,
    MenuComponent,
  ]
})
export class MaterialWidgetModule { }

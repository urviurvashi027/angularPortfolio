//library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { IconComponent } from './icon/icon.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { StepperComponent } from './stepper/stepper.component';
import { TypeFormComponent } from './type-form/type-form.component';
import { CardComponent } from './card/card.component';
import { MaterialWidgetComponent } from './material-widget.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [{
  path:'',
  component: MaterialWidgetComponent,
  children: [{
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
  {
    path: 'spinner',
    component: SpinnerComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  }, 
  {
    path: 'date',
    component: DatepickerComponent,
  },
  {
    path: 'expansion',
    component: ExpansionComponent,
  },
  {
    path: 'icon',
    component: IconComponent,
  },
  {
    path: 'input',
    component: InputComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'progressbar',
    component: ProgressbarComponent,
  },
  {
    path: 'radio',
    component: RadioComponent,
  },
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'slider',
    component: SliderComponent,
  },
  {
    path: 'stepper',
    component: StepperComponent,
  },
  {
    path: 'typeform',
    component: TypeFormComponent,
  },
  {
    path: '',
    redirectTo: 'button',
    pathMatch: 'full',
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialWidgetRoutingModule { }

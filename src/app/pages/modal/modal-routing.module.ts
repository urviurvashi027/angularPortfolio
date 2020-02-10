//library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { ModalComponent } from './modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { PopoverComponent } from './popover/popover.component';
import { ToasterComponent } from './toaster/toaster.component';
import { TooltipComponent } from './tooltip/tooltip.component';

const routes: Routes = [{
  path:'',
  component: ModalComponent,
  children: [{
    path: 'dialog',
    component: DialogComponent,
  },
  {
    path: 'popover',
    component: PopoverComponent,
  },
  {
    path: 'toaster',
    component: ToasterComponent,
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
  },
  {
    path: '',
    redirectTo: 'dialog',
    pathMatch: 'full',
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalRoutingModule { }

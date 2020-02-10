//library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module
import { ModalRoutingModule } from './modal-routing.module';
//component
import { ModalComponent } from './modal.component';
import { DialogComponent } from './dialog/dialog.component';
import { PopoverComponent } from './popover/popover.component';
import { ToasterComponent } from './toaster/toaster.component';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    ModalRoutingModule
  ],
  declarations: [
    ModalComponent,
    DialogComponent,
    PopoverComponent,
    ToasterComponent,
    TooltipComponent
  ]
})
export class ModalModule { }

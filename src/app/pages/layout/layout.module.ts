//library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module
import { LayoutRoutingModule } from './layout-routing.module';
//component
import { LayoutComponent } from '../layout/layout.component';
import { TabsComponent } from '../layout/tabs/tabs.component';
import { InfiniteComponent } from '../layout/infinite/infinite.component';
import { WindowComponent } from '../layout/window/window.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    LayoutComponent,
    TabsComponent,
    InfiniteComponent,
    WindowComponent
  ]
})
export class LayoutModule { }

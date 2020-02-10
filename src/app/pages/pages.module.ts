//service
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
//module
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialWidgetModule } from './material-widget//material-widget.module';
import { ComponentModule } from '../component/component.module';
import { SidebarModule } from 'ng-sidebar';
import { LayoutModule } from './layout/layout.module';
//component
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './map/map.component';
import { ChartComponent } from './chart/chart.component';
import { ProjectComponent } from './project/project.component';
import { KnowMwComponent } from './know-mw/know-mw.component';
import { PlaytimeComponent } from './playtime/playtime.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    ComponentModule,
    NgbModule,
    MatSidenavModule,
    MatCardModule,
    LayoutModule,
    SidebarModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    PagesComponent,
    MapComponent,
    ChartComponent,
    ProjectComponent,
    KnowMwComponent,
    PlaytimeComponent
    ]
})
export class PagesModule { }

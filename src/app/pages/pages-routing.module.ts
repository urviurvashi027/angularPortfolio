import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialWidgetComponent } from './material-widget/material-widget.component';
import { PagesComponent } from './pages.component';
import { ChartComponent } from './chart/chart.component';
import { MapComponent } from './map/map.component';
import { KnowMwComponent } from './know-mw/know-mw.component';
import { PlaytimeComponent } from './playtime/playtime.component';
import { ProjectComponent } from './project/project.component';


const routes: Routes = [{
  path:'',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'materialWidget',
    loadChildren: "./material-widget/material-widget.module#MaterialWidgetModule",
  }, 
  {
    path: 'auth',
    loadChildren: "./auth/auth.module#AuthModule",
  },
  {
    path: 'table',
    loadChildren: "./table/table.module#TableModule",
  },
  {
    path: 'applications',
    loadChildren: "./application/application.module#ApplicationModule",
  },
  {
    path: 'modaloverlay',
    loadChildren: "./modal/modal.module#ModalModule",
  },
  {
    path: 'charts',
    component: ChartComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  }, 
  {
    path: 'layouts',
    loadChildren: "./layout/layout.module#LayoutModule",
  }, 
  {
    path: 'playTime',
    component: PlaytimeComponent,
  },
  {
    path: 'projects',
    component: ProjectComponent,
  },
  {
    path: 'knowMe',
    component: KnowMwComponent,
  },
{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

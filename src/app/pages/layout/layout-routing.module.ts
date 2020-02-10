//library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { LayoutComponent } from '../layout/layout.component';
import { TabsComponent } from '../layout/tabs/tabs.component';
import { InfiniteComponent } from '../layout/infinite/infinite.component';
import { WindowComponent } from '../layout/window/window.component';

const routes: Routes = [{
  path:'',
  component: LayoutComponent,
  children: [{
    path: 'tabs',
    component: TabsComponent,
  },
  {
    path: 'infinitepageload',
    component: InfiniteComponent,
  },
  {
    path: 'window',
    component: WindowComponent,
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

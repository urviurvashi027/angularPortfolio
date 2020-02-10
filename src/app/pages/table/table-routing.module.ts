//library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//component
import { FilterPaginationComponent } from './filter-pagination/filter-pagination.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ResponsiveCardComponent } from './responsive-card/responsive-card.component';
import { SimpleComponent } from './simple/simple.component';
import { SmartComponent } from './smart/smart.component';
import { TableComponent } from './table.component';

const routes: Routes = [{
  path:'',
  component: TableComponent,
  children: [{
    path: 'tablewithpagination',
    component: FilterPaginationComponent,
  },
  {
    path: 'responsivetable',
    component: ResponsiveComponent,
  },
  {
    path: 'responsivecardtable',
    component: ResponsiveCardComponent,
  },
  {
    path: 'simpletable',
    component: SimpleComponent,
  }, 
  {
    path: 'smarttable',
    component: SmartComponent,
  },
  {
    path: '',
    redirectTo: 'simpletable',
    pathMatch: 'full',
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }

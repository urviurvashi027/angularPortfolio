//library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
//module
import { TableRoutingModule } from './table-routing.module';
//component
import { FilterPaginationComponent } from './filter-pagination/filter-pagination.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ResponsiveCardComponent } from './responsive-card/responsive-card.component';
import { SimpleComponent } from './simple/simple.component';
import { SmartComponent } from './smart/smart.component';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    MatCardModule
  ],
  declarations: [
    FilterPaginationComponent,
    ResponsiveComponent,
    ResponsiveCardComponent,
    SimpleComponent,
    SmartComponent,
    TableComponent
  ]
})
export class TableModule { 
  constructor(){
    console.log("I am loading Table")
  }
}

//library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
// import { MatSidenavModule } from '@angular/material';
//component
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    NgbModule,
    RouterModule,
  ],
  exports:[
    ToolbarComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  declarations: [
    ToolbarComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ]
})
export class ComponentModule { }

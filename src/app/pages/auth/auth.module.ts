//library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module
import { AuthRoutingModule } from './auth-routing.module';
//component
import { NotFoundComponent } from './404/404.component';
import { AuthComponent } from './auth.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    NotFoundComponent,
    AuthComponent,
    ForgotComponent,
    LoginComponent
  ]
})
export class AuthModule { }

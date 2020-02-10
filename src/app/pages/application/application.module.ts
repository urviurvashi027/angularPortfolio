//library
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//module
import { ApplicationRoutingModule } from './application-routing.module';
//component
import { ApplicationComponent } from './application.component';
import { ChatComponent } from './chat/chat.component';
import { EmailComponent } from './email/email.component';
import { EditorComponent } from './editor/editor.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    CKEditorModule
  ],
  declarations: [
    ChatComponent,
    EmailComponent,
    EditorComponent,
    ApplicationComponent
  ]
})
export class ApplicationModule { 
  constructor(){
    console.log("I am loading App")
  }
}

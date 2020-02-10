//library
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//copmonent
import { ApplicationComponent } from './application.component';
import { ChatComponent } from './chat/chat.component';
import { EmailComponent } from './email/email.component';
import { EditorComponent } from './editor/editor.component';

const routes: Routes = [{
  path:'',
  component: ApplicationComponent,
  children: [{
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'email',
    component: EmailComponent,
  },
  {
    path: 'editor',
    component: EditorComponent,
  },
  {
    path: '',
    redirectTo: 'chat',
    pathMatch: 'full',
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationRoutingModule { }

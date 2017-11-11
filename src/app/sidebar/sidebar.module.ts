import { ChannelFormComponent } from './channels/channel-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageFormComponent } from './messages/message-form.component';
import { Ng2CompleterModule } from 'ng2-completer';
import { NgModule } from '@angular/core';
import { SidebarChannelsComponent } from './channels/channels.component';
import { SidebarComponent } from './sidebar.component';
import { SidebarMessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2CompleterModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent,
    SidebarChannelsComponent,
    SidebarMessagesComponent,
    ChannelFormComponent,
    MessageFormComponent,

  ]
})
export class SidebarModule { }

import { ChannelFormComponent } from './channels/channel-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SidebarChannelsComponent } from './channels/channels.component';
import { SidebarComponent } from './sidebar.component';
import { SidebarMessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent,
    SidebarChannelsComponent,
    SidebarMessagesComponent,
    ChannelFormComponent
  ]
})
export class SidebarModule { }

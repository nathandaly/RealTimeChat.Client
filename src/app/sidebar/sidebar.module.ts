import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarChannelsComponent } from './channels/channels.component';
import { SidebarComponent } from './sidebar.component';
import { SidebarMessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent,
    SidebarChannelsComponent,
    SidebarMessagesComponent
  ]
})
export class SidebarModule { }

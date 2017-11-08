import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { ContainerFooterComponent } from './footer/footer.component';
import { ContainerHeaderComponent } from './header/header.component';
import { ContainerMessagesComponent } from './messages/messages.component';
import { MessagesMessageComponent } from './messages/message/message.component';
import { NgModule } from '@angular/core';
import { SidebarModule } from './../sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule
  ],
  declarations: [
    ContainerComponent,
    ContainerFooterComponent,
    ContainerHeaderComponent,
    ContainerMessagesComponent,
    MessagesMessageComponent
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule { }

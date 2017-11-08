import { ChannelService } from './_shared/channel.service';
import { CommonModule } from '@angular/common';
import { MessageService } from './_shared/message.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MessageService,
    ChannelService
  ]
})
export class CoreModule { }

import { CommonModule } from '@angular/common';
import { MessageService } from './_shared/message.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MessageService
  ]
})
export class CoreModule { }

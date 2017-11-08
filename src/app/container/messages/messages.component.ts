import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

import { Component, OnInit } from '@angular/core';

import Message from '../../core/_shared/message.model';
import { MessageService } from '../../core/_shared/message.service';
import { Observable } from 'rxjs/Observable';
import User from '../../core/_shared/user.model';
import random from 'random-name';

@Component({
  selector: 'app-container-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class ContainerMessagesComponent implements OnInit {
  errorMessage: string;
  messages: Message[];

  constructor(private messageService: MessageService) {}

  getMessages() {
    this.messageService.getMessages()
    .subscribe(
      messages => this.messages = messages,
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getMessages();
  }
}

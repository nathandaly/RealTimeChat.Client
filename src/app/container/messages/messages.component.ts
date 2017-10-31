import { OnInit, Component } from '@angular/core';
import random from 'random-name';

import ScrollHelper from '../../../helpers/ScrollHelper';
import Message from '../../../models/Message';

@Component({
  selector: 'app-container-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class ContainerMessagesComponent implements OnInit {
  messages: Message[];

  constructor() {
    this.messages = [];

    for (let i = 0; i < 200; i++ ) {
      this.messages.push(new Message({
        user: random(),
        text: 'asdasdasdasd',
        datetime: null
      }));
    }

    console.log('messages', this.messages);
  }

  ngOnInit() {
  }
}

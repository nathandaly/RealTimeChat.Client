import { Component, OnInit } from '@angular/core';

import { ActivityStatus } from './../../../utils/enums/ActivityStatus';
import Message from '../../../models/Message';
import ScrollHelper from '../../../helpers/ScrollHelper';
import { User } from './../../../models/User';
import random from 'random-name';

@Component({
  selector: 'app-container-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class ContainerMessagesComponent implements OnInit {
  messages: Message[];

  constructor() {
    this.messages = [];
    const statusArray = [ActivityStatus.OFFLINE, ActivityStatus.ONLINE, ActivityStatus.AWAY];

    for (let i = 0; i < 200; i++ ) {
      const randomName = random();

      const message = new Message({
        user: new User({
          username: randomName,
          name: randomName,
          status: statusArray[Math.floor(Math.random() * statusArray.length)],
          created: Date.now(),
          modified: Date.now()
        }),
        content: 'Testing...',
        contentType: 'text/html',
        timestamp: Date.now()
      });

      this.messages.push(message);
    }

    console.log('messages', this.messages);
  }

  ngOnInit() {
  }
}

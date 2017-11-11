import { Component, OnInit, TemplateRef } from '@angular/core';

import { ActivityStatus } from '../../core/_shared/activity-status.enum';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import Channel from '../_shared/channel.model';
import Message from '../../core/_shared/message.model';
import User from '../../core/_shared/user.model';
import random from 'random-name';

@Component({
  selector: 'app-sidebar-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class SidebarMessagesComponent implements OnInit {
  messages: Message[];
  channels: Channel[];
  public bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    this.messages = [];
    const statusArray = [ActivityStatus.OFFLINE, ActivityStatus.ONLINE, ActivityStatus.AWAY];

    for (let i = 0; i < 5; i++) {
      const randomName = random();

      const message = new Message({
        user: new User({
          id: i,
          username: randomName,
          name: randomName,
          status: statusArray[Math.floor(Math.random() * statusArray.length)],
          created: Date.now(),
          modified: Date.now(),
          channels: this.channels
        }),
        content: 'Testing...',
        contentType: 'text/html',
        timestamp: Date.now()
      });

      this.messages.push(message);
    }
  }

  ngOnInit() {
  }

  public openDirectMessageModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, {backdrop: false});
  }
}

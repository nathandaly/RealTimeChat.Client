import { Component, OnInit, TemplateRef } from '@angular/core';

import { ActivityStatus } from '../../../utils/enums/ActivityStatus';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import Message from '../../../models/Message';
import { User } from '../../../models/User';
import random from 'random-name';

@Component({
  selector: 'app-sidebar-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class SidebarMessagesComponent implements OnInit {
  messages: Message[];
  public bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    this.messages = [];
    const statusArray = [ActivityStatus.OFFLINE, ActivityStatus.ONLINE, ActivityStatus.AWAY];

    for (let i = 0; i < 5; i++) {
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
  }

  ngOnInit() {
  }

  public openDirectMessageModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, {backdrop: false});
  }
}

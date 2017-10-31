import { Component, OnInit } from '@angular/core';
import random from 'random-name';

@Component({
  selector: 'app-sidebar-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class SidebarMessagesComponent implements OnInit {
  messages: null[];

  constructor() {
    this.messages = [];

    for (let i = 0; i < 5; i++) {
      this.messages.push(random());
    }
  }

  ngOnInit() {
  }

  directMessage = () => {
    alert('directmessage');
  }

}

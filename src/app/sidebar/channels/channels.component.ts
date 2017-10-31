import { Component, OnInit } from '@angular/core';
import randomWords from 'random-words';
import Channel from '../../../models/Channel';

@Component({
  selector: 'app-sidebar-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class SidebarChannelsComponent implements OnInit {
  channels: Channel[];

  constructor() {
    // Build array containing channels and the channels must contain atleast one subscriber (creator?).
    this.channels = [];

    for (let i = 0; i < 5; i++) {
      this.channels.push(new Channel({name: randomWords(1[0]), description: 'Some channel', subscribers: null}));
    }
  }

  ngOnInit() {
  }

  addChannel = () => {
    alert('addchannel');
  }
}

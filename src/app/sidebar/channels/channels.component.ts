import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import Channel from '../../../models/Channel';
import randomWords from 'random-words';

@Component({
  selector: 'app-sidebar-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class SidebarChannelsComponent implements OnInit {
  channels: Channel[];
  public bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    // Build array containing channels and the channels must contain atleast one subscriber (creator?).
    this.channels = [];

    for (let i = 0; i < 5; i++) {
      this.channels.push(new Channel({name: randomWords(1[0]), description: 'Some channel'}));
    }
  }

  ngOnInit() {
  }

  public openAddChannelModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, {backdrop: false});
  }
}

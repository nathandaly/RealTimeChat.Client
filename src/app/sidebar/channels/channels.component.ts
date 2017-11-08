import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { BsModalService } from 'ngx-bootstrap/modal';
import Channel from '../_shared/channel.model';
import { ChannelService } from './../_shared/channel.service';
import randomWords from 'random-words';

@Component({
  selector: 'app-sidebar-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class SidebarChannelsComponent implements OnInit {
  errorMessage: string;
  channels: Channel[];
  public bsModalRef: BsModalRef;

  constructor(private channelService: ChannelService, private modalService: BsModalService) {}

  getChannels() {
    this.channelService.getChannels()
    .subscribe(
      messages => this.channels = messages,
      error => this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getChannels();
  }

  public openAddChannelModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template, {backdrop: false});
  }
}

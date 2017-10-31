import { Component, OnInit, Input, AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

import Message from '../../../../models/Message';

@Component({
  selector: 'app-messages-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessagesMessageComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('scrollMe') elRef: ElementRef;
  @Input() messages: Message[];

  constructor() {
    console.log('data', this.messages);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elRef.nativeElement.scrollIntoView();
  }

  ngAfterViewChecked() {
    this.elRef.nativeElement.scrollIntoView();
  }
}

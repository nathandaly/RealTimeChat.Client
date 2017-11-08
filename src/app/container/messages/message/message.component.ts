import { Component, Input } from '@angular/core';

import Message from '../../../core/_shared/message.model';

@Component({
  selector: 'app-messages-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessagesMessageComponent {
  @Input() message: Message;
}

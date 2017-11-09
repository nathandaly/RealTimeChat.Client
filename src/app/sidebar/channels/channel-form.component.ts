import { Component, EventEmitter, Output } from '@angular/core';

import Channel from '../_shared/channel.model';

@Component({
  selector: 'app-channel-form-modal',
  templateUrl: './channel-form.component.html'
})
export class ChannelFormComponent {
  @Output() onAddChannel = new EventEmitter<Channel>();
  model = new Channel({locked: false});
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  addChannel() {
    this.model.name = this.model.name.trim();

    if (this.model.description) {
      this.model.description = this.model.description.trim();
    }

    this.onAddChannel.emit(this.model);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

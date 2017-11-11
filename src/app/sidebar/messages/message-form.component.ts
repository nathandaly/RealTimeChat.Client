import { Component, OnInit } from '@angular/core';

import { CompleterData } from 'ng2-completer/services/completer-data';
import { CompleterService } from 'ng2-completer';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import User from '../../core/_shared/user.model';
import { UserService } from '../../core/_shared/user.service';
import _ from 'lodash';
import { distinctUntilChanged } from 'rxjs/operator/distinctUntilChanged';

@Component({
  selector: 'app-message-form-modal',
  templateUrl: './message-form.component.html'
})
export class MessageFormComponent implements OnInit {
  users?: User[];
  user: string;
  protected dataService: CompleterData;
  lastKeypress: 0;

  constructor(
    private userService: UserService,
    private completerService: CompleterService
  ) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      if (users.length) {
        this.users = users;
        this.dataService = this.completerService.local(this.users, 'username, name', 'name');
        this.dataService.subscribe(search => search.map(item => {
         // Filter the user list to the users that are returned from the search?
        }));
      }
    });
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.users); }
}

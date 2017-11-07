import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { InMemoryDataService } from './in-memory-data.service';
import { Injectable } from '@angular/core';
import Message from '../models/Message';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MessageService {
  private messagesUrl: string;

  constructor(private http: HttpClient) {
    this.messagesUrl = 'app/messages';
  }

  private extractData(res: Response) {
    const body = res.json();

    return body;
  }

  getMessages(): Observable<Message[]> {
    const messages = this.http.get<Message[]>(this.messagesUrl)
      .pipe(
        tap(heroes => console.log(`Fetched messahes`))
      );

    return messages;
  }
}

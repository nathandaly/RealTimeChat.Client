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

  /**
   * Get list of messages and return them as an Observable.
   * @returns Observable<Messages[]>
   */
  getMessages(): Observable<Message[]> {
    const messages = this.http.get<Message[]>(this.messagesUrl)
      .pipe(
        tap(heroes => console.log(`Fetched messahes`))
      );

    return messages;
  }

  /**
   * Filter messages for a single message by ID and return as an Observable.
   * @param id
   * @returns Observable<Messages>
   */
  getMessage(id: number): Observable<Message> {
    return this.getMessages()
       .map(messages => messages.filter(message => message.id === id)[0]);
  }
}

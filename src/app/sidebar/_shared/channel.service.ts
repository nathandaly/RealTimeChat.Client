import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import Channel from '../../sidebar/_shared/channel.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChannelService {
  private channelUrl: string;

  constructor(private http: HttpClient) {
    this.channelUrl = 'app/channels';
  }

  private extractData(res: Response) {
    const body = res.json();

    return body;
  }

  /**
   * Get list of channels and return them as an Observable.
   * @returns Observable<Channel[]>
   */
  getChannels(): Observable<Channel[]> {
    const channels = this.http.get<Channel[]>(this.channelUrl)
      .pipe(
        tap(heroes => console.log(`Fetched channels`))
      );

    return channels;
  }

  /**
   * Filter messages for a single channels by ID and return as an Observable.
   * @param id
   * @returns Observable<Channel>
   */
  getChannel(id: number): Observable<Channel> {
    return this.getChannels()
       .map(channels => channels.filter(channel => channel.id === id)[0]);
  }
}

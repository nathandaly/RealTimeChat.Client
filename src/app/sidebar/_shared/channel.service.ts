import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import Channel from '../../sidebar/_shared/channel.model';
import { GlobalErrorHandlerService } from './../../core/_shared/global-error-handler.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ChannelService {
  private channelUrl: string;

  constructor(
    private http: HttpClient,
    private globalErrorHandler: GlobalErrorHandlerService
  ) {
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
    return this.http.get<Channel[]>(this.channelUrl)
      .pipe(
        tap((chan: Channel[]) => console.log(`Fetched channels`)),
        catchError(this.globalErrorHandler.handleError<Channel[]>('getChannels'))
      );
  }

  /**
   * Filter messages for a single channels by ID and return as an Observable.
   * @param id
   * @returns Observable<Channel>
   */
  getChannel(id: number): Observable<Channel> {
    return this.getChannels()
       .map(channels => channels.filter(channel => channel.id === id)[0]).pipe(
        tap((chan: Channel) => console.log(`fetched hero w/ id=${chan.id}`)),
        catchError(this.globalErrorHandler.handleError<Channel>('getChannel'))
      );
  }

  /**
   * Add a channel.
   * @param channel
   * @returns Observable<Channel>
   */
  addChannel(channel: Channel): Observable<Channel> {
    return this.http.post<Channel>(this.channelUrl, channel).pipe(
      tap((chan: Channel) => console.log(`added hero w/ id=${chan.id}`)),
      catchError(this.globalErrorHandler.handleError<Channel>('addChannel'))
    );
  }
}

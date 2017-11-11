import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/scan';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import User from './user.model';

@Injectable()
export class UserService {
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'app/users';
  }

  private extractData(res: Response) {
    const body = res.json();

    return body;
  }

  /**
   * Get list of users and return them as an Observable.
   * @returns Observable<User[]>
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
      .pipe(
        tap(users => console.log(`Fetched users`))
      );
  }

  /**
   * Filter users for a single user by ID and return as an Observable.
   * @param id
   * @returns Observable<User>
   */
  getUserById(id: number): Observable<User> {
    return this.getUsers()
       .map(users => users.filter(user => user.id === id)[0]);
  }

  /**
   * Filter users for a single user by name/username and return as an Observable.
   * @param id
   * @returns Observable<User>
   */
  getUserByNameOrUsername(id: number): Observable<User> {
    return this.getUsers()
        .map(users => users.filter(user => (user.id || user.name) === id)[0]);
  }
}

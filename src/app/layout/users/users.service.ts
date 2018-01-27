import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { GithubUser } from './../../shared/github-user.model';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<GithubUser>> {
    return (<Observable<Array<GithubUser>>>this.http.get('https://api.github.com/users'));
  }

  getUserDetails(username: string): Observable<GithubUser> {
    return (<Observable<GithubUser>>this.http.get(`https://api.github.com/users/${username}`));
  }

  searchUser(name: string) {
    return this.http.get('https://api.github.com/search/users', {
      params: new HttpParams().set('q', name)
    });
  }
}

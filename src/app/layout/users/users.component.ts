import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UsersService } from './users.service';
import { GithubUser } from '../../shared/github-user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild('searchUser') searchUser: ElementRef;
  users: Observable<Array<GithubUser>>;
  searchedUsers: Array<GithubUser> = [];
  noUsersFoundMessage = '';
  loading = false;

  constructor(
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.users = this.usersService.getUsers();
    const observableInputParameter = Observable.fromEvent(this.searchUser.nativeElement, 'input');
    observableInputParameter.map((event: Event) => ((<HTMLInputElement>event.target).value))
                            .debounceTime(500)
                            .subscribe((value: string) => {
                              if (value) {
                                this.loading = true;
                                this.searchForUser(value);
                              } else {
                                this.loading = false;
                                this.searchedUsers = [];
                              }
                            });
  }

  searchForUser(param: string) {
    this.usersService.searchUser(param)
        .subscribe((githubSearchResult: any) => {
          const users = githubSearchResult.items;
          this.searchedUsers = githubSearchResult.items;
          if (this.searchedUsers.length > 0) {
            this.noUsersFoundMessage = '';
          } else {
            this.noUsersFoundMessage = 'No users with this name found';
          }
          this.loading = false;
        }, (error) => {
          this.noUsersFoundMessage = '';
          this.loading = false;
        });
  }

  selectUser(user: GithubUser) {
    this.router.navigateByUrl(`/users/${user.login}`);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from './../users.service';
import { GithubUser } from '../../../shared/github-user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: GithubUser = new GithubUser();

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.usersService.getUserDetails(param.username)
        .subscribe((user: GithubUser) => {
          this.user = user;
        });
    });
  }

}

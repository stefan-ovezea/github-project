import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubUser } from '../github-user.model';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent implements OnInit {

  @Input('users') users: Array<GithubUser>;
  @Output('userClicked') userClicked: EventEmitter<GithubUser> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectUser(user: GithubUser) {
    this.userClicked.emit(user);
  }

}

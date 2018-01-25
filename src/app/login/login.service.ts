import { Injectable } from '@angular/core';

import { User } from './../shared/user.model';

@Injectable()
export class LoginService {

  user: User = {
    username: 'fakeuser',
    password: 'fakepassword'
  };

  constructor() { }

  // Mock login
  authenticate(username: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      if (username !== this.user.username) {
        reject('Username does not exist!');
      } else if (password !== this.user.password) {
        reject('Wrong password!');
      } else {
        localStorage.setItem('currentUser', username);
        resolve('Login successful!');
      }
    });


  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { User } from './../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  user: User = new User();
  errorMessage = '';

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usernameControl: new FormControl(this.user.username, Validators.required),
      passwordControl: new FormControl(this.user.password, Validators.required)
    });
  }

  login() {
    this.loginService.authenticate(this.user.username, this.user.password)
        .then((successMessage: string) => {
          this.errorMessage = '';
          this.router.navigateByUrl('/');
        })
        .catch((errorMessage: string) => {
          this.errorMessage = errorMessage;
        });
  }

}

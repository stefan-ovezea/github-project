import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public routes = [
    { name: 'Home', url: '/' },
    { name: 'Users', url: '/users' },
    { name: 'Repos', url: '/repos' }
  ];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }

}

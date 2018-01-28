import { SimpleListComponent } from './../shared/simple-list/simple-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ReposComponent } from './repos/repos.component';

import { UsersService } from './users/users.service';
import { RepoService } from './repos/repo.service';
import { RepoDetailsComponent } from './repos/repo-details/repo-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    UsersComponent,
    UserDetailsComponent,
    ReposComponent,
    RepoDetailsComponent,
    SimpleListComponent
  ],
  providers: [
    UsersService,
    RepoService
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }

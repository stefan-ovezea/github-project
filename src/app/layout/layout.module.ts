import { LayoutRoutingModule } from './layout-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { UserDetailsComponent } from './users/user-details/user-details.component';


@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    HttpClientModule
  ],
  declarations: [
    LayoutComponent,
    HomeComponent,
    UsersComponent,
    UserDetailsComponent
  ],
  providers: [
    UsersService
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }

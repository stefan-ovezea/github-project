import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsComponent } from './users/user-details/user-details.component';
import { RepoDetailsComponent } from './repos/repo-details/repo-details.component';
import { UsersComponent } from './users/users.component';
import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home.component';
import { ReposComponent } from './repos/repos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
        { path: '', component: HomeComponent },
        { path: 'users', component: UsersComponent },
        { path: 'users/:username', component: UserDetailsComponent },
        { path: 'repos', component: ReposComponent },
        { path: 'repos/:owner/:name', component: RepoDetailsComponent }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

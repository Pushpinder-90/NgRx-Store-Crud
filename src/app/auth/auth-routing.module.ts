import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users';
import { AddUserComponent } from './add-user/add-user.component';
import { CoreComponent } from './core';

const AUTH_ROUTES: Routes = [
  {
    path: 'app',
    component: CoreComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'add',
        component: AddUserComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

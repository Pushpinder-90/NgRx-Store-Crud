import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/shared/src';
import { StoreModule } from '@ngrx/store';
import { FEATURE_KEY, reducer, Effects } from './+state';
import { EffectsModule } from '@ngrx/effects';
import { EdituserComponent } from './edituser/edituser.component';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    LoginComponent,
    EdituserComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(FEATURE_KEY, reducer),
    EffectsModule.forFeature([Effects]),
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }

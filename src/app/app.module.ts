import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './auth/core/core.component';
import { AuthModule } from './auth';
import { HeaderComponent } from '../shared/src/header';
import { MaterialModule } from 'src/shared/src';
import { NxModule } from '@nrwl/nx';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    MaterialModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument(): [],
    StoreRouterConnectingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

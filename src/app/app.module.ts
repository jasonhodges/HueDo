import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LightsService } from './services/lights.service';
import { AngularFireModule, AuthMethods, AuthProviders } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import { Config } from '../../src/config';
import { AuthService } from './auth/services/auth.service';
import { AuthModule } from './auth/auth.module';
 
const firebaseConfig = {
  apiKey: Config.apiKey,
  authDomain: Config.authDomain,
  databaseURL: Config.databaseURL,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId
};

const fireBaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig, fireBaseAuthConfig),
    MaterialModule,
    AuthModule
  ],
  providers: [LightsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

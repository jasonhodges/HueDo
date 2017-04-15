import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    SignupComponent,
    LoginComponent,
    EmailComponent
  ]
})
export class AuthModule { }

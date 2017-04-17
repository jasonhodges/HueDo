import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email = new FormControl();
  password = new FormControl();

  signupForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService) {
      this.createForm();
     }

  createForm() {
    this.signupForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  signup() {
    debugger
    this.authService.signUpWithEmail(
      this.signupForm.value
    );
  }
}

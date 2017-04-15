import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = new FormControl();
  password = new FormControl();
  
  constructor(public af: AngularFire, ) { 
    this.af.auth.subscribe(auth => console.log(auth));
  }

  ngOnInit() {
  }

  login() {
    debugger
    this.af.auth.login({
        email: this.email.value,
        password: this.password.value
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      });
  }
}

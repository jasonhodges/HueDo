import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders, FirebaseAuthState } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState = null;
  error: any;

  constructor(public af: AngularFire, private router: Router) {
    // auth$.subscribe((state: FirebaseAuthState) => {
    //   this.authState = state;
    // });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  signUpWithEmail(formData) {
    // if(formData.valid) {
      debugger
      this.af.auth.createUser(formData).catch(function(error) {
        var errorCode = error.name;
        var errorMessage = error.message
      })
    // }
  }

  signInWithEmail(formData) {
    if (formData.valid) {
      this.af.auth.login({
          email: formData.value.email,
          password: formData.value.password
        },
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        }).then(
        (success) => {
          console.log(success);
          this.router.navigate(['/lights']);
        }).catch(
        (err) => {
          console.error(err);
          this.error = err;
        });
    }
  }
}

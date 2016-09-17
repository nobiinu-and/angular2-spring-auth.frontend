import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UserService } from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})

export class LoginComponent {

  userName: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}

  login() {
    console.log('LoginComponent::login called');
    this.resetError();
    this.authService.login(this.userName, this.password)
      .subscribe(
        result => {
          console.log('LoginComponent::login result:' + result);
          this.router.navigate(['/member-only']);
        },
        error  => {
          this.setError(error);
        }
      );
  }

  resetError() {
    this.errorMessage = '';
  }

  setError(error: any) {
    this.errorMessage = error.json().message;
  }
}

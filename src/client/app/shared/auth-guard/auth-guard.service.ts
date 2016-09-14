import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/index';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    console.log('AuthGuardService::isActivate: called');
    if (!this.authService.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    return this.authService.isLoggedIn;
  }

}

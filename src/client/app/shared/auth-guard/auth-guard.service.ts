import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../auth/index';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): Observable<boolean> {
    console.log('AuthGuardService::canActivate: called');
    return this.authService.reLogin()
      .map(result => {
        console.log('AuthGuardService::canActivate reLogin::result:' + result);
        return result;
      })
      .catch(error => {
        console.log('AuthGuardService::canActivate reLogin::error');
        console.log(error);
        this.router.navigate(['/login']);
        return Observable.of(false);
      });
  }

}

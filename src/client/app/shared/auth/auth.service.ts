import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  currentUser: any;
  isLoggedIn: boolean = false;

  constructor(private http: Http) {}

  login(userName: string, password: string): Observable<boolean> {

    var base64Creds = btoa(userName + ':' + password);
    var auth = 'Basic ' + base64Creds;
    var authHeader = new Headers({ 'Authorization': auth });
    let options = new RequestOptions({ headers: authHeader });

    return this.http.get('http://localhost:8080/sample/api', options)
      .map((res: Response) => {
        return this.successHandler(res);
      })
      .catch((error: Response) => {
        return this.errorHandler(error);
      });
  }

  successHandler(res: Response) {
    console.log(res);
    this.isLoggedIn = res.status === 200;
    this.currentUser = res.json();
    return this.isLoggedIn;
  }

  errorHandler(res: Response) {
    console.log(res);
    this.isLoggedIn = false;
    this.currentUser = null;
    return Observable.throw(res);
  }
}

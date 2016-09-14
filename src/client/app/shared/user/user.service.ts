import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

interface Users {}
interface User {}

@Injectable()
export class UserService {

   constructor(private http: Http) {}

   get(id: String): Observable<User> {
     return this.http.get('http://localhost:8080/sample/api/users/' + id)
      .map((res: Response) => {
        console.log(res);
        return res.json();
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
   }

   findAll(): Observable<Users> {
     return this.http.get('http://localhost:8080/sample/api/users')
      .map((res: Response) => {
        console.log(res);
        return res.json();
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
   }
}

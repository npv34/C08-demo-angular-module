import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get(environment.api_url + '/users')
  }

  addUser(data: any): Observable<any> {
    return  this.http.post(environment.api_url + '/users', data)
  }
}

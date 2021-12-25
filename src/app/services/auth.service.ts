import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkLogin(email: string, password: string) {
      return email == 'admin@gmail.com' && password == '1234';
  }
}

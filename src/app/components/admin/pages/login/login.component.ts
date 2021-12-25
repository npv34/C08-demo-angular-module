import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin?: FormGroup;
  errLogin?: string
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    let data = this.formLogin?.value;
    if (this.authService.checkLogin(data.email, data.password)) {
      localStorage.setItem('user', JSON.stringify(data));
      this.router.navigate(['admin'])
    } else  {
      this.errLogin = 'Account not exist!'
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  userLogin?: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userLogin = JSON.parse(<string>localStorage.getItem('user'))
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['admin/login'])
  }

}

import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAll().subscribe(res => {
      if(res.status == 'success') {
        this.users = res.users
      }
    });
  }

}

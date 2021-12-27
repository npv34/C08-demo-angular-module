import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {RoleService} from "../../../../services/role.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  roles: any[] = []
  formAddUser?: FormGroup;
  roleUserSelected : any[] = []
  constructor(private userService: UserService,
              private fb: FormBuilder,
              private roleService: RoleService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAddUser = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    })
    this.roleService.getAll().subscribe(res => {
      this.roles = res;
      console.log(this.roles)
    })
  }

  submit() {
    let dataForm = this.formAddUser?.value;
    let dataUser = {
      name: dataForm.name,
      email: dataForm.email,
      password: dataForm.password,
      roles: this.roleUserSelected
    }
    this.userService.addUser(dataUser).subscribe(res => {
      if (res.status == 'success') {
        this.router.navigate(['admin/users'])
      }
    })
    console.log(dataUser)

  }

  choseRoleUser(event: any) {
      let roleId = event.target.value;
      if(this.roleUserSelected.includes(roleId)) {
        let index = this.roleUserSelected.indexOf(roleId);
        this.roleUserSelected.splice(index, 1)
      } else {
        this.roleUserSelected.push(roleId)
      }
  }

}

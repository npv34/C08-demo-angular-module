import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/admin/pages/login/login.component";
import {MasterComponent} from "./components/admin/layouts/master/master.component";

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        component: MasterComponent,
        children: [
          {
            path: 'users',
            loadChildren: () => import('./components/admin/users/users.module').then(m => m.UsersModule)
          }
        ]
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

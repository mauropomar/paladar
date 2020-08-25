import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListuserComponent} from './listuser.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: '',
        redirectTo: 'users'
      },
      {
        path: 'users',
        component: ListuserComponent,
        data: {
          title: 'Usuarios'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

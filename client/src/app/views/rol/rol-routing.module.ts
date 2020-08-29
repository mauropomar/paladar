import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListrolComponent} from '../rol/listrol.component';
import {FormrolComponent} from '../rol/formrol.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Seguridad'
    },
    children: [
      {
        path: '',
        redirectTo: 'rols'
      },
      {
        path: 'rols',
        component: ListrolComponent,
        data: {
          title: 'Roles'
        }
      },
      {
        path: 'create',
        component: FormrolComponent,
        data: {
          title: 'Roles'
        }
      }, {
        path: 'update/:id',
        component: FormrolComponent,
        data: {
          title: 'Roles'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }

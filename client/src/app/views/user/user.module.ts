import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentModule} from './../../components/component.module';

import { UserRoutingModule } from './user-routing.module';
import { ListuserComponent } from './listuser.component';


@NgModule({
  declarations: [ListuserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ComponentModule
  ]
})
export class UserModule { }

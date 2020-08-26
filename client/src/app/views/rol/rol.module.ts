import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { ListrolComponent } from './listrol.component';


@NgModule({
  declarations: [ListrolComponent],
  imports: [
    CommonModule,
    RolRoutingModule
  ]
})
export class RolModule { }

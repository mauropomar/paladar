import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentModule } from './../../components/component.module';
import { RolRoutingModule } from './rol-routing.module';
import { ListrolComponent } from './listrol.component';
import { FormrolComponent } from './formrol.component';



@NgModule({
  declarations: [ListrolComponent, FormrolComponent],
  imports: [
    CommonModule,
    RolRoutingModule,
    ComponentModule
  ]
})
export class RolModule { }

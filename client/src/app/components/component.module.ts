import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComborolComponent } from './combo/comborol/comborol.component';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    ComborolComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComborolComponent,
    PaginationComponent
  ]
})
export class ComponentModule { }

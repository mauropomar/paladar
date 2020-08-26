import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComborolComponent } from './combo/comborol/comborol.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ConfirmdeleteComponent } from './window/confirmdelete/confirmdelete.component';


@NgModule({
  declarations: [
    ComborolComponent,
    PaginationComponent,
    ConfirmdeleteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComborolComponent,
    PaginationComponent,
    ConfirmdeleteComponent
  ]
})
export class ComponentModule { }

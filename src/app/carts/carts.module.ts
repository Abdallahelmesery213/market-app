import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CartsModule { }

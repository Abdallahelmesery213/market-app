import { ProductComponent } from './../product/product.component';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoadingPageComponent,
    SelectComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [HeaderComponent, LoadingPageComponent, FormsModule, SelectComponent, ProductComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }

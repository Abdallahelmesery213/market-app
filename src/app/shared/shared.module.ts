import { ProductComponent } from './../product/product.component';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



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
    BrowserAnimationsModule,
    ToastrModule

  ],
  exports: [
    HeaderComponent,
    LoadingPageComponent,
    RouterModule,
    FormsModule,
    SelectComponent,
    ProductComponent,
    BrowserAnimationsModule,
    ToastrModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SharedModule { }

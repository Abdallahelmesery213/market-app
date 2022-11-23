import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LoadingPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [HeaderComponent, LoadingPageComponent]
})
export class SharedModule { }

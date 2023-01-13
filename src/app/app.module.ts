import { CartComponent } from './carts/components/cart/cart.component';
import { CartsModule } from './carts/carts.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsModule } from './products/products.module';
import { ProductsDetailsComponent } from './products-details/products-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    CartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

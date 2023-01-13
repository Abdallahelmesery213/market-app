import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  myProductStorage:any=[];

  ngOnInit(): void {
    this.getCartProducts()
  }

  getCartProducts(){
    if('cart' in localStorage){
      this.myProductStorage = JSON.parse(localStorage.getItem('cart')!);
    }
    console.log(this.myProductStorage);
  }

}

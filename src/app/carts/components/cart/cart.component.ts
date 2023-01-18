import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private service:CartsService) { }
  myProductStorage:any=[];
  total:number = 0;
  success:boolean = false;

  ngOnInit(): void {
    this.getCartProducts()
  }

  getCartProducts(){
    if('cart' in localStorage){
      this.myProductStorage = JSON.parse(localStorage.getItem('cart')!);
    }
    console.log(this.myProductStorage);
    this.getCartTotal()
  }

  // method to calculate total of price
  getCartTotal(){
    this.total = 0;
    for(let x in this.myProductStorage){
      this.total += this.myProductStorage[x].item.price * this.myProductStorage[x].quantity
    }
  }

  addAmount(index:number){
    this.myProductStorage[index].quantity ++;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.myProductStorage));
  }
  minsAmount(index:number){
    this.myProductStorage[index].quantity --;
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.myProductStorage));
  }

  // handle change of input
  detactChange(){
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.myProductStorage));
  }

  deleteItem(index:number){
    this.myProductStorage.splice(index, 1); // splice(index, amount) remove
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.myProductStorage));
  }

  clearCart(){
    this.myProductStorage = [];
    this.getCartTotal();
    localStorage.setItem('cart', JSON.stringify(this.myProductStorage));
  }

  // order now button
  addCart(){
    let products = this.myProductStorage.map((item: { item: { id: any; }; quantity: any; }) => {
      return {productId: item.item.id, quantity: item.quantity}
    });

    let model = {
      userId:5,
      date: new Date(),
      products:products
    };
    //console.log(model);

    // debugger;
    this.service.createNewCart(model).subscribe((res:any)=>{
      this.success = true;
      console.log(res);
    }, (err:any) => {
      console.log(err);
    });

  }

}

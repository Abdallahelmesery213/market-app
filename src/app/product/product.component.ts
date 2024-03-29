import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { product } from '../products/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() productData!: product;
  @Output() item = new EventEmitter()
  btnToggle: boolean = false;
  amount: number = 1;

  constructor() { }

  ngOnInit(): void { }

  addCard(){
    this.item.emit({item:this.productData, quantity: this.amount});
    this.btnToggle = !this.btnToggle; // hidden add button
  }

}

import { ProductsService } from './../../services/products.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products:any[] = [];
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
      console.log(this.products);
    }
    )
  }

}

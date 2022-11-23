import { ProductsService } from './../../services/products.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products:any[] = [];
  loading: boolean = false;
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
      this.loading = false;
      console.log(this.products);
    }, error => {
      this.loading = false;
      console.log(error);
    })
  }

}

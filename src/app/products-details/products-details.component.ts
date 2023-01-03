import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products/services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id:any;
  data: any = {};
  loading: boolean = false;

  constructor( private route: ActivatedRoute, private service: ProductsService) {
    this.id = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(){
    this.loading = true;
    this.service.getProdDetailsID(this.id).subscribe(res => {
      this.loading = false
      this.data = res;
      console.log(res);
    }, error => {
      this.loading = false;
      console.log(error)
    })
  }

}

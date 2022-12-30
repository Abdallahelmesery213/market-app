import { ProductsService } from './../../services/products.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products:any[] = [];
  categories:any[] = [];
  myProductStorage:any[] = [];
  loading: boolean = false;
  amount: number = 0;
  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    console.log(this.amount)
  }

  getProducts(){
    this.loading = true;
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
      this.loading = false;
      console.log(this.products);
    }, error => {
      this.loading = false;
      console.log("products error =>  " + error.message);
    })
  }

  getCategories(){
    this.loading = true;
    this.service.getAllCategories().subscribe((res:any)=>{
      this.categories = res;
      console.log(this.categories);
      this.loading = false;
    }, err =>{
      this.loading = false;
      console.log(err);
    })
  }

  filterCategory(event:any){
    let value = event.target.value;
    console.log(value);
    if(value == "all"){
      this.getProducts();
    }else {
      this.getProductsCategory(value);
    }
  }


  getProductsCategory(keyWord:string){
    this.loading = true;
    this.service.getFilterCategory(keyWord).subscribe((res:any)=>{
      this.products = res;
      this.loading = false;
    })
  }

  // store the carts in localStorage by add card button
  addCard(data: any){
    console.log(data.product);
    if('myProduct' in localStorage){
      this.myProductStorage = JSON.parse(localStorage.getItem('myProduct')!);
      let exist = this.myProductStorage.find(itm => itm.id === data.product.id);
      if (exist){
        alert("this product already exist");
      } else {
        this.myProductStorage.push(data.product);
        localStorage.setItem('myProduct', JSON.stringify(this.myProductStorage));
      }
    } else {
      this.myProductStorage.push(data.product);
      localStorage.setItem('myProduct', JSON.stringify(this.myProductStorage));
    }
  }

}

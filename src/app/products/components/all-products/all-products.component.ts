import { ProductsService } from './../../services/products.service';
import { Component, OnInit} from '@angular/core';
import { product } from '../../models/products';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],
})
export class AllProductsComponent implements OnInit {
  products:product[] = [];
  categories:any[] = [];
  myProductStorage:any[] = [];
  loading: boolean = false;
  amount: number = 0;
  constructor
  (
    private service: ProductsService,
    private toastr: ToastrService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
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
  addToCart(event: any){
    if('cart' in localStorage){
      console.log(event)
      this.myProductStorage = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.myProductStorage.find(item => item.item.id == event.item.id);
      if(exist){
        // debugger;
        // this.toastr.success("Item already exist in your Cart");
        this.snackBar.open("Item Already Exist In Your Cart", "X", {
          duration:5000,
          verticalPosition: 'top',
          horizontalPosition: 'right',
          panelClass: ['warn-snackbar']
        })
        // alert("Item already exist in your Cart");
      }else{
        this.myProductStorage.push(event);
        localStorage.setItem('cart', JSON.stringify(this.myProductStorage));
      }
     }
    else {
      this.myProductStorage.push(event);
      localStorage.setItem('cart', JSON.stringify(this.myProductStorage));
    }
  }

}

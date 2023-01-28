import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts (){
    return this.http.get("https://fakestoreapi.com/" +'products')
  }
  getAllCategories(){
    return this.http.get("https://fakestoreapi.com/" +'products/categories')
  }
  getFilterCategory(keyWord:string){
    return this.http.get("https://fakestoreapi.com/" +'products/category/'+keyWord)
  }
  getProdDetailsID(id:any){
    return this.http.get("https://fakestoreapi.com/" +'products/'+id)
  }
}

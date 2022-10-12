import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Banner } from './model/banner';
import { Product, Order } from './model/product';
import { Subcategory } from './model/subcategory';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");


  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<Product>("http://iphosam.co.tz/api/products")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getPostOrder(data:Order){

    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(data);
    console.log(body)
    // return this.http.post<Person>(this.baseURL + 'people', body,{'headers':headers})


    return this.http.post<Order>("http://127.0.0.1:8000/api/orders",
    body,
    {
      'headers':headers
    }

    );
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }

  getBannner(){
    return this.http.get<Banner>("http://iphosam.co.tz/api/banners")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getSubCategory(){
    return this.http.get<Subcategory>("http://iphosam.co.tz/api/sub_categories")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  public cartItemList : any =[]



  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }


}

import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs";
import {Product} from "./product";
import {Products} from "./mock-products";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct(id: number): Observable<Product> {
    return of (Products.find(product => product.id === id));
  }
  getFilteredProducts(categoryId:number,min:number,max:number): Observable<Product[]>{
    let products = Products.filter(product => product.categoryId === categoryId && product.price >= min && product.price <= max);
    return of (products);
  }
}

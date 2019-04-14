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
  getCategorizedProducts(categoryId:number): Observable<Product[]>{
    return of (Products.filter(product => product.categoryId === categoryId));
  }
  getFilteredProducts(categoryId:number,min:number,max:number,amount:number): Observable<Product[]>{
    let products = Products.filter(product => product.categoryId === categoryId && product.price >= min && product.price <= max);
    if (products.length > amount) products.length = amount;
    return of (products);
  }
}
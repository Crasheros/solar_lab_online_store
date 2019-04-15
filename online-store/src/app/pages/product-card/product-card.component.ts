import { Component, DoCheck } from '@angular/core';
import {ProductService} from "../../product.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements DoCheck {
  product:any;
  imageId:number = 0;
  amountProduct = 1;
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
  ) { }

  ngDoCheck(){
    this.getProduct();
  }

  getProduct(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.ProductService.getProduct(id)
      .subscribe(product => this.product = product);
  }
  addAmountToCart(amount:number){
    if (amount === 0) return;
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart.products.some(prod => prod.id === this.product.id)) {
      cart.products.forEach(prod => {
        if (prod.id === this.product.id) prod.count += amount;
      });
    } else {
      cart.products.push(this.product);
      cart.products[cart.products.length-1].count = amount;
    }
    this.syncCartData(cart);
  }

  syncCartData(cart:any){
    cart.count = 0;
    cart.total = 0;
    cart.products.forEach(product => {
      cart.count += product.count;
      cart.total += product.price * product.count;
    });
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  changeAmount(amount:number){
    this.amountProduct = amount;
  }
}

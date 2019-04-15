import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-wrapper',
  templateUrl: './cart-wrapper.component.html',
  styleUrls: ['./cart-wrapper.component.scss']
})
export class CartWrapperComponent implements OnInit {
  cart:any;
  constructor() { }

  ngOnInit() {
    this.initCart();
  }

  initCart(){
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

}

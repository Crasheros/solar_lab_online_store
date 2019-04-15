import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product :any;
  constructor() { }

  ngOnInit() {
  }
  addToCart(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.products.push(this.product);
    cart.products[cart.products.length-1].count = 1;
    cart.count = 0;
    cart.total = 0;
    cart.products.forEach(product => {
      cart.count += product.count;
      cart.total += product.price * product.count;
    });
    localStorage.setItem('cart',JSON.stringify(cart));
  }

}

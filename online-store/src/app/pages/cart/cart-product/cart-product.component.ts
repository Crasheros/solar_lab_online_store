import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() product:any;
  @Output() updateCart = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  updateAmount(amount:number){
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.products.forEach(product => {
      if (product.id === this.product.id) product.count = amount;
    });
    this.syncCartData(cart);
    this.updateCart.emit();
  }

  deleteProduct(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.products.forEach((product,i) => {
      if (product.id === this.product.id) cart.products.splice(i,1);
    });
    this.syncCartData(cart);
    this.updateCart.emit();
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

}

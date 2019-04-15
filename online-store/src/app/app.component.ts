import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navBarState = false;
  toggleBlackBg( state:any) :void{
    this.navBarState = state;
  }
  constructor() {}
  initCart(){
    if (localStorage.cart !== undefined) return;
    let cart = {
      count:0,
      total:0,
      products:[]
    };
    localStorage.setItem('cart',JSON.stringify(cart));
  }
  ngOnInit(){
    this.initCart();
  }

}

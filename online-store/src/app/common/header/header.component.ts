import {Component, EventEmitter, Output,DoCheck} from '@angular/core';
import {Categories} from "../../mock-categories";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements DoCheck {
  categories = Categories;
  burgerState = false;
  @Output() showBlackBg = new EventEmitter();
  cart :number;
  constructor() { }

  ngDoCheck(){
    let storage = JSON.parse(localStorage.getItem('cart'));
    this.cart = storage.count;
  }

}

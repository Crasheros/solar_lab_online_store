import { Component, OnInit } from '@angular/core';
import {Products} from "../../../mock-products";

@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.scss']
})
export class ProductsWrapperComponent implements OnInit {
  products = Products;

  constructor() { }

  ngOnInit() {
  }

}

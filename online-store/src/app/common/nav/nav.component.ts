import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Products} from '../../mock-products';
import {Categories} from "../../mock-categories";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  products = Products;
  categories = Categories;
  filter: any = {name: ''};
  @Input() navBarState: any;
  @Output() hideBlackBg = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}

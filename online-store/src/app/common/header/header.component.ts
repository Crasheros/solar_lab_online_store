import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Categories} from "../../mock-categories";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories = Categories;
  burgerState = false;
  @Output() showBlackBg = new EventEmitter();
  constructor() { }
  ngOnInit() {
  }

}

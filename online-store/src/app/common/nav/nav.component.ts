import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Products} from '../../mock-products';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  products = Products;
  filter: any = {name: ''};
  @Input() navBarState: any;
  @Output() hideBlackBg = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}

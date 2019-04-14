import {Component, Input, OnInit} from '@angular/core';
import {Categories} from "../../mock-categories";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() navBarState: any;
  categories = Categories;
  constructor() { }

  ngOnInit() {

  }

}

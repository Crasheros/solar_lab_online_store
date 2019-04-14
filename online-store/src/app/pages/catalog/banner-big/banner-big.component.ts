import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner-big',
  templateUrl: './banner-big.component.html',
  styleUrls: ['./banner-big.component.scss']
})
export class BannerBigComponent {
  @Input() categoryName:string;
  constructor() { }
}

import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../product.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  product:any;
  imageId:number = 0;
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.ProductService.getProduct(id)
      .subscribe(product => this.product = product);
  }

}

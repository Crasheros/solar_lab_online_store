import {Component,  OnInit,DoCheck} from '@angular/core';
import {ProductService} from "../../../product.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.scss']
})
export class ProductsWrapperComponent implements DoCheck {
  products = [];
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
  ) { }

  ngDoCheck(){
    this.getProducts();
  }
  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ProductService.getCategorizedProducts(id)
      .subscribe(products => this.products = products);
  }

}

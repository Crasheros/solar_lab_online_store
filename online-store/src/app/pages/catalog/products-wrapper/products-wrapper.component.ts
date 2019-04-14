import {Component,  Input,DoCheck} from '@angular/core';
import {ProductService} from "../../../product.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.scss']
})
export class ProductsWrapperComponent implements DoCheck {
  @Input() productFilter:any;
  products = [];
  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
  ) { }

  ngDoCheck(){
    this.getProducts();
    console.log(this.productFilter);
  }
  getProducts(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ProductService.getFilteredProducts(id,this.productFilter.price[0],this.productFilter.price[1],this.productFilter.amount)
      .subscribe(products => this.products = products);
  }

}

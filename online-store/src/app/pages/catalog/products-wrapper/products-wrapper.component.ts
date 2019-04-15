import {Component, Input, DoCheck, Output, EventEmitter} from '@angular/core';
import {ProductService} from "../../../product.service";
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-wrapper',
  templateUrl: './products-wrapper.component.html',
  styleUrls: ['./products-wrapper.component.scss']
})
export class ProductsWrapperComponent implements DoCheck {
  @Input() productFilter:any;
  @Input() page:number;
  @Output() pageAmount = new EventEmitter();
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
    this.ProductService.getFilteredProducts(id,this.productFilter.price[0],this.productFilter.price[1])
      .subscribe(products => this.products = products);
    this.pageAmount.emit(this.products.length);
  }

}

import { Component, OnInit,Input } from '@angular/core';
import {CategoryService} from "../../../category.service";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() product:any;
  category:any;
  constructor(
    private CategoryService:CategoryService,
  ) { }

  ngOnInit() {
    this.getCategory(this.product.categoryId);
  }
  getCategory(categoryId:number):void{
    this.CategoryService.getCategory(categoryId)
      .subscribe(category => this.category = category);
  }

}

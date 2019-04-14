import {Component, OnInit,DoCheck} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit,DoCheck {
  category:any;
  productFilter:any;
  constructor(
    private route: ActivatedRoute,
    private CategoryService: CategoryService,
  ) {
  }

  ngOnInit(){
  }

  ngDoCheck(){
    this.getCategory();
  }

  getCategory(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.CategoryService.getCategory(id)
      .subscribe(category => this.category = category);
  }

  getFilterData(data):void {
    this.productFilter = data;
  }

}

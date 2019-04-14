import {Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() updateFilter = new EventEmitter();
  val = [3000, 15000];
  sort = {
    types: [
      {
        label: 'По наименованию',
        value: ['name',false]
      }, {
      label: 'Дорогие сверху',
      value: ['price',true]
      }, {
      label: 'Дешевые сверху',
      value: ['price',false]
    }],
    selected: ['name',false]
  };
  productsAmount = {
    types: [{
      label: 1,
      value:1,
    }, {
      label: 3,
      value:3
    }, {
      label: 5,
      value: 5,
    }],
    selected: 5,
  };
  constructor() {
  }

  collectFilterData(){
    this.val = [+this.val[0], +this.val[1]];
    let data = {
      price: this.val,
      sort:this.sort.selected,
      amount:this.productsAmount.selected
    };
    this.updateFilter.emit(data);
  }

  ngOnInit() {
    this.collectFilterData();
  }
}

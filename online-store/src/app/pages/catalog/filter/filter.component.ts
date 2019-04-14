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
      label: 6,
      value:6,
    }, {
      label: 14,
      value:14
    }, {
      label: 22,
      value: 22,
    }],
    selected: 22,
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

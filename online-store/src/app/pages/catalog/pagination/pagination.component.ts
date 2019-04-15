import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() productFilter:any;
  @Input() productAmount:any;
  @Output() updatePage = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}

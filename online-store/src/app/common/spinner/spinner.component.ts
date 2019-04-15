import {Component, EventEmitter, OnInit,Input, Output} from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() amount:number;
  @Output() productAmount = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  increaseAmount(){
    if (this.amount < 9) this.amount++;
    this.productAmount.emit(this.amount);
  }

  decreaseAmount(){
    if (this.amount > 0) this.amount--;
    this.productAmount.emit(this.amount);
  }

}

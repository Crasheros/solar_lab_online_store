import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() product:any;
  @Output() updateImg = new EventEmitter();
  imageId = 0;
  constructor() { }
  changeImg(nextImg):void {
    if (nextImg) {

     if (this.imageId >= this.product.galleryUrls.min.length-1) {
       this.imageId = 0;
     } else {
       this.imageId++;
     }

    } else {

      if (this.imageId <= 0) {
        this.imageId = this.product.galleryUrls.min.length-1;
      } else {
        this.imageId--;
      }

    }
    this.updateImg.emit(this.imageId);
  }

  ngOnInit() {
  }

}

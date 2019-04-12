import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBigComponent } from './banner-big.component';

describe('BannerBigComponent', () => {
  let component: BannerBigComponent;
  let fixture: ComponentFixture<BannerBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

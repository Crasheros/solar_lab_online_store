import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navBarState = false;
  toggleBlackBg( state:any) :void{
    this.navBarState = state;
  }
  href = this.router.url;

  constructor(private router: Router) {}

  ngOnInit() {
  }
}

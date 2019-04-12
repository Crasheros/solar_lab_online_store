import { Component,Input } from '@angular/core';

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
}

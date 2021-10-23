import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './route-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent implements OnInit {
  constructor(
    private title: Title
    ) {
      title.setTitle("ModernaMedia Digitalbyrå for bedrifter. Bedrift nettsider, grafisk design og seo i Norge");
    }

   ngOnInit() {
  }  

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}


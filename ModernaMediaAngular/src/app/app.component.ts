import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // prepareRoute(outlet: RouterOutlet) {
  //   return (
  //     outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
  //   );
  // }
}

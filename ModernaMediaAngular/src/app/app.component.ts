import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, ToastComponent],
})
export class AppComponent {
  constructor() {}

  // prepareRoute(outlet: RouterOutlet) {
  //   return (
  //     outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
  //   );
  // }
}

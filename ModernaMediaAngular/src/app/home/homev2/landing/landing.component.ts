import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', './landing.desktop.component.scss'],
  standalone: true,
})
export class LandingComponent {
  constructor(private scroller: ViewportScroller) {}

  scrollToId(event: Event, id: string) {
    event.preventDefault();
    this.scroller.scrollToAnchor(id);
  }
}

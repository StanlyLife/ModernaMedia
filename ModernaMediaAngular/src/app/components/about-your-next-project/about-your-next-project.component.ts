import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about-your-next-project',
  templateUrl: './about-your-next-project.component.html',
  styleUrls: [
    './about-your-next-project.component.scss',
    './about-your-next-project.desktop.component.scss',
  ],
  standalone: true,
})
export class AboutYourNextProjectComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // Scrolls to the contact form when it is on the page; otherwise the
  // link's href takes the visitor to /kontakt.
  scrollToContact(event: Event) {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const element = document.getElementById('kontakt');
    if (element) {
      event.preventDefault();
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

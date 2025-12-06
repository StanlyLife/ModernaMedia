import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about-your-next-project',
  templateUrl: './about-your-next-project.component.html',
  styleUrls: [
    './about-your-next-project.component.scss',
    './about-your-next-project.desktop.component.scss',
  ],
  standalone: true,
  imports: [CommonModule],
})
export class AboutYourNextProjectComponent {
  constructor(
    private sanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  imageCdn = environment.img;

  scrollToContact(event: Event) {
    event.preventDefault();
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById('kontakt');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Fallback: navigate to /kontakt if section not found
        window.location.href = '/kontakt';
      }
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss', './landing.desktop.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class LandingComponent {
  constructor(
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller
  ) {}
  imageCdn = environment.img;

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  scrollToId(id: string) {
    this.scroller.scrollToAnchor(id);
  }
}

import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-tjenester-header',
  templateUrl: './tjenester-header.component.html',
  styleUrls: [
    './tjenester-header.component.scss',
    './tjenester-header.desktop.component.scss',
  ],
  standalone: true,
  imports: [CommonModule],
})
export class TjenesterHeaderComponent {
  constructor(
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller
  ) {}
  imageCdn = environment.img;
  @Input() data: any = {
    background: {
      alt: '',
      src: '../../../../assets/Images/Tjenester/header/mac.jpg',
    },
    icon: {
      alt: '',
      src: '../../../../assets/Images/Icons/tjenester/developer.svg',
    },
    title: 'Utvikling',
    subtitle: 'Vi skaper nettsider og programvare som øker omsetningen din',
    links: [
      { title: 'Tjenester', url: 'services' },
      { title: 'Prosess', url: 'process' },
      { title: 'System', url: 'system' },
      { title: 'Hjemmesider', url: 'website' },
    ],
  };
  scrollToId(id: string) {
    this.scroller.scrollToAnchor(id);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

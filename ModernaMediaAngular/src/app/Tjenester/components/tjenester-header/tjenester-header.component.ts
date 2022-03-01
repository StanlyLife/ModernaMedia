import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-tjenester-header',
  templateUrl: './tjenester-header.component.html',
  styleUrls: [
    './tjenester-header.component.scss',
    './tjenester-header.desktop.component.scss',
  ],
})
export class TjenesterHeaderComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  imageCdn = environment.img;
  ngOnInit(): void {}
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
    subtitle: 'Vi skaper nettsider og system som øker omsetningen din',
    links: [
      { title: 'Tjenester', url: '/#services' },
      { title: 'Prosess', url: '/#process' },
      { title: 'System', url: '/#system' },
      { title: 'Hjemmesider', url: '/#website' },
    ],
  };
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

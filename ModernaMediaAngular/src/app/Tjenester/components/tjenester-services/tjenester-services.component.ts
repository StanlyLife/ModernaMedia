import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-tjenester-services',
  templateUrl: './tjenester-services.component.html',
  styleUrls: [
    './tjenester-services.component.scss',
    './tjenester-services.desktop.component.scss',
  ],
})
export class TjenesterServicesComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  imageCdn = environment.img;
  ngOnInit(): void {}
  @Input() data: any = {
    title: 'Systemer og hjemmesider',
    subtitle: 'Våre tjenester for bedrifter',
    headerText:
      'Våre systemer og hjemmesider er bygget helt fra bunn med banebrytende teknologi som SPA rammeverk og full cloud-service',
    services: [
      {
        title: 'System',
        text: 'virtual innovate interfaces front-end iterate networksfront-end unleash communities',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/hjemmeside-bedrift.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Hjemmeside',
        text: 'virtual innovate interfaces front-end iterate networksfront-end unleash communities',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/system-bedrift.svg',
          alt: '',
        },
        link: '',
      },
    ],
  };
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

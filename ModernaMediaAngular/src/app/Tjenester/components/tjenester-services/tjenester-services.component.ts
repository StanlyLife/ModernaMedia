import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-tjenester-services',
  templateUrl: './tjenester-services.component.html',
  styleUrls: [
    './tjenester-services.component.scss',
    './tjenester-services.desktop.component.scss',
  ],
  standalone: true,
  imports: [CommonModule],
})
export class TjenesterServicesComponent {
  constructor(private sanitizer: DomSanitizer) {}
  imageCdn = environment.img;
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

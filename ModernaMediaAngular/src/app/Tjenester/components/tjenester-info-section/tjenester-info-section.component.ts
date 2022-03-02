import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-tjenester-info-section',
  templateUrl: './tjenester-info-section.component.html',
  styleUrls: [
    './tjenester-info-section.component.scss',
    './tjenester-info-section.desktop.component.scss',
  ],
})
export class TjenesterInfoSectionComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  imageCdn = environment.img;
  ngOnInit(): void {}
  @Input() data = {
    color: 'grey',
    img: {
      url: '../../../../assets/Images/Tjenester/header/design (1).jpg',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Øk bedriftens omsettning',
      title: 'Med nettside for bedriften',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: [
      '1IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '2IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '3IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
    ],
  };
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

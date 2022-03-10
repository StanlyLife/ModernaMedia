import { Renderer2, Component, Input, OnInit, Inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-tjenester-info-section',
  templateUrl: './tjenester-info-section.component.html',
  styleUrls: [
    './tjenester-info-section.component.scss',
    './tjenester-info-section.desktop.component.scss',
  ],
})
export class TjenesterInfoSectionComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private router: Router
  ) {}
  imageCdn = environment.img;

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = `application/ld+json`;
    script.text = `
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${this.router.url}"
          },
          "headline": "${this.data.header.title}",
          "image": "${this.data.img.url}",
          "author": {
            "@type": "Organization",
            "name": "Moderna Media"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Moderna Media",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ModernaMedia.no/assets/Images/LogoV2/modernamedia-mid-large.png"
            }
          },
          "datePublished": "${'2022-03-03'}",
          "dateModified": "${formatDate(new Date(), 'yyyy-MM-dd', 'en')}"
        }
    `;

    this._renderer2.appendChild(this._document.body, script);
  }

  @Input() data = {
    color: 'grey',
    img: {
      url: '../../../../assets/Images/Tjenester/header/design (1).jpg',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Øk bedriftens omsetning',
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

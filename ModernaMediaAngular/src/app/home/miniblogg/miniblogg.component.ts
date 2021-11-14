import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-miniblogg',
  templateUrl: './miniblogg.component.html',
  styleUrls: [
    './miniblogg.component.scss',
    './miniblogg.desktop.component.scss',
  ],
})
export class MinibloggComponent implements OnInit {
  imageCdn = environment.img;

  theme: string = 'dark';

  blogs = {
    1: {
      title: '100% risikofritt',
      alt: 'fornøydgaranti på kjøp av nettsider, seo og design',
      href: '',
      theme: this.theme,
      content: '',
    },
  };
  constructor(private sanitizer: DomSanitizer) {}

  transformYourHtml(htmlTextWithStyle) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlTextWithStyle);
  }

  ngOnInit(): void {
    this.blogs[1]['content'] =
      'Vi starter prosessen med tett kommunikasjon for å kartlegge ønsker å behov for bedriften uavhengig om dere trenger en hjemmeside for bedriften eller bare en enkel SEO analyse. Deresom dere ikke er 100% fornøyd når produktet er ferdig vil vi refundere fult beløp. Dette kaller vi for Helt fornøyd eller helt gratis garantien vår';
  }
}

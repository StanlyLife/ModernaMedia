import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService, SITE_ORIGIN } from './../../../services/seo.service';
import { SeoUtils } from './../../../../utils/SeoUtils';
import { V2_BLOCKS } from '../../../v2/v2-blocks';
import { V2MagnetComponent } from '../../../v2/v2-magnet.component';
import { HOME_FAQ_V2, IMG, SERVICE_PRICES, SERVICES } from '../../../v2/v2-data';

const HERO = '/assets/img/home/digitalbyra-oslo-hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [RouterLink, V2MagnetComponent, ...V2_BLOCKS],
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  img = IMG;
  checks = ['Fast pris før oppstart', 'Svar innen 2 timer', '100 % fornøyd-garanti'];
  services = SERVICES;
  testimonials = ['sola', 'fjerdingby', 'ostlandet', 'marbella'];
  prices = SERVICE_PRICES;
  faq = HOME_FAQ_V2;
  usps = [
    {
      img: 'fornoyd-kunde-640.webp',
      alt: 'Fornøyd kunde som gir tommel opp',
      icon: 'shield',
      title: '100 % fornøyd-garanti',
      text: 'Som vår kunde blir du garantert synlighet og måloppnåelse. Ellers får du pengene tilbake.',
    },
    {
      img: 'team-digitalbyra-800.webp',
      alt: 'Team som samarbeider om et digitalt prosjekt',
      icon: 'users',
      title: 'Eksperter med objektiv data',
      text: 'Våre moderne og løsningsorienterte metoder hjelper deg å oppnå suksess, synlighet og vekst på nett.',
    },
    {
      img: 'resultater-vekst-800.webp',
      alt: 'Kvinne som jobber med resultater og vekst',
      icon: 'bars',
      title: 'Målrettet vekst med resultater',
      text: 'Med tjenester som fokuserer på det som skaper resultater gjør vi det enkelt å oppnå dine mål.',
    },
  ];
  about = [
    ['Vår visjon', 'Å være Norges beste digitalbyrå og den mest effektive leverandøren av digitale tjenester for norske bedrifter.'],
    ['Vårt mål', 'Modernisere, digitalisere og synliggjøre bedrifter med uutnyttet potensial ved hjelp av våre digitale tjenester.'],
    ['Vår historie', 'Vi har selv vært kunde, og så et hull i markedet for aktører som leverer høy kvalitet til en realistisk og fornuftig pris.'],
  ];

  ngOnInit() {
    this.seo.updateSeo({
      title: SeoUtils.home.title,
      description: SeoUtils.home.description,
      url: `${SITE_ORIGIN}/`,
      type: 'website',
    });

    this.seo.preloadImage(
      `${HERO}-1280.webp`,
      [640, 960, 1280, 1920].map((w) => `${HERO}-${w}.webp ${w}w`).join(', '),
      '100vw'
    );

    this.seo.addStructuredData(
      this.seo.createHomeSchema(
        { title: SeoUtils.home.title, description: SeoUtils.home.description },
        HOME_FAQ_V2
      )
    );
  }
}

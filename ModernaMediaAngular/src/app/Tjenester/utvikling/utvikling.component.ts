import { Component, OnInit } from '@angular/core';
import { SeoService } from './../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-utvikling',
  templateUrl: './utvikling.component.html',
  styleUrls: ['./utvikling.component.scss'],
})
export class UtviklingComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(
      'Utvikling | Hjemmesider | System | applikasjoner | for bedrifter - Moderna Media digitalbyrå'
    );
  }

  ngOnInit() {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Skreddersydde hjemmesider, system og applikasjoner for bedrifter av top kvalitet kan du få hos Moderna Media digitalbyrå',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia',
    });
  }

  dataHeader: any = {
    background: {
      alt: '',
      src: '../../../../assets/Images/Tjenester/header/utvikling/mac.webp',
    },
    icon: {
      alt: '',
      src: '../../../../assets/Images/Icons/tjenester/developer.svg',
    },
    title: 'Nettsider & System',
    subtitle:
      'Skreddersydde hjemmesider, system og applikasjoner for bedrifter',
    links: [
      { title: 'services', url: 'services' },
      { title: 'webutvikling', url: 'web utvikling' },
      { title: 'systemutvikling', url: 'system utvikling' },
    ],
  };
  dataServices: any = {
    title: 'Web utvikling | System utvikling',
    subtitle: 'Våre utviklingstjenester for bedrifter.',
    headerText:
      'Våre systemer og hjemmesider er bygget helt fra bunn med banebrytende teknologi som SPA rammeverk og full cloud-service',
    services: [
      {
        title: 'Hjemmeside for bedrift',
        text: 'Invester i en nettside for bedriften av topp kvalitet',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/hjemmeside-bedrift.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Sytemer for bedrifter',
        text: 'Automatiser daglige gjøremål eller gjør livet enklere for kundene med våre skreddersydde system.',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/system-bedrift.svg',
          alt: '',
        },
        link: '',
      },
    ],
  };
  dataInfoSection = {
    color: 'gray',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/utvikling/utvikling.jpg',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Øk online tilstedeværelsen med',
      title: 'Hjemmeside for bedriften',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: ['', '', ''],
  };
  dataInfoSection2 = {
    color: 'grey',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/utvikling/system.jpg',
      alt: '',
    },
    position: 'left',
    header: {
      subtitle: 'Spar kostnader med',
      title: 'System for bedriften',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: [
      '1IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '2IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '3IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
    ],
  };
}

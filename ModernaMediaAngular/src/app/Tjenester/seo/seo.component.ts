import { Component, OnInit } from '@angular/core';
import { SeoService } from './../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss'],
})
export class SEOComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(
      'Søkemotor optimalisering for bedriften din av Moderna Media SEO byrå'
    );
  }

  ngOnInit() {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Moderna Media utvikler nettsider og system for bedrifter som ønsker et eget nettsted, system eller app. Vi er også eksperter på SEO, Google analytics, google search og ikke minst design og web design. Et digitalbyrå med alt på et sted!',
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
      src: '../../../../assets/Images/Tjenester/header/seo/seo4.jpg',
    },
    icon: {
      alt: '',
      src: '../../../../assets/Images/Icons/tjenester/søkemotoroptimalisering byrå.svg',
    },
    title: 'søkemotoroptimalisering',
    subtitle:
      'Vi øker synlighet, vekst og omsetning gjennom søkemotor optimalisering for bedriften din',
    links: [
      { title: 'tjenester', url: 'services' },
      { title: 'teknisk seo', url: 'tekniskseo' },
      { title: 'off-page seo', url: 'offpageseo' },
      { title: 'innholdsproduksjon', url: 'innholdsproduksjon' },
    ],
  };
  dataServices: any = {
    title: 'Web utvikling | System utvikling',
    subtitle: 'Våre utviklingstjenester for bedrifter.',
    headerText:
      'Våre systemer og hjemmesider er bygget helt fra bunn med banebrytende teknologi som SPA rammeverk og full cloud-service',
    services: [
      {
        title: 'Sytemer for bedrifter',
        text: 'Automatiser daglige gjøremål eller gjør livet enklere for kundene med våre skreddersydde system.',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/teknisk seo.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Hjemmeside for bedrift',
        text: 'Invester i en nettside for bedriften av topp kvalitet',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/seo innholdsproduksjon.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Sytemer for bedrifter',
        text: 'Automatiser daglige gjøremål eller gjør livet enklere for kundene med våre skreddersydde system.',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/off page seo.svg',
          alt: '',
        },
        link: '',
      },
    ],
  };
  dataInfoSection = {
    color: 'grey',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/utvikling/utvikling.jpg',
      alt: '',
    },
    position: 'left',
    header: {
      subtitle: 'Spar kostnader med',
      title: 'Teknisk SEO',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: [
      '1IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '2IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '3IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
    ],
  };
  dataInfoSection2 = {
    color: 'gray',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/seo/backlink søkemotor optimalisering.jpg',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Bygg en sterk merkevare med',
      title: 'Off-page SEO',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: ['', '', ''],
  };
  dataInfoSection3 = {
    color: 'gray',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/seo/innholdsproduksjon for søkemotor optimalisering.jpg',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Øk rangeringen med innholdsproduksjon',
      title: 'On-page SEO',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: ['', '', ''],
  };
}

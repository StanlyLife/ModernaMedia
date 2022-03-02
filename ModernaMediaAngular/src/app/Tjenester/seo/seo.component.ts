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
      'Moderna Media - Digitalbyrå for bedriftens hjemmeside, design og seo'
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
      src: '../../../../assets/Images/Tjenester/header/design (1).jpg',
    },
    icon: {
      alt: '',
      src: '../../../../assets/Images/Icons/tjenester/grafisk_design.svg',
    },
    title: 'Design',
    subtitle: 'Vi skaper vakre design med kunden i fokus',
    links: [
      { title: 'Tjenester', url: 'services' },
      { title: 'Grafisk design', url: 'grafisk_design' },
      { title: 'Web design', url: 'web_design' },
      { title: 'Logo design', url: 'logo_design' },
    ],
  };
  dataServices: any = {
    title: 'Web Design | Logo Design | Grafisk Design',
    subtitle: 'Våre designtjenester for bedrifter.',
    headerText:
      'Våre systemer og hjemmesider er bygget helt fra bunn med banebrytende teknologi som SPA rammeverk og full cloud-service',
    services: [
      {
        title: 'Logo design',
        text: 'virtual innovate interfaces front-end iterate networksfront-end unleash communities',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/logo_design.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Web design',
        text: 'virtual innovate interfaces front-end iterate networksfront-end unleash communities',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/hjemmeside-bedrift.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Grafisk design',
        text: 'virtual innovate interfaces front-end iterate networksfront-end unleash communities',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/grafisk_design.svg',
          alt: '',
        },
        link: '',
      },
    ],
  };
  dataInfoSection = {
    color: 'gray',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/design (2).jpg',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Uttrykk deres verider med',
      title: 'Grafisk design',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: [
      '1IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '2IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '3IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
    ],
  };
  dataInfoSection2 = {
    color: 'grey',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/web_design_oslo.jpg',
      alt: '',
    },
    position: 'left',
    header: {
      subtitle: 'Voks organisk med god',
      title: 'Web design',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: [
      '1IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '2IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '3IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
    ],
  };
  dataInfoSection3 = {
    color: 'gray',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/logo designer i oslo som holder en iphone.jpg',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Bygg en sterk merkevare med',
      title: 'Logo for bedriften',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: [
      '1IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '2IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
      '3IPhone A/B testing research & development buzz leverage disruptive virality startup. Termsheet graphical user interface iPad funding long tail customer startup buyer beta. Gamification infrastructure bandwidth creative customer holy grail strategy channels value proposition iPad graphical user interface disruptive business plan niche market. Investor success bootstrapping scrum project twitter bandwidth mass market.',
    ],
  };
}

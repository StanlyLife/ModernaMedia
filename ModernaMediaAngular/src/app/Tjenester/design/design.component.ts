import { Component, OnInit } from '@angular/core';
import { SeoService } from './../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})
export class DesignComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(
      'Design - | Logo design | Webdesign | Grafisk design | Moderna Media'
    );
  }

  ngOnInit() {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: '',
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
      src: '../../../../assets/Images/Tjenester/header/Design for bedrifter.jpg',
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
      'Et godt design skal øke en bedrifts verdi, tillit og tilstedeværelse gjennom et godt førsteinntrykk. Hvilket førsteintrykk gir bedriften din?',

    services: [
      {
        title: 'Logo design',
        text: 'En logo skal bygge tillit ved å validere og gjenspeile bedriftens profesjonalitet.',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/logo_design.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Web design',
        text: 'Et nyttig webdesign skal hjelpe brukeren å oppnå sine mål enklest mulig.',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/hjemmeside-bedrift.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Grafisk design',
        text: 'Et godt grafisk design bruker statistikk til å øke omsettning ved hjelp av ulike metoder.',
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
      url: '../../../../assets/Images/Tjenester/info-section/design/grafisk_design.jpg',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Uttrykk deres verider med',
      title: 'Grafisk design',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: [
      'Grafisk design er kunsten å presentere visuelt innhold som kommuniserer en melding eller et innhold. Grafisk design kan være mye, blant annet en reklame i avis eller magasin, det kan være en plakat for en film eller et bedriftskort. For å gjøre det enkelt så kan du finne grafisk design overalt, blant annet på cola-flasken i kjøleskapet eller potetgullposen i sofaen.',
      'Vi mener at design skal være rimelig, men at det er en investering. Faktisk mener vi i Moderna Media at alle våre tjenester og produkter er en investering. Dersom bedriften bruker flere tusen kroner på å annonsere i VG er det veldig dumt å bruke et grafisk design som ble tegnet i paint på fem minutter. På samme måte er det dumt å bruke et design du har betalt 500kr for.',
      'Et godt grafisk design bruker statistikk og faktabasert informasjon for å oppnå størst og best mulig konvertering. Et eksempel på dette er da google byttet farge på lenkene i søket, faktisk byttet de bare mellom ulike blåfarger. Det ble testet omtrent 50 forskjellige blåfarger og resultatet var en ekstra omsetning på 200 millioner dollar.',
      'Hos Moderna Media tar vi alt i betraktning for å gi bedriften din det beste grafiske designet slik at du ikke legger penger igjen på bordet!',
    ],
  };
  dataInfoSection2 = {
    color: 'grey',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/design/web_design_oslo.jpg',
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
      url: '../../../../assets/Images/Tjenester/info-section/design/logo design.jpg',
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

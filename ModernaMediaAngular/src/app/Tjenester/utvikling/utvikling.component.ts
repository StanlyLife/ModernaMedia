import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { SeoUtils } from 'src/utils/SeoUtils';

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
    title.setTitle(SeoUtils.TjenesterUtvikling.title);
  }

  ngOnInit() {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: SeoUtils.TjenesterUtvikling.description,
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
      src: '../../../../assets/Images/Tjenester/header/utvikling/1280/Bedrifts nettside og datasytem for bedrifter.webp',
    },
    icon: {
      alt: '',
      src: '../../../../assets/Images/Icons/tjenester/developer.svg',
    },
    title: 'Nettsider & Programvare',
    subtitle:
      'Skreddersydde hjemmesider, programvare og applikasjoner for bedrifter',
    links: [
      { title: 'Tjenester', url: 'services' },
      { title: 'Webutvikling', url: 'web utvikling' },
      { title: 'Programvare', url: 'system utvikling' },
    ],
  };
  dataServices: any = {
    title: 'Web utvikling | Programvare utvikling',
    subtitle: 'Våre utviklingstjenester for bedrifter.',
    headerText:
      'Våre hjemmesider og programvare er bygget helt fra bunn med banebrytende teknologi som SPA rammeverk og full cloud-service',
    services: [
      {
        title: 'Hjemmeside for bedrift',
        text: 'Invester i en nettside for bedriften. Av topp kvalitet.',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/hjemmeside-bedrift.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Sytemer for bedrifter',
        text: 'Automatiser daglige gjøremål eller gjør livet enklere for kundene med vår skreddersydde programvare.',
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
      url: '../../../../assets/Images/Tjenester/info-section/utvikling/640/utvikling av hjemmeside for bedrifter i oslo.webp',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Øk din online tilstedeværelse med en',
      title: 'Hjemmeside for bedriften din',
    },
    button: {
      text: 'Les mer om hjemmesider',
      url: '/tjenester/bedrift/utvikling/hjemmeside-bedrift',
    },
    text: [
      'Uavhengig av industri, er en bedrifts online tilstedeværelse, altså nettsiden, bærekraften for suksess. En nettside består selvfølgelig av flere organ, men selve hjertet ligger i hjemmesiden. Det er på hjemmesiden du formidler visjonen, målet, spesialiteten, tjenestene, historien og stemmen til bedriften din. Her får kundene dine dannet seg et samlet bilde av profesjonalitet, verdier, arbeidsmetoder og identitet. ',
      'Som de fleste, har du sikkert besøkt mange nettsider på utkikk etter diverse tjenester. Kanskje var det en restaurant du søkte menyen til, men nettsiden deres manglet den. Eller var det klær du skulle kjøpe, men nettsiden var så dårlig utformet at du ikke turte bestille? ',
      'En nettside skal enkelt sagt fungere som en presis presentasjon av din bedrift. Alt dine kunder måtte være på jakt etter skal være lett tilgjengelig og inntakelig. Dersom hjemmesiden din er laget slik at viktig informasjon som tjenester, åpningstider, ofte stilte spørsmål og svar er lett tilgjengelig slipper du den samme telefon samtalen flere ganger. Hjemmesiden alene vil selvfølgelig ikke dyrke tillit og vekst, men en profesjonell og komplett nettside vil.',
      'En velbygget nettside kommer med flere verdifulle gevinster, som: ',
    ],
    listItems: [
      'Styrket merkevare',
      'Økte leads',
      'God søkemotoroptimalisering',
      'Organisk trafikk ',
      'Økt organisk vekst ',
    ],
    textSecond: [
      'En nettside kan bygges på en måte som sparer tid og penger. Hos digitalbyrået Moderna Media setter vi kundene først, og jobber fortløpende for at du får en nettside skreddersydd til din bedrift og din prisklasse. Alt i alt har en bedrift behov for en sikker, enkel, kompetent og innbydende hjemmeside. Husk, en hjemmeside er ikke en kostand, men en investering!',
    ],
  };
  dataInfoSection2 = {
    color: 'grey',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/utvikling/640/utvikling av Programvare for bedrifter.webp',
      alt: '',
    },
    position: 'left',
    header: {
      subtitle: 'Spar kostnader med',
      title: 'Programvare for bedriften din',
    },
    button: {
      text: 'Les mer om programvare',
      url: '/tjenester/bedrift/utvikling/programvare',
    },
    text: [
      'En programvare er fellesbetegnelse for flere tjenester som sammen betjener en digital plattform. I dag er det gode muligheter for å få utviklet din egen skreddersydde programvare som har gode løsninger til de utfordringene og kravene din bedrift har.',
      'Vi kjenner fra erfaring at de fleste som driver bedrifter bruker programvare som ikke er helt optimalt, om du driver en restaurant og bruker et POS system som ikke er optimalt, om du bruker et dyrt CRM system som er lite oversiktlig eller om du driver i bygg og anleggsbransjen og bruker et KS system som er vanskelig å bruke og ikke gir deg den dokumentasjonen du trenger og dine ansatte ikke liker. Vi i Moderna kan tilby deg din egen skreddersydde løsning, slik at du får maks ut av driften.',
      'En god programvare:',
    ],
    listItems: [
      'Kan forbedre produktivitet og effektivitet',
      'Vil gi deg Skreddersydde løsninger til dine problemer.',
      'Vil gi deg økt sikkerhet.',
      'Vil gi deg et godt konkurransefortrinn.',
    ],
    textSecond: [
      'Vårt mål er å gjøre hverdagen enklere for deg og dine kunder. Om du blant annet har behov for et bookingsystem, kundebehandlingssystem, eller drift-og logikksystem er vi her for deg og vil levere hva du trenger etter deres behov.',
    ],
  };
}

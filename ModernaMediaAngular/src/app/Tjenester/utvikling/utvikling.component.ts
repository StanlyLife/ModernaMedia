import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
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
      'Hjemmesider | Programvare| applikasjoner | for bedrifter - Moderna Media Digitalbyrå'
    );
  }

  ngOnInit() {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Skreddersydde hjemmesider, programvare og applikasjoner for bedrifter av top kvalitet kan du få hos Moderna Media digitalbyrå. Vi bygger alt fra bunn med neste-generasjons teknologi som spa-rammeverk og utnytter fulle cloud løsninger!',
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
    title: 'Nettsider & System',
    subtitle:
      'Skreddersydde hjemmesider, system og applikasjoner for bedrifter',
    links: [
      { title: 'Tjenester', url: 'services' },
      { title: 'Webutvikling', url: 'web utvikling' },
      { title: 'Systemutvikling', url: 'system utvikling' },
    ],
  };
  dataServices: any = {
    title: 'Web utvikling | System utvikling',
    subtitle: 'Våre utviklingstjenester for bedrifter.',
    headerText:
      'Våre datasystemer og hjemmesider er bygget helt fra bunn med banebrytende teknologi som SPA rammeverk og full cloud-service',
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
      url: '../../../../assets/Images/Tjenester/info-section/utvikling/640/utvikling av hjemmeside for bedrifter i oslo.webp',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Øk online tilstedeværelsen med',
      title: 'Hjemmeside for bedriften',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: [
      'En bedrifts online tilstedeværelse, uavhengig av industri vil være kritisk for ens suksess. En bedrifts hjemmeside vil alene ikke være med på å skape tillit og vekst, men en attraktiv og komplett nettside vil ta deg en lang vei.',
      'Har du noen gang besøkt en hjemmeside og tenkt “dette her kan ikke stemme?“ eller “Er dette trygt?“. Kanskje har du bestemt deg for å besøke en ny restaurant i Oslo, men du klarer ikke å finne hjemmesiden til bedriften, eller kanskje du finner den, men den inneholder ikke en meny. Hos digitalbyrået Moderna Media følger vi deg opp hele veien og sørger for at du får absolutt mest mulig for pengene.',
      'Vi mener at en nettside har flere fordeler, blant annet vil den være med på å styrke merkevaren din, øke “leads“, skape organisk trafikk ved hjelp av god søkemotoroptimalisering som igjen vil øke din organsike vekst. En nettside kan også bygges på en måte som også sparer tid og penger.',
      'Dersom nettsiden har “ofte stilte spørsmål og svar” lett tilgjengelig vil kunden kanskje ikke ha behov for å ringe eller sende melding. Dersom åpningstidene eller menyen ligger lett tilgjengelig slipper du å få samme telefon flere ganger daglig.',
      'Alt i alt så har en bedrift behov for en hjemmeside, men ikke hvilken som helst hjemmeside, men en sikker, enkel, kompetent og attraktiv hjemmeside. En hjemmeside er ikke en kostnad, men en investering!',
    ],
  };
  dataInfoSection2 = {
    color: 'grey',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/utvikling/640/utvikling av Programvarefor bedrifter.webp',
      alt: '',
    },
    position: 'left',
    header: {
      subtitle: 'Spar kostnader med',
      title: 'Programvarefor bedriften',
    },
    button: { text: 'Les mer om hjemmesider', url: '#tjenester' },
    text: [
      'Et system kan være mange ting, vi bruker begrepet Programvareom en rekke funksjoner som blir utført sammen i et digitalt kommuniserende økosystem. Når restauranten tar imot en bestilling eller reservasjon på nett og deres interne datamaskiner oppdateres tilstrekkelig så brukes det et Programvarefor å synkronisere disse jobbene.',
      'Vi tilbyr våre kunder skreddersydde Programvaresom er ment for å spare bedriften tid og penger. Ved å automatisere daglige gjøremål kan vi effektivt kutte kostandene samtidig som vi reduserer risikoen for menneskelig feil.',
      'Vårt mål er å gjøre hverdagen din og deres kunder enklere. Dersom du skulle ha behov for et bookingsystem, drift- og logistikksystem eller et kundebehandlingssystem. Ta en prat med oss så finner vi den beste løsningen for bedriften din og deres budsjett.',
    ],
  };
}

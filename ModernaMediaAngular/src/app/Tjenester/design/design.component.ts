import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
import { AboutYourNextProjectComponent } from '../../components/about-your-next-project/about-your-next-project.component';
import { TjenesterHeaderComponent } from '../components/tjenester-header/tjenester-header.component';
import { TjenesterServicesComponent } from '../components/tjenester-services/tjenester-services.component';
import { TjenesterInfoSectionComponent } from '../components/tjenester-info-section/tjenester-info-section.component';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TjenesterHeaderComponent,
    TjenesterServicesComponent,
    TjenesterInfoSectionComponent,
    AboutYourNextProjectComponent,
  ],
})
export class DesignComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(SeoUtils.TjenesterDesign.title);
  }

  ngOnInit() {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: SeoUtils.TjenesterDesign.description,
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
      src: '../../../../assets/Images/Tjenester/header/design/1920/Bedrift design - grafisk design.webp',
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
        text: 'Et godt grafisk design bruker statistikk til å øke omsetning ved hjelp av ulike metoder.',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/grafisk_design.svg',
          alt: '',
        },
        link: '',
      },
    ],
  };
  dataInfoSection3 = {
    color: 'gray',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/design/1280/grafisk design for bedrift oslo.webp',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Uttrykk deres verider med',
      title: 'Grafisk design',
    },
    button: {
      text: 'Se vår grafisk design tjeneste',
      url: '/tjenester/bedrift/design/',
    },
    text: [
      'Grafisk design er kunsten å presentere visuelt innhold som kommuniserer en melding eller et innhold. Grafisk design kan være mye, blant annet en reklame i avis eller magasin, det kan være en plakat for en film eller et bedriftskort. For å gjøre det enkelt så kan du finne grafisk design overalt, blant annet på cola-flasken i kjøleskapet eller potetgullposen i sofaen. Et godt grafisk design bruker statistikk og faktabasert informasjon for å oppnå størst og best mulig konvertering. Et eksempel på dette er da google byttet farge på lenkene i søket, faktisk byttet de bare mellom ulike blåfarger. Det ble testet omtrent 50 forskjellige blåfarger og resultatet var en ekstra omsetning på 200 millioner dollar. Dersom bedriften ønsker å ta med seg de konkurransefortrinnene en kan, anbefaler vi på det sterkeste å allokere tid til å finne de optimale løsningene og finne de designene din bedrift trenger for optimale resultater.',
      'Hos Moderna Media tar vi alt i betraktning for å gi bedriften din det beste grafiske designet slik at du ikke legger penger igjen på bordet!',
    ],
  };
  dataInfoSection = {
    color: 'grey',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/design/1280/web design for bedrift oslo.webp',
      alt: '',
    },
    position: 'left',
    header: {
      subtitle: 'Voks organisk med skreddersydd',
      title: 'Web design for bedriften din',
    },
    button: {
      text: 'Se vår web design tjeneste',
      url: '/tjenester/bedrift/design/',
    },
    text: [
      'Webdesign brukes for å utforme en nettside. Dette er en mulighet til å utarbeide brukeropplevelsen gjennom designet av nettsidens oppsett, farger, fonter, bilder og lignende. Webdesign består ofte av tungt arbeid innenfor selve designet, også kjent som UI (user interface), og brukervennlighet UX (user expereince). Med et godt utført webdesign blir siden estetisk tiltalende, brukervennlig, og formidler bedriftens verdier og tjenester tydelig. Kort fortalt er webdesign en designprosess med brukeren i fokus.',
      'Har du besøkt en nettbutikk som var lite brukervennlig? Kanskje slitet med å finne den informasjonen du ser etter? Dette kan lett skape en frustrasjon for dine kunder og sende kundene over til dine konkurrenter. Vi hjelper deg og holde en god funksjonell side.',
      'Visste du at den gjennomsnittlige-bruker skaper et førsteinntrykk av bedriften din i løpet av 0.5 sekunder på nettsiden din? Visste du også at 2 av 3 kunder bruker mobil for å besøke din nettside? Eller at 7 av 10 kunder oppdager bedrifter gjennom blogginnlegg? Vi i Moderna utvikler digitale løsninger med effektivt design, og optimal mobile-first brukervennlighet. Videre, anbefaler vi alle bedrifter som har tilstrekkelig budsjett å opprette en blogg. Vi verdsetter brukervennlighet og førsteinntrykk ved å utvikle moderne webdesign som gjenspeiler visjonen og verdiene til bedriften din!',
      'Bra webdesign kan forbedre og muligheten til å presentere:',
    ],
    listItems: [
      'Ditt førsteinntrykk',
      'Dine konkurranser fortrinn.',
      'Økt tillit fra kundene dine',
      'Din brukervennlighet',
    ],
    textSecond: [
      'Invester i en neste-generasjons nettside for bedriften din! Ta kontakt med oss i Moderna Media idag. ',
    ],
  };
  dataInfoSection2 = {
    color: 'gray',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/design/1280/logo design for bedrift.webp',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Bygg en sterk merkevare med en',
      title: 'Logo for bedriften din!',
    },
    button: {
      text: 'Se vår logo design tjeneste',
      url: '/tjenester/bedrift/design/',
    },
    text: [
      'En logo skal enkelt kommunisere bedriftens personlighet, tjenester, og verdier ved hjelp av fargeteori, former og fonter. En god logo bør presentere et tydelig bilde av bedriften din og hva din bedrift står for',
      'Logo design omhandler mye mer enn å sette sammen former, farger og tekst. Det handler om å kommunisere bedriftens visjon, verdier, tjenester, personlighet og misjon på en effektiv og tydelig måte.',
      'En god logo bør:',
    ],
    listItems: [
      'Gi et godt førsteinntrykk av bedriften.',
      'Si noe om hva bedriften gjør.',
      'Gi en bedre merkevaregjenkjenning.',
    ],
    textSecond: [
      'Hos Moderna Media mener vi at bra logo design er en verdifull investering for enhver bedrift. Derfor har vi satt en bunnpris for våre logo design. Vi designer logoer for klienter med både små og store budsjetter.  Samtidig verdsetter vi å levere tjenester av topp kvalitet. Kontakt oss idag for et uforpliktet møte angående logodesign eller revisjon av din eksisterende logo! ',
    ],
  };
}

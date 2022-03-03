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
      'Web design er resultatet av prosessen som vanligvis tar sted før utviklingen av en nettside. Web design refererer til designet på hjemmesiden som vises på nett. Denne designkategorien består ofte av tungt arbeid innenfor UI også kjent som user interface, altså designet, og UX også kjent som user experience som hovedsakelig omfatter brukeropplevelse.',
      'Viste du at 2 av 3 brukere bruker mobil til å surfe på nett og besøke din nettside? Eller at 7 av 10 kunder finner bedrifter gjennom blogger. Eller at den gjennomsnittlige-bruker skaper et førsteinntrykk av bedriften og hjemmesiden på 0.5 sekunder.',
      'Dette vet vi i Moderna Media! Derfor designer og utvikler vi nettsider med mobile-first tilnærmingen for å optimere brukeropplevelsen på mobil. Det er også derfor vi anbefaler alle bedrifter som har tilstrekkelig budsjett å opprette en blogg. Vi sørger alltid for å gi det beste førsteinntrykket gjennom vakkert og moderne design som også gjenspeiler bedriftens visjon og verdier.',
      'Web design omhandler alt fra hvilke farger, fonter og font-størrelse man skal bruke til hvilke sider og funksjoner som er nødvendige. Web design er en designprosess som skal skapes med brukeren i fokus. Har du noen gang besøkt en nettbutikk som ikke er helt opp til standard, eller prøvd å finne telefonnummeret til kundeservice på banken din sin nettside? Det er to eksempler som skaper frustrasjon og utfordringer for deg som kunde. I verste tilfelle vil et dårlig design skape mistro hos brukeren. Bli med på å designe og bygge en neste-generasjons nettside for bedriften din, ta kontakt med oss i Moderna Media i dag.',
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
      'En logo er ikke varemerket ditt, men den representerer varemerket. En logo portretterer bedriftens personlighet, tillit og verdier. Ved hjelp av fargeteori, kurvatur og fonter kan vi fortelle brukerens underbevissthet en historie og fortelle hvem vi er.',
      'Moderna Media sin logo bruker en kombinasjon av blå og lilla, ved første øyeblikk kan det virke tilfeldig, men sannheten er at alle valg gjort i alle våre design er nøye gjennomtenkt. Ifølge fargeteori representerer fargen blå tillit, stabilitet og seriøsitet, noe vi ønsker å assosiere oss med. Samtidig er blå en nøytral farge og den mest populære favoritt fargen. Vi har også valgt lilla da det er en farge som sjeldent finnes i naturen og ofte assosieres med noe ikke-naturlig, blant annet teknologi. Lilla assosieres også med selvstendighet og ambisjon noe vi mener reflekterer Moderna Media og forhåpentligvis våre kunder.',
      'Logo design er mye mer enn å tegne et ikon eller en firkant og skrive noe tekst. Logo design handler om å få et innblikk i bedriftens visjon, mål og verdier slik at vi på best mulig måte kan formidle dette videre til kundene deres.',
      'En logo-designprosess er gjerne iterativ hvor man jobber tett sammen med kunden. Priser på logo kan variere fra noen hundrelapper til flere hundretusener av kroner. I Moderna Media mener vi at noe så viktig som en logo er verdt å investere i, derfor har vi satt en bunnpris for logo design. Vi jobber med klienter med store og små budsjett samtidig som vi sørger for å alltid levere tjenester av høyeste kvalitet. Kontakt oss i dag for et uforpliktet møte angående din nye logo eller en revisjon av logoen dere allerede har.',
    ],
  };
}

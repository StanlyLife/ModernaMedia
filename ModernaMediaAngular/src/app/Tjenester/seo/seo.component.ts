import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { SeoUtils } from 'src/utils/SeoUtils';
@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss'],
})
export class SeoComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private SEO: SeoService
  ) {
    title.setTitle(SeoUtils.TjenesterSeo.title);
  }

  ngOnInit() {
    this.SEO.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: SeoUtils.TjenesterSeo.description,
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
      src: '../../../../assets/Images/Tjenester/header/seo/1920/Søkemotor optimalisering av seo byrå.webp',
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
      { title: 'teknisk SEO', url: 'tekniskseo' },
      { title: 'off-page SEO', url: 'offpageseo' },
      { title: 'innholdsproduksjon', url: 'innholdsproduksjon' },
    ],
  };
  dataServices: any = {
    title: 'Søkemotor optimalisering, moderne markedsføring',
    subtitle: 'Våre utviklingstjenester for bedrifter.',
    headerText:
      'Når du er på ferie og skal ut å spise, hvordan velger du en restaurant? De aller fleste starter med et google søk og besøker sjeldent restauranten på side 2. Ranger på topp med SEO.',
    services: [
      {
        title: 'Teknisk SEO',
        text: 'Vi bearbeider nettsiden din og optimaliserer den for rangering.',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/teknisk seo.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Innholdsproduksjon',
        text: 'For å rangere på topp så må nettsiden ha innhold. Vi skriver og lager innhold for hjemmesiden deres.',
        icon: {
          src: '../../../../assets/Images/Icons/tjenester/services/seo innholdsproduksjon.svg',
          alt: '',
        },
        link: '',
      },
      {
        title: 'Off-page SEO',
        text: 'Vi jobber tett med våre partnere for å oppnå den beste søkemotoroptimaliseringen uten å behandle hjemmesiden deres.',
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
      url: '../../../../assets/Images/Tjenester/info-section/utvikling/640/utvikling av hjemmeside for bedrifter i oslo.webp',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Spar kostander med',
      title: 'Teknisk SEO',
    },
    button: {
      text: 'Les mer om teknisk SEO',
      url: '/tjenester/bedrift/seo/søkemotoroptimalisering',
    },
    text: [
      'Teknisk SEO omhandler å forbedre de tekniske delene av en nettside, som hjelper søkemotorer å enkelt registrere og lagre nettsiden. Kort fortalt er teknisk SEO å forsikre at en nettside møter de tekniske kravene av moderne søkemotorene, som Google, Bing og Yahoo. ',
      'Igjennom prosessen av teknisk SEO er det viktig å forsikre TLS sikkerhet for verifisering av tilliten til nettsiden. Etterfulgt av mobilvennlighet, ettersom 2 av 3 brukere besøker nettsider med mobiltelefon. Noe av det mer utfordrende med teknisk søkemotor optimalisering er hastighet. Dette er fordi flere faktorer spiller en rolle i hastigheten på en nettside. Kunden, serveren og selve nettsiden er alle brikker i dette puslespillet. ',
      'Heldigvis vet vi i Moderna Media at alle triksene når det kommer til å optimalisere hastighet. Et godt eksempel på slike triks finnes på hjemmesiden vår. Der har vi tatt i bruk raske servere, SPA-teknologi, og server side rendering. Det vil si at når du laster inn Modernamedia.no så bruker serveren våre ressurser på å laste inn siden, så din pc slipper å jobbe så mye. Vi har også optimalisert alle bilder ved hjelp av kompresjon og neste-generasjons bildeformater. Alt for å gjøre nettsiden vår så teknisk brukervennlig som mulig! ',
      'Velutbygget teknisk SEO byr på flere verdifulle gevinster, som:',
    ],
    listItems: [
      'Økt søkemotoroptimalisering',
      'Styrket søkemotor tilstedeværelse',
      'Økt brukervennlighet ',
      'Styrket estetisk nettside oppsett',
    ],
    textSecond: [
      'Dersom bedriften din ønsker en raskere og bedre nettside, og bedre søkemotor optimalisering, ta kontakt med oss for et uforpliktet møte idag. ',
    ],
  };
  dataInfoSection2 = {
    color: 'gray',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/seo/640/backlink søkemotor optimalisering.webp',
      alt: '',
    },
    position: 'left',
    header: {
      subtitle: 'Bygg en sterk merkevare med',
      title: 'Off-page SEO',
    },
    button: {
      text: 'Les mer om off-page SEO',
      url: '/tjenester/bedrift/seo/søkemotoroptimalisering',
    },
    text: [
      'Off-page SEO omhandler alt man kan gjøre utenfor bedriftens nettside for å styrke SERP (search engine results page). Altså hvilke steg man kan ta for å sørge for at nettsiden  rangerer høyt på søkemotor resultatsidene, som Google, Bing og Yahoo. Disse stegene kan innebære alt fra en tilstedeværelse på sosiale medier til reklamer på ulike plattformer. ',
      'Enkelt sagt, er Off-page SEO en av flere faktorer som avgjør relevansen til nettsiden din i et internettsøk. Off-page SEO omhandler også i stor grad link-building, altså lenke bygging. Det vil si at søkemotorer som Google, identifiserer andre nettsider som lenker til din nettside, og deres relevans. ',
      'I Norge er Off-page SEO en tidskrevende jobb, ettersom de fleste relevante nettsidene som burde lenket til din bedrift ofte er konkurrentene dine. Det finnes mange måter å bygge lenker på. En av de mest populære strategiene omhandler det å gå inn i grå-sonen, hvor man publiserer en lenke til sin egen hjemmeside på flere tilfeldige nettsider. Utfordringen med off-page SEO er at dersom det gjøres feil eller uetisk vil dette skade rangeringen til nettsiden din. Heldigvis har vi i Moderna Media seo konsulenter klare til å bistå bedriften din med off-page SEO.',
      'Effektiv Off-page SEO byr på flere verdifulle gevinster, som: ',
    ],
    listItems: [
      'Økt søkemotoroptimalisering',
      'Styrket søkemotor tilstedeværelse ',
      'Økt søkemotor resultat rangering',
      'Styrket merkevare ',
    ],
    textSecond: [
      'Dersom bedriften din søker hjelp med å bygge en sterkere merkevare ved hjelp av off-page seo, ta kontakt med oss for et uforpliktet møte idag.',
    ],
  };
  dataInfoSection3 = {
    color: 'gray',
    img: {
      url: '../../../../assets/Images/Tjenester/info-section/seo/1280/innholdsproduksjon for søkemotor optimalisering.webp',
      alt: '',
    },
    position: 'right',
    header: {
      subtitle: 'Øk rangeringen med innholdsproduksjon',
      title: 'On-page SEO',
    },
    button: {
      text: 'Les mer om innholdsproduksjon',
      url: '/tjenester/bedrift/seo/søkemotoroptimalisering',
    },
    text: [
      'On-page SEO omhandler innholdsproduksjon. Altså innhold man produserer for en bedrifts nettside for å rangere høyere på søkemotor resultatsidene. On-page SEO er ufattelig viktig for en bedrifts markedsføring, fordi det styrker bedriftens online tilstedeværelse. Derfor må det jobbes konsekvent med innholdsproduksjon for å sørge for gode resultater.',
      'Har du hørt at «content is king?» Eller har du lagt merke til at vi skriver "søkemotor optimalisering" noen steder, og "søkemototoptimalisering" andre steder. Dette har vi gjort fordi en undersøkelse viste oss at omtrent 1100 nordmenn søker på "søkemotor optimalisering" hver måned. Samtidig søker 800 nordmenn på "søkemotoroptimalisering".',
      'Når man produserer innhold for søkemotoroptimalisering gjelder det å ha gjort undersøkelser for å finne nøkkelord, setninger og spørsmål som ofte søkes på. Deretter må det tas hensyn til at man også produserer innhold for de forskjellige søkemotorene. I søkemotor resultatene har det som står i tykk skrift større relevans enn det som står i avsnittet under. Deretter har det som ligger på toppen av søkemotor resultatsiden størst relevans. ',
      'Men det er ikke nok å identifisere nøkkelord og publisere en blogg innlegg. Man må også være påpasselig med lengde, gjentakelse og valg av ord. Til syvende og sist utgjør det ikke noe forskjell om Google elsker innholdet ditt visst potensielle kunder ikke gjør det. Google tar også hensyn til gjennomsnittstiden kunder besøker hjemmesiden din. Så Dersom gjennomsnittstiden er 10 sekunder på en artikkel på 1300 ord indikerer det at innholdet er lite engasjerende. ',
      'Heldigvis, har vi i Moderna Media mange dyktige SEO eksperter som kan hjelpe bedriften din med byrden av innholdsproduksjon. Vi jobber konsekvent for å produsere engasjerende og seo optimalisert innhold for bedrifter i alle prisklasser. Ta kontakt med oss idag for et uforpliktet møte! ',
    ],
  };
}

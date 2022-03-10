import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
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
    title.setTitle(
      'Søkemotoroptimalisering for bedriften av Moderna Media SEO byrå'
    );
  }

  ngOnInit() {
    this.SEO.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Søkemotoroptimalsiering for bedrifter. Trenger hjemmesiden din innholdsprodusent, eller trenger dere å optimere nettsiden i form av teknisk seo? Les mer om Søkemotor optimalisering fra Moderna Media',
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
      subtitle: 'Spar kostnader med',
      title: 'Teknisk SEO',
    },
    button: { text: 'Les mer om teknisk SEO', url: '#tjenester' },
    text: [
      'Teknisk SEO referer til nettside- og serveroptimering som i gjengjeld hjelper søkemotor roboter å indeksere og lagre nettsiden din enklere.',
      'I teknisk SEO er det viktig å følge opp TLS sikkerhet for å verifisere tillitten til nettsiden. Det er også ekstremt viktig å passe på at nettsiden er mobilvennlig ettersom 2 av 3 brukere besøker nettsiden din med mobiltelefon.',
      'Noe av det mer utfordrende med teknisk søkemotor optimalisering er hastighet. Hastigheten på nettsiden baserer seg på flere faktorer, brukeren, serveren og nettsiden. Her er det flere grep man kan ta for å optimalisere hastighet. På hjemmesiden til Moderna Media har vi tatt i bruk raske servere og bruke SPA-teknologi og noe som heter for server side rendering. Det vil si at når du laster inn Modernamedia.no så bruker serveren vår ressurser på å laste inn siden slik at pcen du sitter på slipper å jobbe så mye. Vi har også optimalisert alle bilder ved hjelp av kompresjon og neste-generasjons bildeformater.',
      'Dersom bedriften din ønsker en raskere og bedre hjemmeside samtidig som du optimaliserer SEO, ta kontakt med oss for et uforpliktet møte',
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
    button: { text: 'Les mer om off-page SEO', url: '#tjenester' },
    text: [
      'Off-page SEO er det som avgjør relevansen til din nettside sammen med andre faktorer som blant annet innhold. Off-page SEO omhandler i stor grad det som kalles for link-building eller lenke bygging. Det vil si at Google ser på andre nettsider som lenker videre til din nettside, de ser også på kvaliteten til nettsiden og hvor mange nettsider som lenker til dem.',
      'Off-page SEO er en veldig tidkrevende jobb spesielt i Norge ettersom de fleste relevante sidene som burde lenket til din bedrift ofte er konkurrenter. Det finnes mange måter å bygge lenker på, noe av de mer populære strategiene omhandler det som sies å være i grå-sonen hvor man finner flere tilfeldige nettsider og publiserer en lenke til sin hjemmeside.',
      'Utfordringen med off-page SEO er at dersom det gjøres feil eller på en måte Google anser som uetisk vil dette skade rangeringen din. I Moderna Media har vi eksperter klare til å bistå deg med off-page SEO, kontakt oss i dag for et uforpliktet møte.',
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
    button: { text: 'Les mer om innholdsproduksjon', url: '#tjenester' },
    text: [
      'Har du hørt at content is king? Eller kanskje du har lagt merke til at vi har noen såkalte skrivefeil hvor vi noen ganger skriver søkemotor optimalisering og andre ganger skriver søkemotoroptimalisering. Dette er fordi vi har gjort en undersøkelse som sier at omtrent 1100 nordmenn søker på “søkemotor optimalisering“ hver månde. Samtidig søker 800 nordmenn på “søkemotor optimalisering“.',
      'Når man produserer innhold for brukere og søkemotor optimalisering gjelder det å ha gjort undersøkelse for å finne nøkkelord, setninger og spørsmål som ofte søkes på av potensielle kunder. Deretter må man ta hensyn til at man også skriver innhold ikke bare for bruker, men også Google. Det som står i tykk skrift utgjør mer enn det som står i dette avsnittet, og det som står på toppen av hjemmesiden utgjør mye mer.',
      'Men det er ikke nok å finne nøkkelord og deretter publisere en artikkel, man må også være påpasselig med lengde, gjentakelse av ord og hvilke ord som gjentas og i hvilken frekvens.',
      'Til syvende å sist utgjør det ikke noen forskjell om Google elsker innholdet ditt dersom brukerne ikke gjør det. Google tar også hensyn til gjennomsnittlig tid brukt på en hjemmeside, dersom gjennomsnittstiden er 10 sekunder på en artikkel på 1300 ord indikerer dette at innholdet ikke er engasjerende.',
      'Dersom du ønsker å vite mer om innholdsproduksjon eller SEO analyse så ta kontakt med oss i dag for et uforpliktet møte.',
    ],
  };
}

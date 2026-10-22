import { Testimonial } from '../home/homev2/testimonials/testimonials.component';
import { BERGEN_PIZZA } from './cases/bergen-pizza';
import { CUT_N_COLORS } from './cases/cut-n-colors';
import { DAL_SUSHI } from './cases/dal-sushi';
import { MASSIMO_YOGA } from './cases/massimo-yoga';
import { MR_BAO } from './cases/mr-bao';
import { MUDO_GYM } from './cases/mudo-gym';
import { RENE_BORGHAGEN } from './cases/rene-borghagen';
import { YUMMY_SUSHI } from './cases/yummy-sushi';

export interface CaseStudyStat {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudySection {
  title: string;
  body: string[];
  bulletTitle?: string;
  bullets?: string[];
  /** Shown next to the text; rows alternate sides. */
  image?: CaseStudyMedia;
}

export interface CaseStudyOutcome {
  title: string;
  description: string;
  /** A v2-icon name, e.g. zap, search, chat, tag, star, bars, users, server. */
  icon?: string;
}

export interface CaseStudyMedia {
  src: string;
  srcset?: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  /** Spans the whole gallery row instead of one column. */
  wide?: boolean;
}

export interface CaseStudyVideo {
  /** Short heading shown above the video. */
  title: string;
  /** H.264 MP4 with faststart, so it can play while it downloads. */
  src: string;
  poster: string;
  width: number;
  height: number;
  /** Name and description are also used in the VideoObject structured data. */
  name: string;
  description: string;
  /** ISO 8601 duration, e.g. PT1M16S. */
  duration: string;
  uploadDate: string;
  /** Play button text when this is the hero video, e.g. «Se traileren». */
  label?: string;
  /** Chapter list next to the explainer video; also Clip markup (key moments). */
  chapters?: CaseStudyChapter[];
  /** What is said in the video. Shown under the chapters and used in VideoObject. */
  transcript?: string;
}

export interface CaseStudyChapter {
  title: string;
  /** Start time in seconds. */
  start: number;
}

/**
 * Videos for the case. videos[0] plays in the hero; videos[1] (optional) is the
 * explainer, shown under the hero with the title, intro and chapters.
 */
export interface CaseStudyShowcase {
  title: string;
  intro?: string;
  videos?: CaseStudyVideo[];
}

export interface CaseStudy {
  slug: string;
  /** The client's company name (pill, breadcrumbs, structured data). */
  client: string;
  /** Article headline, list cards and «more cases» cards. */
  title: string;
  /** Shorter H1 for the hero, next to the client pill. Falls back to title. */
  heroTitle?: string;
  subtitle: string;
  summary: string;
  /** The client's own website. Left out for proposals to businesses without one. */
  website?: string;
  /** Link text for the website. Defaults to the host name, e.g. «solaparkering.no». */
  websiteLabel?: string;
  /** false keeps the page out of search engines, the sitemap and llms.txt. */
  indexable: boolean;
  /**
   * false keeps the page off /case-studies and the «more cases» cards; it is only
   * reachable by its link. For design proposals to prospects. Default true.
   */
  listed?: boolean;
  /**
   * 'concept' = our own work for a business that is not a client (design proposals).
   * The page then avoids client wording: «Casestudier» instead of «Kundecaser»,
   * «Hva vi laget» instead of «Hva vi leverte», and so on. Default 'client'.
   */
  kind?: 'client' | 'concept';
  /** Hero background, and the poster of the hero video (1280 px). */
  heroImage: string;
  heroImageSrcset: string;
  heroImageWidth: number;
  heroImageHeight: number;
  heroImageAlt: string;
  heroImageCaption?: string;
  /** Dark on the left where the text is, e.g. linear-gradient(100deg, …). */
  heroOverlay?: string;
  /** 1200x630 JPG for social sharing. */
  ogImage: string;
  industry: string;
  location: string;
  timeframe: string;
  services: string[];
  /** Left out for design proposals without a client quote; the quote section is hidden. */
  testimonial?: Required<Pick<Testimonial, 'quote'>> & {
    name: string;
    role: string;
    company: string;
    image?: string;
    imageAlt?: string;
  };
  /** Three numbers, shown in the hero. Norwegian formatting: '+160 000', '5,6×', '−40 %'. */
  stats: CaseStudyStat[];
  sections: CaseStudySection[];
  outcomes: CaseStudyOutcome[];
  showcase?: CaseStudyShowcase;
  /** Images that are not used next to a section, in a three-column grid. */
  gallery?: CaseStudyMedia[];
  /** «More cases» card. Defaults: /assets/img/case/<slug>-640.webp and stats[0]. */
  cardImage?: string;
  cardMetric?: { value: string; label: string };
  seoTitle: string;
  seoDescription: string;
  datePublished: string;
  dateModified: string;
}

const img = (slug: string, widths: number[]) =>
  widths.map((w) => `/assets/img/case/${slug}-${w}.webp ${w}w`).join(', ');

/** Gallery image from `/assets/img/case/<name>-<width>.webp`, one file per width. */
const galleryImage = (
  name: string,
  widths: number[],
  aspect: [number, number],
  alt: string,
  caption: string,
  wide = false
): CaseStudyMedia => ({
  src: `/assets/img/case/${name}-${widths[0]}.webp`,
  srcset: img(name, widths),
  width: widths[0],
  height: Math.round((widths[0] * aspect[1]) / aspect[0]),
  alt,
  caption,
  wide,
});

/**
 * Concept cases (kind 'concept': our own design work for businesses that are not clients) are hidden for now –
 * no card, no page (the URL goes to /error) and not prerendered. Their files in cases/ stay; set this to true to
 * bring them all back.
 */
const SHOW_CONCEPT_CASES = false;

const ALL_CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'sola-parkering',
    client: 'Sola Parkering',
    title: 'Sola Parkering: rask nettside og lokal SEO for flyplassparkering',
    heroTitle: 'Rask nettside og lokal SEO for flyplassparkering',
    subtitle:
      'Ny merkevareopplevelse og SEO-løp slik at reisende finner parkeringen først.',
    summary:
      'Som en nyoppstartet tjeneste hadde Sola Parkering behov for en enkel og rask side som kunne formidle informasjon effektivt til eksisterende og nye kunder.',
    website: 'https://solaparkering.no/',
    indexable: true,
    heroImage: '/assets/img/case/sola-parkering-1280.webp',
    heroImageSrcset: img('sola-parkering', [640, 1280, 1920]),
    heroImageWidth: 1280,
    heroImageHeight: 853,
    heroImageAlt: 'Parkeringsplassen til Sola Parkering ved Stavanger lufthavn',
    heroOverlay:
      'linear-gradient(100deg, rgba(6, 12, 32, 0.92) 0%, rgba(6, 12, 32, 0.7) 45%, rgba(20, 88, 181, 0.35) 100%)',
    ogImage: '/assets/img/case/sola-parkering-og.jpg',
    industry: 'Reiseliv & parkering',
    location: 'Stavanger lufthavn, Sola',
    timeframe: '4 uker fra ordre til lansering',
    services: [
      'UX-workshop',
      'Nettsideutvikling',
      'Integrert parkeringsoversikt',
      'SEO',
      'Google Ads',
    ],
    testimonial: {
      quote:
        'Vi fikk designet og utviklet en nettside som er i tråd med vår identitet og som snakker godt til kundene. Vi er veldig fornøyde med tjenesten og servicen som fulgte.',
      name: 'Svein Magnar',
      role: 'Daglig leder',
      company: 'Sola Parkering',
      image: '/assets/img/home/kunde-svein-magnar-200.webp',
      imageAlt: 'Svein Magnar, daglig leder i Sola Parkering',
    },
    stats: [
      {
        label: 'Organisk trafikk',
        value: '+160 000',
        description: 'årlige besøk',
      },
      {
        label: 'Flere bookinger',
        value: '5,6×',
        description: 'etter lansering',
      },
      {
        label: 'Supporthenvendelser',
        value: '−40 %',
        description: 'med tydelig FAQ og prislogikk',
      },
    ],
    sections: [
      {
        title: 'Utfordringen',
        body: [
          'Prosjektet startet uten nettside fordi Sola Parkering var en ny parkeringsplass ved Stavanger lufthavn. De trengte å fremstå seriøse fra dag én og forklare tjenesten tydelig for både ferie- og jobbreisende.',
          'Målet var en lynrask informasjonsflate som viste priser, kapasitet og kontaktpunkter, slik at kundene kunne ta direkte kontakt.',
        ],
        image: galleryImage(
          'sola-parkering-design-forside',
          [960, 1920],
          [1920, 1011],
          'Forsiden i det nye designet for Sola Parkering, med overskriften «Start reisen med ro.» og priskalkulator',
          'Forsiden: «Start reisen med ro.», med priskalkulatoren rett under overskriften.'
        ),
      },
      {
        title: 'Veien frem',
        body: [
          'Vi bygde løsningen i ren HTML, CSS og JavaScript for å holde lastetiden nede. Innhold og metadata kan oppdateres raskt.',
          'SEO ble prioritert fra start, med strukturert data, egne seksjoner for priser, veibeskrivelse og FAQ, og tekster skrevet for de viktigste søkeordene.',
        ],
        bullets: [
          'Over 90 i Lighthouse-score på mobil',
          'SEO-plan for «parkering Stavanger lufthavn»',
        ],
        image: galleryImage(
          'sola-parkering-design-kalkulator',
          [640, 1280],
          [16, 9],
          'Priskalkulatoren med nedtrekksliste for antall døgn og prisen for hvert valg',
          'Velg antall døgn og se prisen med en gang. Bussen er alltid inkludert.'
        ),
      },
      {
        title: 'Resultatet',
        body: [
          'Nettsiden laster på under ett sekund på 4G og rangerer i toppsjiktet på de viktigste flyplass-søkene.',
          'Kundene finner priser og veibeskrivelse uten å ringe, og teamet håndterer henvendelser på telefon og e-post slik de ønsket.',
        ],
        image: galleryImage(
          'sola-parkering-design-enheter',
          [960, 1920],
          [16, 9],
          'Det nye designet vist på desktop, laptop, nettbrett og mobil',
          'Samme innhold, tilpasset desktop, laptop, nettbrett og mobil.'
        ),
      },
    ],
    outcomes: [
      {
        icon: 'zap',
        title: 'Lynrask landingsside',
        description: 'Toppscore på ytelse og Core Web Vitals, også på mobil.',
      },
      {
        icon: 'search',
        title: 'Synlighet i lokale søk',
        description:
          'Strukturert data, innholdsplan og metadata for «parkering Stavanger lufthavn».',
      },
      {
        icon: 'chat',
        title: 'Kontrollert kundedialog',
        description:
          'Tydelige knapper til telefon og e-post, uten et nytt system å lære.',
      },
    ],
    showcase: {
      title: 'Nytt design: «Start reisen med ro»',
      intro:
        'Vi har tegnet en ny versjon av solaparkering.no. Priskalkulatoren ligger øverst på forsiden, prisene er enklere å sammenligne, og SmartPark-guiden og kontaktskjemaet fungerer like godt på mobil som på desktop. I case-videoen forteller vi hvordan vi kom fram til designet.',
      videos: [
        {
          label: 'Se traileren',
          title: 'Trailer',
          src: '/assets/Videos/sola-parkering-trailer.mp4',
          poster: '/assets/img/case/sola-parkering-trailer-poster-1280.webp',
          width: 1920,
          height: 1080,
          name: 'Sola Parkering – trailer for det nye designet',
          description:
            'Trailer for det nye designet til Sola Parkering: priskalkulatoren «Hva koster parkeringen?», alle 21 døgnpriser, kontaktskjemaet og hvordan nettsiden tilpasser seg mobil, nettbrett, laptop og desktop.',
          duration: 'PT1M16S',
          uploadDate: '2026-10-08',
        },
        {
          title: 'Slik designet vi den',
          src: '/assets/Videos/sola-parkering-designprosess.mp4',
          poster: '/assets/img/case/sola-parkering-designprosess-poster-1280.webp',
          width: 1920,
          height: 1080,
          name: 'Sola Parkering – slik designet vi den nye nettsiden',
          description:
            'Case-video om designprosessen bak den nye nettsiden til Sola Parkering: kundenes spørsmål, farger, typografi, skisser, valget av priskalkulator, komponenter og alle skjermstørrelser.',
          duration: 'PT2M6S',
          uploadDate: '2026-10-08',
          // Start times from the video's timeline (Prosjekter/Sola parkering/Video trailer/src/case).
          chapters: [
            { title: 'Den gamle nettsiden', start: 8 },
            { title: 'Kundenes spørsmål', start: 17 },
            { title: 'Farger og typografi', start: 29 },
            { title: 'Skisser', start: 58 },
            { title: 'Valget av priskalkulator', start: 70 },
            { title: 'Komponenter', start: 87 },
            { title: 'Alle skjermstørrelser', start: 96 },
            { title: 'Klikkbar prototype', start: 104 },
          ],
          transcript:
            'Hei! I denne videoen viser jeg hvordan vi i Moderna Media designet den nye nettsiden til Sola Parkering. ' +
            'Sola Parkering ligger mellom flyplassen og Solastranda. Den gamle nettsiden fungerte, men prisene lå langt nede, og viktig informasjon var spredt utover hele siden. ' +
            'Vi startet med spørsmålene kundene faktisk stiller. Må jeg ha appen? Går bussen om natten? Kan jeg lade elbilen? Men ett spørsmål kom før alle andre: Hva koster det? Så prisen måtte helt til topps. ' +
            'Fargene hentet vi fra logoen og stedet selv. Den mørke marineblåen gir ro og trygghet før reisen. Den klare blåfargen bruker vi bare på knapper og lenker, så du alltid ser hvor du skal trykke. Og den lyse limegrønne? Det er sola og stranda. I stedet for kritthvitt bruker vi varme sandfarger, og alle fargekombinasjonene er sjekket for kontrast. ' +
            'Overskriftene er satt i Manrope: vennlig, moderne og lett å kjenne igjen. Brødtekst og priser står i IBM Plex Sans, som er laget for å være lettlest, selv i små størrelser. ' +
            'Vi skisset flere versjoner av toppen. I én kom bildet først, i en annen en stor pristabell. Men vinneren ble den med kalkulatoren rett under overskriften. Da får du svar på det viktigste før du i det hele tatt har scrollet. ' +
            'Hvorfor ikke en datovelger? Hos Sola Parkering kan du ikke forhåndsbestille. Du kjører bare inn og finner en ledig plass, og en kalender ville sett ut som en bestilling. Derfor valgte vi en enkel meny med antall døgn, akkurat slik prislisten er bygd opp. Og prisen du ser, er totalprisen, med bussen til terminalen inkludert. ' +
            'Alt er bygd som komponenter: knapper, skjemafelt, prisrader og spørsmål og svar. Da blir designet likt over hele siden, og lett for utviklerne å bygge. ' +
            'Mange sjekker prisen på mobilen på vei til flyplassen. Derfor designet vi for alle skjermer: mobil, nettbrett, laptop og desktop. ' +
            'Til slutt laget vi en klikkbar prototype, så vi kunne teste at kalkulatoren og kontaktskjemaet virket akkurat som tenkt. ' +
            'Resultatet er en nettside som gir reisende ro, fra du parkerer bilen til du sitter på flyet. Trenger du også et nytt design? Ta kontakt med oss i Moderna Media.',
        },
      ],
    },
    gallery: [
      galleryImage(
        'sola-parkering-design-priser',
        [800, 1600],
        [16, 9],
        'Oversikt over alle 21 døgnpriser hos Sola Parkering',
        'Alle 21 døgnpriser samlet i én oversikt.'
      ),
      galleryImage(
        'sola-parkering-design-smartpark',
        [800, 1600],
        [16, 9],
        'SmartPark-seksjonen med skjermbilder fra appen og seks steg for automatisk betaling',
        'SmartPark-guiden forklarer automatisk betaling i seks steg.'
      ),
      galleryImage(
        'sola-parkering-design-kontakt',
        [600, 1020],
        [1020, 574],
        'Kontaktskjemaet med feltene navn, e-post og melding',
        'Kontaktskjema med tydelige felt og bekreftelse når meldingen er sendt.'
      ),
    ],
    cardImage: '/assets/img/home/case-sola-parkering-650.webp',
    cardMetric: { value: '+160 000', label: 'årlige besøk' },
    seoTitle: 'Case: Sola Parkering – nettside og lokal SEO | Moderna Media',
    seoDescription:
      'Ny nettside og lokal SEO for Sola Parkering ved Stavanger lufthavn: +160 000 årlige besøk og 5,6× flere bookinger etter lansering.',
    datePublished: '2025-12-01',
    dateModified: '2026-10-11',
  },
  {
    slug: 'marbella-car-spa',
    client: 'Marbella Car Spa',
    title: 'Marbella Car Spa – ny nettopplevelse for Patrik',
    heroTitle: 'Ny nettopplevelse for premium bilpleie',
    subtitle:
      'Fra serverdrift på Gardermoen til en rask nettside for den nye satsingen i Marbella.',
    summary:
      'Da han åpnet i Marbella trengte han en fleksibel og rask nettside. Vi videreførte relasjonen med hosting, Next.js-utvikling og teknisk SEO.',
    website: 'https://www.carspamarbella.es/',
    // Deliberately kept out of search engines (still reachable on the site).
    indexable: false,
    heroImage: '/assets/img/case/marbella-car-spa-1280.webp',
    heroImageSrcset: img('marbella-car-spa', [640, 1280, 1920]),
    heroImageWidth: 1280,
    heroImageHeight: 721,
    heroImageAlt: 'Detaljert bilpleie hos Marbella Car Spa',
    heroOverlay:
      'linear-gradient(100deg, rgba(8, 5, 17, 0.94) 0%, rgba(8, 5, 17, 0.72) 45%, rgba(135, 67, 32, 0.35) 100%)',
    ogImage: '/assets/img/case/marbella-car-spa-og.jpg',
    industry: 'Bilpleie & detailing',
    location: 'Marbella, Spania',
    timeframe: '6 uker fra spesifikasjon til lansering',
    services: ['Drift', 'Nettside', 'Design', 'SEO'],
    testimonial: {
      quote:
        'Moderna Media tok over driften av mamrotcarspa.no og leverte pålitelig support. Da vi åpnet i Marbella bygde de den fleksible Next.js-nettsiden vi trengte, uten at vi måtte starte fra scratch.',
      name: 'Patrik',
      role: 'Daglig leder',
      company: 'Marbella Car Spa',
      image: '/assets/img/home/kunde-patrik-200.webp',
      imageAlt: 'Patrik, daglig leder i Marbella Car Spa',
    },
    stats: [
      {
        label: 'Oppetid',
        value: '99,95 %',
        description: 'etter at vi tok over driften',
      },
      {
        label: 'PageSpeed på mobil',
        value: '100/100',
        description: 'rask på alle skjermer',
      },
      {
        label: 'Leads fra skjema',
        value: '+68 %',
        description: 'første 60 dager',
      },
    ],
    sections: [
      {
        title: 'Utgangspunktet',
        body: [
          'Patrik drev bilpleie ved Gardermoen og brukte oss til drift av serveren. Da han startet Marbella Car Spa, trengte han en moderne nettside som kunne vokse med bedriften.',
          'Vi laget en plan og et design som viser den premium opplevelsen Marbella Car Spa gir kundene sine.',
        ],
        image: {
          src: '/assets/img/home/case-marbella-car-spa-650.webp',
          srcset:
            '/assets/img/home/case-marbella-car-spa-650.webp 650w, /assets/img/home/case-marbella-car-spa-1300.webp 1300w',
          width: 650,
          height: 366,
          alt: 'Nettsiden til Marbella Car Spa',
          caption: 'Marbella Car Spa.',
        },
      },
      {
        title: 'Leveransen',
        body: [
          'Vi flyttet domenet til vår drift, satte opp overvåkning og faste rutiner for oppdateringer og sertifikater.',
          'Den nye nettsiden er bygget for fart, og nye tjenester, språk og kampanjer kan legges til uten å starte på nytt.',
        ],
        bullets: [
          'Rask og godt indeksert av Google',
          'Byggeklosser for tjenester, priser og galleri',
          'Endringer rulles ut automatisk',
        ],
      },
      {
        title: 'Effekten',
        body: [
          'Stabil drift gir ro mens teamet bygger merkevaren i Marbella, og nettsiden gir flere henvendelser fra skjemaet.',
        ],
      },
    ],
    outcomes: [
      {
        icon: 'server',
        title: 'Drift og overvåkning',
        description: 'Vi tar oss av server, sertifikater og oppdateringer.',
      },
      {
        icon: 'zap',
        title: 'Rask grunnmur',
        description: 'Toppscore på hastighet, også på mobil.',
      },
      {
        icon: 'tag',
        title: 'Klar for vekst',
        description: 'Nye funksjoner kan legges til på minutter.',
      },
    ],
    cardImage: '/assets/img/home/case-marbella-car-spa-650.webp',
    cardMetric: { value: '+68 %', label: 'flere leads' },
    seoTitle: 'Case: Marbella Car Spa – Next.js-nettside og drift | Moderna Media',
    seoDescription:
      'Vi tok over serverhosting for mamrotcarspa.no og bygde en Next.js/React-side for den nye satsingen i Marbella med fokus på ytelse og fleksibilitet.',
    datePublished: '2025-12-01',
    dateModified: '2026-10-11',
  },
  {
    slug: 'fjerdingby-pizza',
    client: 'Fjerdingby Pizza & Grill',
    title: 'Fjerdingby Pizza & Grill: nettside med digital meny og lokal SEO',
    heroTitle: 'Nettside med digital meny og lokal SEO',
    subtitle:
      'En enkel side med meny, åpningstider og priser – laget for å bli funnet lokalt.',
    summary:
      'Oppdraget var å lage en lett, informativ nettløsning med meny og praktisk info. Vi bygget siden i React/Next.js med SCSS for god SEO, enkelt vedlikehold og dynamisk restaurantmeny.',
    website: 'https://www.fjerdingbypizzaoggrill.no/',
    indexable: true,
    heroImage: '/assets/img/case/fjerdingby-pizza-1280.webp',
    heroImageSrcset: img('fjerdingby-pizza', [640, 1280, 1920]),
    heroImageWidth: 1280,
    heroImageHeight: 768,
    heroImageAlt: 'Logoen til Fjerdingby Pizza & Grill',
    heroOverlay:
      'linear-gradient(100deg, rgba(8, 11, 28, 0.94) 0%, rgba(8, 11, 28, 0.75) 45%, rgba(142, 34, 52, 0.4) 100%)',
    ogImage: '/assets/img/case/fjerdingby-pizza-og.jpg',
    industry: 'Restaurant og take-away',
    location: 'Fjerdingby, Rælingen',
    timeframe: '5 uker fra oppstart til publisering',
    services: ['Nettside', 'Digital meny', 'Lokal SEO', 'Logo og meny-design'],
    testimonial: {
      quote:
        'Vi trengte bare en enkel side med meny og åpningstider, og Moderna Solutions leverte nettopp det – raskt, ryddig og lett å oppdatere.',
      name: 'Ena Hasanović',
      role: 'Daglig leder',
      company: 'Fjerdingby Pizza & Grill',
      image: '/assets/img/home/kunde-ena-200.webp',
      imageAlt: 'Ena Hasanović, daglig leder i Fjerdingby Pizza & Grill',
    },
    stats: [
      {
        label: 'Lastetid på mobil',
        value: '<1,2 s',
        description: 'etter optimalisering',
      },
      {
        label: 'på «pizza Fjerdingby»',
        value: 'Topp 1',
        description: 'etter lokal SEO',
      },
      {
        label: 'Tid brukt på oppdateringer',
        value: '−70 %',
        description: 'med digital meny',
      },
    ],
    sections: [
      {
        title: 'Utgangspunktet',
        body: [
          'Restauranten ønsket en enkel side som viste meny, priser og åpningstider – uten å gå via bestillingsportaler.',
          'Vi prioriterte rask publisering og god synlighet på lokale søk.',
        ],
        image: {
          src: '/assets/img/case/fjerdingby-pizza-meny-800.webp',
          srcset:
            '/assets/img/case/fjerdingby-pizza-meny-800.webp 800w, /assets/img/case/fjerdingby-pizza-meny-1600.webp 1600w',
          width: 800,
          height: 600,
          alt: 'Take-away-menyen vi designet for Fjerdingby Pizza & Grill',
          caption: 'Take-away-menyen vi designet, klar for trykk.',
        },
      },
      {
        title: 'Leveransen',
        body: [
          'Menyen er bygget slik at ukens tilbud og priser oppdateres på sekunder.',
          'Telefon, adresse og åpningstider ligger alltid øverst, og maten har fått mer plass.',
        ],
        bullets: [
          'Meny og åpningstider rett i Google-søket',
          'Kart, ring- og bestillingsknapper',
          'Ny logo og take-away-meny',
        ],
        image: {
          src: '/assets/img/case/fjerdingby-pizza-640.webp',
          srcset:
            '/assets/img/case/fjerdingby-pizza-640.webp 640w, /assets/img/case/fjerdingby-pizza-1280.webp 1280w',
          width: 640,
          height: 384,
          alt: 'Logoen vi designet for Fjerdingby Pizza & Grill',
          caption: 'Ny logo for Fjerdingby Pizza & Grill.',
        },
      },
      {
        title: 'Resultatet',
        body: [
          'Kundene finner åpningstider og meny via Google uten å gå gjennom mellomledd.',
          'Teamet slipper tunge PDF-er og oppdaterer menyen selv.',
        ],
      },
    ],
    showcase: {
      title: 'Nytt design: før og etter',
      intro:
        'Vi har tegnet en ny, enklere versjon av fjerdingbypizzaoggrill.no. Menyen er ett trykk unna, telefon, adresse og åpningstider ligger øverst, og maten får mer plass. Videoen viser den gamle og den nye siden side om side, og forklarer hvorfor vi valgte som vi gjorde.',
      videos: [
        {
          label: 'Se før og etter',
          title: 'Før og etter',
          src: '/assets/Videos/fjerdingby-pizza-for-og-etter.mp4',
          poster: '/assets/img/case/fjerdingby-pizza-for-og-etter-poster-1280.webp',
          width: 1920,
          height: 1080,
          name: 'Fjerdingby Pizza & Grill – før og etter det nye designet',
          description:
            'Case-video om det nye designet til Fjerdingby Pizza & Grill: hva som skurret på den gamle siden, hvorfor menyen er ett trykk unna, telefon og adresse alltid synlige, maten i fokus, SEO, farger fra logoen og hvordan siden tilpasser seg mobil og PC.',
          duration: 'PT1M56S',
          uploadDate: '2026-10-08',
        },
      ],
    },
    outcomes: [
      {
        icon: 'tag',
        title: 'Digital meny',
        description: 'Menyendringer er enkle og ser alltid like ut.',
      },
      {
        icon: 'star',
        title: 'Merkevare',
        description: 'Ny logo og take-away-meny, klar for trykk.',
      },
      {
        icon: 'search',
        title: 'Lokal synlighet',
        description: 'Øverst på «pizza Fjerdingby».',
      },
    ],
    cardImage: '/assets/img/home/case-fjerdingby-pizza-650.webp',
    cardMetric: { value: 'Topp 1', label: 'på «pizza Fjerdingby»' },
    seoTitle: 'Case: Fjerdingby Pizza & Grill – nettside og lokal SEO',
    seoDescription:
      'Lett Next.js-nettside med digital meny og lokal SEO. Fjerdingby Pizza & Grill rangerer øverst på «pizza Fjerdingby» og laster på under 1,2 sekunder.',
    datePublished: '2025-12-01',
    dateModified: '2026-10-11',
  },
  {
    slug: 'ostlandet-bronnboring',
    client: 'Østlandet Brønnboring',
    title: 'Østlandet Brønnboring fikk 3× flere kvalifiserte leads',
    heroTitle: '3× flere kvalifiserte leads',
    subtitle:
      'Teknisk SEO, bransjesider og et smartere kontaktskjema fylte kalenderen i høysesongen.',
    summary:
      'Østlandet Brønnboring konkurrerer om store anbud og privatkunder i hele regionen. Vi bygget en robust presentasjon av referanseprosjekter, sørget for at teknisk data ble forståelig, og laget et kontaktskjema som gir selgerne det de trenger å vite.',
    website: 'https://bronn-energiboring.no/',
    indexable: true,
    heroImage: '/assets/img/case/ostlandet-bronnboring-1280.webp',
    heroImageSrcset: img('ostlandet-bronnboring', [640, 1280, 1920]),
    heroImageWidth: 1280,
    heroImageHeight: 781,
    heroImageAlt: 'Borerigg i arbeid for Østlandet Brønnboring',
    heroOverlay:
      'linear-gradient(100deg, rgba(5, 16, 33, 0.97) 0%, rgba(5, 16, 33, 0.9) 50%, rgba(25, 87, 156, 0.65) 100%)',
    ogImage: '/assets/img/case/ostlandet-bronnboring-og.jpg',
    industry: 'Bygg og anlegg',
    location: 'Østlandet',
    timeframe: '7 uker inkl. foto og film',
    services: ['Nettside', 'SEO', 'Kontaktskjema', 'Video'],
    testimonial: {
      quote:
        'Vi hadde behov for flere, bedre kvalifiserte leads i byggeperiodene. Den nye løsningen fra Moderna Media har gitt oss tre ganger flere forespørsler og bedre struktur på salgsprosessen.',
      name: 'Marcus Hannevig',
      role: 'Prosjektleder',
      company: 'Østlandet Brønnboring',
    },
    stats: [
      {
        label: 'Kvalifiserte leads',
        value: '3×',
        description: 'flere på 4 måneder',
      },
      {
        label: 'Tid til tilbud',
        value: '−55 %',
        description: 'fra henvendelse til tilbud',
      },
      {
        label: 'Teknisk SEO',
        value: '100/100',
        description: 'i Lighthouse',
      },
    ],
    sections: [
      {
        title: 'Behovet',
        body: [
          'Selskapet hadde mange solide referanser, men ingen måte å vise dem fram på uten PDF-er. I tillegg gikk henvendelser tapt fordi skjemaet ikke ga selgerne nok informasjon.',
        ],
      },
      {
        title: 'Leveransen',
        body: [
          'Vi laget prosjektkort der bilder, sted, grunnforhold og leveranse beskrives likt. Kortene kan filtreres og brukes i tilbud. Samtidig laget vi et kontaktskjema som spør om boretype, budsjett og tidspunkt, så selgerne vet hva henvendelsen gjelder før de tar kontakt.',
        ],
        bullets: [
          'Teknisk SEO med strukturert data og FAQ',
          'Film fra byggeplassen til sosiale medier',
        ],
        image: {
          src: '/assets/img/home/case-ostlandet-bronnboring-650.webp',
          srcset:
            '/assets/img/home/case-ostlandet-bronnboring-650.webp 650w, /assets/img/home/case-ostlandet-bronnboring-1300.webp 1300w',
          width: 650,
          height: 397,
          alt: 'Den nye nettsiden til Østlandet Brønnboring',
          caption: 'Den nye nettsiden for Østlandet Brønnboring.',
        },
      },
      {
        title: 'Resultatet',
        body: [
          'Østlandet Brønnboring fremstår som den trygge aktøren i et konservativt marked. Selgerne slipper å ringe for mer informasjon, og kundene får svar raskere.',
        ],
      },
    ],
    outcomes: [
      {
        icon: 'bars',
        title: 'Prosjektbibliotek',
        description:
          'Filtrerbar oversikt over referanser som også fungerer i salg.',
      },
      {
        icon: 'users',
        title: 'Bedre henvendelser',
        description: 'Skjemaet spør om det selgerne trenger å vite, så de kan svare raskere.',
      },
      {
        icon: 'star',
        title: 'Video og foto',
        description: 'Viser arbeidet og skaper tillit i tilbudsfasen.',
      },
    ],
    cardImage: '/assets/img/home/case-ostlandet-bronnboring-650.webp',
    cardMetric: { value: '3×', label: 'kvalifiserte leads' },
    seoTitle: 'Case: Østlandet Brønnboring – 3× flere kvalifiserte leads',
    seoDescription:
      'Ny nettside, et smartere kontaktskjema og teknisk SEO ga Østlandet Brønnboring 3× flere kvalifiserte leads på fire måneder og 55 % kortere tid til tilbud.',
    datePublished: '2025-12-01',
    dateModified: '2026-10-11',
  },
  DAL_SUSHI,
  MASSIMO_YOGA,
  MR_BAO,
  RENE_BORGHAGEN,
  CUT_N_COLORS,
  MUDO_GYM,
  YUMMY_SUSHI,
  BERGEN_PIZZA,
];

export const CASE_STUDIES: CaseStudy[] = ALL_CASE_STUDIES.filter(
  (study) => SHOW_CONCEPT_CASES || study.kind !== 'concept'
);

export const INDEXABLE_CASE_STUDIES = CASE_STUDIES.filter(
  (study) => study.indexable
);

/** Shown on /case-studies. */
export const LISTED_CASE_STUDIES = CASE_STUDIES.filter(
  (study) => study.listed !== false
);

export const CASE_STUDY_LOOKUP = new Map(
  CASE_STUDIES.map((study) => [study.slug, study])
);

export function getCaseStudyBySlug(
  slug: string | null | undefined
): CaseStudy | undefined {
  if (!slug) {
    return undefined;
  }
  return CASE_STUDY_LOOKUP.get(slug);
}

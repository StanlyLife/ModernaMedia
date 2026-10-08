import { Testimonial } from '../home/homev2/testimonials/testimonials.component';

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
}

export interface CaseStudyOutcome {
  title: string;
  description: string;
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
}

/** A titled block with videos, shown above the gallery. */
export interface CaseStudyShowcase {
  title: string;
  intro?: string;
  videos?: CaseStudyVideo[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  /** The client's own website. */
  website: string;
  /** false keeps the page out of search engines, the sitemap and llms.txt. */
  indexable: boolean;
  heroImage: string;
  heroImageSrcset: string;
  heroImageWidth: number;
  heroImageHeight: number;
  heroImageAlt: string;
  heroImageCaption?: string;
  heroOverlay?: string;
  /** 1200x630 JPG for social sharing. */
  ogImage: string;
  industry: string;
  location: string;
  timeframe: string;
  services: string[];
  testimonial: Required<Pick<Testimonial, 'quote'>> & {
    name: string;
    role: string;
    company: string;
    image?: string;
    imageAlt?: string;
  };
  stats: CaseStudyStat[];
  sections: CaseStudySection[];
  outcomes: CaseStudyOutcome[];
  showcase?: CaseStudyShowcase;
  gallery?: CaseStudyMedia[];
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

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'sola-parkering',
    title: 'Sola Parkering: rask nettside og lokal SEO for flyplassparkering',
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
      'linear-gradient(135deg, rgba(6, 12, 32, 0.9), rgba(20, 88, 181, 0.65))',
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
        value: '+160.000',
        description: 'årlige besøk',
      },
      {
        label: 'Flere bookinger',
        value: '5.6×',
        description: 'etter lansering',
      },
      {
        label: 'Supporthenvendelser',
        value: '-40%',
        description: 'med tydelig FAQ og prislogikk',
      },
    ],
    sections: [
      {
        title: 'Utfordringen',
        body: [
          'Prosjektet startet uten nettside fordi Sola Parkering var en ny parkeringsplass ved Stavanger lufthavn. De trengte å fremstå seriøse fra dag én og forklare tjenesten tydelig for både ferie- og jobbreisende.',
          'Målet var en lynrask informasjonsflate som viste priser, kapasitet og kontaktpunkter slik at kundene kunne ta direkte kontakt.',
        ],
      },
      {
        title: 'Veien frem',
        body: [
          'Vi bygde løsningen i ren HTML, CSS og vanilla JS for å minimere lastetid og teknisk gjeld. Arkitekturen er statisk, men innhold og metadata kan oppdateres raskt uten byggeverktøy.',
          'SEO ble prioritert fra start med strukturert LocalBusiness-data, dedikerte seksjoner for priser, ruteinformasjon og FAQ samt manuell optimalisering av kopien for prioriterte søkeord.',
        ],
        bulletTitle: 'Tiltak som gjorde forskjellen',
        bullets: [
          'Statisk stack optimalisert for >90 Lighthouse-score på mobil',
          'SEO-plan for “parkering Stavanger lufthavn” og relaterte søk',
        ],
      },
      {
        title: 'Resultatet',
        body: [
          'Nettsiden laster under ett sekund på 4G og rangerer i toppsjiktet på de viktigste flyplass-relaterte søkene.',
          'Kundene finner priser og retningsinformasjon uten å ringe support, og teamet håndterer henvendelser via telefon og e-post slik driftsmodellen var planlagt.',
        ],
      },
    ],
    outcomes: [
      {
        title: 'Lynrask landingsside',
        description:
          'Statisk HTML/CSS/JS distribuert via CDN gir toppscore på ytelse og Core Web Vitals.',
      },
      {
        title: 'Synlighet i lokale søk',
        description:
          'Strukturert data, innholdsplan og metadata for “parkering Stavanger lufthavn”.',
      },
      {
        title: 'Kontrollert kundedialog',
        description:
          'Klare CTA-er til telefon og e-post lar teamet håndtere henvendelser uten nytt system.',
      },
    ],
    showcase: {
      title: 'Nytt design: «Start reisen med ro»',
      intro:
        'Vi har tegnet en ny versjon av solaparkering.no. I det nye designet ligger priskalkulatoren øverst på forsiden, prisene er enklere å sammenligne, og SmartPark-guiden og kontaktskjemaet fungerer like godt på mobil som på desktop. Traileren viser hvordan det henger sammen, og i case-videoen forteller vi hvordan vi kom fram til designet.',
      videos: [
        {
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
        },
      ],
    },
    gallery: [
      galleryImage(
        'sola-parkering-design-forside',
        [960, 1920],
        [1920, 1011],
        'Forsiden i det nye designet for Sola Parkering, med overskriften «Start reisen med ro.» og priskalkulator',
        'Forsiden: «Start reisen med ro.», med priskalkulatoren rett under overskriften.',
        true
      ),
      galleryImage(
        'sola-parkering-design-kalkulator',
        [640, 1280],
        [16, 9],
        'Priskalkulatoren med nedtrekksliste for antall døgn og prisen for hvert valg',
        'Velg antall døgn og se prisen med en gang. Bussen er alltid inkludert.'
      ),
      galleryImage(
        'sola-parkering-design-priser',
        [800, 1600],
        [16, 9],
        'Oversikt over alle 21 døgnpriser hos Sola Parkering',
        'Alle 21 døgnpriser samlet i én oversikt.'
      ),
      galleryImage(
        'sola-parkering-design-enheter',
        [960, 1920],
        [16, 9],
        'Det nye designet vist på desktop, laptop, nettbrett og mobil',
        'Samme innhold, tilpasset desktop, laptop, nettbrett og mobil.',
        true
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
    seoTitle: 'Case: Sola Parkering – nettside og lokal SEO | Moderna Media',
    seoDescription:
      'Ny nettside og lokal SEO for Sola Parkering ved Stavanger lufthavn: +160 000 årlige besøk og 5,6× flere bookinger etter lansering.',
    datePublished: '2025-12-01',
    dateModified: '2026-10-08',
  },
  {
    slug: 'marbella-car-spa',
    title: 'Marbella Car Spa – ny nettopplevelse for Patrik',
    subtitle:
      'Fra serverdrift på Gardermoen til Next.js-basert nettside for nyoppstartet premium-detailer i Marbella.',
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
      'linear-gradient(135deg, rgba(8, 5, 17, 0.92), rgba(135, 67, 32, 0.55))',
    ogImage: '/assets/img/case/marbella-car-spa-og.jpg',
    industry: 'Bilpleie & detailing',
    location: 'Marbella, Spania',
    timeframe: '6 uker fra spesifikasjon til lansering',
    services: [
      'Serverdrift',
      'Next.js + React utvikling',
      'SCSS designimplementering',
      'SEO + ytelsesoptimalisering',
    ],
    testimonial: {
      quote:
        'Moderna Media tok over driften av mamrotcarspa.no og leverte pålitelig support. Da vi åpnet i Marbella bygde de den fleksible Next.js-nettsiden vi trengte, uten at vi måtte starte fra scratch.',
      name: 'Patrik',
      role: 'Daglig leder',
      company: 'Marbella Car Spa',
    },
    stats: [
      {
        label: 'Oppetid',
        value: '99.95%',
        description: 'etter at vi tok over serverhosting',
      },
      {
        label: 'PageSpeed mobil',
        value: '100/100',
        description: 'med Next.js SSR og SCSS-optimalisering',
      },
      {
        label: 'Leads fra skjema',
        value: '+68%',
        description: 'første 60 dager etter lansering',
      },
    ],
    sections: [
      {
        title: 'Utgangspunktet',
        body: [
          'Patrik hadde driftet car detailing ved Gardermoen og brukte oss til servervedlikehold. Da han startet Marbella Car Spa trengte han mer enn hosting – han trengte en moderne plattform som kunne vokse med virksomheten.',
          'Vi utviklet en plan og et design som reflekterte den premium opplevelsen Marbella Car Spa tilbyr sine kunder.',
        ],
      },
      {
        title: 'Leveransen',
        body: [
          'Vi migrerte domenet til vår infrastruktur, satte opp overvåkning og etablerte rutiner for patching og SSL-fornyelser for mamrotcarspa.no.',
          'Den nye nettsiden ble bygget i React/Next.js med SCSS-moduler for å sikre dynamikk, server-side rendering og enkel videreutvikling når nye tjenester skal inn.',
        ],
        bullets: [
          'SSR og incremental static regeneration for rask indeksering',
          'Komponentbibliotek for tjenester, priser og galleri',
          'CI/CD som automatisk ruller ut endringer fra GitHub',
        ],
      },
      {
        title: 'Effekten',
        body: [
          'Stabil hosting og logging gir forutsigbar drift mens teamet bygger merkevaren i Marbella.',
          'Next.js-arkitekturen gjør at nye språk og kampanjer kan lanseres uten å redesigne eller endre stack.',
        ],
      },
    ],
    outcomes: [
      {
        title: 'Drift og overvåkning',
        description:
          'Vi håndterer hosting, SSL og oppdateringer slik at teamet kan fokusere på kunder.',
      },
      {
        title: 'Next.js grunnmur',
        description:
          'Komponentbasert React-løsning med SCSS-moduler og SSR for ytelse.',
      },
      {
        title: 'Skalerbar videreutvikling',
        description:
          'Deploy-pipeline og struktur gjør at nye funksjoner kan legges til på minutter.',
      },
    ],
    seoTitle: 'Case: Marbella Car Spa – Next.js-nettside og drift | Moderna Media',
    seoDescription:
      'Vi tok over serverhosting for mamrotcarspa.no og bygde en Next.js/React-side for den nye satsingen i Marbella med fokus på ytelse og fleksibilitet.',
    datePublished: '2025-12-01',
    dateModified: '2026-10-07',
  },
  {
    slug: 'fjerdingby-pizza',
    title: 'Fjerdingby Pizza & Grill: nettside med digital meny og lokal SEO',
    subtitle:
      'Minimal Next.js-side med meny, åpningstider og priser – laget for lokal synlighet.',
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
      'linear-gradient(135deg, rgba(8, 11, 28, 0.92), rgba(142, 34, 52, 0.58))',
    ogImage: '/assets/img/case/fjerdingby-pizza-og.jpg',
    industry: 'Restaurant og take-away',
    location: 'Fjerdingby, Rælingen',
    timeframe: '5 uker fra oppstart til publisering',
    services: [
      'Next.js + React utvikling',
      'SCSS & designimplementering',
      'Lokal SEO og strukturert data',
      'Branding & meny-design',
    ],
    testimonial: {
      quote:
        'Vi trengte bare en enkel side med meny og åpningstider, og Moderna Solutions leverte nettopp det – raskt, ryddig og lett å oppdatere.',
      name: 'Ena Hasanović',
      role: 'Daglig leder',
      company: 'Fjerdingby Pizza & Grill',
      image: '/assets/img/case/fjerdingby-pizza-logo-112.webp',
      imageAlt: 'Fjerdingby Pizza & Grill logo',
    },
    stats: [
      {
        label: 'Lastetid mobil',
        value: '<1.2s',
        description: 'etter Next.js-optimalisering',
      },
      {
        label: 'Synlighet “pizza Fjerdingby”',
        value: 'Topp 1',
        description: 'etter lokal SEO og strukturert data',
      },
      {
        label: 'Tid brukt på oppdateringer',
        value: '-70%',
        description: 'takket være dynamisk menykomponent',
      },
    ],
    sections: [
      {
        title: 'Utgangspunktet',
        body: [
          'Restauranten ønsket en enkel side som kunne vise meny, priser og åpningstider uten tredjepartsbestilling.',
          'Vi prioriterte lav teknisk kompleksitet, rask publisering og god SEO på lokale søkeord.',
        ],
      },
      {
        title: 'Leveransen',
        body: [
          'Vi bygde siden i React/Next.js med SCSS-moduler for å holde koden lett og tilgjengelig.',
          'Menyen er bygget som gjenbrukbare komponenter slik at ukens tilbud og priser oppdateres på sekunder.',
        ],
        bullets: [
          'Strukturert data (Menu + LocalBusiness) for rikere søkeresultater',
          'Integrert kart, tel- og bestillingslenker for rask kontakt',
          'Designet take-away meny og logo',
        ],
      },
      {
        title: 'Resultatet',
        body: [
          'Kundene finner åpningstider og meny via Google uten å gå gjennom aggregatorer.',
          'Teamet slipper tunge PDF-er og oppdaterer menyen direkte i komponentbiblioteket.',
        ],
      },
    ],
    showcase: {
      title: 'Nytt design: før og etter',
      intro:
        'Vi har tegnet en ny, enklere versjon av fjerdingbypizzaoggrill.no. Menyen er ett trykk unna, telefon, adresse og åpningstider ligger øverst, og maten får mer plass. Videoen viser den gamle og den nye siden side om side, og forklarer hvorfor vi valgte som vi gjorde.',
      videos: [
        {
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
    gallery: [
      {
        src: '/assets/img/case/fjerdingby-pizza-meny-800.webp',
        srcset:
          '/assets/img/case/fjerdingby-pizza-meny-800.webp 800w, /assets/img/case/fjerdingby-pizza-meny-1600.webp 1600w',
        width: 800,
        height: 600,
        alt: 'Take-away-menyen vi designet for Fjerdingby Pizza & Grill',
        caption: 'Take-away-meny designet for trykk.',
      },
      {
        src: '/assets/img/case/fjerdingby-pizza-640.webp',
        srcset:
          '/assets/img/case/fjerdingby-pizza-640.webp 640w, /assets/img/case/fjerdingby-pizza-1280.webp 1280w',
        width: 640,
        height: 384,
        alt: 'Logoen vi designet for Fjerdingby Pizza & Grill',
        caption: 'Ny logo for Fjerdingby Pizza & Grill.',
      },
    ],
    outcomes: [
      {
        title: 'Digital meny',
        description:
          'Dynamisk komponentstruktur gjør menyendringer enkle og konsekvente.',
      },
      {
        title: 'Merkevare',
        description:
          'Ny logo og take-away-meny, designet og klargjort for trykk.',
      },
      {
        title: 'Lokal synlighet',
        description:
          'Strukturert data og SEO gir topp-plassering på “pizza Fjerdingby”.',
      },
    ],
    seoTitle: 'Case: Fjerdingby Pizza & Grill – nettside og lokal SEO',
    seoDescription:
      'Lett Next.js-nettside med digital meny og lokal SEO. Fjerdingby Pizza & Grill rangerer øverst på «pizza Fjerdingby» og laster på under 1,2 sekunder.',
    datePublished: '2025-12-01',
    dateModified: '2026-10-08',
  },
  {
    slug: 'ostlandet-bronnboring',
    title: 'Østlandet Brønnboring fikk 3× flere kvalifiserte leads',
    subtitle:
      'Teknisk SEO, bransjesider og smart leadshåndtering fylte kalenderen i høysesongen.',
    summary:
      'Østlandet Brønnboring konkurrerer om store anbud og privatkunder i hele regionen. Vi bygget en robust presentasjon av referanseprosjekter, sørget for at teknisk data ble forståelig, og implementerte scoring som prioriterer riktige forespørsler.',
    website: 'https://bronn-energiboring.no/',
    indexable: true,
    heroImage: '/assets/img/case/ostlandet-bronnboring-1280.webp',
    heroImageSrcset: img('ostlandet-bronnboring', [640, 1280, 1920]),
    heroImageWidth: 1280,
    heroImageHeight: 781,
    heroImageAlt: 'Borerigg i arbeid for Østlandet Brønnboring',
    heroOverlay:
      'linear-gradient(135deg, rgba(5, 16, 33, 0.94), rgba(25, 87, 156, 0.62))',
    ogImage: '/assets/img/case/ostlandet-bronnboring-og.jpg',
    industry: 'Bygg og anlegg',
    location: 'Østlandet',
    timeframe: '7 uker inkl. foto og film',
    services: ['Nettside', 'SEO + Thought leadership', 'HubSpot', 'Video'],
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
        label: 'Time-to-quote',
        value: '-55%',
        description: 'tid brukt på å sende tilbud',
      },
      {
        label: 'Indeks-score',
        value: '100/100',
        description: 'på teknisk SEO (Lighthouse)',
      },
    ],
    sections: [
      {
        title: 'Behovet',
        body: [
          'Selskapet hadde mange solide referanser, men ingen måte å kommunisere dem på uten PDF-er. I tillegg gikk henvendelser tapt fordi skjemaet ikke ga nok kontekst til selgerne.',
        ],
      },
      {
        title: 'Leveransen',
        body: [
          'Vi laget en komponent for prosjektkort hvor bilder, geografi, grunnforhold og leveranse beskrives likt. Kortene kan filtreres etter behov og brukes i tilbud. Samtidig implementerte vi HubSpot med scoring basert på boretype, budsjett og tidsrom.',
        ],
        bullets: [
          'Teknisk SEO med strukturert data, FAQ og skjema markup',
          'Filmet “dag på byggeplass” for å øke engasjement i sosiale medier',
          'Dashbord for salg og produksjon slik at teamet prioriterer riktige prosjekter',
        ],
      },
      {
        title: 'Resultatet',
        body: [
          'Med en tydelig digital identitet fremstår Østlandet Brønnboring som den trygge aktøren i et konservativt marked. Selgerne slipper å ringe for mer informasjon, og kundene får svar raskere.',
        ],
      },
    ],
    outcomes: [
      {
        title: 'Prosjektbibliotek',
        description:
          'Filterbar oversikt over referanser som også fungerer som salgsmateriell.',
      },
      {
        title: 'Lead scoring',
        description: 'Automatisert prioritering og varsler i HubSpot.',
      },
      {
        title: 'Video + foto',
        description: 'Dokumenterer prosesser og skaper tillit i tilbudsfasen.',
      },
    ],
    seoTitle: 'Case: Østlandet Brønnboring – 3× flere kvalifiserte leads',
    seoDescription:
      'Ny nettside, HubSpot og teknisk SEO ga Østlandet Brønnboring 3× flere kvalifiserte leads på fire måneder og 55 % kortere tid til tilbud.',
    datePublished: '2025-12-01',
    dateModified: '2026-10-07',
  },
];

export const INDEXABLE_CASE_STUDIES = CASE_STUDIES.filter(
  (study) => study.indexable
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

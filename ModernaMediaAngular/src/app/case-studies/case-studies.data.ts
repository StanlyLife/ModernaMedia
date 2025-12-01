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
  alt: string;
  caption?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  heroImage: string;
  heroImageAlt: string;
  heroImageCaption?: string;
  heroOverlay?: string;
  industry: string;
  location: string;
  timeframe: string;
  services: string[];
  testimonial: Required<Pick<Testimonial, 'quote'>> & {
    name: string;
    role: string;
    company: string;
  };
  stats: CaseStudyStat[];
  sections: CaseStudySection[];
  outcomes: CaseStudyOutcome[];
  gallery?: CaseStudyMedia[];
  seoTitle: string;
  seoDescription: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'sola-parkering',
    title: 'Sola Parkering',
    subtitle:
      'Ny merkevareopplevelse, SEO-løp slik at reisende finner parkeringen først.',
    summary:
      'Som en ny oppstartet tjeneste hadde Sola Parkering behov for en enkel og rask side som kunne formidle informasjon enkelt og effektivt til sine eksisterende og nye kunder.',
    heroImage:
      'assets/Images/testimonials/solaparkering/Parkering-sola-flyplassparkering-på-sola.jpg',
    heroImageAlt: 'Nytt nettsidedesign for Sola Parkering',
    heroOverlay:
      'linear-gradient(135deg, rgba(6, 12, 32, 0.9), rgba(20, 88, 181, 0.65))',
    industry: 'Reiseliv & parkering',
    location: 'Stavanger lufthavn, Sola',
    timeframe: '4 uker fra ordre til lansering',
    services: [
      'UX-workshop',
      'Nettsideutvikling',
      'Integrert parkeringsoversikt',
      'SEO',
      'Google ads',
    ],
    testimonial: {
      quote:
        'Vi fikk designet og utviklet en nettside som er i tråd med vår identitet og som snakker godt til kundene. Vi er veldig fornøyde med tjenesten og servicen som fulgte.',
      name: 'Svein Magnar',
      role: 'Daglig leder',
      company: 'Sola Parkering',
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
    seoTitle: 'Case: Sola Parkering – lynrask infoside for ny parkeringsplass',
    seoDescription:
      'Vi bygde en lett HTML/CSS/JS-side som ga Sola Parkering synlighet på “parkering Stavanger lufthavn” og gjorde henvendelser enkle uten bookingsystem.',
  },
  {
    slug: 'marbella-car-spa',
    title: 'Marbella Car Spa – ny nettopplevelse for Patrik Mamrot',
    subtitle:
      'Fra serverdrift på Gardermoen til Next.js-basert nettside for nyoppstartet premium-detailer i Marbella.',
    summary:
      'Patrik Mamrot drev bilpleie ved Gardermoen og lot Moderna Media drifte mamrotcarspa.no. Da han åpnet i Marbella trengte han en fleksibel og rask nettside. Vi videreførte relasjonen med hosting, Next.js-utvikling og teknisk SEO.',
    heroImage: 'assets/Images/testimonials/mamrot/bg.jpeg',
    heroImageAlt: 'Detaljert bilpleie hos Marbella Car Spa',
    heroOverlay:
      'linear-gradient(135deg, rgba(8, 5, 17, 0.92), rgba(135, 67, 32, 0.55))',
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
      name: 'Patrik W. Mamrot',
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
          'Patrik Mamrot hadde driftet car detailing ved Gardermoen og brukte oss til servervedlikehold. Da han startet Marbella Car Spa trengte han mer enn hosting – han trengte en moderne plattform som kunne vokse med virksomheten.',
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
    seoTitle:
      'Case: Marbella Car Spa – Next.js-side og drift fra Moderna Solutions',
    seoDescription:
      'Vi tok over serverhosting for mamrotcarspa.no og bygde en Next.js/React-side for den nye satsingen i Marbella med fokus på ytelse og fleksibilitet.',
  },
  {
    slug: 'fjerdingby-pizza',
    title: 'Fjerdingby Pizza & Grill',
    subtitle:
      'Minimal Next.js-side med meny, åpningstider og priser – laget for lokal synlighet.',
    summary:
      'Oppdraget var å lage en lett, informativ nettløsning med meny og praktisk info. Vi bygget siden i React/Next.js med SCSS for god SEO, enkel vedlikehold og dynamisk restaurantmeny.',
    heroImage: 'assets/Images/testimonials/fjerdingby/logo.webp',
    heroImageAlt: 'Ny nettside for Fjerdingby Pizza og Grill',
    heroOverlay:
      'linear-gradient(135deg, rgba(8, 11, 28, 0.92), rgba(142, 34, 52, 0.58))',
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
          'Menyen er strukturert som reusable komponenter slik at ukens tilbud og priser oppdateres på sekunder.',
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
    gallery: [
      {
        src: 'assets/Images/testimonials/fjerdingby/menu.webp',
        alt: 'Placeholder for take-away meny til Fjerdingby Pizza & Grill',
        caption:
          'Take-away meny – placeholder som viser layout for fremtidig design.',
      },
      {
        src: 'assets/Images/testimonials/fjerdingby/logo.webp',
        alt: 'Placeholder-logo for Fjerdingby Pizza & Grill',
        caption: 'Logo-konsept placeholder til brandingpakken.',
      },
    ],
    outcomes: [
      {
        title: 'Digital meny',
        description:
          'Dynamisk komponentstruktur gjør menyendringer enkle og konsekvente.',
      },
      {
        title: 'Brand assets',
        description:
          'Take-away meny og logo-maler klare for trykk – placeholders i assets/Images/placeholders/fjerdingby-menu-placeholder.svg og .../fjerdingby-logo-placeholder.svg.',
      },
      {
        title: 'Lokal synlighet',
        description:
          'Strukturert data og SEO gir topp-plassering på “pizza Fjerdingby”.',
      },
    ],
    seoTitle:
      'Case: Fjerdingby Pizza & Grill – minimal Next.js-side for meny og åpningstider',
    seoDescription:
      'Vi leverte en lett React/Next.js-side med meny, priser og lokal SEO slik at Fjerdingby Pizza & Grill kan eie kommunikasjonen selv.',
  },
  {
    slug: 'ostlandet-bronnboring',
    title: 'Østlandet Brønnboring fikk 3× flere kvalifiserte leads',
    subtitle:
      'Teknisk SEO, bransjesider og smart leadshåndtering fylte kalenderen i høysesongen.',
    summary:
      'Østlandet Brønnboring konkurrerer om store anbud og privatkunder i hele regionen. Vi bygget en robust presentasjon av referanseprosjekter, sørget for at teknisk data ble forståelig, og implementerte scoring som prioriterer riktige forespørsler.',
    heroImage:
      'assets/Images/testimonials/ostlandske/ostlandetbronnboring.webp',
    heroImageAlt: 'Borerigg i arbeid for Østlandet Brønnboring',
    heroOverlay:
      'linear-gradient(135deg, rgba(5, 16, 33, 0.94), rgba(25, 87, 156, 0.62))',
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
    seoTitle:
      'Case: Østlandet Brønnboring – tre ganger flere kvalifiserte leads',
    seoDescription:
      'Se hvordan ny nettside, HubSpot og teknisk SEO ga Østlandet Brønnboring flere riktige forespørsler.',
  },
];

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

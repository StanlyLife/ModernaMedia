import type { CaseStudy, CaseStudyMedia } from '../case-studies.data';

// CutnColors – concept work for the hair salon at Storo (Prosjekter/Cut n Colors: design, Figma file
// kuVJ1JKjaumRmjWEv3itNK, video). Our own case study, not a client story: no client quote and no
// results, and neutral wording (no «forslag»). Listed on /case-studies, kept out of search engines.
// No website link on purpose: the live site is not this design, and a link invites a before/after comparison.
// Real: prices and durations, the 14 hairdressers, opening hours, address and the salon's own photos.

const C = '/assets/img/case/';
/** `/assets/img/case/<name>-<width>.webp`, largest width first; height belongs to that width. */
const image = (name: string, widths: number[], height: number, alt: string, caption: string): CaseStudyMedia => ({
  src: `${C}${name}-${widths[0]}.webp`,
  srcset: widths.map((w) => `${C}${name}-${w}.webp ${w}w`).join(', '),
  width: widths[0],
  height,
  alt,
  caption,
});

export const CUT_N_COLORS: CaseStudy = {
  slug: 'cut-n-colors',
  client: 'CutnColors',
  title: 'CutnColors: ny nettside og enklere booking for frisøren på Storo',
  heroTitle: 'Samme enkle konsept – skarpere uttrykk',
  subtitle:
    'Ny nettside, booking på tre måter og en plan for å bli funnet på «frisør Storo» – for en rask og rimelig frisør ved BI Nydalen.',
  summary:
    'CutnColors på Storo har et konsept som funker: rask klipp, faste priser og lange åpningstider. Vi tegnet en ny nettside som gir konseptet et like effektivt uttrykk, med salongens egne bilder, en tydelig prisliste og booking som alltid er ett trykk unna.',
  indexable: false,
  kind: 'concept',
  heroImage: `${C}cut-n-colors-1280.webp`,
  heroImageSrcset: `${C}cut-n-colors-640.webp 640w, ${C}cut-n-colors-1280.webp 1280w, ${C}cut-n-colors-1920.webp 1920w`,
  heroImageWidth: 1280,
  heroImageHeight: 853,
  heroImageAlt: 'Salongen til CutnColors på Storo, med stoler, speil og Times Square-veggen',
  heroOverlay:
    'linear-gradient(100deg, rgba(11, 11, 11, 0.94) 0%, rgba(11, 11, 11, 0.72) 45%, rgba(31, 122, 100, 0.35) 100%)',
  ogImage: `${C}cut-n-colors-og.jpg`,
  industry: 'Frisør',
  location: 'Storo, Oslo',
  timeframe: 'Oktober 2026',
  services: ['Webdesign', 'Booking med Timma, skjema og telefon', 'Lokal SEO', 'Logo-opprydding', 'Trailer'],
  stats: [
    { value: '3', label: 'Veier til time', description: 'Timma, skjema og telefon' },
    { value: '10', label: 'Faste priser', description: 'med tid og pris på forsiden' },
    { value: '14', label: 'Frisører', description: 'med bilde og spesialitet' },
  ],
  sections: [
    {
      title: 'Utgangspunktet',
      body: [
        'CutnColors ligger i Nycoveien 2, rett ved Storo og et par minutter fra BI Nydalen. Konseptet er enkelt: Cut’n Run på 20 minutter for 650 kr, faste priser uten skjulte tillegg og åpent til 20 på hverdager.',
        'Målgruppen er studenter og unge voksne i nærområdet. Oppgaven var ikke å gjøre konseptet mer komplisert, men å gi det et uttrykk som matcher hvor effektivt salongen faktisk er.',
      ],
      image: image(
        'cut-n-colors-design-konsept',
        [1920, 960],
        1080,
        'Utgangspunktet for CutnColors: 20 minutter, 650 kr og åpent 10–20',
        'Konseptet som funker: rask klipp, fast pris og lange åpningstider.'
      ),
    },
    {
      title: 'Designet',
      body: [
        'Vi beholdt det som funker – menyen, prisene, KRED og navnene Cut’n Run og Cut’n Chill – og strammet opp resten. Fargene er hentet fra salongen: de svarte veggene, betonggulvet og mintgrønt fra logoen. Logoen er tegnet opp på nytt, med det samme snittet mellom T og N.',
        'Overskriftene er satt i Archivo og tid og pris i DM Mono, så siden føles effektiv og folkelig uten å bli luksus. Alle bildene er salongens egne, beskåret og fargejustert til ett uttrykk.',
      ],
      bullets: [
        'Prislisten med tid og pris rett på forsiden',
        'Lærlingpris og åpent til 20 løftet fram for studentene',
        'Teamet med bilde og spesialitet, social events og gavekort',
      ],
      image: image(
        'cut-n-colors-design-uttrykk',
        [1920, 960],
        1080,
        'Fargepaletten og den nye forsiden til CutnColors',
        'Samme konsept, skarpere uttrykk: farger fra salongen og en ryddigere forside.'
      ),
    },
    {
      title: 'Booking og synlighet',
      body: [
        '«Book time» følger med i toppen og nederst på mobilen. Ett trykk gir tre valg: book på nett i Timma, send en forespørsel i et kort skjema eller ring salongen. Ingen kunde går tapt, uansett hvordan de vil booke.',
        'For å bli funnet på «frisør Storo» har siden Storo i tittel og overskrift og strukturerte data for frisørsalong, og vi la en plan for Google-profilen, anmeldelser og egne landingssider.',
      ],
      bullets: [
        'Timma, skjema eller telefon fra én knapp',
        'Strukturerte data med adresse, åpningstider og priser',
        'QR-kode i kassa for flere Google-anmeldelser',
      ],
      image: image(
        'cut-n-colors-design-booking',
        [1920, 960],
        1080,
        'Booking-valget med Timma, skjema og telefon',
        'Tre veier til time: Timma, skjema eller telefon.'
      ),
    },
  ],
  outcomes: [
    {
      icon: 'calendar',
      title: 'Booking på tre måter',
      description: 'Timma, forespørselsskjema og telefon fra én «Book time»-knapp.',
    },
    {
      icon: 'search',
      title: 'Lokal synlighet',
      description: 'Storo i tittel og tekst, strukturerte data og en plan for Google-profilen.',
    },
    {
      icon: 'star',
      title: 'Skarpere uttrykk',
      description: 'Ny forside, prisliste og team, med salongens egne bilder og en opprenset logo.',
    },
  ],
  showcase: {
    title: 'Designet forklart på 84 sekunder',
    intro:
      'CutnColors har et konsept som funker – derfor handler designet om uttrykket og veien til time. I videoen viser vi hvordan farger, prisliste, booking på tre måter og mobilversjonen kan gi salongen flere bookinger og bedre synlighet på Storo.',
    videos: [
      {
        title: 'Trailer: den nye nettsiden til CutnColors',
        label: 'Se traileren',
        src: '/assets/Videos/cut-n-colors-designforslag.mp4',
        poster: `${C}cut-n-colors-designforslag-poster-1280.webp`,
        width: 1920,
        height: 1080,
        name: 'CutnColors – trailer for den nye nettsiden',
        description:
          'Trailer som viser konseptet, designet og hvordan den nye nettsiden kan gi CutnColors flere bookinger og bedre synlighet på Storo.',
        duration: 'PT1M24S',
        uploadDate: '2026-10-11',
        chapters: [
          { title: 'Et konsept som funker', start: 6 },
          { title: 'Målet med nettsiden', start: 14 },
          { title: 'Samme konsept, skarpere uttrykk', start: 22 },
          { title: 'Nettsiden', start: 30 },
          { title: 'Tre veier til time', start: 46 },
          { title: 'Laget for mobilen', start: 56 },
          { title: 'Funnet på «frisør Storo»', start: 62 },
          { title: 'Hva CutnColors kan få', start: 70 },
        ],
        transcript:
          'CutnColors – ny nettside. Et konsept som funker: Cut’n Run på 20 minutter, 650 kr fast pris og åpent 10–20. Målet: en nettside som jobber like effektivt som salongen – flere bookinger, flere nye kunder og et proft uttrykk. Samme konsept, skarpere uttrykk: farger fra salongen, en ny forside og «Rask klipp. Fast pris.». Nettsiden: booking ett trykk unna, prisene selger jobben, studentene i fokus, teamet med KRED og ekstra inntekt fra events og gavekort. Tre veier til time: book på nett i Timma, send en forespørsel eller ring. Laget for mobilen, der studentene booker. Funnet på «frisør Storo» med Google-profil, strukturerte data og flere anmeldelser. Rask klipp. Fast pris. Rett ved Storo.',
      },
    ],
  },
  gallery: [
    image(
      'cut-n-colors-design-forside',
      [1600, 800],
      1000,
      'Den nye forsiden til CutnColors',
      'Forsiden: «Rask klipp. Fast pris. Rett ved Storo.» med tre veier til time.'
    ),
    image(
      'cut-n-colors-design-priser',
      [1600, 800],
      1000,
      'Prislisten med faste priser og tid',
      'Enkel meny med fast pris og tid på hver behandling.'
    ),
    image(
      'cut-n-colors-design-mobil',
      [1920, 960],
      1080,
      'Mobilversjonen av CutnColors med fast «Book time»-knapp',
      'På mobil følger «Book time» med hele veien ned.'
    ),
  ],
  cardMetric: { value: '3', label: 'veier til time' },
  seoTitle: 'Case: CutnColors – nettside for frisør på Storo',
  seoDescription:
    'Ny nettside for frisøren CutnColors på Storo: faste priser, booking via Timma, skjema eller telefon, og lokal SEO for «frisør Storo».',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
};

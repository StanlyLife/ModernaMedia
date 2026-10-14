import type { CaseStudy, CaseStudyMedia } from '../case-studies.data';

// Bergen Pizza – website concept for a takeaway by Bryggen: menu, opening hours and phone first, Wolt for delivery,
// no ordering system (Prosjekter/Bergen Pizza). Our own concept work, not a client project: no client quote, neutral
// wording (no «forslag»), listed on /case-studies, kept out of search engines.

const C = '/assets/img/case/';
/** `/assets/img/case/<name>-<width>.webp`, largest width first. */
const image = (name: string, widths: number[], height: number, alt: string, caption: string): CaseStudyMedia => ({
  src: `${C}${name}-${widths[0]}.webp`,
  srcset: widths.map((w) => `${C}${name}-${w}.webp ${w}w`).join(', '),
  width: widths[0],
  height,
  alt,
  caption,
});

export const BERGEN_PIZZA: CaseStudy = {
  slug: 'bergen-pizza',
  kind: 'concept',
  client: 'Bergen Pizza',
  title: 'Bergen Pizza: nettside for et gatekjøkken ved Bryggen',
  heroTitle: 'Pizza, kebab og burger – til langt på natt',
  subtitle:
    'En nettside for et gatekjøkken: hele menyen med bilde og pris, ring-knappen først, åpningstidene tydelig – og Wolt for den som vil ha maten levert.',
  summary:
    'Ny nettside for Bergen Pizza i Kong Oscars gate: 49 retter med bilde, nummer og pris, ring og bestill på ett trykk, og åpent til kl. 04 der alle ser det.',
  indexable: false,
  heroImage: `${C}bergen-pizza-1280.webp`,
  heroImageSrcset: `${C}bergen-pizza-640.webp 640w, ${C}bergen-pizza-1280.webp 1280w, ${C}bergen-pizza-1920.webp 1920w`,
  heroImageWidth: 1280,
  heroImageHeight: 720,
  heroImageAlt: 'Nystekt pizza med tomat, mozzarella og basilikum',
  heroOverlay:
    'linear-gradient(100deg, rgba(22, 20, 18, 0.95) 0%, rgba(22, 20, 18, 0.82) 45%, rgba(22, 20, 18, 0.25) 100%)',
  ogImage: `${C}bergen-pizza-og.jpg`,
  industry: 'Gatekjøkken – pizza, kebab og burger',
  location: 'Kong Oscars gate, Bergen',
  timeframe: 'Oktober 2026',
  services: ['Nettsidedesign', 'Digital meny', 'Mobildesign', 'Logo', 'Designvideo'],
  stats: [
    { value: '49', label: 'Retter med bilde og pris', description: 'hele menyen rett på siden' },
    { value: '1 trykk', label: 'Fra mobil til telefon', description: 'ring-knappen ligger fast nederst' },
    { value: 'Kl. 04', label: 'Nattåpent – tydelig', description: 'torsdag, fredag og lørdag' },
  ],
  sections: [
    {
      title: 'Utgangspunktet',
      body: [
        'Bergen Pizza er et gatekjøkken i Kong Oscars gate, rett ved Bryggen og Torget. Her er det pizza, kebab og burger fra lunsj til langt på natt – torsdag til lørdag er det åpent til klokka fire.',
        'Det fantes ingen egen nettside, bare en Facebook-side. Menyen lå på Wolt, og åpningstidene måtte man finne på Google. For et sted folk ofte oppsøker sent på kvelden, er det nettopp meny, åpningstider og telefon de leter etter.',
      ],
      image: image('bergen-pizza-idag', [1440, 720], 810, 'Tekst på svart: egen nettside? Nei. Menyen? Bare på Wolt. Åpent nå? Må googles.', 'Utgangspunktet, slik det står i designvideoen.'),
    },
    {
      title: 'Et ekte gatekjøkken',
      body: [
        'Siden skal se ut som det den er: et sted for rask, god mat – ikke en fin restaurant. Derfor er det rødt, gult og hvitt, fete store bokstaver som på en menytavle, og store bilder av maten.',
        'Logoen er en enkel pizza med ett stykke trukket ut, som fungerer like godt i et lite ikon som på et skilt.',
      ],
      bullets: [
        'Ketchuprød, gul og hvit – med svart der det trengs kontrast',
        'Archivo i store bokstaver, som en menytavle',
        'Gule prislapper på alle retter',
        'Ny logo: en pizza med ett stykke trukket ut',
      ],
      image: image('bergen-pizza-forside', [1440, 720], 900, 'Forsiden til Bergen Pizza med rød toppseksjon, tre matbilder og knappen «Ring 55 36 05 49»', 'Forsiden: «Pizza, kebab og burger til langt på natt», med ring-knappen først.'),
    },
    {
      title: 'Menyen med bilde på alt',
      body: [
        'Alle 49 rettene ligger rett på siden med bilde, nummer og pris – pizza, kebab i rull, pita og som tallerken, burgere, tilbehør og drikke.',
        'Nummeret gjør det enkelt å bestille på telefon: finn retten, ring og si «en 23». For levering går en knapp rett til Wolt. Det er ingen egen nettbutikk – det trenger ikke et gatekjøkken.',
      ],
      image: image('bergen-pizza-meny', [1440, 720], 1100, 'Menysiden med pizzaer som kort med bilde, nummer og gul pris', 'Menysiden: hver rett har bilde, nummer og pris.'),
    },
    {
      title: 'Åpningstider og telefon først',
      body: [
        '«Åpent i dag til …» står øverst på hver side, og telefonnummeret ligger i både toppen, knappene og bunnen. På mobil ligger «Ring» og «Wolt» fast nederst på skjermen.',
        'Åpningstidene har sin egen seksjon der dagens dag er markert og nattåpent torsdag til lørdag er tydelig – det er det folk sjekker når de er sultne etter byen.',
      ],
      bullets: [
        'Ring-knapp på hver side, fast nederst på mobil',
        'Dagens åpningstid øverst',
        'Kart og veibeskrivelse med ett trykk',
        'Wolt-knapp for levering',
      ],
      image: image('bergen-pizza-tider', [1440, 720], 592, 'Åpningstider på svart bakgrunn med tirsdag markert og nattåpent torsdag til lørdag', '«Sulten etter byen? Åpent til kl. 04.»'),
    },
  ],
  outcomes: [
    { icon: 'globe', title: 'Ny nettside', description: 'Forside, meny og åpningstider i en rett-fram gatekjøkken-stil.' },
    { icon: 'tag', title: 'Meny med bilde og pris', description: 'Alle 49 retter med nummer, bilde og pris.' },
    { icon: 'phone', title: 'Ring på ett trykk', description: 'Telefonnummeret på hver side og fast nederst på mobil.' },
    { icon: 'clock', title: 'Åpningstider som synes', description: 'Dagens tid øverst og nattåpent markert.' },
    { icon: 'star', title: 'Ny logo', description: 'En enkel pizza med ett stykke trukket ut.' },
    { icon: 'film', title: 'Designvideo', description: '65 sekunder som viser den nye siden.' },
  ],
  showcase: {
    title: 'Den nye siden på 65 sekunder',
    intro:
      'Et gatekjøkken trenger ikke en nettbutikk. Det trenger en meny folk vil ha, et telefonnummer som er lett å trykke på og åpningstider som er lette å finne. I videoen viser vi hvordan siden løser det.',
    videos: [
      {
        label: 'Se designvideoen',
        title: 'Designvideo',
        src: '/assets/Videos/bergen-pizza-designforslag.mp4',
        poster: `${C}bergen-pizza-designvideo-poster-1280.webp`,
        width: 1920,
        height: 1080,
        name: 'Bergen Pizza – designvideo',
        description:
          'Designvideo fra Moderna Media: ny nettside for gatekjøkkenet Bergen Pizza ved Bryggen, med hele menyen, ring-knappen først og åpningstidene tydelig.',
        duration: 'PT1M5S',
        uploadDate: '2026-10-13',
        // Scene starts from the video's beat grid (Prosjekter/Bergen Pizza/video/index.html, B(v) = v · 0.4825).
        chapters: [
          { title: 'Utgangspunktet', start: 12 },
          { title: 'Ny nettside', start: 16 },
          { title: 'Hele menyen', start: 24 },
          { title: 'Ett trykk – så ringer det', start: 31 },
          { title: 'Åpent til kl. 04', start: 39 },
          { title: 'Levering og kart', start: 47 },
          { title: 'Pizza, kebab og burger', start: 55 },
        ],
        // The video has music and on-screen text only; this is the text as it appears.
        transcript:
          'Pizza. Kebab. Burger. Pommes. Midt i Bergen. Til langt på natt. Pizza fra 135,-. Kebab fra 95,-. Burger fra 125,-. Fish & chips 185,-. ' +
          'Bergen Pizza – Kong Oscars gate 3, ved Bryggen. Pizza, kebab, burger. ' +
          'I dag: Egen nettside? Nei. Menyen? Bare på Wolt. Åpent nå? Må googles. Det fikser vi. ' +
          'Ny nettside: ring-knappen først, bilde og pris på alt, og åpningstidene tydelig. ' +
          'Hele menyen: 49 retter, bilde og pris på alle. Si «23» når du ringer. ' +
          'Ett trykk – så ringer det. Maten står klar når du kommer. ' +
          'Åpent til kl. 04 torsdag, fredag og lørdag – og dagens åpningstid står øverst på siden. ' +
          'Levering? Én knapp til Wolt – på hver side. Finn oss: Kong Oscars gate 3, rett ved Bryggen og Torget – med veibeskrivelse på ett trykk. ' +
          'Bergen Pizza. Pizza, kebab og burger til langt på natt. Ring 55 36 05 49.',
      },
    ],
  },
  gallery: [
    image('bergen-pizza-mobil', [1600, 800], 1064, 'Fire mobilskjermer fra den nye nettsiden til Bergen Pizza', 'Mobil: forside, meny, åpningstider og «Finn oss», med «Ring» og «Wolt» fast nederst.'),
    image('bergen-pizza-retter', [1440, 720], 1228, 'Åtte populære retter som kort med bilde, nummer og gul pris', '«Det de fleste bestiller» på forsiden.'),
    image('bergen-pizza-menyvegg', [1440, 720], 810, 'Alle 49 rettene fra menyen som små kort med bilde og pris', 'Hele menyen – 49 retter med bilde og pris.'),
  ],
  cardImage: `${C}bergen-pizza-640.webp`,
  cardMetric: { value: '49', label: 'retter med bilde' },
  seoTitle: 'Bergen Pizza – nettside for gatekjøkken ved Bryggen | Moderna Media',
  seoDescription:
    'Se hvordan vi designet en nettside for gatekjøkkenet Bergen Pizza: hele menyen med bilde og pris, ring og bestill på ett trykk, og åpningstider som er lette å finne.',
  datePublished: '2026-10-13',
  dateModified: '2026-10-13',
};

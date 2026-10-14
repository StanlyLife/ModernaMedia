import type { CaseStudy, CaseStudyMedia } from '../case-studies.data';

// Yummy Sushi & Wok – new website concept for a takeaway that keeps every order link (Prosjekter/Yummy Sushi). Our own
// concept work, not a client project: no client quote, neutral wording (no «forslag»), listed on /case-studies, kept out
// of search engines.

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

export const YUMMY_SUSHI: CaseStudy = {
  slug: 'yummy-sushi-wok',
  kind: 'concept',
  client: 'Yummy Sushi & Wok',
  title: 'Yummy Sushi & Wok: ny nettside for en takeaway på Oppsal',
  heroTitle: 'Ny look for en takeaway – uten å miste én bestilling',
  subtitle:
    'Høylytt takeaway-design med hele menyen rett på siden, pris på alt og de samme bestillingsknappene som før: hent selv, Wolt og Foodora.',
  summary:
    'Ny nettside for Yummy Sushi & Wok på Oppsal: over 50 retter med nummer og pris, laget for mobil – og med samme nettbestilling, Wolt- og Foodora-lenker som i dag.',
  indexable: false,
  heroImage: `${C}yummy-sushi-1280.webp`,
  heroImageSrcset: `${C}yummy-sushi-640.webp 640w, ${C}yummy-sushi-1280.webp 1280w, ${C}yummy-sushi-1920.webp 1920w`,
  heroImageWidth: 1280,
  heroImageHeight: 720,
  heroImageAlt: 'Pad thai med kylling, chili og sitron fra Yummy Sushi & Wok',
  heroOverlay:
    'linear-gradient(100deg, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.82) 45%, rgba(10, 10, 10, 0.25) 100%)',
  ogImage: `${C}yummy-sushi-og.jpg`,
  industry: 'Takeaway – sushi, wok og thai',
  location: 'Østmarkveien, Oppsal',
  timeframe: 'Oktober 2026',
  services: ['Nettsidedesign', 'Digital meny', 'Mobildesign', 'Designvideo'],
  stats: [
    { value: '50+', label: 'Retter med nummer og pris', description: 'rett på siden – ikke i en PDF' },
    { value: '3', label: 'Bestillingsveier beholdt', description: 'hent selv, Wolt og Foodora' },
    { value: '1 trykk', label: 'Fra mobil til bestilling', description: 'bestillingsknappene står først' },
  ],
  sections: [
    {
      title: 'Utgangspunktet',
      body: [
        'Yummy Sushi & Wok er en takeaway i Østmarkveien på Oppsal med sushi, wok og thaigryter. Kundene bestiller på nett og henter selv, eller får maten levert med Wolt og Foodora.',
        'Nettsiden var laget i Wix for flere år siden. Bestillingen virket, men menysiden var tom, menyen fantes bare som en PDF på 9 MB, og siden gikk ut av skjermen på mobil – der de fleste bestiller.',
        'Prisene sprikte også. Fritert kylling kostet 69,- i PDF-en, 99,- i nettbestillingen og 109,- på en menyside, og åpningstidene var ikke de samme fra kanal til kanal.',
      ],
      image: image('yummy-sushi-idag', [1440, 720], 1240, 'Gjennomgang av den gamle nettsiden til Yummy Sushi & Wok med seks nummererte problemer', 'Det som skurret: tom menyside, en side som ikke passet på mobil og tre ulike prislister.'),
    },
    {
      title: 'Ingen funksjoner forsvinner',
      body: [
        'Det viktigste var at ingenting som virker i dag, skulle slutte å virke. Knappen for å bestille og hente selv bruker den samme koden fra bestillingssystemet som før, så ordrene kommer inn akkurat som i dag.',
        'Wolt, Foodora, telefon, e-post, Facebook, kart og PDF-menyen er med – bare plassert der kundene ser dem. Logoen med sushifiguren er beholdt, fordi kundene kjenner den igjen.',
      ],
      bullets: [
        'Samme nettbestilling for henting – ingenting nytt å lære',
        'Samme lenker til Wolt og Foodora',
        'Telefon og e-post for selskapsmat og spørsmål',
        'PDF-menyen kan fortsatt lastes ned',
      ],
      image: image('yummy-sushi-beholder', [1440, 720], 856, 'Oversikt over alle funksjonene som er beholdt, hver med et grønt hakemerke', 'Alle bestillingsveier og lenker fra den gamle siden er med.'),
    },
    {
      title: 'Ny look: høylytt takeaway',
      body: [
        'Yummy skal være rett fram og prisbevisst. Bakgrunnen er svart som matbildene deres, rødt er hentet fra logoen og prislappene er gule – som en menytavle over disken.',
        'Overskrifter, priser og nummer er satt i Anton, en smal og kraftig skrift. Brødteksten er Barlow, som er lett å lese på mobil, også i små størrelser.',
      ],
      bullets: [
        'Svart, ketchuprød, gul, oransje og krem',
        'Nummer på alle retter – som på disken',
        '«Hent selv» står først: billigst for kunden og uten provisjon',
        'Samme priser og åpningstider i alle kanaler',
      ],
      image: image('yummy-sushi-profil', [1440, 720], 1506, 'Farger, skrifter og bestillingsknapper i den nye profilen til Yummy Sushi & Wok', 'Fem farger, to skrifter og tre bestillingsknapper.'),
    },
    {
      title: 'Menyen rett på siden',
      body: [
        'Hele menyen – over 50 retter – er nå en vanlig nettside med nummer, bilde, pris og allergener. Den laster raskt på mobil og kan leses av Google, noe en PDF ikke kan.',
        'På forsiden står de tre bestillingsknappene øverst: hent selv, Wolt og Foodora. De mest solgte rettene ligger rett under, med pris på alt.',
      ],
      image: image('yummy-sushi-forside', [1440, 720], 900, 'Den nye forsiden til Yummy Sushi & Wok med tre bestillingsknapper og pad thai', 'Forsiden: «Sushi & wok på Oppsal.», med bestillingsknappene først.'),
    },
  ],
  outcomes: [
    { icon: 'globe', title: 'Ny nettside', description: 'Forside, meny og «Finn oss» i en høylytt takeaway-stil.' },
    { icon: 'tag', title: 'Meny med nummer og pris', description: 'Over 50 retter rett på siden, med bilde og allergener.' },
    { icon: 'smartphone', title: 'Laget for mobil', description: 'Bestillingsknappene øverst og en fast bestill-knapp nederst.' },
    { icon: 'check', title: 'Alt er beholdt', description: 'Samme nettbestilling, Wolt, Foodora, telefon og PDF-meny.' },
    { icon: 'clock', title: 'Én sannhet', description: 'Samme priser og åpningstider på nettsiden og i bestillingen.' },
    { icon: 'film', title: 'Designvideo', description: '65 sekunder som viser den nye siden.' },
  ],
  showcase: {
    title: 'Den nye siden på 65 sekunder',
    intro:
      'Yummy hadde alt som trengs for å selge mat på nett – bare ikke en side som viste det. I videoen viser vi hva som skurret, hva som er beholdt og hvordan den nye siden ser ut.',
    videos: [
      {
        label: 'Se designvideoen',
        title: 'Designvideo',
        src: '/assets/Videos/yummy-sushi-designforslag.mp4',
        poster: `${C}yummy-sushi-designvideo-poster-1280.webp`,
        width: 1920,
        height: 1080,
        name: 'Yummy Sushi & Wok – designvideo',
        description:
          'Designvideo fra Moderna Media: ny nettside for takeawayen Yummy Sushi & Wok på Oppsal, med menyen rett på siden og de samme bestillingsknappene som før.',
        duration: 'PT1M5S',
        uploadDate: '2026-10-12',
        // Scene starts from the video's beat grid (Prosjekter/Yummy Sushi/video/index.html, B(v) = 0.02 + v · 0.48372).
        chapters: [
          { title: 'Utgangspunktet', start: 8 },
          { title: 'Ny forside', start: 16 },
          { title: 'Mest solgt – med pris', start: 24 },
          { title: 'Menyen rett på siden', start: 31 },
          { title: 'Bestill på ett trykk', start: 39 },
          { title: 'Ingenting forsvinner', start: 47 },
          { title: 'Sushi & wok på Oppsal', start: 55 },
        ],
        // The video has music and on-screen text only; this is the text as it appears.
        transcript:
          'Fersk sushi. Rett fra woken. Sprø maki. Take away på Oppsal. Yummy Sushi & Wok – ny nettside! Østmarkveien 5, Oppsal. ' +
          'I dag: Menyen er tom! Mobil? Går ut av skjermen. Fritert kylling koster … 69,- i PDF-menyen, 99,- i egen bestilling og 109,- på semeny.no. 3 priser?! ' +
          'Vi fikser det. ' +
          'Ny forside! Hent selv, Wolt og Foodora – samme lenker som i dag. ' +
          'Mest solgt: 05 Dagens Sushi 199,-, 33 Pad Thai 209,-, 26 Yummy Special 119,- og 12 Combo 75 949,-. Prisen står på alt! ' +
          'Menyen – rett på siden. Ikke en PDF på 9 MB, men nummer, bilde, pris og allergener. ' +
          'Bestill på ett trykk: trykk «Bestill og hent selv», legg til retter og gå til kassen. ' +
          'Ingenting forsvinner: hent selv, Wolt, Foodora, telefon, Facebook, kart, PDF-meny og logoen. Samme bestillingssystem – samme kode som i dag. ' +
          'Sushi & wok på Oppsal. Hent selv – lavest pris. Wolt og Foodora – hjemlevering.',
      },
    ],
  },
  gallery: [
    image('yummy-sushi-mobil', [1600, 800], 1182, 'Fire mobilskjermer fra den nye nettsiden til Yummy Sushi & Wok', 'Mobil: forside, bestillingsvalg, meny og «Finn oss».'),
    image('yummy-sushi-for-etter', [1440, 720], 560, 'Den gamle og den nye forsiden til Yummy Sushi & Wok side om side', 'Før og etter: samme mat og samme tre bestillingsknapper – nå først og tydelige.'),
    image('yummy-sushi-meny', [1440, 720], 1100, 'Menysiden med forretter, nummer, priser og bestillingsknapper', 'Menysiden: kategorier øverst, alle retter med nummer og pris.'),
  ],
  cardImage: `${C}yummy-sushi-640.webp`,
  cardMetric: { value: '50+', label: 'retter med pris' },
  seoTitle: 'Yummy Sushi & Wok – ny nettside for takeaway på Oppsal | Moderna Media',
  seoDescription:
    'Se hvordan vi ga takeawayen Yummy Sushi & Wok på Oppsal en ny nettside med menyen rett på siden – og beholdt nettbestilling, Wolt og Foodora.',
  datePublished: '2026-10-12',
  dateModified: '2026-10-12',
};

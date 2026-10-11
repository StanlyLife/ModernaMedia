import type { CaseStudy, CaseStudyMedia } from '../case-studies.data';

// Massimo Yoga – visual identity and website concept for the yoga teacher Massimo Barberi (Prosjekter/Massimo Yoga).
// Our own concept work, not a client project: kind concept, neutral wording (no «forslag»), listed but kept out
// of search engines, no client quote and no link to the current massimoyoga.com (it is not our work).

const C = '/assets/img/case/';
const img = (name: string, widths: number[]) =>
  widths.map((w) => `${C}${name}-${w}.webp ${w}w`).join(', ');
/** `/assets/img/case/<name>-<width>.webp`, smallest width first. */
const galleryImage = (
  name: string,
  widths: number[],
  aspect: [number, number],
  alt: string,
  caption: string
): CaseStudyMedia => ({
  src: `${C}${name}-${widths[0]}.webp`,
  srcset: img(name, widths),
  width: widths[0],
  height: Math.round((widths[0] * aspect[1]) / aspect[0]),
  alt,
  caption,
});

export const MASSIMO_YOGA: CaseStudy = {
  slug: 'massimo-yoga',
  client: 'Massimo Yoga',
  title: 'Massimo Yoga: ny visuell profil og nettside i natur og bevegelse',
  heroTitle: 'Ny visuell profil og nettside i natur og bevegelse',
  subtitle:
    'Logo, farger og et nettsidedesign som endelig viser 35 års erfaring – med yogareiser først, filmglimt i toppen og booking rett på e-post.',
  summary:
    'Yogalæreren Massimo Barberi har undervist siden 1991, men nettsiden hadde 28 valg i menyen, kun engelsk tekst og ingen reiser med dato etter 2024. Vi analyserte fem konkurrenter og tegnet en ny visuell profil og nettside, med natur og bevegelse som utgangspunkt.',
  indexable: false,
  kind: 'concept',
  heroImage: '/assets/img/case/massimo-yoga-1280.webp',
  heroImageSrcset: img('massimo-yoga', [640, 1280, 1920]),
  heroImageWidth: 1280,
  heroImageHeight: 852,
  heroImageAlt:
    'Massimo Barberi mediterer på en stein ved Oslofjorden i solnedgang',
  heroOverlay:
    'linear-gradient(100deg, rgba(14, 20, 18, 0.94) 0%, rgba(20, 28, 26, 0.72) 45%, rgba(180, 87, 47, 0.3) 100%)',
  ogImage: '/assets/img/case/massimo-yoga-og.jpg',
  industry: 'Yoga, meditasjon & Ayurveda',
  location: 'Oslo og Bærum',
  timeframe: 'Oktober 2026',
  services: [
    'Konkurrentanalyse',
    'Logo og visuell profil',
    'Webdesign',
    'Mobiltilpasning',
    'Designfilm',
  ],
  stats: [
    {
      label: 'Valg i menyen',
      value: '28 → 6',
      description: 'samlet i seks tydelige kategorier',
    },
    {
      label: 'Konkurrenter analysert',
      value: '5',
      description: 'før første skisse',
    },
    {
      label: 'Bookingsystemer å drifte',
      value: '0',
      description: 'alt bookes på e-post',
    },
  ],
  sections: [
    {
      title: 'Utgangspunktet',
      body: [
        'Massimo Barberi har praktisert yoga siden 1991, har over 10 000 undervisningstimer og er sertifisert Ayurveda-terapeut. Nettsiden fortalte en annen historie: 28 sider i menyen sortert alfabetisk, kun engelsk tekst og ingen reiser med dato etter 2024.',
        'Målet: en side som fyller flere yogareiser og online-timer, er like rolig og erfaren som Massimo selv – og blir funnet når folk søker etter yogareiser.',
      ],
      image: galleryImage(
        'massimo-yoga-for',
        [720, 1440],
        [16, 10],
        'Dagens massimoyoga.com: et WordPress-tema med lang meny og et bilde av Massimo som mediterer ved Oslofjorden',
        'Dagens massimoyoga.com: ni menypunkter og 19 undersider, kun på engelsk.'
      ),
    },
    {
      title: 'Profilen',
      body: [
        'Vi startet med å analysere fem aktører som gjør dette godt – Viljareiser, Yogobe, Blissology, Travis Eliot og Kamalaya – og hentet ut det som gjør dem premium, lette å booke og synlige på Google.',
        'Profilen bygger på det Massimo allerede er: natur og bevegelse. Logoen er én sammenhengende linje som tegner to fjell og en M, med sola i dalen. Fargene er hentet fra Oslofjorden, skogbunnen og veggen i hans eget studio.',
      ],
      bullets: [
        'Logo tegnet med én linje – som pusten',
        'Seks farger fra landskapet, Leire bare på knappene',
        'Fraunces og DM Sans – organisk og rolig',
      ],
      image: galleryImage(
        'massimo-yoga-logo',
        [800, 1600],
        [1700, 900],
        'Logoen til Massimo Yoga: én linje som danner to fjell og en M, med en sol i dalen, og konstruksjonen forklart',
        'Logoen: én linje, to fjell og én sol.'
      ),
    },
    {
      title: 'Nettsiden',
      body: [
        'Den nye forsiden åpner med lydløse filmglimt fra timene, viser yogareisene med dato og pris, og forteller historien med Massimos egne bilder.',
        'Siden håndterer ingen booking eller betaling. Hver time, reise og behandling har en tydelig «Kontakt oss for booking»-knapp som åpner en ferdig e-post, så Massimo slipper et system å drifte.',
      ],
      image: galleryImage(
        'massimo-yoga-forside',
        [720, 1440],
        [16, 10],
        'Forsiden i det nye designet med overskriften «Finn roen i bevegelsen» og filmglimt i toppen',
        'Forsiden: lydløse filmglimt i toppen og yogareiser først i menyen.'
      ),
    },
  ],
  outcomes: [
    {
      icon: 'star',
      title: 'Logo',
      description:
        'Én linje som tegner to fjell og en M, med sola i dalen – i farger, lys og mørk.',
    },
    {
      icon: 'tag',
      title: 'Visuell profil',
      description:
        'Seks farger fra landskapet og to skrifter, forklart på én side – klar for nettside, flyers og sosiale medier.',
    },
    {
      icon: 'globe',
      title: 'Nettsidedesign',
      description:
        'Forside og reiseside, med yogareiser først i menyen og lydløse filmglimt i toppen.',
    },
    {
      icon: 'smartphone',
      title: 'Mobilversjon',
      description: 'Forside, yogareiser og om Massimo, like rolig på en liten skjerm.',
    },
    {
      icon: 'mail',
      title: 'Booking på e-post',
      description:
        '«Kontakt oss for booking» på alle timer, reiser og behandlinger – ingen systemer å drifte.',
    },
    {
      icon: 'film',
      title: 'Designfilm',
      description:
        'Ett minutt som forklarer profilen, fargene og nettsiden.',
    },
  ],
  showcase: {
    title: 'Designfilmen',
    videos: [
      {
        title: 'Designfilmen for Massimo Yoga',
        label: 'Se designfilmen',
        src: '/assets/Videos/massimo-yoga-designforslag.mp4',
        poster: '/assets/img/case/massimo-yoga-designforslag-poster-1280.webp',
        width: 1920,
        height: 1080,
        name: 'Massimo Yoga – ny visuell profil og nettside',
        description:
          'Ny logo, farger hentet fra landskapet og et nettsidedesign med yogareiser først, filmglimt i toppen og booking på e-post.',
        duration: 'PT1M2S',
        uploadDate: '2026-10-10',
      },
    ],
  },
  gallery: [
    galleryImage(
      'massimo-yoga-farger',
      [800, 1600],
      [16, 9],
      'Sliden om fargene og designvalgene: Fjordnatt, Mose, Salvie, Lin, Sand og Leire, med typografi og foto',
      'Seks farger hentet fra landskapet og Massimos eget studio.'
    ),
    galleryImage(
      'massimo-yoga-reise',
      [720, 1440],
      [16, 10],
      'Reisesiden for yoga og spa ved Gardasjøen med pris, romtyper og «Kontakt oss for booking»',
      'Hver reise får sin egen side med program, priser og «Kontakt oss for booking».'
    ),
    galleryImage(
      'massimo-yoga-mobil',
      [800, 1600],
      [16, 10],
      'Tre mobilskjermer fra det nye designet: forsiden, yogareisene og om Massimo',
      'Like rolig på mobil.'
    ),
  ],
  cardMetric: { value: '28 → 6', label: 'valg i menyen' },
  seoTitle: 'Case: Massimo Yoga – visuell profil og nettside for yogalærer',
  seoDescription:
    'Logo, farger og nettside for yogalæreren Massimo Barberi i Oslo: fra 28 menyvalg til seks kategorier, yogareiser først og booking rett på e-post.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
};

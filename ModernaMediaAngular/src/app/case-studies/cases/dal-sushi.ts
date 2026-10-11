import type { CaseStudy, CaseStudyMedia } from '../case-studies.data';

/** `/assets/img/case/dal-sushi-<name>-<width>.webp`, one file per width. */
const image = (
  name: string,
  aspect: [number, number],
  alt: string,
  caption?: string
): CaseStudyMedia => ({
  src: `/assets/img/case/dal-sushi-${name}-800.webp`,
  srcset: `/assets/img/case/dal-sushi-${name}-800.webp 800w, /assets/img/case/dal-sushi-${name}-1600.webp 1600w`,
  width: 800,
  height: Math.round((800 * aspect[1]) / aspect[0]),
  alt,
  caption,
});

export const DAL_SUSHI: CaseStudy = {
  slug: 'dal-sushi',
  client: 'Dal Sushi',
  title:
    'Dal Sushi: logo, visuell profil og tre nettsideretninger for sushibaren på Oppsal',
  heroTitle: 'En fersk start for Dal Sushi',
  subtitle:
    'Soya Sushi la ned, og Dal Sushi tok over lokalet i Vetlandsveien. Vi laget logo, visuell profil og tre retninger for nettsiden – og en kort video som forklarer valgene.',
  summary:
    'Dal Sushi er en ny sushi-takeaway på Oppsal i Oslo, i lokalet der Soya Sushi holdt til. De hadde verken logo, profil eller nettside. Vi tegnet en logo som fungerer overalt, bygde en visuell profil rundt den og tegnet tre retninger for nettsiden – fra moderne takeaway med bestilling til en rolig, norsk nabolagsside og en fargerik fast food-sjappe.',
  // Our own concept work, not a client project: listed, but kept out of search engines.
  indexable: false,
  kind: 'concept',
  heroImage: '/assets/img/case/dal-sushi-1280.webp',
  heroImageSrcset: [640, 1280, 1920]
    .map((w) => `/assets/img/case/dal-sushi-${w}.webp ${w}w`)
    .join(', '),
  heroImageWidth: 1280,
  heroImageHeight: 720,
  heroImageAlt: 'Sushi servert på et brett, sett ovenfra',
  heroOverlay:
    'linear-gradient(100deg, rgba(10, 18, 15, 0.94) 0%, rgba(10, 18, 15, 0.76) 45%, rgba(19, 32, 27, 0.3) 100%)',
  ogImage: '/assets/img/case/dal-sushi-og.jpg',
  industry: 'Restaurant og take-away',
  location: 'Vetlandsveien, Oppsal (Oslo)',
  timeframe: 'Oktober 2026',
  services: [
    'Logodesign',
    'Visuell profil',
    'Webdesign – tre retninger',
    'Menydesign',
    'Mobildesign',
    'Designvideo',
  ],
  stats: [
    { value: '3', label: 'designretninger', description: 'samme logo, tre uttrykk' },
    {
      value: '12',
      label: 'skisser',
      description: 'forside, meny, mobil og profil per retning',
    },
    { value: '74 s', label: 'designvideo', description: 'forklarer valgene' },
  ],
  sections: [
    {
      title: 'Utgangspunktet: nytt navn, kjent lokale',
      body: [
        'Soya Sushi i Vetlandsveien har lagt ned, og Dal Sushi har tatt over lokalet. Mange i nabolaget kjenner adressen, men ikke navnet – og det fantes verken logo, profil eller nettside.',
        'Målet var en ren, moderne og appetittvekkende profil som føles tilgjengelig for nabolaget – ikke dyr og «premium».',
      ],
      bulletTitle: 'Dette skulle på plass',
      bullets: [
        'Tydelig logo og visuell profil',
        'Gode matbilder som gjør folk sultne',
        'Enkel og ryddig meny',
        'Åpningstider, adresse og telefon godt synlig',
        'Enkel å bruke på mobil',
      ],
      image: image(
        'utgangspunkt',
        [16, 9],
        'Utgangspunktet for Dal Sushi: nytt navn, kjent lokale og fire mål for profilen'
      ),
    },
    {
      title: 'Logoen: en maki – og en D',
      body: [
        'Logoen er en maki sett ovenfra. Fyllet danner en D for Dal: avokado er stammen, laks er buen. Den er enkel nok til å fungere som app-ikon og favicon, og tydelig nok til skilt, poser og takeaway-esker.',
        'Vi bestemte tidlig at logoen skulle være lik i alle retningene. Da kan nettsiden ta ulike retninger uten at merkevaren må begynne på nytt.',
      ],
      bulletTitle: 'Profilen inneholder',
      bullets: [
        'Primærlogo, ikon, ordbilde og énfargeversjon',
        'Farger hentet fra sushien: nori, ris, laks, ingefær og wasabi',
        'Typografi, bildestil og tone',
        'Eksempler på skilt, pose, takeaway-eske og Instagram',
      ],
      image: image(
        'logo',
        [16, 9],
        'Dal Sushi-logoen: en maki sett ovenfra der fyllet danner en D'
      ),
    },
    {
      title: 'Tre retninger for nettsiden',
      body: [
        'I stedet for én nettside tegnet vi tre, med samme logo men ulikt uttrykk. Sammen viser de hvordan én merkevare kan passe til ulike måter å drive en sushibar på.',
      ],
      bulletTitle: 'Retningene',
      bullets: [
        'Moderne takeaway: «Bestill nå» øverst, meny med bilder og handlekurv for henting eller levering.',
        'Rolig og norsk: ingen bestilling og ingen levering – åpningstider, adresse og en enkel meny i dempede farger og vanlig språk.',
        'Fast food-sjappe: gul menytavle med nummer, tydelige priser, ukens tilbud og «ring og bestill».',
      ],
      image: image(
        'tre-retninger',
        [16, 9],
        'De tre nettsideretningene for Dal Sushi side om side'
      ),
    },
    {
      title: 'Laget for mobilen først',
      body: [
        'De fleste sjekker åpningstid, meny og telefonnummer på mobilen, gjerne på vei hjem. Derfor er alle tre retningene tegnet for mobil først, med meny og telefon lett tilgjengelig.',
        'Til slutt satte vi alt sammen i en video på 74 sekunder som går gjennom logoen, de tre retningene og mobilversjonene.',
      ],
      image: image(
        'mobil',
        [16, 9],
        'Mobilversjonene av de tre nettsideretningene for Dal Sushi'
      ),
    },
  ],
  showcase: {
    title: 'Designet forklart på 74 sekunder',
    videos: [
      {
        label: 'Se videoen',
        title: 'Designvideoen',
        src: '/assets/Videos/dal-sushi-designforslag.mp4',
        poster: '/assets/img/case/dal-sushi-1280.webp',
        width: 1920,
        height: 1080,
        name: 'Dal Sushi – logo, visuell profil og tre nettsideretninger',
        description:
          'Video om designet for Dal Sushi på Oppsal: utgangspunktet, logoen (en maki som danner en D), tre retninger for nettsiden – moderne takeaway, rolig og norsk, og fast food-sjappe – og hvordan alle tre ser ut på mobil.',
        duration: 'PT1M14S',
        uploadDate: '2026-10-11',
      },
    ],
  },
  gallery: [
    image(
      'v1-forside',
      [16, 10],
      'Retning 1, moderne takeaway: forside med «Bestill nå» og matbilde',
      'Retning 1 · Moderne takeaway – forside'
    ),
    image(
      'v2-forside',
      [16, 10],
      'Retning 2, rolig og norsk: forside med åpningstider og adresse øverst',
      'Retning 2 · Rolig og norsk – forside'
    ),
    image(
      'v3-forside',
      [16, 10],
      'Retning 3, fast food-sjappe: gul forside med store bokstaver og lunsjtilbud',
      'Retning 3 · Fast food-sjappe – forside'
    ),
    image(
      'v1-meny',
      [16, 10],
      'Retning 1: meny med kategorier, bilder og handlekurv',
      'Meny med handlekurv'
    ),
    image(
      'v2-meny',
      [16, 10],
      'Retning 2: enkel menyliste med priser',
      'Meny som en rolig liste'
    ),
    image(
      'v3-meny',
      [16, 10],
      'Retning 3: menytavle med nummererte menyer',
      'Menytavle med nummer'
    ),
    image(
      'v1-profil',
      [16, 10],
      'Profilside for retning 1 med logo og laks på mørk bakgrunn',
      'Profil · Ren, fersk og fristende'
    ),
    image(
      'v2-profil',
      [16, 10],
      'Profilside for retning 2 i rolige, dempede farger',
      'Profil · Rolig, enkel og til å stole på'
    ),
    image(
      'v3-profil',
      [16, 10],
      'Profilside for retning 3 i gult med tekst i store bokstaver',
      'Profil · Fast food-sushi, gjort ordentlig'
    ),
  ],
  outcomes: [
    {
      title: 'Logo og visuell profil',
      description:
        'En maki som danner en D, med farger, typografi, bildestil og tone samlet på én profilside per retning.',
      icon: 'star',
    },
    {
      title: 'Tre nettsideretninger',
      description:
        'Forside og meny i tre retninger – fra bestilling med handlekurv til en rolig menyliste og en menytavle med nummer.',
      icon: 'globe',
    },
    {
      title: 'Mobilversjoner',
      description:
        'Alle retningene er tegnet for mobil først, med meny og telefon lett tilgjengelig.',
      icon: 'smartphone',
    },
    {
      title: 'Designvideo',
      description:
        '74 sekunder som går gjennom logoen, de tre retningene og valgene bak dem.',
      icon: 'film',
    },
  ],
  seoTitle: 'Case: Dal Sushi – logo, profil og nettside på Oppsal',
  seoDescription:
    'Logo, visuell profil og tre nettsideretninger for Dal Sushi, sushi-takeaway i Vetlandsveien på Oppsal. Se designvideoen og alle retningene.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
};

import type { CaseStudy, CaseStudyMedia } from '../case-studies.data';

const C = '/assets/img/case/';

/** `/assets/img/case/<name>-<width>.webp`, smallest width first; height belongs to that width. */
const media = (
  name: string,
  widths: number[],
  height: number,
  alt: string,
  caption: string
): CaseStudyMedia => ({
  src: `${C}${name}-${widths[0]}.webp`,
  srcset: widths.map((w) => `${C}${name}-${w}.webp ${w}w`).join(', '),
  width: widths[0],
  height,
  alt,
  caption,
});

/**
 * Logo and website for René Borghagen, boligfotograf in Oslo (logo, website, portfolio, trailer).
 * René is not a client. Keep the wording neutral: it must read neither as a client case nor as a
 * proposal to a possible client (no «kunde», «forslag», «lansering» or «neste steg»).
 * Listed on /case-studies; kept out of search, the sitemap, llms.txt and «more cases».
 * Real: 1 500+ oppdrag (his Instagram), the 157 photos from his 12 newest posts, the five logos.
 */
export const RENE_BORGHAGEN: CaseStudy = {
  slug: 'rene-borghagen',
  // Neutral template wording: «Casestudier», «Hva vi laget», «Se flere av arbeidene våre».
  kind: 'concept',
  client: 'René Borghagen',
  title: 'René Borghagen: logo og nettside for boligfotograf i Oslo',
  heroTitle: 'Logo og nettside for en boligfotograf som jobber alene',
  subtitle:
    'René Borghagen har over 1 500 oppdrag bak seg og fantes bare på Instagram. Her er en logo og en nettside der både han og bildene hans står i fokus.',
  summary:
    'René Borghagen fotograferer boliger for meglere, stylister og utbyggere i Oslo og omegn – alene. Vi hentet 157 bilder fra Instagram, tegnet fem logoer og designet en nettside der de besøkende møter René først og bildene etterpå.',
  // René has no website of his own, only Instagram.
  website: 'https://www.instagram.com/boligfotograf_rene_borghagen/',
  websiteLabel: 'Instagram: @boligfotograf_rene_borghagen',
  indexable: false,
  heroImage: `${C}rene-borghagen-1280.webp`,
  heroImageSrcset: [640, 1280, 1440].map((w) => `${C}rene-borghagen-${w}.webp ${w}w`).join(', '),
  heroImageWidth: 1280,
  heroImageHeight: 850,
  heroImageAlt: 'Lys stue i Dragehodesvingen 13 på Storøykilen, fotografert av René Borghagen',
  heroImageCaption: 'Dragehodesvingen 13, Storøykilen – fotografert av René.',
  heroOverlay:
    'linear-gradient(100deg, rgba(28, 26, 23, 0.94) 0%, rgba(28, 26, 23, 0.78) 45%, rgba(168, 112, 60, 0.3) 100%)',
  ogImage: `${C}rene-borghagen-og.jpg`,
  industry: 'Boligfotografering',
  location: 'Oslo og omegn',
  timeframe: 'Oktober 2026',
  services: ['Logodesign', 'Nettsidedesign', 'Portefølje fra Instagram', 'Reels på nettsiden', 'Trailer og reel'],
  stats: [
    { value: '157', label: 'Bilder i porteføljen', description: 'delt opp fra 12 Instagram-innlegg' },
    { value: '5', label: 'Logoer', description: 'monogrammet er brukt på nettsiden' },
    { value: '1', label: 'Fotograf i fokus', description: 'René møter deg i første skjerm' },
  ],
  sections: [
    {
      title: 'Utgangspunktet',
      body: [
        'René Borghagen er boligfotograf i Oslo og omegn, med over 1 500 oppdrag for meglere, stylister og utbyggere. Han jobber alene: Det er han som tar telefonen, står bak kameraet og redigerer hvert bilde.',
        'Likevel fantes han bare på Instagram. De beste bildene lå i kollasjer på to og tre, og en megler som ville bestille, måtte sende en melding.',
        'Vi hentet bildene fra de tolv nyeste innleggene og delte kollasjene opp til 157 enkeltbilder i full størrelse. De ble grunnlaget for hele porteføljen.',
      ],
      image: media(
        'rene-borghagen-instagram',
        [800, 1600],
        450,
        'Bilder fra Instagram-kontoen til René Borghagen, delt opp til enkeltbilder, med telleren «157 bilder fra 12 innlegg»',
        'Kollasjene fra Instagram, delt opp til 157 enkeltbilder.'
      ),
    },
    {
      title: 'Logoen og uttrykket',
      body: [
        'Vi tegnet fem logoer: søkerhjørner rundt et tak, et vindu med lysinnfall, et monogram, en kamerablender og en signatur. Monogrammet – initialene RB under et eget tak – er brukt på nettsiden. Det er klassisk og rolig, og ser ryddig ut ved siden av meglernes logoer.',
        'Fargene er hentet fra lyset i bildene hans: lin, sand, eik og kveldssol. Overskriftene er satt i EB Garamond, en klassisk antikva, med Hanken Grotesk i brødteksten.',
      ],
      bullets: [
        'Fem logoer, vist på lys og mørk bunn og i bruk',
        'Seks farger hentet fra bildene',
        'Søkerhjørner og fokusrammer som grafisk grep',
      ],
      image: media(
        'rene-borghagen-design-designvalg',
        [800, 1600],
        450,
        'Designvalgene for René Borghagen: monogram-logoen, seks farger og typografi',
        'Designvalgene: «Lys, ro og fokus.» Logo, seks farger og typografi.'
      ),
    },
    {
      title: 'Nettsiden: René i første skjerm',
      body: [
        'Forsiden åpner med «Hei, jeg er René.», portrettet hans i fokusrammer og tallene som bygger tillit. De besøkende vet hvem som kommer, før de har scrollet.',
        'Så kommer bildene – store, med adresse, stylist og megler på hvert prosjekt. Det er ingen booking og ingen betaling: Et kort skjema sender forespørselen rett til René, som ringer tilbake.',
      ],
      bullets: [
        'Portefølje med alle 157 bildene, sortert etter bolig',
        'Kontaktskjema med Renés eget ansikt',
        'Laget for mobilen, der meglerne leser',
      ],
      image: media(
        'rene-borghagen-design-forside',
        [960, 1920],
        600,
        'Forsiden med overskriften «Hei, jeg er René.» og portrettet hans i fokusrammer',
        'Forsiden: «Hei, jeg er René.», med portrettet i fokusrammer og tallene rett under.'
      ),
    },
    {
      title: 'Reels: bak kamera',
      body: [
        'René legger ut reels fra jobben: kveldsbilder, før og etter redigering og hans første hele år som boligfotograf. De fem beste ligger rett på forsiden.',
        'Holder du musepekeren over, spilles et kort utdrag uten lyd. Et klikk åpner hele filmen med lyd.',
      ],
      image: media(
        'rene-borghagen-design-reels',
        [800, 1600],
        500,
        'Reels-seksjonen på forsiden med fem videoer fra Instagram-kontoen til René',
        'Reels fra Instagram, rett på forsiden.'
      ),
    },
  ],
  outcomes: [
    {
      icon: 'star',
      title: 'Fem logoer',
      description: 'Søkeren, Lysinnfall, Monogram, Blenderen og Signaturen – hver vist på lys og mørk bunn og i bruk.',
    },
    {
      icon: 'globe',
      title: 'Nettside med René i fokus',
      description: 'Forside, om meg, reels og kontaktskjema – laget for mobil, uten booking og betaling.',
    },
    {
      icon: 'tag',
      title: 'Portefølje fra Instagram',
      description: '157 bilder fra kollasjene, delt opp og sortert etter bolig, med adresse og samarbeidspartnere.',
    },
    {
      icon: 'film',
      title: 'Trailer og reel',
      description: 'En trailer på 77 sekunder og en reel i 9:16 til Instagram og TikTok.',
    },
  ],
  showcase: {
    title: 'Designet: «Lys, ro og fokus»',
    intro:
      'Traileren viser hele designet på 77 sekunder: René i fokus, bildene som slipper ut av Instagram-rutene, de fem logoene, fargene fra lyset hans og nettsiden på PC og mobil. Trykk på et kapittel for å hoppe rett dit.',
    videos: [
      {
        title: 'Trailer',
        label: 'Se traileren',
        src: '/assets/Videos/rene-borghagen-trailer.mp4',
        poster: `${C}rene-borghagen-trailer-poster-1280.webp`,
        width: 1920,
        height: 1080,
        name: 'René Borghagen – logo og nettside for boligfotograf',
        description:
          'Trailer fra Moderna Media: logo, farger og nettside for boligfotograf René Borghagen i Oslo – med René i fokus fra første sekund, 157 bilder fra Instagram og en portefølje sortert etter bolig.',
        duration: 'PT1M17S',
        uploadDate: '2026-10-11',
        // Scene starts in the trailer (cuts every 16 beats from the bass entry at 12.2 s).
        chapters: [
          { title: 'Fokus, lukker og logo', start: 0 },
          { title: 'René i fokus', start: 12.2 },
          { title: '157 bilder fra Instagram', start: 20.1 },
          { title: 'Fem logoer', start: 28 },
          { title: 'Farger og typografi', start: 36 },
          { title: 'Forsiden steg for steg', start: 43.9 },
          { title: 'Porteføljen', start: 55.8 },
          { title: 'Mobil og kontaktskjema', start: 59.8 },
          { title: 'Boliger i sitt beste lys', start: 67.7 },
        ],
      },
    ],
  },
  gallery: [
    media(
      'rene-borghagen-logoer',
      [800, 1600],
      450,
      'De fem logoene til René Borghagen, med monogrammet RB under et tak markert',
      'Fem logoer – monogrammet er brukt på nettsiden.'
    ),
    media(
      'rene-borghagen-design-portefolje',
      [800, 1600],
      500,
      'Porteføljesiden «Alle arbeider» med bilder sortert etter bolig',
      'Porteføljen: alle 157 bildene, sortert etter bolig.'
    ),
    media(
      'rene-borghagen-design-mobil',
      [800, 1600],
      500,
      'Tre mobilskjermer: forsiden, tallene og kontaktskjemaet',
      'Mobil: René i første skjerm, tallene og kontaktskjemaet.'
    ),
  ],
  cardMetric: { value: '157', label: 'bilder i porteføljen' },
  seoTitle: 'René Borghagen – logo og nettside for boligfotograf | Moderna Media',
  seoDescription:
    'Logo og nettside for boligfotograf René Borghagen i Oslo: René i fokus fra første sekund og en portefølje med 157 bilder hentet fra Instagram.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
};

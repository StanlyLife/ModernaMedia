import type { CaseStudy, CaseStudyMedia } from '../case-studies.data';

// MUDO Gym – visual upgrade concept (Prosjekter/Mudo Gym: design, Figma file yxOsdOWsGVBPtl9qltA87z, video).
// Our own case study, not a client story: no client quote, no results and no link to mudogym.no (not our work).
// Neutral wording (no «forslag»), listed on /case-studies, kept out of search engines.
// Real: the 12 gyms, Tveita's prices/hours, the existing site's features, MUDO's own photos and logo.

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

export const MUDO_GYM: CaseStudy = {
  slug: 'mudo-gym',
  client: 'MUDO Gym',
  title: 'MUDO Gym: et visuelt løft for treningssenteret for hele familien',
  heroTitle: 'Et visuelt løft for MUDO Gym',
  subtitle:
    'Samme tilbud og samme knapper – i et roligere og mer eksklusivt uttrykk. Vi tegnet ny fargeprofil, forside, gymside og mobil, og laget en video som forklarer valgene.',
  summary:
    'MUDO Gym har tolv treningssentre i Norge med gym, gruppetimer, kampsport og MUDO Tiger for barn. Nettsiden fungerer godt, så arbeidet handler om uttrykket: en dypere karmin-rød, strammere typografi, MUDOs egne bilder i stort format og en gymside der alt viktig ligger i første skjerm – uten booking eller betaling på nettsiden.',
  indexable: false,
  kind: 'concept',
  heroImage: `${C}mudo-gym-1280.webp`,
  heroImageSrcset: `${C}mudo-gym-640.webp 640w, ${C}mudo-gym-1280.webp 1280w, ${C}mudo-gym-1920.webp 1920w`,
  heroImageWidth: 1280,
  heroImageHeight: 854,
  heroImageAlt: 'Kvinne med røde boksehansker trener på boksesekk hos MUDO Gym',
  heroOverlay:
    'linear-gradient(100deg, rgba(10, 10, 16, 0.94) 0%, rgba(10, 10, 16, 0.78) 45%, rgba(168, 24, 43, 0.32) 100%)',
  ogImage: `${C}mudo-gym-og.jpg`,
  industry: 'Treningssenter og kampsport',
  location: 'Tveita, Oslo – mal for alle 12 gym',
  timeframe: 'Oktober 2026',
  services: ['Visuell profil', 'Webdesign – forside og gymside', 'Mobildesign', 'Skjema i stedet for booking', 'Designvideo'],
  stats: [
    { value: '12', label: 'Gym', description: 'samme design, egen side for hvert' },
    { value: '1 klikk', label: 'Til «Prøv gratis»', description: 'fra annonsen til skjemaet' },
    { value: '2', label: 'Kjeder', description: 'MUDO og HITIO på samme grunnmur' },
  ],
  sections: [
    {
      title: 'Utgangspunktet',
      body: [
        'MUDO Gym er treningssenteret for hele familien: gym, gruppetimer og kampsport for voksne, og MUDO Tiger for barn fra fire år – på tolv steder i Norge.',
        'Nettsiden fungerer godt. Knappene for «Prøv gratis» og «Bli medlem», medlemskapene og timeplanen gjør jobben, og medlemmene bruker MUDO-appen hver dag. Derfor handler ikke designet om å bygge alt på nytt.',
        'Det vi så på, var uttrykket. Treningsbransjen er blitt mer konkurranseutsatt, og flere aktører fremstår svært moderne digitalt. Spørsmålet var hvordan kvaliteten i tilbudet kan vises tydeligere.',
      ],
      image: image('mudo-gym-i-dag', [1440, 720], 1010, 'Gymsiden for MUDO Gym Tveita slik den ser ut i dag', 'Gymsiden for Tveita i dag – landingssiden fra annonsene.'),
    },
    {
      title: 'Uttrykket: karmin, luft og ekte bilder',
      body: [
        'Dagens røde er dempet til en dyp karmin. Den er roligere og mer eksklusiv, men fortsatt MUDO, og den brukes sparsomt – slik at rødt betyr «gjør dette». På mørk bakgrunn brukes en lysere karmin, så tekst og ikoner er lette å lese.',
        'Overskriftene er satt i Barlow Condensed, en smal og kraftig skrift som tar over for Bebas, og brødteksten i Inter. Logoen beholdes, og skrålinjen i bokstavene – 19 grader – går igjen som markør foran hver seksjon.',
      ],
      bullets: [
        'Fem farger: karmin, natt, stål, kalk og hvit',
        'Barlow Condensed og Inter',
        'Logoen beholdes – swirlen får karmin-tonen',
        'MUDOs egne fotoshoots i stort format',
      ],
      image: image('mudo-gym-farger', [1440, 720], 810, 'Fargeprofilen i det nye designet: karmin, natt, stål, kalk og hvit', 'Dagens røde er dempet til karmin. Rødt brukes bare der det betyr «gjør dette».'),
    },
    {
      title: 'Gymsiden: landingssiden fra annonsene',
      body: [
        'Annonsene for Tveita lander på gymsiden, så den fikk mest oppmerksomhet. Alt viktig ligger i første skjerm: «Prøv oss gratis», åpningstider og dagens timer.',
        'Under følger fakta om senteret, treningstilbudet, medlemskap med priser, MUDO Tiger, timeplanen, fasilitetene og et kort skjema for gratis prøvetime. Siden er laget som en mal, så hvert av de tolv gymmene kan få sin egen.',
      ],
      bullets: [
        'Én hovedknapp per skjerm: «Prøv oss gratis»',
        'Priser uten binding som standard – 6 måneders binding som alternativ',
        'MUDO Tiger med belter, aldersgrupper og pris',
        'Timeplan som info – påmelding i MUDO-appen',
      ],
      image: image('mudo-gym-gymside', [1440, 720], 1010, 'Den nye gymsiden for MUDO Gym Tveita med «Prøv oss gratis» og dagens timer i toppen', 'Den nye gymsiden: «Treningssenteret for hele familien», med dagens timer rett i toppen.'),
    },
    {
      title: 'Ingen booking eller betaling på nettsiden',
      body: [
        'Nettsiden informerer og samler henvendelser. «Prøv gratis» og «Jeg vil bli medlem» går til et kort skjema, og gymmet tar kontakt. Innmelding og betaling skjer i senteret, og påmelding til timer i appen medlemmene allerede bruker.',
        'Skjemaet er laget for mobilen: velg hva du vil prøve, skriv navn og telefon, og send.',
      ],
      bullets: ['Fyll ut skjemaet', 'Gymmet ringer og avtaler en gratis prøvetime', 'Innmelding i senteret'],
      image: image('mudo-gym-mobil', [1440, 720], 810, 'Mobilskjermer fra det nye designet med skjemaet for gratis prøvetime og bekreftelsen', 'På mobil: skjemaet for gratis prøvetime og bekreftelsen etterpå.'),
    },
    {
      title: 'Forsiden og HITIO',
      body: [
        'Forsiden samler kjeden. Man velger gym rett fra toppen, ser treningsformene og MUDO Tiger, og sender en forespørsel til nærmeste senter.',
        'Samme eier driver HITIO Gym i utlandet. Designsystemet er laget for å bytte logo, språk og bilder, så HITIO kan få samme løft uten å starte på nytt.',
      ],
      image: image('mudo-gym-hitio', [1440, 720], 810, 'Gymsiden for MUDO og en HITIO-versjon med engelsk tekst side om side', 'Bygget én gang, to kjeder: samme design med HITIO-logo og engelsk tekst.'),
    },
  ],
  outcomes: [
    { icon: 'star', title: 'Visuell profil', description: 'Karmin-palett, Barlow Condensed og Inter, og logoen i ny tone.' },
    { icon: 'globe', title: 'Forside og gymside', description: 'Tveita som mal for alle tolv gymsider, med gymvelger på forsiden.' },
    { icon: 'smartphone', title: 'Laget for mobil', description: 'Begge sidene tegnet for mobil, med et kort skjema for gratis prøvetime.' },
    { icon: 'chat', title: 'Skjema i stedet for booking', description: '«Prøv gratis» og «Bli medlem» går til gymmet – ingen betaling på nett.' },
    { icon: 'users', title: 'Klar for HITIO', description: 'Samme designsystem med ny logo, nye bilder og flere språk.' },
    { icon: 'film', title: 'Designvideo', description: '86 sekunder som forklarer valgene, med musikk og lydeffekter.' },
  ],
  showcase: {
    title: 'Designet forklart på 86 sekunder',
    intro:
      'MUDOs nettside fungerer – derfor handler designet om uttrykket. I videoen går vi gjennom fargene, typografien og logoen, og viser hvordan gymsiden, forsiden og mobilen henger sammen.',
    videos: [
      {
        label: 'Se designvideoen',
        title: 'Designvideo',
        src: '/assets/Videos/mudo-gym-designforslag.mp4',
        poster: `${C}mudo-gym-designvideo-poster-1280.webp`,
        width: 1920,
        height: 1080,
        name: 'MUDO Gym – designvideo',
        description:
          'Designvideo fra Moderna Media: et visuelt løft for MUDO Gym – karmin som ny hovedfarge, Barlow Condensed og Inter, logoen i ny tone, gymsiden for Tveita, forsiden, mobil og HITIO.',
        duration: 'PT1M26S',
        uploadDate: '2026-10-11',
        // Scene cuts from the video's beat grid (Prosjekter/Mudo Gym/video/index.html, T(k)).
        chapters: [
          { title: 'Utgangspunktet', start: 8 },
          { title: 'Før og etter', start: 16 },
          { title: 'Farger: dagens røde blir karmin', start: 23 },
          { title: 'Typografi og logo', start: 31 },
          { title: 'Gymsiden for Tveita', start: 39 },
          { title: 'Forsiden: finn ditt gym', start: 54 },
          { title: 'Mobil og skjema', start: 62 },
          { title: 'HITIO: bygget én gang', start: 70 },
          { title: 'Hele familien. Ett gym.', start: 77 },
        ],
        // The video has music and on-screen text only; this is the text as it appears.
        transcript:
          'MUDO Gym. Visuell oppgradering av farger, typografi og nettside. ' +
          'Utgangspunktet: En side som fungerer. «Prøv gratis» og «Bli medlem» – knappene som skaffer medlemmer – beholdes. Medlemskap og priser: komplett info om alle medlemskap. Timeplan og app: i daglig bruk av medlemmene. Funksjonene er på plass. Nå løfter vi uttrykket. ' +
          'Før og etter: Samme tilbud. Samme knapper. Et løft i uttrykket. Mer luft – rolig rytme og tydelige seksjoner. Ekte bilder – MUDOs egne foto i stort format. Kvalitet i detaljene – færre farger, strammere typografi. Det som virker, blir – prøv gratis, bli medlem, timeplan. ' +
          'Farger: Dagens røde, dempet til karmin. Dypere og roligere – mer eksklusivt, men fortsatt MUDO. Den brukes sparsomt, så rødt betyr «gjør dette». Natt, stål, kalk og hvit, og en lysere karmin på mørk bakgrunn. ' +
          'Typografi: Barlow Condensed til overskrifter, Inter til brødtekst og knapper. Logo: Logoen beholdes – swirlen får den nye karmin-tonen. Skrålinjen i bokstavene blir markøren foran hver seksjon. ' +
          'Gymsiden for Tveita: Alt viktig i første skjerm – prøv gratis, åpningstider og dagens timer. Priser uten finstilt skrift – uten binding som standard, og «Jeg vil bli medlem» går til et skjema, uten betaling på nett. Barna får sin egen plass – MUDO Tiger med belter, aldersgrupper og pris. Timeplan som info – påmelding skjer i MUDO-appen. ' +
          'Forsiden: Finn ditt gym. Velg gym rett fra forsiden; hvert av de 12 gymmene får egen side med priser, timeplan og kontakt. ' +
          'Mobil: Laget for mobilen. Ingen booking eller betaling på nettsiden – et kort skjema, så tar gymmet kontakt. Fyll ut skjemaet, gymmet ringer deg, innmelding i senteret. «Takk, Maria! MUDO Gym Tveita tar kontakt for å avtale en gratis prøvetime.» ' +
          'HITIO Gym: Bygget én gang. To kjeder. Samme konsept, samme eier – designsystemet bytter logo, språk og bilder, så HITIO kan få samme løft. ' +
          'Hele familien. Ett gym. Visuell oppgradering av mudogym.no. Moderna Media, oktober 2026.',
      },
    ],
  },
  gallery: [
    image('mudo-gym-medlemskap', [1440, 720], 900, 'Medlemskap i det nye designet: Gym, Komplett og Familie med priser uten binding', 'Medlemskap med priser uten binding – Komplett er løftet fram.'),
    image('mudo-gym-tiger', [1440, 720], 900, 'MUDO Tiger-seksjonen med jente i taekwondodrakt og beltefargene', 'MUDO Tiger: «Svette. Smile. Lære.», med belter, aldersgrupper og pris.'),
    image('mudo-gym-timeplan', [1440, 720], 900, 'Timeplanen for Tveita med dagsvalg og timer, og MUDO-appen ved siden av', 'Timeplanen er info – påmelding skjer i MUDO-appen.'),
    image('mudo-gym-forside', [1440, 720], 900, 'Forsiden for MUDO Gym med «Hele familien. Ett gym.» og gymvelger', 'Forsiden: «Hele familien. Ett gym.», med gymvelger rett i toppen.'),
    image('mudo-gym-gymfinner', [1600, 800], 900, 'Gymvelgeren på forsiden med Tveita valgt', 'Velg gym fra forsiden – her Tveita.'),
    image('mudo-gym-typografi', [1600, 800], 900, 'Typografi og logo: Barlow Condensed, Inter og MUDO-logoen', 'Barlow Condensed og Inter, og skrålinjen fra logoen som seksjonsmarkør.'),
  ],
  cardImage: `${C}mudo-gym-kort-640.webp`,
  cardMetric: { value: '12', label: 'gym, ett design' },
  seoTitle: 'Case: MUDO Gym – et visuelt løft | Moderna Media',
  seoDescription:
    'Et visuelt løft for MUDO Gym: karmin som ny hovedfarge, strammere typografi, ny gymside for Tveita, forside med gymvelger og mobil – uten booking eller betaling på nettsiden.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
};

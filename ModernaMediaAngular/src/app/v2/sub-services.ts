// Content for the service sub-pages (webdesign, grafisk design, logo design, teknisk SEO,
// innholdsproduksjon, off-page SEO). One template renders them all: src/app/v2/pages/sub-service.page.ts.
// Copy is written customer value first: what the customer gets, then how we do it.
import { Crumb, HeroImage } from './v2-blocks';
import { FaqEntry } from './v2-data';
import { kr, PRICES } from './prices';

export interface SubServiceInfo {
  anchor: string;
  img: string;
  alt: string;
  kicker: string;
  title: string;
  text: string[];
  list?: string[];
  fact?: string[];
  link: string;
  linkLabel: string;
}

export interface SubServiceExample {
  src: string;
  srcset: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export interface SubServicePage {
  path: string;
  seoTitle: string;
  seoDescription: string;
  /** Service name in the structured data. */
  serviceName: string;
  lowPrice: number;
  crumbs: Crumb[];
  pill: string[];
  h1: string;
  gt: string;
  sub: string;
  checks: string[];
  primary: string;
  bg: HeroImage;
  form: { title: string; sub?: string; message: string; button: string };
  preselect: string;
  source: string;
  what: { kicker: string; title: string; lead: string; tiles: string[][] };
  examples?: { kicker: string; title: string; lead: string; items: SubServiceExample[]; link: string; linkLabel: string };
  info: SubServiceInfo[];
  caseStudy: { key: string; kicker: string; title: string; metrics: string[][] };
  price: { title: string; badge: string; name: string; price: string; per?: string; list: string[]; cta: string; cta2?: string; cta2Link?: string; factors: string[][] };
  faqTitle: string;
  faqIntro: string;
  faq: FaqEntry[];
  related: { title: string; items: { icon: string; title: string; text: string; link: string; linkLabel: string }[] };
}

/** Info-section images, resized to the 1040 px the block shows. */
const I = '/assets/img/info/';
const C = '/assets/img/case/';
const ICON = '/assets/Images/Icons/tjenester/services/';

/** srcset with the spaces in the file names encoded, so the browser can split it. */
const set = (...items: [string, number][]) => items.map(([src, w]) => `${encodeURI(src)} ${w}w`).join(', ');
/** Hero image as 640/1280/1920 px WebP from src/assets/img/svc/. */
const svcHero = (name: string): HeroImage => ({
  src: `/assets/img/svc/${name}-hero-1920.webp`,
  srcset: [640, 1280, 1920].map((w) => `/assets/img/svc/${name}-hero-${w}.webp ${w}w`).join(', '),
});

const DESIGN_CRUMB: Crumb = { label: 'Design', link: '/tjenester/bedrift/design' };
const SEO_CRUMB: Crumb = { label: 'SEO', link: '/tjenester/bedrift/seo' };
const SERVICES_CRUMB: Crumb = { label: 'Tjenester', link: '/tjenester' };

const DESIGN_RELATED = {
  logo: { icon: `${ICON}logo_design.svg`, title: 'Logo design', text: 'En logo som er lett å kjenne igjen og fungerer overalt, fra skiltet til app-ikonet.', link: '/tjenester/bedrift/design/logo-design', linkLabel: 'Les om logo design' },
  web: { icon: `${ICON}hjemmeside-bedrift.svg`, title: 'Webdesign', text: 'Nettsider som er enkle å bruke og gjør det lett for kundene å ta kontakt.', link: '/tjenester/bedrift/design/web-design', linkLabel: 'Les om webdesign' },
  grafisk: { icon: `${ICON}grafisk_design.svg`, title: 'Grafisk design', text: 'Menyer, visittkort, plakater og annonser i samme stil som resten av bedriften.', link: '/tjenester/bedrift/design/grafisk-design', linkLabel: 'Les om grafisk design' },
  nettside: { icon: `${ICON}hjemmeside-bedrift.svg`, title: 'Nettside for bedrift', text: 'Vi bygger designet om til en rask nettside som er klar for Google.', link: '/tjenester/bedrift/utvikling/hjemmeside-bedrift', linkLabel: 'Les om nettsider' },
};

const SEO_RELATED = {
  teknisk: { icon: `${ICON}teknisk seo.svg`, title: 'Teknisk SEO', text: 'En rask og trygg nettside som er lett for Google å lese.', link: '/tjenester/bedrift/seo/teknisk-seo', linkLabel: 'Les om teknisk SEO' },
  innhold: { icon: `${ICON}seo innholdsproduksjon.svg`, title: 'Innholdsproduksjon', text: 'Tekster og artikler som svarer på det kundene dine søker etter.', link: '/tjenester/bedrift/seo/innholdsproduksjon', linkLabel: 'Les om innholdsproduksjon' },
  offpage: { icon: `${ICON}off page seo.svg`, title: 'Off-page SEO', text: 'Lenker, anmeldelser og Google Bedriftsprofil som gir mer tillit hos Google.', link: '/tjenester/bedrift/seo/off-page-seo', linkLabel: 'Les om off-page SEO' },
  seo: { icon: `${ICON}teknisk seo.svg`, title: 'Alle SEO-tjenester', text: 'Se hvordan teknisk SEO, innhold og off-page SEO henger sammen.', link: '/tjenester/bedrift/seo', linkLabel: 'Se SEO-tjenestene' },
};

const SEO_FORM = {
  title: 'Bestill gratis SEO-analyse',
  sub: 'Få en rapport med konkrete forbedringer for nettsiden din. Vi svarer vanligvis innen 2 timer.',
  message: 'Adressen til nettsiden din, f.eks. dinbedrift.no',
  button: 'Få gratis SEO-analyse',
};

const SEO_FACTORS = [
  ['Konkurranse', 'Hvor hard konkurransen om søkeordene er i bransjen din.'],
  ['Søkeord og områder', 'Hvor mange søkeord og steder du vil bli funnet på.'],
  ['Teknisk tilstand', 'Hvor mye som må fikses på nettsiden før vi kan bygge videre.'],
  ['Innhold', 'Hvor mye nytt innhold som skal lages hver måned.'],
];

export const SUB_SERVICES: Record<string, SubServicePage> = {
  'web-design': {
    path: '/tjenester/bedrift/design/web-design',
    seoTitle: 'Webdesign for bedrifter – brukervennlige nettsider | Moderna Media',
    seoDescription:
      `Webdesign som gjør det enkelt for kundene å finne fram og ta kontakt. Mobil først, klikkbar prototype og fast pris fra ${kr(PRICES.design)} eks. mva. Se eksempler.`,
    serviceName: 'Webdesign',
    lowPrice: PRICES.design,
    crumbs: [SERVICES_CRUMB, DESIGN_CRUMB, { label: 'Webdesign' }],
    pill: ['WEBDESIGN', 'Design av nettsider'],
    h1: 'Webdesign',
    gt: 'som gjør besøkende til kunder',
    sub: 'Vi designer nettsider som er enkle å bruke, ser profesjonelle ut og gjør det lett å ta kontakt – på mobil først. Du ser og godkjenner designet før noe bygges.',
    checks: [`Fra ${kr(PRICES.design)} eks. mva`, 'Du ser designet før vi bygger', '100 % fornøyd-garanti'],
    primary: 'Få pristilbud på webdesign',
    bg: svcHero('web'),
    form: { title: 'Få pristilbud på webdesign', message: 'Hva trenger du? F.eks. ny nettside eller nytt design på den du har', button: 'Få pristilbud' },
    preselect: 'Design',
    source: 'Pristilbud – webdesign',
    what: {
      kicker: 'Dette får du',
      title: 'Et design som jobber for bedriften din',
      lead: 'Et godt webdesign er ikke bare pent. Det gjør det lett for kundene å finne det de leter etter – og å ta kontakt med deg.',
      tiles: [
        ['smartphone', 'Mobil først', 'De fleste besøker deg fra telefonen. Vi tegner mobilversjonen først, så det viktigste alltid er lett å finne.'],
        ['phone', 'Tydelig vei til kontakt', 'Telefon, skjema eller booking ligger der kundene leter – ikke gjemt nederst på siden.'],
        ['star', 'Ditt uttrykk', 'Farger, skrift og bilder som passer bedriften din, så nettsiden kjennes igjen og bygger tillit.'],
        ['out', 'Klikkbar prototype', 'Du prøver designet som en ekte nettside før vi bygger, og vi justerer til du er fornøyd.'],
        ['zap', 'Klar for Google', 'Designet er laget for raske sider og god SEO, så nettsiden er klar til å bli funnet.'],
        ['check', 'Lett for alle å bruke', 'God kontrast, lesbar tekst og tydelige knapper, så alle kan bruke nettsiden.'],
      ],
    },
    examples: {
      kicker: 'Eksempler',
      title: 'Webdesign for Sola Parkering',
      lead: 'Kundene spurte først om prisen. Derfor fikk priskalkulatoren plass rett under overskriften – og siden fungerer like godt på mobil som på PC.',
      items: [
        { src: `${C}sola-parkering-design-forside-960.webp`, srcset: set([`${C}sola-parkering-design-forside-960.webp`, 960], [`${C}sola-parkering-design-forside-1920.webp`, 1920]), width: 960, height: 506, alt: 'Forsiden i det nye designet for Sola Parkering med priskalkulator', caption: 'Forsiden: priskalkulatoren rett under overskriften.' },
        { src: `${C}sola-parkering-design-kalkulator-640.webp`, srcset: set([`${C}sola-parkering-design-kalkulator-640.webp`, 640], [`${C}sola-parkering-design-kalkulator-1280.webp`, 1280]), width: 640, height: 360, alt: 'Priskalkulatoren med nedtrekksliste for antall døgn', caption: 'Velg antall døgn og se prisen med en gang.' },
        { src: `${C}sola-parkering-design-enheter-960.webp`, srcset: set([`${C}sola-parkering-design-enheter-960.webp`, 960], [`${C}sola-parkering-design-enheter-1920.webp`, 1920]), width: 960, height: 540, alt: 'Designet vist på PC, laptop, nettbrett og mobil', caption: 'Samme innhold, tilpasset alle skjermer.' },
      ],
      link: '/case-study/sola-parkering',
      linkLabel: 'Se hele casen',
    },
    info: [
      {
        anchor: 'kundene-forst',
        img: `${I}utvikling-1040.webp`,
        alt: 'Skjerm med design av en landingsside',
        kicker: 'Slik tenker vi',
        title: 'Det kundene leter etter, først',
        text: [
          'Vi starter med spørsmålene kundene dine faktisk stiller. Er det prisen, åpningstidene eller hvordan de bestiller? Det viktigste får plass øverst, og resten blir lett å finne.',
          'Hver side får én tydelig handling, som å ringe, sende en forespørsel eller booke. Da vet besøkende alltid hva neste steg er.',
        ],
        list: ['Det viktigste øverst', 'Én tydelig handling per side', 'Likt uttrykk på alle skjermer'],
        fact: ['0,5 s', 'er alt en besøkende bruker på å danne seg et førsteinntrykk av bedriften din'],
        link: '/case-study/sola-parkering',
        linkLabel: 'Se Sola Parkering-casen',
      },
      {
        anchor: 'slik-jobber-vi',
        img: `${I}design-arbeidsplass-1040.webp`,
        alt: 'Skjerm med design av en app og en nettside',
        kicker: 'Fra skisse til nettside',
        title: 'Du ser designet før vi bygger',
        text: [
          'Vi skisser flere varianter av forsiden og velger den beste sammen med deg. Så lager vi en klikkbar prototype du kan prøve på mobil og PC.',
          'Når designet er godkjent, bygger vi nettsiden for deg. Har du en egen utvikler, kan du i stedet få designfilene.',
        ],
        list: ['Skisser og forslag til oppsett', 'Klikkbar prototype', 'Ferdig nettside eller designfiler'],
        fact: ['+160 000', 'årlige besøk for Sola Parkering – nettside og SEO fra Moderna Media'],
        link: '/tjenester/bedrift/utvikling/hjemmeside-bedrift',
        linkLabel: 'Les om nettsider',
      },
    ],
    caseStudy: {
      key: 'sola',
      kicker: 'Kundehistorie · Design og nettside',
      title: 'Sola Parkering fikk en nettside i tråd med sin identitet',
      metrics: [['+160 000', 'årlige besøk'], ['5,6×', 'flere bookinger'], ['−40 %', 'supporthenvendelser']],
    },
    price: {
      title: 'Hva koster webdesign?',
      badge: 'Webdesign',
      name: 'Webdesign',
      price: kr(PRICES.design),
      list: ['Design av forside og undersider', 'Mobil, nettbrett og PC', 'Klikkbar prototype', 'Justeringer til du er fornøyd'],
      cta: 'Få pristilbud på webdesign',
      factors: [
        ['Antall sider', 'Hvor mange ulike typer sider som skal designes.'],
        ['Funksjoner', 'Skjema, booking, kalkulator eller nettbutikk krever mer design.'],
        ['Innhold', 'Om vi også skal skrive tekster og finne bilder.'],
        ['Bygging', 'Om vi også skal bygge nettsiden, eller bare levere designet.'],
      ],
    },
    faqTitle: 'Spørsmål og svar om webdesign',
    faqIntro: 'Det bedrifter oftest lurer på før de bestiller webdesign.',
    faq: [
      { question: 'Hva er forskjellen på webdesign og webutvikling?', answer: 'Webdesign er hvordan nettsiden ser ut og fungerer for den som bruker den: oppsett, farger, skrift, bilder og knapper. Webutvikling er å bygge designet om til en nettside som virker. Vi gjør begge deler, men du kan også bestille bare designet.' },
      { question: 'Kan dere gi nettsiden jeg har et nytt design?', answer: 'Ja. Vi ser på hva som fungerer i dag og hva som stopper kundene, og tegner et nytt design som tar vare på det som virker. Ofte kan innhold og adresser beholdes, så du ikke mister synligheten på Google.' },
      { question: 'Får jeg se designet før dere bygger?', answer: 'Ja. Du får se skisser og en klikkbar prototype, og vi justerer til du er fornøyd før noe bygges.' },
      { question: 'Hvor lang tid tar et webdesign?', answer: 'Et første utkast er som regel klart innen en uke. Større nettsider med mange ulike sider tar lengre tid. Du får en tidsplan sammen med pristilbudet.' },
      { question: 'Fungerer designet på mobil?', answer: 'Ja. Vi tegner mobilversjonen først, og alle sider fungerer like godt på mobil, nettbrett og PC.' },
      { question: 'Hva koster webdesign?', answer: `Webdesign starter fra ${kr(PRICES.design)} eks. mva. Prisen avhenger av hvor mange sider og funksjoner nettsiden skal ha. Du får alltid fast pris før vi starter.` },
    ],
    related: { title: 'Andre designtjenester', items: [DESIGN_RELATED.logo, DESIGN_RELATED.grafisk, DESIGN_RELATED.nettside] },
  },

  'grafisk-design': {
    path: '/tjenester/bedrift/design/grafisk-design',
    seoTitle: 'Grafisk design for bedrifter – trykksaker og annonser | Moderna Media',
    seoDescription:
      `Grafisk design som gjør bedriften lett å kjenne igjen: menyer, visittkort, plakater, annonser og grafikk til sosiale medier. Fast pris fra ${kr(PRICES.design)} eks. mva.`,
    serviceName: 'Grafisk design',
    lowPrice: PRICES.design,
    crumbs: [SERVICES_CRUMB, DESIGN_CRUMB, { label: 'Grafisk design' }],
    pill: ['GRAFISK DESIGN', 'Trykk, annonser og sosiale medier'],
    h1: 'Grafisk design',
    gt: 'som gjør bedriften din lett å kjenne igjen',
    sub: 'Menyer, visittkort, plakater, annonser og innhold til sosiale medier – i samme stil som logoen og nettsiden din, og klart til trykk og publisering.',
    checks: [`Fra ${kr(PRICES.design)} eks. mva`, 'Klart til trykk og publisering', '100 % fornøyd-garanti'],
    primary: 'Få pristilbud på grafisk design',
    bg: svcHero('grafisk'),
    form: { title: 'Få pristilbud på grafisk design', message: 'Hva trenger du? F.eks. meny, visittkort eller annonser', button: 'Få pristilbud' },
    preselect: 'Design',
    source: 'Pristilbud – grafisk design',
    what: {
      kicker: 'Dette kan vi lage',
      title: 'Alt det visuelle bedriften trenger',
      lead: 'Kundene møter deg mange steder. Vi sørger for at du ser like profesjonell ut på papir, på skiltet og på skjermen.',
      tiles: [
        ['tag', 'Menyer og prislister', 'Menyer som er lette å lese, med tydelige priser – til disken, take-away og nett.'],
        ['users', 'Visittkort og brevark', 'Et profesjonelt førsteinntrykk i hver hånd, i samme stil som resten av profilen.'],
        ['printer', 'Plakater, skilt og roll-ups', 'Store flater som synes på avstand og sier det viktigste med en gang.'],
        ['zap', 'Annonser og kampanjer', 'Annonser til trykk og nett som blir lagt merke til – og får folk til å handle.'],
        ['smartphone', 'Sosiale medier', 'Maler og grafikk til Instagram og Facebook, så alt du legger ut henger sammen.'],
        ['star', 'Visuell profil', 'Farger, skrift og enkle regler samlet på ett sted, så alle bruker profilen likt.'],
      ],
    },
    examples: {
      kicker: 'Eksempler',
      title: 'Logo og take-away-meny for Fjerdingby Pizza & Grill',
      lead: 'Vi laget ny logo og en take-away-meny som er lett å lese og klar for trykk – i samme stil som nettsiden.',
      items: [
        { src: `${C}fjerdingby-pizza-meny-800.webp`, srcset: set([`${C}fjerdingby-pizza-meny-800.webp`, 800], [`${C}fjerdingby-pizza-meny-1600.webp`, 1600]), width: 800, height: 600, alt: 'Take-away-menyen vi designet for Fjerdingby Pizza & Grill', caption: 'Take-away-menyen, klar for trykk.' },
        { src: `${C}fjerdingby-pizza-640.webp`, srcset: set([`${C}fjerdingby-pizza-640.webp`, 640], [`${C}fjerdingby-pizza-1280.webp`, 1280]), width: 640, height: 384, alt: 'Logoen vi designet for Fjerdingby Pizza & Grill', caption: 'Ny logo for Fjerdingby Pizza & Grill.' },
      ],
      link: '/case-study/fjerdingby-pizza',
      linkLabel: 'Se hele casen',
    },
    info: [
      {
        anchor: 'en-stil',
        img: `${I}logo-design-1040.webp`,
        alt: 'Mobil med en logo, omgitt av fargeprøver og skisser',
        kicker: 'Gjenkjennelse',
        title: 'Én stil – overalt',
        text: [
          'Kundene møter deg på skiltet, i menyen, på Instagram og på nettsiden. Når alt har samme farger, skrift og tone, blir bedriften lettere å kjenne igjen og enklere å stole på.',
          'Har du ingen logo eller profil fra før, kan vi lage den først. Da får alt materiellet samme uttrykk fra start.',
        ],
        list: ['Samme uttrykk på trykk og nett', 'Maler du kan bruke selv', 'Filer klare for trykkeriet'],
        link: '/tjenester/bedrift/design/logo-design',
        linkLabel: 'Les om logo design',
      },
      {
        anchor: 'laget-for-a-selge',
        img: `${I}design-arbeidsplass-1040.webp`,
        alt: 'Arbeidsplass med skjerm som viser grafisk design',
        kicker: 'Mer enn pynt',
        title: 'Laget for å selge',
        text: [
          'Godt grafisk design skal få folk til å stoppe opp, forstå tilbudet og gjøre noe – ringe, bestille eller komme innom. Derfor starter vi med hva materiellet skal oppnå.',
          'Små valg kan gi store utslag. Google testet 50 ulike blåfarger på lenkene sine og fant en som ga 200 millioner dollar mer i omsetning.',
        ],
        list: ['Ett tydelig budskap per flate', 'Lett å lese, også på avstand', 'Tilpasset der det skal brukes'],
        fact: ['$200 mill.', 'i ekstra omsetning for Google etter å ha testet 50 blåfarger på lenkene'],
        link: '/tjenester/bedrift/design',
        linkLabel: 'Se alle designtjenester',
      },
    ],
    caseStudy: {
      key: 'fjerdingby',
      kicker: 'Kundehistorie · Logo, meny og nettside',
      title: 'Fjerdingby Pizza & Grill fikk ny logo, meny og nettside',
      metrics: [['Topp 1', 'på «pizza Fjerdingby»'], ['<1,2 s', 'lastetid på mobil']],
    },
    price: {
      title: 'Hva koster grafisk design?',
      badge: 'Grafisk design',
      name: 'Grafisk design',
      price: kr(PRICES.design),
      list: ['Design av materiellet du trenger', 'Trykkeklare filer og filer til nett', 'Maler til sosiale medier', 'Justeringer til du er fornøyd'],
      cta: 'Få pristilbud på grafisk design',
      factors: [
        ['Antall produkter', 'Hvor mange ulike ting som skal designes.'],
        ['Profil', 'Om du har logo og farger fra før, eller trenger en visuell profil.'],
        ['Tekst og bilder', 'Om vi også skal skrive tekst eller finne bilder.'],
        ['Formater', 'Hvor mange størrelser du trenger, f.eks. A3, A5 og Instagram.'],
      ],
    },
    faqTitle: 'Spørsmål og svar om grafisk design',
    faqIntro: 'Det bedrifter oftest lurer på før de bestiller grafisk design.',
    faq: [
      { question: 'Hva er grafisk design?', answer: 'Grafisk design er alt det visuelle bedriften bruker for å kommunisere: menyer, visittkort, plakater, annonser, skilt og innlegg på sosiale medier. Målet er at budskapet blir lett å forstå, og at bedriften blir lett å kjenne igjen.' },
      { question: 'Trenger jeg en logo før dere kan lage grafisk materiell?', answer: 'Nei, men det hjelper. Har du ingen logo eller visuell profil, kan vi lage det først, så alt materiellet får samme uttrykk.' },
      { question: 'Får jeg filer som er klare til trykk?', answer: 'Ja. Du får trykkeklare PDF-er med riktig format og marger, og egne filer til nett og sosiale medier.' },
      { question: 'Kan jeg endre materiellet selv senere?', answer: 'Ja. Vi kan lage maler, for eksempel til menyer, plakater eller Instagram-innlegg, som du kan oppdatere selv.' },
      { question: 'Hva koster grafisk design?', answer: `Grafisk design starter fra ${kr(PRICES.design)} eks. mva. Prisen avhenger av hvor mye som skal lages. Du får alltid fast pris før vi starter.` },
    ],
    related: { title: 'Andre designtjenester', items: [DESIGN_RELATED.logo, DESIGN_RELATED.web, DESIGN_RELATED.nettside] },
  },

  'logo-design': {
    path: '/tjenester/bedrift/design/logo-design',
    seoTitle: 'Logo design for bedrifter – en logo som blir husket | Moderna Media',
    seoDescription: `Logo design som gjør bedriften lett å kjenne igjen – på skiltet, nettsiden og mobilen. Flere forslag, filer til nett og trykk og fast pris fra ${kr(PRICES.design)} eks. mva.`,
    serviceName: 'Logo design',
    lowPrice: PRICES.design,
    crumbs: [SERVICES_CRUMB, DESIGN_CRUMB, { label: 'Logo design' }],
    pill: ['LOGO DESIGN', 'Logo og visuell profil'],
    h1: 'Logo design',
    gt: 'som gjør bedriften din lett å huske',
    sub: 'Vi lager en logo som er enkel, lett å kjenne igjen og fungerer overalt – fra skiltet og menyen til nettsiden og app-ikonet. Du får flere forslag og velger selv.',
    checks: [`Fra ${kr(PRICES.design)} eks. mva`, 'Flere forslag å velge mellom', '100 % fornøyd-garanti'],
    primary: 'Få pristilbud på logo',
    bg: svcHero('logo'),
    form: { title: 'Få pristilbud på logo', message: 'Hva trenger du? F.eks. ny logo eller fornying av logoen du har', button: 'Få pristilbud' },
    preselect: 'Design',
    source: 'Pristilbud – logo design',
    what: {
      kicker: 'Dette får du',
      title: 'En logo som fungerer overalt',
      lead: 'En god logo er enkel, lett å lese og passer bransjen din. Den skal fungere like godt på et visittkort som på bilen eller skiltet over døren.',
      tiles: [
        ['star', 'Flere forslag', 'Du får flere ulike retninger å velge mellom, og vi jobber videre med den du liker best.'],
        ['smartphone', 'Lesbar i alle størrelser', 'Logoen er like lett å lese som app-ikon på mobilen som på et stort skilt.'],
        ['check', 'Farge og svart-hvitt', 'Versjoner i farger, svart og hvitt, så logoen passer på alle bakgrunner.'],
        ['printer', 'Filer til nett og trykk', 'Alle filene du trenger – til nettsiden, sosiale medier, trykkeriet og skiltmakeren.'],
        ['tag', 'Farger og skrift', 'Fargekoder og skrifttyper som hører til logoen, så alt du lager ser likt ut.'],
        ['out', 'Fornying av logoen du har', 'Har logoen gått ut på dato? Vi kan modernisere den uten at kundene slutter å kjenne deg igjen.'],
      ],
    },
    examples: {
      kicker: 'Eksempel',
      title: 'Ny logo for Fjerdingby Pizza & Grill',
      lead: 'En enkel pizzaslice med håndskrevet navn – lett å kjenne igjen på skiltet, på take-away-menyen og på nettsiden.',
      items: [
        { src: `${C}fjerdingby-pizza-640.webp`, srcset: set([`${C}fjerdingby-pizza-640.webp`, 640], [`${C}fjerdingby-pizza-1280.webp`, 1280]), width: 640, height: 384, alt: 'Logoen vi designet for Fjerdingby Pizza & Grill', caption: 'Logoen: en pizzaslice med håndskrevet navn.' },
        { src: `${C}fjerdingby-pizza-meny-800.webp`, srcset: set([`${C}fjerdingby-pizza-meny-800.webp`, 800], [`${C}fjerdingby-pizza-meny-1600.webp`, 1600]), width: 800, height: 600, alt: 'Take-away-menyen til Fjerdingby Pizza & Grill med den nye logoen', caption: 'Logoen i bruk på take-away-menyen.' },
      ],
      link: '/case-study/fjerdingby-pizza',
      linkLabel: 'Se hele casen',
    },
    info: [
      {
        anchor: 'god-logo',
        img: `${I}logo-design-1040.webp`,
        alt: 'Mobil med en logo, omgitt av fargeprøver og skisser',
        kicker: 'Hva gjør en logo god?',
        title: 'Enkel, lesbar og tidløs',
        text: [
          'En god logo kan kjennes igjen på et sekund. Den er lett å lese i små størrelser, følger ikke kortvarige trender og fungerer i farger, svart og hvitt.',
          'Den vanligste feilen er å få med for mye. Mange detaljer, flere skrifttyper og mange farger gjør logoen vanskelig å bruke – og vanskelig å huske.',
        ],
        list: ['Kan kjennes igjen på et sekund', 'Lesbar på mobil og visittkort', 'Passer bransjen og kundene dine'],
        link: '/blogg/slik-far-du-en-god-logo',
        linkLabel: 'Les: Slik får du en god logo',
      },
      {
        anchor: 'slik-jobber-vi',
        img: `${I}design-arbeidsplass-1040.webp`,
        alt: 'Arbeidsplass med skjerm som viser design',
        kicker: 'Slik jobber vi',
        title: 'Fra samtale til ferdig logo',
        text: [
          'Vi starter med en samtale om bedriften, kundene og konkurrentene dine. Så skisserer vi flere retninger, og du velger den du liker best.',
          'Vi finpusser til du er fornøyd, og viser hvordan logoen ser ut på skilt, nettside og sosiale medier før du godkjenner. Til slutt får du alle filene samlet.',
        ],
        list: ['Samtale om bedriften og kundene', 'Flere forslag å velge mellom', 'Justeringer til du er fornøyd'],
        link: '/tjenester/bedrift/design/grafisk-design',
        linkLabel: 'Les om grafisk design',
      },
    ],
    caseStudy: {
      key: 'fjerdingby',
      kicker: 'Kundehistorie · Logo, meny og nettside',
      title: 'Fjerdingby Pizza & Grill fikk ny logo, meny og nettside',
      metrics: [['Topp 1', 'på «pizza Fjerdingby»'], ['<1,2 s', 'lastetid på mobil']],
    },
    price: {
      title: 'Hva koster en logo?',
      badge: 'Logo design',
      name: 'Logo design',
      price: kr(PRICES.design),
      list: ['Flere forslag å velge mellom', 'Versjoner i farger og svart-hvitt', 'Filer til nett og trykk', 'Justeringer til du er fornøyd'],
      cta: 'Få pristilbud på logo',
      factors: [
        ['Omfang', 'Om du trenger bare logo, eller en hel visuell profil med farger og skrift.'],
        ['Antall forslag', 'Hvor mange ulike retninger du vil se før du velger.'],
        ['Ny eller fornyet', 'Om vi lager en helt ny logo, eller moderniserer den du har.'],
        ['Bruk', 'Hvor logoen skal brukes, f.eks. skilt, klær, emballasje eller app.'],
      ],
    },
    faqTitle: 'Spørsmål og svar om logo design',
    faqIntro: 'Det bedrifter oftest lurer på før de bestiller en logo.',
    faq: [
      { question: 'Hva koster en logo?', answer: `Logo design starter fra ${kr(PRICES.design)} eks. mva. Prisen avhenger av om du trenger bare logo eller en hel visuell profil, og hvor mange forslag og justeringer du ønsker. Du får alltid fast pris før vi starter.` },
      { question: 'Hvilke filer får jeg?', answer: 'Du får logoen som vektorfiler (SVG og PDF) til trykk og skilt, og som PNG til nett og sosiale medier – i farger, svart og hvitt.' },
      { question: 'Kan dere fornye logoen vi har?', answer: 'Ja. Vi kan modernisere logoen du har, så den fungerer bedre på mobil og nett, uten at kundene slutter å kjenne deg igjen.' },
      { question: 'Får jeg se logoen i bruk før jeg bestemmer meg?', answer: 'Ja. Vi viser hvordan logoen ser ut på for eksempel skilt, nettside og sosiale medier, så du kan se om den fungerer før du godkjenner.' },
      { question: 'Hva er forskjellen på en logo og en visuell profil?', answer: 'Logoen er bedriftens merke. En visuell profil er hele det visuelle språket rundt: farger, skrift, bildebruk og hvordan logoen brukes på nettside, visittkort og markedsføring.' },
      { question: 'Hvor lang tid tar det å lage en logo?', answer: 'Det avhenger av omfanget og hvor mange justeringer du ønsker. Du får en tidsplan sammen med pristilbudet, så du vet når logoen er klar.' },
    ],
    related: { title: 'Andre designtjenester', items: [DESIGN_RELATED.web, DESIGN_RELATED.grafisk, DESIGN_RELATED.nettside] },
  },

  'teknisk-seo': {
    path: '/tjenester/bedrift/seo/teknisk-seo',
    seoTitle: 'Teknisk SEO – raskere nettside og bedre plassering | Moderna Media',
    seoDescription:
      'Vi gjør nettsiden rask, trygg og lett for Google å lese: hastighet, mobil, Core Web Vitals og strukturerte data. Bestill gratis SEO-analyse.',
    serviceName: 'Teknisk SEO',
    lowPrice: PRICES.seo,
    crumbs: [SERVICES_CRUMB, SEO_CRUMB, { label: 'Teknisk SEO' }],
    pill: ['TEKNISK SEO', 'Grunnmuren for synlighet'],
    h1: 'Teknisk SEO',
    gt: 'som gjør nettsiden rask og lett å finne',
    sub: 'Er nettsiden treg, vanskelig å bruke på mobil eller vanskelig for Google å lese, hjelper det lite med gode tekster. Vi fikser grunnmuren, så resten av SEO-arbeidet gir resultater.',
    checks: ['Gratis SEO-analyse', `SEO fra ${kr(PRICES.seo)}/mnd eks. mva`, '100 % fornøyd-garanti'],
    primary: 'Bestill gratis SEO-analyse',
    bg: svcHero('seo'),
    form: SEO_FORM,
    preselect: 'SEO',
    source: 'Gratis SEO-analyse – teknisk SEO',
    what: {
      kicker: 'Dette sjekker og fikser vi',
      title: 'En nettside Google liker – og kundene også',
      lead: 'Det meste av teknisk SEO merkes ikke før det mangler. Vi går gjennom alt, fikser det som stopper deg og følger med over tid.',
      tiles: [
        ['zap', 'Hastighet', 'Raske sider gir flere som blir værende. Vi komprimerer bilder, fjerner unødvendig kode og gjør siden rask på mobil.'],
        ['smartphone', 'Mobil', 'Google ser på mobilversjonen først. Alt skal være lett å lese og trykke på fra telefonen.'],
        ['search', 'Indeksering', 'Vi sjekker at Google finner og forstår alle sidene, uten døde lenker eller sider som er stengt ute.'],
        ['tag', 'Strukturerte data', 'Adresse, åpningstider, priser og spørsmål merkes opp, så Google kan vise mer om deg i søket.'],
        ['shield', 'Sikkerhet', 'HTTPS og trygge innstillinger, så både Google og kundene stoler på nettsiden.'],
        ['bars', 'Måling', 'Google Search Console og Analytics satt opp riktig, så vi kan følge med på resultatene.'],
      ],
    },
    info: [
      {
        anchor: 'hva-er-teknisk-seo',
        img: `${I}utvikling-1040.webp`,
        alt: 'Skjerm med kode og design av en nettside',
        kicker: 'Under panseret',
        title: 'Hva er teknisk SEO?',
        text: [
          'Teknisk SEO er alt som skjer «under panseret» på nettsiden: hvor raskt den laster, hvordan den fungerer på mobil, og hvor lett det er for Google å finne og forstå innholdet.',
          'Det er grunnmuren i SEO. Uten den får du lite igjen for gode tekster og lenker – med den blir alt annet du gjør mer verdt.',
        ],
        list: ['Raskere nettside', 'Bedre plassering i søk', 'Flere som blir værende', 'Færre feil'],
        fact: ['100/100', 'PageSpeed på mobil for Marbella Car Spa'],
        link: '/blogg/teknisk-seo-sjekkliste',
        linkLabel: 'Les sjekklisten for teknisk SEO',
      },
      {
        anchor: 'slik-jobber-vi',
        img: `${I}mac-1040.webp`,
        alt: 'Laptop som åpnes i et mørkt rom',
        kicker: 'Slik jobber vi',
        title: 'Fra gratis analyse til målbare resultater',
        text: [
          'Vi starter med en gratis analyse av nettsiden din. Du får en rapport med det som bør fikses, sortert etter hva som gir mest effekt.',
          'Så retter vi feilene, måler resultatet og følger med hver måned, så nye feil blir fanget opp før de koster deg kunder.',
        ],
        list: ['Gratis analyse og rapport', 'Prioritert liste med tiltak', 'Retting og oppfølging', 'Månedlig rapport'],
        fact: ['<1,2 s', 'lastetid på mobil for Fjerdingby Pizza & Grill'],
        link: '/gratis-seo-analyse',
        linkLabel: 'Bestill gratis SEO-analyse',
      },
    ],
    caseStudy: {
      key: 'marbella',
      kicker: 'Kundehistorie · Nettside, drift og SEO',
      title: 'Marbella Car Spa fikk en lynrask nettside',
      metrics: [['100/100', 'PageSpeed på mobil'], ['99,95 %', 'oppetid'], ['+68 %', 'flere leads fra skjema']],
    },
    price: {
      title: 'Hva koster teknisk SEO?',
      badge: 'Løpende SEO-avtale',
      name: 'SEO',
      price: kr(PRICES.seo),
      per: '/mnd',
      list: ['Teknisk analyse og retting', 'Hastighet og Core Web Vitals', 'Strukturerte data', 'Månedlig rapport'],
      cta: 'Få pristilbud på SEO',
      cta2: 'Gratis SEO-analyse',
      cta2Link: '/gratis-seo-analyse',
      factors: SEO_FACTORS,
    },
    faqTitle: 'Spørsmål og svar om teknisk SEO',
    faqIntro: 'Det bedrifter oftest lurer på om teknisk SEO.',
    faq: [
      { question: 'Hva er teknisk SEO?', answer: 'Teknisk SEO er alt som gjør nettsiden rask, trygg og lett for Google å lese: hastighet, mobilvennlighet, indeksering, sikkerhet og strukturerte data. Det er grunnmuren som resten av SEO-arbeidet bygger på.' },
      { question: 'Hvordan vet jeg om nettsiden min har tekniske feil?', answer: 'Bestill en gratis SEO-analyse. Vi sjekker hastighet, mobil, indeksering og strukturerte data, og du får en rapport med det som bør fikses.' },
      { question: 'Hva er Core Web Vitals?', answer: 'Core Web Vitals er Googles mål på hvor rask og stabil en nettside føles: hvor fort innholdet vises, hvor raskt siden svarer når du trykker, og om ting hopper rundt mens siden laster. Gode tall gir en bedre opplevelse og kan gi bedre plassering.' },
      { question: 'Må jeg bytte nettside for å få bedre teknisk SEO?', answer: 'Som regel ikke. Mye kan fikses på nettsiden du har. Er den bygget på en løsning som gjør det vanskelig, sier vi fra og forklarer alternativene.' },
      { question: 'Hvor lang tid tar det før jeg ser resultater?', answer: 'Forbedringer som hastighet merkes med en gang. Bedre plassering på Google kommer vanligvis gradvis over noen uker og måneder.' },
      { question: 'Hva koster teknisk SEO?', answer: `Teknisk SEO er en del av SEO-avtalen vår fra ${kr(PRICES.seo)}/mnd eks. mva. Den gratis analysen viser hva som må gjøres, og du får fast pris før vi starter.` },
    ],
    related: { title: 'Andre SEO-tjenester', items: [SEO_RELATED.innhold, SEO_RELATED.offpage, SEO_RELATED.seo] },
  },

  innholdsproduksjon: {
    path: '/tjenester/bedrift/seo/innholdsproduksjon',
    seoTitle: 'Innholdsproduksjon og SEO-tekster som gir trafikk | Moderna Media',
    seoDescription:
      'Tekster, artikler og sider som svarer på det kundene dine søker etter – skrevet for folk og for Google. Søkeordsanalyse, SEO-tekster og blogg.',
    serviceName: 'Innholdsproduksjon for SEO',
    lowPrice: PRICES.seo,
    crumbs: [SERVICES_CRUMB, SEO_CRUMB, { label: 'Innholdsproduksjon' }],
    pill: ['INNHOLD', 'SEO-tekster og artikler'],
    h1: 'Innholdsproduksjon',
    gt: 'som svarer på det kundene søker etter',
    sub: 'Folk søker etter svar. Vi finner ut hva kundene dine spør Google om, og skriver tekster, artikler og sider som svarer – så de finner deg, ikke konkurrentene.',
    checks: ['Søkeordsanalyse', `SEO fra ${kr(PRICES.seo)}/mnd eks. mva`, '100 % fornøyd-garanti'],
    primary: 'Bestill gratis SEO-analyse',
    bg: svcHero('innhold'),
    form: SEO_FORM,
    preselect: 'SEO',
    source: 'Gratis SEO-analyse – innholdsproduksjon',
    what: {
      kicker: 'Dette lager vi',
      title: 'Innhold som gir trafikk – og henvendelser',
      lead: 'Godt innhold hjelper kundene dine. Og når det hjelper folk, viser Google det høyere.',
      tiles: [
        ['search', 'Søkeordsanalyse', 'Vi finner ut hva kundene dine faktisk skriver i Google, og hvilke søk som gir flest henvendelser.'],
        ['tag', 'Tekster til tjenestesidene', 'Tydelige sider for hver tjeneste og hvert område du jobber i, så du blir funnet på det du lever av.'],
        ['chat', 'Artikler og blogg', 'Artikler som svarer på vanlige spørsmål, bygger tillit og gir trafikk lenge etter at de er publisert.'],
        ['replay', 'Oppdatering av gamle sider', 'Ofte er det raskest å forbedre det du har: bedre titler, tydeligere tekst og svar på flere spørsmål.'],
        ['check', 'Spørsmål og svar', 'FAQ-seksjoner som svarer på det kundene lurer på, og som kan vises direkte i Google.'],
        ['film', 'Bilder og video', 'Bilder og video som forklarer tjenesten din, med beskrivelser som også hjelper deg å bli funnet.'],
      ],
    },
    info: [
      {
        anchor: 'svar-pa-sporsmal',
        img: `${I}liten-bedrift-1040.webp`,
        alt: 'Smilende bedriftseier i et gartneri',
        kicker: 'Utgangspunktet',
        title: 'Innhold som svarer på spørsmål',
        text: [
          'Kundene dine lurer på pris, hvordan det fungerer og om du er til å stole på. Når nettsiden svarer på det, blir de værende – og Google ser at siden er nyttig.',
          'Hos Sola Parkering fikk priser, veibeskrivelse og spørsmål og svar hver sin seksjon, med tekster skrevet for de viktigste søkene. I dag har siden over 160 000 besøk i året.',
        ],
        list: ['Svar på kundenes vanligste spørsmål', 'Én side per tjeneste og område', 'Tekster som er lette å lese'],
        fact: ['+160 000', 'årlige besøk for Sola Parkering'],
        link: '/case-study/sola-parkering',
        linkLabel: 'Se Sola Parkering-casen',
      },
      {
        anchor: 'slik-jobber-vi',
        img: `${I}mac-1040.webp`,
        alt: 'Laptop som åpnes i et mørkt rom',
        kicker: 'Slik jobber vi',
        title: 'En plan, utkast og oppfølging',
        text: [
          'Vi lager en plan for hvilke sider og artikler som gir mest, basert på søkeordsanalysen. Du bidrar med fagkunnskapen din i en kort samtale, og godkjenner tekstene før de publiseres.',
          'Hver måned ser vi på hva som gir trafikk og henvendelser, og justerer planen etter det.',
        ],
        list: ['Innholdsplan basert på søkeord', 'Du godkjenner før publisering', 'Månedlig oppfølging'],
        link: '/blogg',
        linkLabel: 'Se bloggen vår',
      },
    ],
    caseStudy: {
      key: 'sola',
      kicker: 'Kundehistorie · Nettside og SEO',
      title: 'Sola Parkering ble funnet av de reisende',
      metrics: [['+160 000', 'årlige besøk'], ['5,6×', 'flere bookinger'], ['−40 %', 'supporthenvendelser']],
    },
    price: {
      title: 'Hva koster innholdsproduksjon?',
      badge: 'Løpende SEO-avtale',
      name: 'SEO',
      price: kr(PRICES.seo),
      per: '/mnd',
      list: ['Søkeordsanalyse', 'Nye tekster og artikler hver måned', 'Oppdatering av eksisterende sider', 'Månedlig rapport'],
      cta: 'Få pristilbud på SEO',
      cta2: 'Gratis SEO-analyse',
      cta2Link: '/gratis-seo-analyse',
      factors: [
        ['Mengde', 'Hvor mange tekster og artikler som skal skrives hver måned.'],
        ['Konkurranse', 'Hvor hard konkurransen om søkeordene er.'],
        ['Fagstoff', 'Om temaene krever mye research eller intervjuer.'],
        ['Bilder', 'Om vi også skal lage eller finne bilder.'],
      ],
    },
    faqTitle: 'Spørsmål og svar om innholdsproduksjon',
    faqIntro: 'Det bedrifter oftest lurer på om innhold og SEO-tekster.',
    faq: [
      { question: 'Hva er innholdsproduksjon for SEO?', answer: 'Det er å lage tekster, artikler og sider som svarer på det kundene dine søker etter. Godt innhold hjelper folk – og når det hjelper folk, viser Google det høyere.' },
      { question: 'Skriver dere tekstene, eller må jeg gjøre det selv?', answer: 'Vi skriver dem. Du bidrar med fagkunnskapen din i en kort samtale, og godkjenner tekstene før de publiseres.' },
      { question: 'Hvor ofte bør vi publisere nytt innhold?', answer: 'Kvalitet er viktigere enn mengde. For de fleste små bedrifter er én til fire nye eller oppdaterte sider i måneden et godt nivå.' },
      { question: 'Hvor lang tid tar det før innhold gir trafikk?', answer: 'Nye sider og artikler bruker ofte noen uker til noen måneder på å klatre i Google. Til gjengjeld fortsetter godt innhold å gi trafikk lenge etter at det er publisert.' },
      { question: 'Hva koster innholdsproduksjon?', answer: `Innholdsproduksjon er en del av SEO-avtalen vår fra ${kr(PRICES.seo)}/mnd eks. mva. Prisen avhenger av hvor mye innhold som skal lages. Du får fast pris før vi starter.` },
    ],
    related: { title: 'Andre SEO-tjenester', items: [SEO_RELATED.teknisk, SEO_RELATED.offpage, SEO_RELATED.seo] },
  },

  'off-page-seo': {
    path: '/tjenester/bedrift/seo/off-page-seo',
    seoTitle: 'Off-page SEO og lenkebygging for bedrifter | Moderna Media',
    seoDescription:
      'Mer synlig og troverdig på Google med lenker fra relevante nettsider, Google Bedriftsprofil, anmeldelser og oppføringer. Trygg strategi uten kjøpte lenker.',
    serviceName: 'Off-page SEO og lenkebygging',
    lowPrice: PRICES.seo,
    crumbs: [SERVICES_CRUMB, SEO_CRUMB, { label: 'Off-page SEO' }],
    pill: ['OFF-PAGE SEO', 'Lenkebygging og lokal SEO'],
    h1: 'Off-page SEO',
    gt: 'som gjør bedriften din mer troverdig på Google',
    sub: 'Google ser på hva andre sier om deg: hvem som lenker til nettsiden din, hva kundene skriver i anmeldelser og om bedriften står riktig oppført. Vi bygger opp dette – trygt og uten snarveier.',
    checks: ['Gratis SEO-analyse', `SEO fra ${kr(PRICES.seo)}/mnd eks. mva`, 'Trygg strategi uten kjøpte lenker'],
    primary: 'Bestill gratis SEO-analyse',
    bg: svcHero('offpage'),
    form: SEO_FORM,
    preselect: 'SEO',
    source: 'Gratis SEO-analyse – off-page SEO',
    what: {
      kicker: 'Dette gjør vi',
      title: 'Synlighet utenfor nettsiden din',
      lead: 'Det du gjør på nettsiden er halve jobben. Resten handler om hvor kjent og pålitelig bedriften din er andre steder på nett.',
      tiles: [
        ['globe', 'Lenkebygging', 'Lenker fra relevante og seriøse nettsider viser Google at bedriften din er til å stole på.'],
        ['pin', 'Google Bedriftsprofil', 'Riktig adresse, åpningstider, bilder og kategorier, så du dukker opp i kartet når folk i nærheten søker.'],
        ['star', 'Anmeldelser', 'Enkle rutiner, som en QR-kode i kassen, gjør det lett for fornøyde kunder å skrive en anmeldelse.'],
        ['tag', 'Kataloger og oppføringer', 'Samme navn, adresse og telefon på Gule Sider, 1881, Proff og andre steder kundene leter.'],
        ['chat', 'Omtale og samarbeid', 'Saker, samarbeid og gjesteinnlegg som gir omtale og lenker fra nettsteder i din bransje.'],
        ['bars', 'Rapportering', 'Hver måned ser du nye lenker, anmeldelser og hvordan plasseringen på Google utvikler seg.'],
      ],
    },
    info: [
      {
        anchor: 'hva-er-off-page-seo',
        img: `${I}seo-1040.webp`,
        alt: 'Mobil med et Google-søk',
        kicker: 'Utenfor nettsiden',
        title: 'Hva er off-page SEO?',
        text: [
          'On-page SEO er det som står på nettsiden din. Off-page SEO er alt utenfor: lenker fra andre nettsider, omtale, anmeldelser og hvordan bedriften står oppført på Google og i kataloger.',
          'For Google er dette et tegn på hvor kjent og pålitelig du er. Jo mer andre viser til deg, jo høyere kan du rangere.',
        ],
        list: ['Høyere plassering i søk', 'Synlig i Google Maps', 'Mer tillit hos kundene', 'Trafikk fra andre nettsider'],
        fact: ['Topp 1', 'på «pizza Fjerdingby» for Fjerdingby Pizza & Grill'],
        link: '/case-study/fjerdingby-pizza',
        linkLabel: 'Se Fjerdingby-casen',
      },
      {
        anchor: 'trygt',
        img: `${I}liten-bedrift-1040.webp`,
        alt: 'Smilende bedriftseier i et gartneri',
        kicker: 'Trygt, uten snarveier',
        title: 'Lenker som gir mening',
        text: [
          'Kjøpte lenkepakker og lenkenettverk kan gi en rask økning, men de bryter Googles retningslinjer og kan skade plasseringen din.',
          'Vi bygger bare lenker og omtale som gir mening for kundene dine – fra nettsteder i din bransje og ditt område. Du ser alt vi har fått til i en månedlig rapport.',
        ],
        list: ['Ingen kjøpte lenkepakker', 'Relevante nettsteder i din bransje', 'Månedlig rapport'],
        link: '/gratis-seo-analyse',
        linkLabel: 'Bestill gratis SEO-analyse',
      },
    ],
    caseStudy: {
      key: 'fjerdingby',
      kicker: 'Kundehistorie · Lokal SEO',
      title: 'Fjerdingby Pizza & Grill ligger øverst på «pizza Fjerdingby»',
      metrics: [['Topp 1', 'på «pizza Fjerdingby»'], ['<1,2 s', 'lastetid på mobil']],
    },
    price: {
      title: 'Hva koster off-page SEO?',
      badge: 'Løpende SEO-avtale',
      name: 'SEO',
      price: kr(PRICES.seo),
      per: '/mnd',
      list: ['Lenkebygging', 'Google Bedriftsprofil og anmeldelser', 'Oppføringer i kataloger', 'Månedlig rapport'],
      cta: 'Få pristilbud på SEO',
      cta2: 'Gratis SEO-analyse',
      cta2Link: '/gratis-seo-analyse',
      factors: [
        ['Konkurranse', 'Hvor hard konkurransen om søkeordene er i bransjen din.'],
        ['Område', 'Om du vil bli funnet lokalt, i flere byer eller i hele landet.'],
        ['Utgangspunkt', 'Hvor mange lenker og anmeldelser du har fra før.'],
        ['Innhold', 'Om vi også skal lage innhold som andre vil lenke til.'],
      ],
    },
    faqTitle: 'Spørsmål og svar om off-page SEO',
    faqIntro: 'Det bedrifter oftest lurer på om lenkebygging og lokal SEO.',
    faq: [
      { question: 'Hva er off-page SEO?', answer: 'Off-page SEO er alt som skjer utenfor nettsiden din og påvirker plasseringen på Google: lenker fra andre nettsider, omtale, anmeldelser og hvordan bedriften står oppført i kataloger og på Google.' },
      { question: 'Hva er forskjellen på on-page og off-page SEO?', answer: 'On-page SEO er det du gjør på egen nettside, som tekster, titler og teknisk oppsett. Off-page SEO er alt utenfor nettsiden, som lenker, omtale, anmeldelser og oppføringer. Du trenger begge deler for å nå toppen.' },
      { question: 'Kjøper dere lenker?', answer: 'Nei. Kjøpte lenkepakker bryter Googles retningslinjer og kan skade plasseringen din. Vi bygger lenker som gir mening, fra relevante nettsteder.' },
      { question: 'Hvor viktig er Google Bedriftsprofil?', answer: 'Veldig viktig for lokale bedrifter. Det er profilen som vises i kartet og øverst i søket når folk i nærheten søker etter det du tilbyr. Vi setter den opp eller rydder i den du har.' },
      { question: 'Hvor lang tid tar off-page SEO?', answer: 'Lenker og omtale bygges over tid. De fleste ser tydelig effekt etter noen måneder, og effekten varer lenge.' },
      { question: 'Hva koster off-page SEO?', answer: `Off-page SEO er en del av SEO-avtalen vår fra ${kr(PRICES.seo)}/mnd eks. mva. Prisen avhenger av konkurransen og hvor mange steder du vil bli funnet. Du får fast pris før vi starter.` },
    ],
    related: { title: 'Andre SEO-tjenester', items: [SEO_RELATED.teknisk, SEO_RELATED.innhold, SEO_RELATED.seo] },
  },
};

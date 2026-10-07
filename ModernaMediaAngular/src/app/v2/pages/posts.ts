import { PostCard } from '../v2-blocks';

export type ArticleBlock =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { ol: string[] }
  | { callout: { title: string; text: string; cta: string; link: string } };

export interface Article {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  sub: string;
  category: string;
  datePublished: string;
  dateLabel: string;
  readTime: string;
  img: string;
  related: string[];
  contactService: string;
  blocks: ArticleBlock[];
}

export const ARTICLES: Article[] = [
  {
    slug: 'hva-koster-en-nettside',
    title: 'Hva koster en nettside for bedrift?',
    metaTitle: 'Hva koster en nettside for bedrift i 2026? | Moderna Media',
    description:
      'Hva koster en nettside for bedrift? Vi går gjennom hva som påvirker prisen, hva som bør være inkludert, og hva du bør se etter i et tilbud. Nettsider fra 25.000 kr eks. mva.',
    sub: 'En ærlig gjennomgang av hva som påvirker prisen – og hva du bør se etter i et tilbud.',
    category: 'Nettsider',
    datePublished: '2026-10-07',
    dateLabel: '7. oktober 2026',
    readTime: '5 min lesetid',
    img: '/assets/img/home/pris-nettside-960.webp',
    related: ['/blogg/teknisk-seo-sjekkliste', '/blogg/hjemmeside-for-restaurant-bedrift'],
    contactService: 'Nettside',
    blocks: [
      { h2: 'Kort svar' },
      { p: 'En profesjonell nettside for bedrift koster som regel fra 25.000 kr eks. mva hos oss. Prisen avhenger av hvor mange sider du trenger, hvilke funksjoner som skal med, og hvor mye innhold som må lages.' },
      { p: 'Under går vi gjennom hva som påvirker prisen, slik at du vet hva du betaler for – uansett hvem du velger.' },
      { h2: 'Hva påvirker prisen?' },
      { p: 'Ingen nettsider er like, men det er stort sett de samme tingene som avgjør hvor mye arbeid som kreves:' },
      { ul: ['Antall sider, og hvor mye innhold som skal skrives', 'Design: ferdig mal eller skreddersydd design', 'Funksjoner som booking, nettbutikk, innlogging eller integrasjoner', 'SEO og hastighetsoptimalisering', 'Hvem som skriver tekstene og tar bildene'] },
      { h2: 'Våre pakker' },
      { p: 'For å gjøre det enklere har vi tre pakker som dekker behovene til de fleste bedrifter. Alle priser er eks. mva.' },
      { ul: ['Flersiders – fra 25.000 kr: en optimalisert nettside med flere sider, som vokser med bedriften.', 'Komplett pakke – fra 50.000 kr: alt de fleste etablerte bedrifter trenger, inkludert søkemotoroptimalisering.', 'Kompleks pakke – fra 115.000 kr: for bedrifter som trenger betaling, innlogging, database og API-er.'] },
      { callout: { title: 'Se alle priser og pakker', text: 'Sammenlign pakkene og se hva som er inkludert.', cta: 'Se priser', link: '/priser' } },
      { h2: 'Hva er inkludert?' },
      { p: 'Alle nettsidene våre leveres med oppsett av Google Analytics og Google Bedriftsprofil, hastighetsoptimalisering, serveroppsett og TLS-sikkerhet. Mange tar ekstra betalt for dette – hos oss er det en del av jobben.' },
      { h2: 'Billig nettside eller investering?' },
      { p: 'Det finnes billigere alternativer, som byggeverktøy der du gjør jobben selv. Det kan fungere for svært enkle behov, men husk å regne med tiden du bruker – og hva det koster hvis siden ikke gir deg kunder.' },
      { p: 'En god nettside skal betale seg tilbake gjennom flere henvendelser og mer salg. Derfor bør du se på prisen som en investering, ikke bare en kostnad.' },
      { h2: 'Slik får du et presist tilbud' },
      { p: 'Jo mer vi vet om hva du trenger, jo mer presist blir tilbudet. Fortell oss gjerne om bedriften din, hvilke sider du ser for deg, og om du har tekster og bilder klare.' },
      { p: 'Du får alltid et fast pristilbud før vi starter – uten skjulte kostnader.' },
    ],
  },
  {
    slug: 'teknisk-seo-sjekkliste',
    title: 'Teknisk SEO: sjekkliste for små bedrifter',
    metaTitle: 'Teknisk SEO-sjekkliste for små bedrifter (10 punkter) | Moderna Media',
    description:
      'Ti ting du kan sjekke selv for å gjøre det lettere for Google å finne og forstå nettsiden din – med gratisverktøy som Google Search Console og PageSpeed Insights.',
    sub: 'Ti ting du kan sjekke selv for å gjøre det lettere for Google å finne og forstå nettsiden din.',
    category: 'SEO',
    datePublished: '2026-10-07',
    dateLabel: '7. oktober 2026',
    readTime: '6 min lesetid',
    img: '/assets/Images/Tjenester/header/seo/1280/Søkemotor optimalisering av seo byrå.webp',
    related: ['/blogg/google-bedriftsprofil', '/blogg/hva-koster-en-nettside'],
    contactService: 'SEO',
    blocks: [
      { h2: 'Hvorfor teknisk SEO?' },
      { p: 'Du kan ha verdens beste innhold, men hvis Google ikke klarer å lese nettsiden din, kommer du ikke høyt opp i søkeresultatene. Teknisk SEO handler om å fjerne hindringene.' },
      { p: 'De fleste punktene under kan du sjekke selv på noen minutter, med gratisverktøy som Google Search Console og PageSpeed Insights.' },
      { h2: 'Sjekklisten' },
      { p: 'Gå gjennom punktene ett for ett, og noter hva som må fikses:' },
      { ol: ['Nettsiden bruker https (sikker tilkobling)', 'Siden laster raskt på mobil – test den i PageSpeed Insights', 'Du har et sitemap, og det er sendt inn i Google Search Console', 'Sitemapet inneholder bare sider som faktisk finnes', 'robots.txt blokkerer ikke viktige sider', 'Sider som ikke finnes, gir en ekte 404-feil', 'Hver side har én tydelig H1-overskrift', 'Alle sider har en unik tittel og metabeskrivelse', 'Bildene er komprimert og har alt-tekst', 'Ingen døde lenker i menyen eller footeren'] },
      { h2: 'De vanligste feilene vi ser' },
      { p: 'Når vi går gjennom nettsider, er det noen feil som går igjen: sitemaps som peker til sider som ikke finnes, lenker som ikke går noen vei, og sider som er blokkert for Google uten at noen vet om det.' },
      { p: 'Felles for dem er at de er usynlige for deg som eier nettsiden – men helt tydelige for Google.' },
      { h2: 'Hva gjør du hvis du finner feil?' },
      { p: 'Noen feil kan du rette selv, for eksempel titler og alt-tekster. Andre, som statuskoder og sitemap, krever ofte en utvikler.' },
      { callout: { title: 'Usikker på hvor du skal starte?', text: 'Bestill en gratis SEO-analyse, så får du en prioritert liste over hva som bør fikses først.', cta: 'Gratis SEO-analyse', link: '/gratis-seo-analyse' } },
    ],
  },
  {
    slug: 'slik-far-du-en-god-logo',
    title: 'Slik får du en logo som holder i mange år',
    metaTitle: 'Slik får du en god logo – 5 kjennetegn og vanlige feil | Moderna Media',
    description:
      'Hva skiller en god logo fra en dårlig? Fem kjennetegn på en god logo, de vanligste feilene og hvordan du forbereder deg før et logoprosjekt.',
    sub: 'Hva skiller en god logo fra en dårlig? Her er rådene vi gir alle kunder før vi starter.',
    category: 'Design',
    datePublished: '2026-10-07',
    dateLabel: '7. oktober 2026',
    readTime: '4 min lesetid',
    img: '/assets/Images/Tjenester/info-section/design/1280/logo design for bedrift.webp',
    related: ['/blogg/hva-koster-en-nettside', '/blogg/google-bedriftsprofil'],
    contactService: 'Design',
    blocks: [
      { h2: 'En logo er ikke hele merkevaren – men den hjelper' },
      { p: 'Logoen er ikke hele merkevaren din, men den er ofte det første folk ser. En god logo gjør det lettere å huske deg, og gir et profesjonelt førsteinntrykk.' },
      { h2: 'Fem kjennetegn på en god logo' },
      { ul: ['Enkel: den kan gjenkjennes på et sekund', 'Lesbar: den fungerer i små størrelser, som på mobil eller visittkort', 'Tidløs: den følger ikke kortvarige trender', 'Fleksibel: den fungerer i farger, i svart og i hvitt', 'Relevant: den passer bransjen og kundene dine'] },
      { h2: 'Vanlige feil' },
      { p: 'Den vanligste feilen er å ville få med for mye. Mange detaljer, flere fonter og mange farger gjør logoen vanskelig å bruke – og vanskelig å huske.' },
      { p: 'En annen feil er å bare tenke på hvordan logoen ser ut på skjermen. Den skal også fungere på skilt, klær, fakturaer og i sosiale medier.' },
      { h2: 'Slik forbereder du deg' },
      { p: 'Før du starter et logoprosjekt, er det lurt å tenke gjennom noen spørsmål:' },
      { ol: ['Hvem er kundene dine?', 'Hvilke tre ord skal folk tenke på når de ser bedriften din?', 'Hvilke konkurrenter vil du skille deg fra?', 'Hvor skal logoen brukes mest?'] },
      { p: 'Med svar på disse spørsmålene blir det mye enklere å lage en logo som treffer – og som holder i mange år.' },
      { callout: { title: 'Trenger du en ny logo?', text: 'Design fra 7.500 kr eks. mva – fast pris før vi starter.', cta: 'Se logo design', link: '/tjenester/bedrift/design/logo-design' } },
    ],
  },
  {
    slug: 'google-bedriftsprofil',
    title: 'Google Bedriftsprofil: kom høyere i lokale søk',
    metaTitle: 'Google Bedriftsprofil: slik kommer du høyere i lokale søk | Moderna Media',
    description:
      'Slik setter du opp Google Bedriftsprofil (tidligere Google My Business) riktig, får flere anmeldelser og kommer høyere i lokale søk og i kartet.',
    sub: 'En komplett bedriftsprofil er en av de enkleste måtene å bli funnet lokalt på.',
    category: 'SEO',
    datePublished: '2026-10-07',
    dateLabel: '7. oktober 2026',
    readTime: '5 min lesetid',
    img: '/assets/img/home/tjeneste-seo-840.webp',
    related: ['/blogg/teknisk-seo-sjekkliste', '/blogg/hva-koster-en-nettside'],
    contactService: 'SEO',
    blocks: [
      { h2: 'Hva er en Google Bedriftsprofil?' },
      { p: 'Google Bedriftsprofil (tidligere Google My Business) er oppføringen som vises i kartet og ved siden av søkeresultatene når noen søker etter bedriften din, eller etter tjenester i nærheten.' },
      { p: 'Den er gratis, og for mange lokale bedrifter er den like viktig som nettsiden.' },
      { h2: 'Slik setter du den opp' },
      { ol: ['Opprett eller gjør krav på profilen din hos Google', 'Velg riktig hovedkategori – den er en av de viktigste faktorene for rangering', 'Fyll inn adresse, telefon, nettside og åpningstider', 'Legg til gode bilder av lokalene, produktene og teamet', 'Skriv en kort beskrivelse av hva du tilbyr'] },
      { h2: 'Be om anmeldelser' },
      { p: 'Anmeldelser påvirker både hvor høyt du rangerer og om folk velger deg. Gjør det enkelt for fornøyde kunder å legge igjen en anmeldelse – for eksempel med en lenke på kvitteringen eller i en e-post etter jobben.' },
      { p: 'Svar på alle anmeldelser, også de negative. Det viser at du bryr deg om kundene dine.' },
      { h2: 'Hold profilen oppdatert' },
      { p: 'Oppdater åpningstidene før helligdager, legg ut innlegg om nyheter og tilbud, og svar på spørsmål. En aktiv profil viser Google at bedriften er i drift.' },
      { h2: 'Profilen og nettsiden jobber sammen' },
      { p: 'Bedriftsprofilen fungerer best sammen med en rask nettside som har samme navn, adresse og telefonnummer. Alle nettsidene vi lager inkluderer oppsett av Google Bedriftsprofil.' },
      { callout: { title: 'Vil du bli mer synlig lokalt?', text: 'Vi hjelper deg med lokal SEO – fra bedriftsprofil til lokale landingssider.', cta: 'Se SEO-tjenestene', link: '/tjenester/bedrift/seo' } },
    ],
  },
];

/** Every post, newest first, for the blog overview and «Les også». */
export const POSTS: PostCard[] = [
  ...ARTICLES.map((a) => ({
    url: `/blogg/${a.slug}`,
    title: a.title,
    description: a.sub,
    img: a.img,
    category: a.category,
    date: a.dateLabel,
  })),
  {
    url: '/blogg/hjemmeside-for-restaurant-bedrift',
    title: 'Hvorfor restauranten din trenger en hjemmeside',
    description: 'Ifølge en undersøkelse utført under pandemien, sa 82 % av kundene at de er mye mer tilbøyelige for å besøke en restaurant etter å ha sett den på nettet.',
    img: '/assets/img/home/blogg-restaurant-nettside-720.webp',
    category: 'Nettsider',
    date: '22. mars 2022',
  },
  {
    url: '/blogg/utviklerlonn',
    title: 'Utviklerlønn i Norge',
    description: 'Hva tjente utviklerne i 2021, og har det vært en økning fra 2020? Vi ser på data samlet fra 1529 utviklere i Norge.',
    img: '/assets/img/home/blogg-utviklerlonn-720.webp',
    category: 'Utvikling',
    date: '16. desember 2021',
  },
];

export const postByUrl = (url: string) => POSTS.find((p) => p.url === url)!;

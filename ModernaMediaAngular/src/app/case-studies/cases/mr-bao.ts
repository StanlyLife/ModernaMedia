import type { CaseStudy, CaseStudyMedia } from '../case-studies.data';

// Mr.Bao Sushi & Wok – logo, website and menu concept (Prosjekter/Mr Bao). Our own concept work, not a client
// project: no client quote, neutral wording (no «forslag»), listed on /case-studies, kept out of search engines.

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

export const MR_BAO: CaseStudy = {
  slug: 'mr-bao-sushi-wok',
  kind: 'concept',
  client: 'Mr.Bao Sushi & Wok',
  title: 'Mr.Bao Sushi & Wok: logo, nettside og meny for et gatekjøkken',
  heroTitle: 'Logo, nettside og meny for et gatekjøkken',
  subtitle:
    'En glad bao med bart, en nettside der kundene ringer og bestiller – og en papirmeny med samme nummer på alle retter.',
  summary:
    'Logo, visuell profil, nettside og en ny A3-meny for Mr.Bao Sushi & Wok, et gatekjøkken på Oppsal uten nettbestilling – laget for at det skal være enkelt å ringe, finne fram og bestille med nummer.',
  indexable: false,
  heroImage: `${C}mr-bao-1280.webp`,
  heroImageSrcset: `${C}mr-bao-640.webp 640w, ${C}mr-bao-1280.webp 1280w, ${C}mr-bao-1920.webp 1920w`,
  heroImageWidth: 1280,
  heroImageHeight: 720,
  heroImageAlt: 'Retter fra Mr.Bao – sushi, biffnudler, bánh mì og dumplings – på lyseblå bakgrunn',
  heroOverlay:
    'linear-gradient(100deg, rgba(10, 14, 30, 0.95) 0%, rgba(14, 20, 40, 0.84) 45%, rgba(20, 28, 51, 0.3) 100%)',
  ogImage: `${C}mr-bao-og.jpg`,
  industry: 'Gatekjøkken – sushi og wok',
  location: 'Vetlandsveien, Oppsal',
  timeframe: 'Oktober 2026',
  services: ['Logo og visuell profil', 'Nettsidedesign', 'Digital meny', 'Trykt A3-meny', 'Designvideo'],
  stats: [
    { value: '70', label: 'Retter med nummer', description: 'på nett og på papirmenyen' },
    { value: '1 trykk', label: 'Fra mobil til disken', description: 'ring-knappen ligger fast nederst' },
    { value: '2 × A3', label: 'Ny papirmeny', description: 'samme system som nettsiden' },
  ],
  sections: [
    {
      title: 'Utgangspunktet',
      body: [
        'Mr.Bao Sushi & Wok by Lunar er et gatekjøkken i Vetlandsveien på Oppsal. Her kommer maki, nigiri og crunchy rolls fra sushikjøkkenet, og pho, wok og bánh mì fra det vietnamesiske – over samme disk, alle dager fra 09 til 21.',
        'På nett fantes de bare via leveringsapper og menysider, der prisene ikke var de samme som i disken. Det fantes ingen egen nettside, og logo, farger og meny hang ikke sammen.',
        'Bildene av maten var derimot gode: lyseblå bakgrunn, hvite tallerkener og tatt ovenfra. Det ble utgangspunktet for hele designet.',
      ],
      image: image('mr-bao-mat', [1067, 640], 600, 'Retter fra Mr.Bao fotografert på lyseblå bakgrunn', 'Mr.Bao sine egne matbilder. Den lyseblå bakgrunnen går igjen i hele profilen.'),
    },
    {
      title: 'Profilen: en bao med bart',
      body: [
        'Logoen er en dampet bao med glade øyne og bart – selve «Mr.Bao». En halvmåne er et nikk til Lunar, navnet mange i nabolaget allerede kjenner. Figuren er lett å huske og fungerer like godt over disken som i et lite app-ikon.',
        'Fargene er hentet rett fra maten: soyasaus, ris, chili og mango – pluss porselensblått fra bakgrunnen i bildene. Rødt brukes bare der kunden skal ringe.',
      ],
      bullets: [
        'Logo med varianter for lys, mørk og rød bakgrunn',
        'Fem farger hentet fra matbildene',
        'Gabarito og Inter – vennlig og lett å lese',
        'Råd om fotostil for retter som mangler bilde',
      ],
      image: image('mr-bao-profil', [1440, 720], 860, 'Visuell profil for Mr.Bao med logo, overskrift og matbilde', 'Den visuelle profilen: «Sushi & wok, rett over disken.»'),
    },
    {
      title: 'Nettsiden: ingen app – bare ring',
      body: [
        'Et gatekjøkken trenger ikke en nettbutikk. Det trenger en knapp som ringer. «Ring og bestill» ligger øverst på hver side, og på forsiden står telefonnummeret rett i knappen.',
        'Åpent i dag, adresse og telefon er samlet i én stripe rett under toppen, og «Finn oss» viser åpningstidene med dagens dag markert og veibeskrivelse med ett klikk.',
      ],
      bullets: [
        'Ring-knapp øverst på hver side og fast nederst på mobil',
        'Hele menyen – 70 retter – med nummer, pris og egne bilder',
        'Tre steg som forklarer hvordan man bestiller',
        'Åpningstider, kart og veibeskrivelse',
      ],
      image: image('mr-bao-forside', [1440, 720], 900, 'Forsiden i det nye designet for Mr.Bao med ring-knappen øverst', 'Forsiden: «Sushi & wok, rett over disken.», med ring-knappen først.'),
    },
    {
      title: 'Papirmenyen: samme system på disken',
      body: [
        'Den nye A3-menyen bruker samme nummer, farger og telefonnummer som nettsiden, og prisene er de samme som i disken. Wok-retten er gjort om til «lag din egen» i to steg: velg protein, så saus.',
        'Allergenene er forklart nederst på siden, og sterke og vegetariske retter er merket med egne ikoner.',
      ],
      image: image('mr-bao-meny-a3', [1600, 800], 1132, 'Forsiden av den nye A3-menyen til Mr.Bao', 'Forsiden av A3-menyen: forretter, sushimenyer, sashimi, nigiri og maki.'),
    },
  ],
  outcomes: [
    { icon: 'star', title: 'Logo og visuell profil', description: 'Bao med bart, fem farger fra maten og maler for skilt, pose, boks og Instagram.' },
    { icon: 'phone', title: 'Nettside med ring-knapp', description: '«Ring og bestill» på hver side, åpningstider og veibeskrivelse – ingen app å laste ned.' },
    { icon: 'tag', title: 'Meny med nummer', description: 'Alle 70 retter med nummer, pris og bilde, sortert som på disken.' },
    { icon: 'smartphone', title: 'Laget for mobil', description: 'Ring-knappen ligger fast nederst, der tommelen er.' },
    { icon: 'printer', title: 'Ny A3-meny', description: 'To sider klare for trykk, med samme nummer og telefonnummer som nettsiden.' },
    { icon: 'film', title: 'Designvideo', description: '85 sekunder som forklarer valgene bak designet.' },
  ],
  showcase: {
    title: 'Designet forklart på 85 sekunder',
    intro:
      'Mr.Bao har ikke nettbestilling – det er et gatekjøkken. Derfor er hele designet bygget rundt én ting: at det skal være enkelt å ringe, finne fram og bestille med nummer. I videoen viser vi hvorfor hvert valg er tatt.',
    videos: [
      {
        label: 'Se designvideoen',
        title: 'Designvideo',
        src: '/assets/Videos/mr-bao-designforslag.mp4',
        poster: `${C}mr-bao-designvideo-poster-1280.webp`,
        width: 1920,
        height: 1080,
        name: 'Mr.Bao Sushi & Wok – designvideo',
        description:
          'Designvideo fra Moderna Media: logo, nettside og meny for gatekjøkkenet Mr.Bao Sushi & Wok på Oppsal, og hvordan kundene lettere får kontakt.',
        duration: 'PT1M25S',
        uploadDate: '2026-10-11',
        // Scene starts from the video's beat grid (Prosjekter/Mr Bao/video/index.html, C[]).
        chapters: [
          { title: 'Utgangspunktet', start: 8 },
          { title: 'Logoen: en bao med bart', start: 15 },
          { title: 'Farger hentet fra maten', start: 23 },
          { title: 'Forsiden steg for steg', start: 31 },
          { title: 'Alle retter har nummer', start: 46 },
          { title: 'Mobil: ett trykk til disken', start: 54 },
          { title: 'Papirmenyen', start: 62 },
          { title: 'Slik får kundene kontakt', start: 73 },
        ],
        // The video has music and on-screen text only; this is the text as it appears.
        transcript:
          'Mr.Bao Sushi & Wok. Logo, nettside og meny for gatekjøkkenet i Vetlandsveien på Oppsal. ' +
          'Utgangspunktet: God mat. Gode bilder. Men på nett fant folk Mr.Bao bare via leveringsapper og menysider – med andre priser enn i disken, og uten en side som er deres egen. Samme rett, to priser. En egen side – deres priser, deres nummer. ' +
          'Logoen: En bao med bart. Bao-en er navnet, barten er «Mr.» og halvmånen er «by Lunar». En glad figur som er lett å huske – og som fungerer like godt over disken som i et lite app-ikon. ' +
          'Fargene: Hentet fra maten – porselen fra bakgrunnen i bildene, chili, mango, ris og soya. Den lyseblå bakgrunnen i matbildene går igjen på hele siden. Rødt brukes bare der kunden skal ringe. ' +
          'Forsiden: Ring-knappen først. Alt viktig i én stripe: åpent i dag, adresse og telefon. Ingen app – bare ring: finn nummeret, ring, hent. Lett å finne fram, med dagens åpningstid markert og veibeskrivelse ett klikk unna. ' +
          'Menyen: Alle retter har nummer. Kunden finner retten og sier nummeret i telefonen. «Hei! En 34 og en 31, takk.» «Supert – det står klart når du kommer!» ' +
          'Mobil: Ett trykk til disken. Åpne siden, trykk «Ring» – knappen ligger fast nederst – og si nummeret. ' +
          'Papirmenyen: Samme system på disken. Nye A3-menyer med samme nummer, farger og telefonnummer som nettsiden. Wok-en blir «lag din egen» i to steg, og allergenene er forklart nederst. ' +
          'Slik får kundene kontakt: ring-knapp på hver side, nummer på alle retter, åpent, adresse og telefon øverst, og veibeskrivelse med ett klikk. Sushi & wok, rett over disken. Ring og bestill 22 76 22 76.',
      },
    ],
  },
  gallery: [
    image('mr-bao-mobil', [1600, 800], 1134, 'Fire mobilskjermer fra det nye designet for Mr.Bao', 'Mobil: forside, meny og «Finn oss», med ring-knappen alltid nederst.'),
    image('mr-bao-menyside', [1160, 640], 900, 'Menysiden med maki-retter, nummer og priser', 'Menysiden: alle retter med nummer, pris og bilde.'),
    image('mr-bao-meny-a3-bakside', [1600, 800], 1132, 'Baksiden av A3-menyen med «Lag din egen wok»', 'Baksiden av A3-menyen, med «Lag din egen wok» i to steg.'),
    image('mr-bao-logovarianter', [1320, 660], 670, 'Logoen til Mr.Bao på ulike bakgrunner og som app-ikon', 'Logoen på lys, mørk og rød bakgrunn, som stempel og som app-ikon.'),
    image('mr-bao-farger', [1440, 720], 944, 'Fargepaletten til Mr.Bao: porselen, chili, mango, ris og soya', 'Fem farger hentet fra maten.'),
    image('mr-bao-ibruk', [1440, 720], 1274, 'Profilen i bruk på skilt, pose, sushiboks og Instagram', 'Profilen i bruk: skilt over disken, takeaway-pose, sushiboks og Instagram.'),
  ],
  cardImage: `${C}mr-bao-640.webp`,
  cardMetric: { value: '70', label: 'retter med nummer' },
  seoTitle: 'Mr.Bao Sushi & Wok – logo, nettside og meny for gatekjøkken | Moderna Media',
  seoDescription:
    'Se hvordan vi designet logo, nettside og papirmeny for gatekjøkkenet Mr.Bao Sushi & Wok på Oppsal – bygget for at kundene enkelt kan ringe og bestille.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
};

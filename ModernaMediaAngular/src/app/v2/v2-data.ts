// Shared content for the V2 pages. Numbers come from the case studies (case-studies.data.ts).

export const PHONE = '902 65 326';
export const PHONE_HREF = 'tel:+4790265326';
export const EMAIL = 'kontakt@modernamedia.no';
export const ADDRESS = 'Oscars gate 76b, Oslo';
export const IMG = '/assets/img/home/';

export interface FaqEntry {
  question: string;
  /** Plain text: shown on the page and used in the FAQPage structured data. */
  answer: string;
  link?: { href: string; label: string };
}

export interface Testimonial {
  key: string;
  company: string;
  img: string;
  person?: string;
  initials?: string;
  name: string;
  role: string;
  metric: string;
  metricLabel: string;
  quote: string;
  caseStudy: string;
}

export const TESTIMONIALS: Record<string, Testimonial> = {
  sola: {
    key: 'sola',
    company: 'Sola Parkering',
    img: 'case-sola-parkering',
    person: 'kunde-svein-magnar-200.webp',
    name: 'Svein Magnar',
    role: 'Daglig leder',
    metric: '+160.000',
    metricLabel: 'i organisk trafikk',
    quote:
      'Vi fikk designet og utviklet en nettside for Sola Parkering som var i tråd med vår identitet og som snakker godt til kundene. Vi er veldig fornøyde med tjeneste og servicen som fulgte. Jeg kan trygt anbefale Moderna Media til andre!',
    caseStudy: '/case-study/sola-parkering',
  },
  fjerdingby: {
    key: 'fjerdingby',
    company: 'Fjerdingby Pizza & Grill',
    img: 'case-fjerdingby-pizza',
    person: 'kunde-ena-200.webp',
    name: 'Ena Hasanović',
    role: 'Daglig leder',
    metric: 'Topp 1',
    metricLabel: 'på Google for «pizza Fjerdingby»',
    quote:
      'Moderna Media ga oss en moderne bestillingsløsning som gjorde det enklere for kundene å handle, og ga oss bedre oversikt. Trafikken fra Google har doblet seg siden lansering.',
    caseStudy: '/case-study/fjerdingby-pizza',
  },
  ostlandet: {
    key: 'ostlandet',
    company: 'Østlandet Brønnboring',
    img: 'case-ostlandet-bronnboring',
    initials: 'MH',
    name: 'Marcus Hannevig',
    role: 'Prosjektleder',
    metric: '3×',
    metricLabel: 'flere kvalifiserte leads',
    quote:
      'Etter å ha jobbet med flere byråer tidligere, er det befriende å endelig finne en partner som faktisk leverer det de lover. Profesjonelt fra start til slutt.',
    caseStudy: '/case-study/ostlandet-bronnboring',
  },
  marbella: {
    key: 'marbella',
    company: 'Marbella Car Spa',
    img: 'case-marbella-car-spa',
    person: 'kunde-patrik-200.webp',
    name: 'Patrik',
    role: 'Daglig leder',
    metric: '+68 %',
    metricLabel: 'flere leads fra skjema',
    quote:
      'Moderna Media leverte en profesjonell nettside som virkelig representerer kvaliteten vi står for. Siden lanseringen har vi sett en merkbar økning i kundehenvendelser.',
    caseStudy: '/case-study/marbella-car-spa',
  },
};

export const SERVICES = [
  {
    img: 'tjeneste-nettsider',
    tag: 'Øk din online tilstedeværelse',
    title: 'Nettsider for bedrift',
    text: 'Design og teknisk oppsett av moderne og brukervennlige hjemmesider som trekker oppmerksomhet, bygger tillit og øker din omsetning.',
    list: ['Skreddersydd design', 'Mobilvennlig og rask', 'SEO-optimalisert fra dag én'],
    price: '25.000 kr',
    per: 'eks. mva',
    link: '/tjenester/bedrift/utvikling/hjemmeside-bedrift',
    linkLabel: 'Se hjemmeside-tjenesten',
  },
  {
    img: 'tjeneste-programvare',
    tag: 'Systemer som sparer deg penger',
    title: 'Programvare og systemer',
    text: 'Få programvare som automatiserer dine daglige gjøremål og gjør livet ditt enklere, samtidig som du reduserer kostnader.',
    list: ['Booking, CRM og fagsystemer', 'Automatiserer daglige gjøremål', 'Bygget for din bedrift'],
    price: '25.000 kr',
    per: 'eks. mva',
    link: '/tjenester/bedrift/utvikling/programvare',
    linkLabel: 'Se programvare-tjenesten',
  },
  {
    img: 'tjeneste-design',
    tag: 'Imponer med din visuelle identitet',
    title: 'Logo og grafisk design',
    text: 'Merkevarebygging, design av logo, visittkort, og generell grafisk design til nettsider, kampanjer eller markedsføringsmateriell.',
    list: ['Logo og visuell profil', 'Webdesign (UI/UX)', 'Markedsføringsmateriell'],
    price: '7.500 kr',
    per: 'eks. mva',
    link: '/tjenester/bedrift/design',
    linkLabel: 'Se design-tjenestene',
  },
  {
    img: 'tjeneste-seo',
    tag: 'La kundene dine finne deg på nett',
    title: 'SEO – synlighet på Google',
    text: 'Søkemotoroptimalisering lar kundene finne deg før de finner dine konkurrenter. Med organisk vekst kan vi hjelpe deg å øke inntektene dine.',
    list: ['Teknisk SEO', 'Innholdsproduksjon', 'Off-page og lokal SEO'],
    price: '5.000 kr',
    per: '/mnd eks. mva',
    link: '/tjenester/bedrift/seo',
    linkLabel: 'Se SEO-tjenestene',
  },
];

export interface PriceCardData {
  name: string;
  description: string;
  price: string;
  per?: string;
  list: string[];
  note?: string;
  fit?: string;
  badge?: string;
  more?: { href: string; label: string };
}

export const SERVICE_PRICES: PriceCardData[] = [
  {
    name: 'Nettside',
    description: 'For bedrifter som vil bli funnet og få flere henvendelser.',
    price: '25.000 kr',
    list: ['Skreddersydd, mobilvennlig design', 'SEO-grunnmur fra dag én', 'Google Analytics og Google Bedriftsprofil', 'Fast pris før oppstart'],
    note: 'Flersiders fra 25.000 · Komplett fra 50.000 · Kompleks fra 115.000',
    badge: 'Anbefalt start',
    more: { href: '/priser', label: 'Se nettsidepakkene' },
  },
  {
    name: 'Programvare',
    description: 'Skreddersydde systemer som automatiserer og forenkler hverdagen.',
    price: '25.000 kr',
    list: ['Booking-, CRM- eller fagsystem', 'Database og API-integrasjoner', 'Bygget for din bedrift', 'Fast pris før oppstart'],
    note: 'Enkel fra 25.000 · Avansert fra 50.000',
    more: { href: '/tjenester/bedrift/utvikling/programvare', label: 'Les om programvare' },
  },
  {
    name: 'Design',
    description: 'Logo, visuell profil og grafisk materiell som bygger tillit.',
    price: '7.500 kr',
    list: ['Logo design', 'Webdesign (UI/UX)', 'Grafisk design og markedsføringsmateriell', 'Revisjon av eksisterende logo'],
    more: { href: '/tjenester/bedrift/design', label: 'Les om design' },
  },
  {
    name: 'SEO',
    description: 'Løpende søkemotoroptimalisering som gir flere kunder fra Google.',
    price: '5.000 kr',
    per: '/mnd',
    list: ['Teknisk SEO', 'Innholdsproduksjon', 'Off-page SEO og lenkebygging', 'Lokal SEO'],
    more: { href: '/tjenester/bedrift/seo', label: 'Les om SEO' },
  },
];

export const WEBSITE_PACKAGES: PriceCardData[] = [
  {
    name: 'Flersiders',
    description: 'Nettside for små bedrifter som vil vokse.',
    price: '25.000 kr',
    list: ['Flere sider og tydelig navigasjon', 'Google Analytics og Google Bedriftsprofil', 'Semrush-integrasjon', 'Mobilvennlig og SEO-klar'],
    fit: 'Passer for: Små bedrifter som trenger en profesjonell nettside.',
  },
  {
    name: 'Komplett',
    description: 'Nettside for etablerte bedrifter – alt de fleste har behov for.',
    price: '50.000 kr',
    list: ['Alt i Flersiders', 'Søkemotoroptimalisering', 'SPA-teknologi og server-side rendering', 'Bygget som vår egen nettside'],
    fit: 'Passer for: Etablerte bedrifter som vil vokse på nett.',
    badge: 'Dekker de fleste behov',
  },
  {
    name: 'Kompleks',
    description: 'For bedrifter med spesifikke og komplekse krav.',
    price: '115.000 kr',
    list: ['Betalingssystem', 'Innlogging og autorisering', 'Database og API', 'Integrerte databehandlingsløsninger'],
    fit: 'Passer for: Bedrifter med spesifikke og komplekse krav.',
  },
];

export const PROGRAMVARE_CARD: PriceCardData = {
  name: 'Programvare',
  description: 'Booking, CRM eller drift- og logikksystem for din bedrift.',
  price: '25.000 kr',
  list: ['Enkel fra 25.000 kr', 'Avansert fra 50.000 kr', 'Kartlegging av behov', 'Fast pris før oppstart'],
};

export const PROCESS_STEPS = [
  ['Uforpliktende samtale', 'Vi starter med en gratis konsultasjon for å forstå dine behov og mål.'],
  ['Strategi & tilbud', 'Vi lager en skreddersydd plan og gir deg et tydelig pristilbud uten skjulte kostnader.'],
  ['Vi leverer', 'Vårt team går i gang og leverer resultatene du trenger for å lykkes.'],
];

export const HOME_FAQ_V2: FaqEntry[] = [
  {
    question: 'Hva gjør Moderna Media?',
    answer:
      'Moderna Media er et digitalbyrå i Oslo som lager nettsider, skreddersydd programvare, logo og grafisk design, og søkemotoroptimalisering (SEO) for bedrifter. Målet er at bedriften din skal bli funnet på nett, fremstå profesjonell og få flere kunder.',
  },
  {
    question: 'Hva koster en nettside for bedrift?',
    answer:
      'En nettside fra oss koster fra 25.000 kr eks. mva. Prisen avhenger av hvor stor og avansert nettsiden skal være: Flersiders nettside fra 25.000 kr, Komplett pakke fra 50.000 kr og Kompleks pakke fra 115.000 kr (alle eks. mva). Du får alltid en fast pris før vi starter.',
    link: { href: '/priser', label: 'Se alle priser' },
  },
  {
    question: 'Hva koster SEO?',
    answer:
      'SEO koster fra 5.000 kr i måneden eks. mva. Innholdet i avtalen tilpasses målene dine, og kan omfatte teknisk SEO, innholdsproduksjon og off-page SEO. Start gjerne med en gratis SEO-analyse.',
    link: { href: '/gratis-seo-analyse', label: 'Bestill gratis SEO-analyse' },
  },
  {
    question: 'Hvor holder dere til, og hvem jobber dere med?',
    answer:
      'Vi holder til i Oscars gate 76b i Oslo og jobber med bedrifter i hele Norge. Blant kundene våre er Sola Parkering, Fjerdingby Pizza & Grill, Østlandet Brønnboring og Marbella Car Spa.',
    link: { href: '/case-studies', label: 'Se kundecasene våre' },
  },
  {
    question: 'Hvordan foregår et samarbeid?',
    answer:
      'Vi starter med en gratis og uforpliktende samtale for å forstå behovene og målene dine. Deretter lager vi en skreddersydd plan og gir deg et tydelig pristilbud uten skjulte kostnader. Når du har takket ja, går teamet vårt i gang og leverer.',
  },
  {
    question: 'Hvor raskt svarer dere?',
    answer:
      'Vi svarer vanligvis innen to timer. Du kan nå oss på telefon 902 65 326, på e-post til kontakt@modernamedia.no eller via kontaktskjemaet.',
  },
  {
    question: 'Kan dere forbedre en nettside jeg allerede har?',
    answer:
      'Ja. Vi tilbyr teknisk SEO, innholdsproduksjon og off-page SEO for eksisterende nettsider. Du kan starte med en gratis nettside-analyse eller en gratis SEO-analyse og få en rapport med konkrete forbedringer.',
    link: { href: '/gratis-hjemmeside-analyse', label: 'Bestill gratis analyse' },
  },
  {
    question: 'Hvilke teknologier bruker dere?',
    answer:
      'Vi bygger raske, moderne nettsider og webapplikasjoner med blant annet React, Angular og Next.js. Nettsidene er responsive og SEO-optimaliserte fra dag én.',
  },
  {
    question: 'Hva betyr 100 % fornøyd-garanti?',
    answer: 'Som kunde hos oss er du garantert synlighet og måloppnåelse. Ellers får du pengene tilbake.',
  },
  {
    question: 'Hvorfor velge et digitalbyrå fremfor å lage nettsiden selv?',
    answer:
      'Med et digitalbyrå får du nettside, design og SEO fra ett sted. Nettsiden bygges for å bli funnet på Google og gjøre besøkende om til kunder, ikke bare for å se fin ut. Du sparer tid og slipper å sette deg inn i teknikken selv.',
  },
];

export const UTVIKLING_FAQ: FaqEntry[] = [
  {
    question: 'Hva koster en nettside for bedrift?',
    answer:
      'En nettside fra Moderna Media koster fra 25.000 kr eks. mva. Flersiders nettside koster fra 25.000 kr, Komplett pakke fra 50.000 kr og Kompleks pakke fra 115.000 kr (alle eks. mva). Prisen avhenger av antall sider, funksjoner og integrasjoner, og du får alltid en fast pris før vi starter.',
    link: { href: '/priser', label: 'Se alle priser' },
  },
  {
    question: 'Hvor lang tid tar det å lage en nettside?',
    answer:
      'Det avhenger av omfanget. En flersiders nettside går raskere enn en kompleks løsning med betaling, innlogging og integrasjoner. Du får en konkret tidsplan sammen med pristilbudet, før vi starter.',
  },
  {
    question: 'Hva er forskjellen på en nettside og en hjemmeside?',
    answer:
      'Ordene brukes ofte om hverandre. Strengt tatt er hjemmesiden forsiden – det første kundene ser – mens nettsiden er hele løsningen med alle undersider. Det er på hjemmesiden du formidler visjonen, tjenestene og stemmen til bedriften din.',
  },
  {
    question: 'Blir nettsiden mobilvennlig og synlig på Google?',
    answer:
      'Ja. Alle nettsidene våre er responsive og SEO-optimaliserte fra dag én, med rask lastetid, riktig teknisk oppsett og Google Analytics. Vil du klatre videre på Google, kan vi også hjelpe deg med løpende SEO.',
  },
  {
    question: 'Hvilke teknologier bruker dere?',
    answer:
      'Vi bygger raske, moderne nettsider og webapplikasjoner med blant annet React, Angular og Next.js, med SPA-teknologi og server-side rendering for optimal hastighet.',
  },
  {
    question: 'Hva koster skreddersydd programvare?',
    answer:
      'Programvare koster fra 25.000 kr eks. mva for enklere løsninger og fra 50.000 kr eks. mva for avanserte systemer. Vi kartlegger behovet ditt først, slik at du får en fast pris.',
  },
  {
    question: 'Kan dere forbedre nettsiden jeg har i dag?',
    answer:
      'Ja. Vi kan modernisere design, hastighet og teknisk SEO på nettsiden du allerede har, eller bygge en ny løsning fra bunnen. Start gjerne med en gratis nettside-analyse.',
    link: { href: '/gratis-hjemmeside-analyse', label: 'Bestill gratis nettside-analyse' },
  },
  {
    question: 'Hva trenger dere fra meg for å komme i gang?',
    answer:
      'En kort samtale om mål, målgruppe og hva nettsiden skal gjøre. Har du logo, tekster og bilder, er det fint – hvis ikke kan vi hjelpe deg med både design og innhold.',
  },
];

export const DESIGN_FAQ: FaqEntry[] = [
  {
    question: 'Hva koster en logo?',
    answer:
      'Design hos Moderna Media starter fra 7.500 kr eks. mva. Prisen på en logo avhenger av omfanget – om du trenger kun logo eller en hel visuell profil – og hvor mange konsepter og revisjoner du ønsker. Du får en fast pris før vi starter.',
  },
  {
    question: 'Hva er forskjellen på en logo og en visuell profil?',
    answer:
      'Logoen er bedriftens merke. En visuell profil er hele det visuelle språket rundt: farger, fonter, bildebruk og hvordan logoen brukes på nettside, visittkort og markedsføring. Sammen gir de et helhetlig og profesjonelt inntrykk.',
  },
  {
    question: 'Hva er webdesign?',
    answer:
      'Webdesign er utformingen av en nettside: oppsett, farger, fonter og bilder. Det består av UI (user interface) og UX (user experience). Et godt webdesign er estetisk tiltalende, brukervennlig og formidler bedriftens verdier og tjenester tydelig.',
  },
  {
    question: 'Hvorfor er godt design viktig for bedriften min?',
    answer:
      'Den gjennomsnittlige brukeren danner seg et førsteinntrykk av bedriften din i løpet av 0,5 sekunder. Et profesjonelt design bygger tillit, skiller deg fra konkurrentene og gjør det enklere for kundene å velge deg.',
  },
  {
    question: 'Kan dere fornye logoen vi allerede har?',
    answer:
      'Ja. Vi tilbyr revisjon av eksisterende logoer, der vi moderniserer uttrykket og samtidig tar vare på gjenkjennelsen kundene dine allerede har.',
  },
  {
    question: 'Hvilke filformater får jeg logoen i?',
    answer:
      'Du får logoen i formatene du trenger til både nett og trykk, blant annet SVG, PDF og PNG, i farge- og enkeltfargeversjoner.',
  },
  {
    question: 'Kan dere lage både logo og nettside?',
    answer:
      'Ja. Vi lager logo, visuell profil, webdesign og selve nettsiden, slik at alt henger sammen. Det sparer deg for tid og gir et mer helhetlig resultat.',
  },
  {
    question: 'Hvordan foregår designprosessen?',
    answer:
      'Vi starter med en uforpliktende samtale om bedriften, målgruppen og hva du liker. Deretter lager vi konsepter du gir tilbakemelding på, før vi ferdigstiller designet og leverer alle filene.',
  },
];

export const SEO_FAQ: FaqEntry[] = [
  {
    question: 'Hva er SEO (søkemotoroptimalisering)?',
    answer:
      'SEO, eller søkemotoroptimalisering, er arbeidet med å gjøre nettsiden din mer synlig i de organiske søkeresultatene på Google, Bing og Yahoo. Det omfatter teknisk SEO, innholdsproduksjon og off-page SEO, og målet er at flere potensielle kunder finner deg før de finner konkurrentene dine.',
  },
  {
    question: 'Hva koster SEO?',
    answer:
      'SEO hos Moderna Media koster fra 5.000 kr i måneden eks. mva. Prisen avhenger av konkurransen i bransjen din, hvor mange søkeord du vil rangere på og nettsidens tekniske tilstand. Start gjerne med en gratis SEO-analyse.',
    link: { href: '/gratis-seo-analyse', label: 'Bestill gratis SEO-analyse' },
  },
  {
    question: 'Hvor lang tid tar det før SEO gir resultater?',
    answer:
      'SEO er en langsiktig investering. Tekniske forbedringer kan gi effekt relativt raskt, mens høyere rangering på konkurranseutsatte søkeord vanligvis tar noen måneder. Resultatene bygger seg opp over tid og varer lenger enn betalte annonser.',
  },
  {
    question: 'Hva er forskjellen på teknisk SEO, on-page SEO og off-page SEO?',
    answer:
      'Teknisk SEO handler om hastighet, mobilvennlighet og sikkerhet, slik at søkemotorene enkelt kan lese nettsiden. On-page SEO er innholdet på siden, som tekster og søkeord. Off-page SEO er alt som skjer utenfor nettsiden, særlig lenker fra andre relevante nettsider.',
  },
  {
    question: 'Kan dere garantere førsteplass på Google?',
    answer:
      'Ingen kan ærlig garantere en bestemt plassering, fordi det er Google som bestemmer rangeringen. Det vi garanterer, er synlighet og måloppnåelse gjennom vår 100 % fornøyd-garanti – ellers får du pengene tilbake.',
  },
  {
    question: 'Hva er lokal SEO?',
    answer:
      'Lokal SEO handler om å bli synlig når folk søker etter tjenester i nærheten, for eksempel «rørlegger Oslo». Vi optimaliserer blant annet Google Bedriftsprofil og lokale landingssider, slik at du dukker opp i kartet og i de lokale søkeresultatene.',
    link: { href: '/blogg/google-bedriftsprofil', label: 'Les guiden om Google Bedriftsprofil' },
  },
  {
    question: 'Trenger jeg SEO hvis jeg allerede annonserer på Google?',
    answer:
      'Annonser gir synlighet så lenge du betaler, mens SEO bygger organisk synlighet som varer. Mange klikker heller på organiske treff enn på annonser, så de to fungerer best sammen.',
  },
  {
    question: 'Hvordan kommer jeg i gang med SEO?',
    answer:
      'Bestill en gratis SEO-analyse. Du får en rapport med konkrete forbedringer for nettsiden din og et forslag til hva som bør prioriteres først – helt uforpliktende.',
    link: { href: '/gratis-seo-analyse', label: 'Bestill gratis SEO-analyse' },
  },
];

export const PRICE_FAQ: FaqEntry[] = [
  {
    question: 'Er prisene med eller uten mva?',
    answer: 'Alle priser er oppgitt eks. mva. Merverdiavgiften på 25 % kommer i tillegg.',
  },
  {
    question: 'Hvorfor står det «fra»-priser?',
    answer:
      'Alle prosjekter er skreddersydd. «Fra»-prisen viser hva et typisk prosjekt starter på – du får alltid et fast tilbud før vi begynner.',
  },
  {
    question: 'Hva er inkludert i prisen på en nettside?',
    answer:
      'Alle nettsidene våre inkluderer oppsett av Google Analytics og Google Bedriftsprofil, hastighetsoptimalisering, serveroppsett og TLS-sikkerhet.',
  },
  {
    question: 'Hvordan prises programvare?',
    answer:
      'Enkel programvare (under 75 timer utvikling) starter fra 25.000 kr, og avansert programvare fra 50.000 kr – begge eks. mva. Du får et estimat etter et uforpliktende møte.',
  },
  {
    question: 'Hvordan fungerer SEO-prisen?',
    answer:
      'SEO er løpende arbeid og starter fra 5.000 kr i måneden eks. mva. Vi starter med en gjennomgang, så du vet hva pengene går til.',
  },
  {
    question: 'Hva koster logo og design?',
    answer:
      'Design starter fra 7.500 kr eks. mva. Prisen avhenger av om du trenger kun logo eller en hel visuell profil, og hvor mange konsepter og revisjoner du ønsker.',
  },
];

export const OSLO_FAQ: FaqEntry[] = [
  {
    question: 'Jobber dere bare med bedrifter i Oslo?',
    answer:
      'Nei. Vi holder til i Oscars gate 76b i Oslo og jobber mye med bedrifter i Oslo og på Østlandet, men vi hjelper bedrifter i hele Norge.',
  },
  {
    question: 'Hva koster en nettside for en bedrift i Oslo?',
    answer:
      'Nettsider fra oss starter fra 25.000 kr eks. mva, uansett hvor i landet du holder til. Du får alltid en fast pris før vi starter.',
    link: { href: '/priser', label: 'Se alle priser' },
  },
  {
    question: 'Hvordan blir jeg synlig i lokale søk i Oslo?',
    answer:
      'Med en rask nettside, en komplett Google Bedriftsprofil, lokale landingssider og gode omtaler. Det er det Google ser på når noen søker etter for eksempel «rørlegger Oslo».',
    link: { href: '/blogg/google-bedriftsprofil', label: 'Les guiden om Google Bedriftsprofil' },
  },
  {
    question: 'Kan vi møtes?',
    answer:
      'Ja. Vi tar gjerne et uforpliktende møte. Send oss en melding eller ring 902 65 326, så finner vi en tid som passer.',
  },
];

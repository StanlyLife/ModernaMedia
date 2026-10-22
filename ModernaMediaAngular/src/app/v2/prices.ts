// Every price on the site, in one place. All are starting prices in NOK, excl. VAT.
// Pages, FAQ answers, structured data and the price list on /priser read from here,
// so a price can never differ from page to page. Change a number here and rebuild.

export const PRICES = {
  /** Website packages; «nettsider fra» is the Flersiders price. */
  nettside: 25000,
  komplett: 50000,
  kompleks: 115000,
  /** Software under 75 hours of development, and above. */
  programvare: 25000,
  programvareAvansert: 50000,
  /** Logo design, webdesign and grafisk design share one starting price. */
  design: 7500,
  /** Monthly SEO agreement; teknisk SEO, innholdsproduksjon and off-page SEO are part of it. */
  seo: 5000,
} as const;

/** 25000 → '25.000' */
export const num = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
/** 25000 → '25.000 kr' */
export const kr = (n: number) => `${num(n)} kr`;

export interface PriceRow {
  name: string;
  text: string;
  /** 0 = free. */
  price: number;
  per?: string;
  link: string;
}

export interface PriceGroup {
  id: string;
  title: string;
  lead: string;
  rows: PriceRow[];
}

/** The full price list on /priser. */
export const PRICE_LIST: PriceGroup[] = [
  {
    id: 'pris-nettsider',
    title: 'Nettsider',
    lead: 'Design, utvikling og teknisk oppsett er med i alle pakkene.',
    rows: [
      { name: 'Flersiders nettside', text: 'For små bedrifter som trenger en profesjonell nettside med flere sider.', price: PRICES.nettside, link: '/tjenester/bedrift/utvikling/hjemmeside-bedrift' },
      { name: 'Komplett nettside', text: 'Alt i Flersiders, pluss søkemotoroptimalisering og server-side rendering.', price: PRICES.komplett, link: '/tjenester/bedrift/utvikling/hjemmeside-bedrift' },
      { name: 'Kompleks nettside', text: 'Betaling, innlogging, database og API for bedrifter med spesielle behov.', price: PRICES.kompleks, link: '/tjenester/bedrift/utvikling/hjemmeside-bedrift' },
      { name: 'Gratis nettside-analyse', text: 'Vi ser på nettsiden du har i dag og forteller hva som kan bli bedre.', price: 0, link: '/gratis-hjemmeside-analyse' },
    ],
  },
  {
    id: 'pris-programvare',
    title: 'Programvare',
    lead: 'Skreddersydd for bedriften din. Du får et estimat etter et uforpliktende møte.',
    rows: [
      { name: 'Enkel programvare', text: 'Systemer som tar under 75 timer å utvikle.', price: PRICES.programvare, link: '/tjenester/bedrift/utvikling/programvare' },
      { name: 'Avansert programvare', text: 'Større systemer som tar mer enn 75 timer å utvikle.', price: PRICES.programvareAvansert, link: '/tjenester/bedrift/utvikling/programvare' },
    ],
  },
  {
    id: 'pris-design',
    title: 'Design',
    lead: 'Samme startpris for alle designtjenestene. Prisen avhenger av omfanget.',
    rows: [
      { name: 'Logo design', text: 'Ny logo eller fornying av den du har, med filer til nett og trykk.', price: PRICES.design, link: '/tjenester/bedrift/design/logo-design' },
      { name: 'Webdesign', text: 'Design av nettsiden din, med klikkbar prototype før vi bygger.', price: PRICES.design, link: '/tjenester/bedrift/design/web-design' },
      { name: 'Grafisk design', text: 'Menyer, visittkort, plakater, annonser og grafikk til sosiale medier.', price: PRICES.design, link: '/tjenester/bedrift/design/grafisk-design' },
    ],
  },
  {
    id: 'pris-seo',
    title: 'SEO',
    lead: 'Løpende arbeid i en månedlig avtale, tilpasset målene dine.',
    rows: [
      { name: 'Teknisk SEO', text: 'Rask, trygg nettside som er lett for Google å lese. Del av SEO-avtalen.', price: PRICES.seo, per: '/mnd', link: '/tjenester/bedrift/seo/teknisk-seo' },
      { name: 'Innholdsproduksjon', text: 'Tekster og artikler som svarer på det kundene søker etter. Del av SEO-avtalen.', price: PRICES.seo, per: '/mnd', link: '/tjenester/bedrift/seo/innholdsproduksjon' },
      { name: 'Off-page SEO', text: 'Lenker, omtaler og Google Bedriftsprofil. Del av SEO-avtalen.', price: PRICES.seo, per: '/mnd', link: '/tjenester/bedrift/seo/off-page-seo' },
      { name: 'Gratis SEO-analyse', text: 'Rapport med konkrete forbedringer for nettsiden din.', price: 0, link: '/gratis-seo-analyse' },
    ],
  },
];

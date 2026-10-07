export interface FaqItem {
  question: string;
  /** Plain text: shown on the page and used in the FAQPage structured data. */
  answer: string;
  link?: { href: string; label: string };
}

export const HOME_FAQ: FaqItem[] = [
  {
    question: 'Hva gjør Moderna Media?',
    answer:
      'Moderna Media er et digitalbyrå i Oslo som lager nettsider, skreddersydd programvare, logo og grafisk design, og søkemotoroptimalisering (SEO) for bedrifter. Målet er at bedriften din skal bli funnet på nett, fremstå profesjonell og få flere kunder.',
  },
  {
    question: 'Hvor holder dere til, og hvem jobber dere med?',
    answer:
      'Vi holder til i Oscars gate 76b i Oslo og jobber med bedrifter i hele Norge. Blant kundene våre er Sola Parkering, Fjerdingby Pizza & Grill, Østlandet Brønnboring og Marbella Car Spa.',
    link: { href: '/case-studies', label: 'Se kundecasene våre' },
  },
  {
    question: 'Hva koster en nettside for bedrift?',
    answer:
      'Prisen avhenger av hvor stor og avansert nettsiden skal være. Du finner veiledende priser for nettsider, programvare, design og SEO under «Våre priser» på denne siden, og du kan alltid be om et uforpliktende pristilbud.',
    link: { href: '/pris', label: 'Be om pristilbud' },
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
    link: { href: '/kontakt', label: 'Kontakt oss' },
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
    answer:
      'Som kunde hos oss er du garantert synlighet og måloppnåelse. Ellers får du pengene tilbake.',
  },
];

import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { V2_BLOCKS } from '../v2-blocks';
import { PRICE_FAQ, PriceCardData, WEBSITE_PACKAGES } from '../v2-data';
import { applyV2Seo } from '../v2-seo';

const CARDS: PriceCardData[] = [
  {
    name: 'Nettside',
    description: 'Den digitale broen mellom deg og kundene dine.',
    price: '25.000 kr',
    list: ['Skreddersydd design for bedriften din', 'Fungerer på mobil, nettbrett og PC', 'Google Analytics og Google Bedriftsprofil', 'Hastighetsoptimalisering og TLS-sikkerhet'],
    fit: 'Passer for: Bedrifter som vil bli funnet og få flere henvendelser.',
    more: { href: '/tjenester/bedrift/utvikling/hjemmeside-bedrift', label: 'Les om nettsider' },
  },
  {
    name: 'Programvare',
    description: 'Gjør hverdagen enklere gjennom automatisering.',
    price: '25.000 kr',
    list: ['Skreddersydd for din bedrift', 'Automatiserte jobber', 'Synkronisering gjennom API', 'Estimat etter et uforpliktende møte'],
    note: 'Enkel fra 25.000 kr · Avansert fra 50.000 kr',
    fit: 'Passer for: Bedrifter med manuelle og tidkrevende rutiner.',
    more: { href: '/tjenester/bedrift/utvikling/programvare', label: 'Les om programvare' },
  },
  {
    name: 'Design',
    description: 'Skill deg ut med minneverdig design.',
    price: '7.500 kr',
    list: ['Logo design', 'Webdesign', 'Grafisk design og visuell profil', 'Ferdige filer for nett og trykk'],
    fit: 'Passer for: Nye bedrifter og bedrifter som vil fornye seg.',
    more: { href: '/tjenester/bedrift/design', label: 'Les om design' },
  },
  {
    name: 'SEO',
    description: 'Gjør det enkelt for kundene å finne deg.',
    price: '5.000 kr',
    per: '/mnd',
    list: ['Teknisk SEO', 'Innholdsproduksjon', 'Off-page SEO og lenkebygging', 'Målbare resultater'],
    fit: 'Passer for: Bedrifter som vil ha flere kunder fra Google.',
    more: { href: '/tjenester/bedrift/seo', label: 'Les om SEO' },
  },
];

@Component({
  selector: 'app-v2-priser',
  standalone: true,
  imports: [RouterLink, ...V2_BLOCKS],
  template: `
    <div class="v2">
      <v2-page-hero
        [crumbs]="[{ label: 'Priser' }]"
        [pill]="['PRISER', 'Alle priser eks. mva']"
        h1="Priser på nettside, design og SEO"
        sub="Tydelige priser – uten skjulte kostnader. Alle prosjekter er skreddersydd, og du får alltid et fast pristilbud før vi begynner."
      >
        <nav class="anchors" aria-label="På denne siden">
          <span>Hopp til:</span>
          <a [routerLink]="[]" fragment="startpriser">Alle tjenester</a>
          <a [routerLink]="[]" fragment="nettsider">Nettsidepakker</a>
          <a [routerLink]="[]" fragment="inkludert">Inkludert</a>
          <a [routerLink]="[]" fragment="faq">Spørsmål og svar</a>
        </nav>
      </v2-page-hero>

      <section id="startpriser" aria-labelledby="start-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Startpriser</span>
            <h2 class="h2" id="start-title">Hva koster det?</h2>
            <p class="lead">Prisene viser hva et typisk prosjekt starter på – du får alltid et fast pristilbud før vi begynner.</p>
          </div>
          <div class="grid4">
            @for (c of cards; track c.name) {
              <v2-pcard [data]="c" [featured]="false" [showMore]="true" />
            }
          </div>
          <v2-assure />
        </div>
      </section>

      <section class="soft" id="nettsider" aria-labelledby="packages-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Nettsider</span>
            <h2 class="h2" id="packages-title">Pakker for nettsider</h2>
            <p class="lead">Alle pakker er skreddersydd og inkluderer design, utvikling og teknisk oppsett. Prisene er oppgitt eks. mva.</p>
          </div>
          <div class="grid3">
            @for (p of packages; track p.name) {
              <v2-pcard [data]="p" />
            }
          </div>
        </div>
      </section>

      <section aria-labelledby="know-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Godt å vite</span>
            <h2 class="h2" id="know-title">Godt å vite før du kjøper</h2>
            <p class="lead">Ingen overraskelser – dette gjelder for alle tjenestene våre.</p>
          </div>
          <div class="tiles">
            @for (t of know; track t[1]) {
              <div class="tile"><div class="ic"><v2-icon [name]="t[0]" /></div><b>{{ t[1] }}</b><p>{{ t[2] }}</p></div>
            }
          </div>
        </div>
      </section>

      <section class="soft" id="inkludert" aria-labelledby="incl-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Uten ekstra kostnad</span>
            <h2 class="h2" id="incl-title">Inkludert i alle nettsider</h2>
            <p class="lead">Mange tar ekstra betalt for dette. Hos oss er det en del av jobben.</p>
          </div>
          <div class="tiles">
            @for (t of included; track t[1]) {
              <div class="tile"><div class="ic"><v2-icon [name]="t[0]" /></div><b>{{ t[1] }}</b><p>{{ t[2] }}</p></div>
            }
          </div>
        </div>
      </section>

      <section aria-labelledby="buy-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Slik kjøper du</span>
            <h2 class="h2" id="buy-title">Fra forespørsel til fast pris</h2>
            <p class="lead">Det tar bare noen minutter å komme i gang.</p>
          </div>
          <div class="steps">
            @for (s of buy; track s[0]; let i = $index) {
              <div class="step"><div class="num"><span class="gn">0{{ i + 1 }}</span></div><h3>{{ s[0] }}</h3><p>{{ s[1] }}</p></div>
            }
          </div>
          <div class="after">
            <a class="btn btn-primary" [routerLink]="[]" fragment="kontakt">Få et uforpliktende pristilbud <v2-icon name="arrow" /></a>
            <small><v2-icon name="clock" /> Vi svarer vanligvis innen 2 timer</small>
          </div>
        </div>
      </section>

      <v2-faq title="Ofte stilte spørsmål om priser" intro="Alt du lurer på om priser, mva og hva som er inkludert." [items]="faq" />
      <v2-contact source="priser" />
    </div>
  `,
})
export class PriserPageComponent implements OnInit {
  private seo = inject(SeoService);
  cards = CARDS;
  packages = WEBSITE_PACKAGES;
  faq = PRICE_FAQ;
  know = [
    ['tag', 'Fast pris', 'Du får et fast pristilbud før vi starter – uten skjulte kostnader.'],
    ['chat', 'Priser eks. mva', 'Alle priser er oppgitt eksklusiv 25 % merverdiavgift.'],
    ['shield', '100 % fornøyd-garanti', 'Du er garantert synlighet og måloppnåelse – ellers får du pengene tilbake.'],
    ['calendar', 'Levering', 'Vi avtaler tidsplan i første møte, så du vet når nettsiden er klar.'],
  ];
  included = [
    ['bars', 'Google Analytics', 'Forstå hvor de besøkende kommer fra, hva som interesserer dem og hvordan de bruker siden din.'],
    ['pin', 'Google Bedriftsprofil', 'Halvparten av Google-søkene er rettet mot lokale bedrifter. En riktig profil gjør at nye kunder i området ser deg.'],
    ['zap', 'Hastighetsoptimalisering', 'En rask nettside er mer brukervennlig og rangerer høyere. Vi komprimerer bilder og filer og går gjennom koden.'],
    ['server', 'Serveroppsett', 'Vi ordner alt du trenger når det kommer til serveroppsett og kobling av domenet ditt.'],
    ['lock', 'TLS-sikkerhet', 'SSL-sertifikat er inkludert i alle nettsidene våre. Helt gratis.'],
    ['search', 'Teknisk SEO', 'Søkemotoroptimalisering hjelper kundene dine å finne deg på Google før de finner konkurrentene dine.'],
    ['globe', 'Google Search Console', 'Vi setter opp Google Search Console, slik at du ser hvordan kundene finner deg.'],
    ['check', 'Google-tester', 'Vi tester den nye nettsiden objektivt, så du ser hvordan den presterer mot konkurrentene.'],
  ];
  buy = [
    ['Fortell oss om prosjektet', 'Fyll ut skjemaet eller book et møte, så vet vi hva du trenger.'],
    ['Få et fast tilbud', 'Du får et tydelig pristilbud uten skjulte kostnader.'],
    ['Vi setter i gang', 'Når du har sagt ja, starter vi – og holder deg oppdatert underveis.'],
  ];

  ngOnInit() {
    applyV2Seo(this.seo, {
      path: '/priser',
      title: 'Priser på nettside, design og SEO | Moderna Media',
      description: 'Hva koster en nettside? Nettsider fra 25.000 kr, programvare fra 25.000 kr, design fra 7.500 kr og SEO fra 5.000 kr/mnd – alle eks. mva. Fast pris før oppstart.',
      crumbs: [{ name: 'Priser', path: '/priser' }],
      faq: PRICE_FAQ,
    });
  }
}

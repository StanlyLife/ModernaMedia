import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { V2_BLOCKS } from '../v2-blocks';
import { IMG, SERVICES } from '../v2-data';
import { applyV2Seo } from '../v2-seo';

@Component({
  selector: 'app-v2-tjenester',
  standalone: true,
  imports: [RouterLink, ...V2_BLOCKS],
  template: `
    <div class="v2">
      <v2-page-hero
        [crumbs]="[{ label: 'Tjenester' }]"
        [pill]="['TJENESTER', 'Alt samlet på ett sted']"
        h1="Nettsider, design og SEO"
        gt="for bedrifter som vil vokse"
        sub="Alt du trenger for å vokse digitalt – samlet på ett sted. Vi utvikler nettsider og programvare, designer logo og visuell profil, og gjør deg synlig på Google."
      >
        <div class="cta-row" style="margin-top: 32px">
          <a class="btn btn-primary" [routerLink]="[]" fragment="kontakt">Få et uforpliktende tilbud <v2-icon name="arrow" /></a>
          <a class="btn btn-ghost" routerLink="/priser">Se priser</a>
        </div>
      </v2-page-hero>

      <v2-trust />

      <section class="soft" aria-labelledby="services-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Våre tjenester</span>
            <h2 class="h2" id="services-title">Velg tjenesten som passer bedriften din</h2>
            <p class="lead">Alle priser er oppgitt eks. mva, og du får alltid en fast pris før vi starter.</p>
          </div>
          <div class="grid4">
            @for (s of services; track s.title) {
              <v2-svc-card [img]="img + s.img + '-840.webp'" [tag]="s.tag" [title]="s.title" [text]="s.text" [list]="s.list" [price]="s.price" [per]="s.per" [link]="s.link" [linkLabel]="s.linkLabel" />
            }
          </div>
        </div>
      </section>

      <section aria-labelledby="all-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Alle tjenester</span>
            <h2 class="h2" id="all-title">Finn riktig tjeneste</h2>
            <p class="lead">Usikker på hvor du skal starte? Her er alt vi tilbyr, samlet etter fagområde.</p>
          </div>
          <div class="grid3">
            @for (g of groups; track g.title) {
              <nav class="tile" [attr.aria-label]="g.title">
                <div class="ic"><v2-icon [name]="g.icon" /></div>
                <a [routerLink]="g.url"><b>{{ g.title }}</b></a>
                <p>{{ g.text }}</p>
                <ul style="display: grid; gap: 10px; margin-top: 16px">
                  @for (l of g.links; track l[1]) {
                    <li><a class="link" [routerLink]="l[1]">{{ l[0] }} <v2-icon name="arrow" /></a></li>
                  }
                </ul>
              </nav>
            }
          </div>
        </div>
      </section>

      <v2-process />

      <section class="split" aria-labelledby="help-title">
        <div class="wrap">
          <div>
            <span class="kicker">Usikker på hva du trenger?</span>
            <h2 class="h2" id="help-title">Vi hjelper deg å prioritere</h2>
            <p>Mange starter med en nettside, og bygger videre med design og SEO når bedriften vokser. I et uforpliktende møte ser vi på hvor du står i dag, og hva som gir mest effekt for budsjettet ditt.</p>
            <ul>
              @for (l of help; track l) {
                <li><span class="tick"><v2-icon name="check" /></span>{{ l }}</li>
              }
            </ul>
            <div class="cta-row">
              <a class="btn btn-primary" [routerLink]="[]" fragment="kontakt">Book et uforpliktende møte <v2-icon name="arrow" /></a>
              <a class="btn btn-outline" routerLink="/priser">Se priser</a>
            </div>
          </div>
          <div class="media"><img [src]="img + 'team-digitalbyra-800.webp'" width="800" height="533" loading="lazy" alt="Team som samarbeider om et digitalt prosjekt" /></div>
        </div>
      </section>

      <v2-contact source="tjenester" />
    </div>
  `,
})
export class TjenesterPageComponent implements OnInit {
  private seo = inject(SeoService);
  img = IMG;
  services = SERVICES;
  help = ['Gratis og uforpliktende første samtale', 'Tydelig pristilbud uten skjulte kostnader', 'Én kontaktperson gjennom hele prosjektet'];
  groups = [
    {
      title: 'Utvikling',
      icon: 'globe',
      url: '/tjenester/bedrift/utvikling',
      text: 'Nettsider og programvare som er raske, sikre og bygget for å gi deg flere kunder.',
      links: [
        ['Hjemmeside for bedrift', '/tjenester/bedrift/utvikling/hjemmeside-bedrift'],
        ['Programvare og systemer', '/tjenester/bedrift/utvikling/programvare'],
        ['Gratis nettside-analyse', '/gratis-hjemmeside-analyse'],
      ],
    },
    {
      title: 'Design',
      icon: 'tag',
      url: '/tjenester/bedrift/design',
      text: 'Logo, visuell profil og webdesign som gjør bedriften din lett å huske.',
      links: [
        ['Logo design', '/tjenester/bedrift/design/logo-design'],
        ['Webdesign', '/tjenester/bedrift/design/web-design'],
        ['Grafisk design', '/tjenester/bedrift/design/grafisk-design'],
      ],
    },
    {
      title: 'SEO',
      icon: 'search',
      url: '/tjenester/bedrift/seo',
      text: 'Søkemotoroptimalisering som gjør at kundene finner deg før konkurrentene.',
      links: [
        ['Teknisk SEO', '/tjenester/bedrift/seo/teknisk-seo'],
        ['Innholdsproduksjon', '/tjenester/bedrift/seo/innholdsproduksjon'],
        ['Off-page SEO', '/tjenester/bedrift/seo/off-page-seo'],
        ['Gratis SEO-analyse', '/gratis-seo-analyse'],
      ],
    },
  ];

  ngOnInit() {
    applyV2Seo(this.seo, {
      path: '/tjenester',
      title: 'Tjenester: nettsider, design og SEO for bedrifter | Moderna Media',
      description: 'Se alle tjenestene til Moderna Media: nettsider og programvare, logo og webdesign, og SEO. Fra 7.500 kr eks. mva – fast pris før vi starter.',
      crumbs: [{ name: 'Tjenester', path: '/tjenester' }],
    });
  }
}

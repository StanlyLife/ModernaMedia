import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { V2_BLOCKS } from '../v2-blocks';
import { IMG, OSLO_FAQ } from '../v2-data';
import { applyV2Seo } from '../v2-seo';

/** Local landing page for «digitalbyrå Oslo» searches. */
@Component({
  selector: 'app-v2-oslo',
  standalone: true,
  imports: [RouterLink, ...V2_BLOCKS],
  template: `
    <div class="v2">
      <v2-svc-hero
        [crumbs]="[{ label: 'Digitalbyrå i Oslo' }]"
        [pill]="['OSLO', 'Lokal partner']"
        h1="Digitalbyrå i Oslo"
        gt="for nettsider, design og SEO"
        sub="Vi hjelper små og mellomstore bedrifter i Oslo og på Østlandet med å bli funnet, skape tillit og få flere henvendelser på nett."
        [checks]="['Kontor i Oscars gate 76b', 'Fast pris før oppstart', 'Svar innen 2 timer']"
        primary="Book et uforpliktende møte"
        secondaryLink="/priser"
        [bg]="{ src: '/assets/img/home/digitalbyra-oslo-hero-1920.webp', srcset: '/assets/img/home/digitalbyra-oslo-hero-960.webp 960w, /assets/img/home/digitalbyra-oslo-hero-1920.webp 1920w' }"
        source="Pristilbud – Oslo"
      />

      <v2-trust />

      <section class="soft" aria-labelledby="local-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Lokal partner</span>
            <h2 class="h2" id="local-title">Alt du trenger for å vokse lokalt</h2>
            <p class="lead">Vi hjelper små og mellomstore bedrifter i Oslo med å bli funnet, skape tillit og få flere henvendelser på nett.</p>
          </div>
          <div class="grid3">
            <v2-svc-card [img]="img + 'tjeneste-nettsider-840.webp'" title="Nettsider" text="Raske, mobilvennlige nettsider – fra enkle sider til komplette løsninger." price="25.000 kr" link="/tjenester/bedrift/utvikling/hjemmeside-bedrift" linkLabel="Les mer om nettsider" />
            <v2-svc-card [img]="img + 'tjeneste-seo-840.webp'" title="Lokal SEO" text="Bli funnet når kunder i nærheten søker etter det du tilbyr." price="5.000 kr" per="/mnd eks. mva" link="/tjenester/bedrift/seo" linkLabel="Les mer om SEO" />
            <v2-svc-card [img]="img + 'tjeneste-design-840.webp'" title="Design" text="Logo og visuell profil som gjør at du skiller deg ut i et konkurransepreget marked." price="7.500 kr" link="/tjenester/bedrift/design" linkLabel="Les mer om design" />
          </div>
        </div>
      </section>

      <section class="dark" aria-labelledby="cases-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Kundehistorier</span>
            <h2 class="h2" id="cases-title">Hva våre kunder sier</h2>
            <p class="lead">Se hva bedrifter som deg har oppnådd med Moderna Media.</p>
          </div>
          <div class="grid2">
            @for (k of testimonials; track k) {
              <v2-tcard [key]="k" />
            }
          </div>
          <div class="more"><a class="btn btn-ghost" routerLink="/case-studies">Se alle våre casestudier <v2-icon name="arrow" /></a></div>
        </div>
      </section>

      <section class="split" aria-labelledby="visible-title">
        <div class="wrap">
          <div>
            <span class="kicker">Lokal synlighet</span>
            <h2 class="h2" id="visible-title">Bli funnet av kunder i Oslo</h2>
            <p>
              Når noen søker etter «rørlegger Oslo» eller «frisør Grünerløkka», viser Google lokale bedrifter øverst. Vi hjelper deg å komme med i disse resultatene med en rask nettside, en
              komplett Google Bedriftsprofil og innhold som er relevant for området ditt.
            </p>
            <ul>
              @for (l of local; track l) {
                <li><span class="tick"><v2-icon name="check" /></span>{{ l }}</li>
              }
            </ul>
            <div class="cta-row">
              <a class="btn btn-primary" [routerLink]="[]" fragment="kontakt">Book et uforpliktende møte <v2-icon name="arrow" /></a>
              <a class="btn btn-outline" routerLink="/blogg/google-bedriftsprofil">Les guiden</a>
            </div>
          </div>
          <div class="media"><img [src]="img + 'resultater-vekst-800.webp'" width="800" height="533" loading="lazy" alt="Bedriftseier som følger med på resultater og vekst" /></div>
        </div>
      </section>

      <v2-process />
      <v2-faq title="Spørsmål og svar for bedrifter i Oslo" intro="Det bedrifter i Oslo oftest lurer på før de tar kontakt." [items]="faq" [soft]="false" [open]="1" />
      <v2-contact source="digitalbyra-oslo" />
    </div>
  `,
})
export class OsloPageComponent implements OnInit {
  private seo = inject(SeoService);
  img = IMG;
  faq = OSLO_FAQ;
  testimonials = ['sola', 'fjerdingby', 'ostlandet', 'marbella'];
  local = ['Google Bedriftsprofil', 'Lokale landingssider', 'Omtaler og anmeldelser', 'Måling av henvendelser'];

  ngOnInit() {
    applyV2Seo(this.seo, {
      path: '/digitalbyra-oslo',
      title: 'Digitalbyrå i Oslo – nettsider, design og SEO | Moderna Media',
      description: 'Moderna Media er et digitalbyrå i Oslo (Oscars gate 76b) som lager nettsider, design og lokal SEO for bedrifter i Oslo og på Østlandet. Få et uforpliktende tilbud.',
      crumbs: [{ name: 'Digitalbyrå i Oslo', path: '/digitalbyra-oslo' }],
      faq: OSLO_FAQ,
      extraNodes: [this.seo.createLocalBusinessSchema()],
    });
  }
}

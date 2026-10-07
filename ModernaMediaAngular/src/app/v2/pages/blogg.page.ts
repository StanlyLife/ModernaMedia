import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { SeoService } from '../../services/seo.service';
import { V2_BLOCKS } from '../v2-blocks';
import { IMG } from '../v2-data';
import { applyV2Seo } from '../v2-seo';
import { POSTS } from './posts';

@Component({
  selector: 'app-v2-blogg',
  standalone: true,
  imports: [...V2_BLOCKS],
  template: `
    <div class="v2">
      <v2-page-hero [crumbs]="[{ label: 'Blogg' }]" [pill]="['BLOGG', 'Lær noe nytt']" h1="Blogg om nettsider, design og SEO" sub="Tips og innsikt om nettsider, design og SEO – skrevet for deg som driver en bedrift." />

      <section aria-labelledby="posts-title">
        <div class="wrap">
          <div class="head">
            <span class="kicker">Lær noe nytt</span>
            <h2 class="h2" id="posts-title">Siste artikler</h2>
          </div>
          <div class="filters" role="group" aria-label="Filtrer etter tema">
            @for (c of categories; track c) {
              <button type="button" [class.on]="filter() === c" [attr.aria-pressed]="filter() === c" (click)="filter.set(c)">{{ c }}</button>
            }
          </div>
          <div class="grid3">
            @for (p of shown(); track p.url) {
              <v2-post-card [post]="p" />
            }
          </div>
        </div>
      </section>

      <section class="soft" aria-labelledby="help-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Trenger du hjelp?</span>
            <h2 class="h2" id="help-title">Fra råd til resultater</h2>
            <p class="lead">Artiklene gir deg et godt utgangspunkt. Vil du heller at vi gjør jobben, hjelper vi deg gjerne.</p>
          </div>
          <div class="grid3">
            <v2-svc-card [img]="img + 'tjeneste-nettsider-840.webp'" title="Nettsider" text="Raske, mobilvennlige nettsider som gjør besøkende om til kunder." price="25.000 kr" link="/tjenester/bedrift/utvikling" linkLabel="Les mer om nettsider" />
            <v2-svc-card [img]="img + 'tjeneste-design-840.webp'" title="Design" text="Logo, webdesign og grafisk design som gjør deg lett å huske." price="7.500 kr" link="/tjenester/bedrift/design" linkLabel="Les mer om design" />
            <v2-svc-card [img]="img + 'tjeneste-seo-840.webp'" title="SEO" text="Bli funnet av kundene som søker etter det du tilbyr." price="5.000 kr" per="/mnd eks. mva" link="/tjenester/bedrift/seo" linkLabel="Les mer om SEO" />
          </div>
        </div>
      </section>

      <v2-contact source="blogg" />
    </div>
  `,
})
export class BloggPageComponent implements OnInit {
  private seo = inject(SeoService);
  img = IMG;
  categories = ['Alle', 'Nettsider', 'Design', 'SEO', 'Utvikling'];
  filter = signal('Alle');
  shown = computed(() => (this.filter() === 'Alle' ? POSTS : POSTS.filter((p) => p.category === this.filter())));

  ngOnInit() {
    applyV2Seo(this.seo, {
      path: '/blogg',
      title: 'Blogg om nettsider, design og SEO | Moderna Media',
      description: 'Tips og innsikt om nettsider, design og SEO for bedrifter: hva en nettside koster, teknisk SEO, Google Bedriftsprofil, logo og mer.',
      crumbs: [{ name: 'Blogg', path: '/blogg' }],
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { V2_BLOCKS } from '../v2-blocks';
import { PHONE, PHONE_HREF } from '../v2-data';
import { applyV2Seo } from '../v2-seo';
import { POSTS } from './posts';

/** Shown after every V2 form. Not indexed; also a clean conversion URL for analytics. */
@Component({
  selector: 'app-v2-takk',
  standalone: true,
  imports: [RouterLink, ...V2_BLOCKS],
  template: `
    <div class="v2">
      <v2-page-hero [crumbs]="[{ label: 'Takk' }]" h1="Takk!" gt="Vi har mottatt meldingen din" sub="Vi svarer vanligvis innen 2 timer. Haster det, kan du ringe oss direkte.">
        <div class="cta-row" style="margin-top: 32px">
          <a class="btn btn-primary" [href]="phoneHref">Ring {{ phone }} <v2-icon name="phone" /></a>
          <a class="btn btn-ghost" routerLink="/">Gå til forsiden</a>
        </div>
      </v2-page-hero>

      <section aria-labelledby="next-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">Hva skjer nå?</span>
            <h2 class="h2" id="next-title">Dette skjer videre</h2>
            <p class="lead">Du trenger ikke gjøre noe mer – vi tar det herfra.</p>
          </div>
          <div class="steps">
            @for (s of steps; track s[0]; let i = $index) {
              <div class="step"><div class="num"><span class="gn">0{{ i + 1 }}</span></div><h3>{{ s[0] }}</h3><p>{{ s[1] }}</p></div>
            }
          </div>
        </div>
      </section>

      <section class="soft" aria-labelledby="read-title">
        <div class="wrap">
          <div class="head">
            <span class="kicker">Mens du venter</span>
            <h2 class="h2" id="read-title">Les mer fra oss</h2>
          </div>
          <div class="grid3">
            @for (p of posts; track p.url) {
              <v2-post-card [post]="p" />
            }
          </div>
          <div class="more"><a class="btn btn-outline" routerLink="/case-studies">Se kundehistoriene våre <v2-icon name="arrow" /></a></div>
        </div>
      </section>
    </div>
  `,
})
export class TakkPageComponent implements OnInit {
  private seo = inject(SeoService);
  phone = PHONE;
  phoneHref = PHONE_HREF;
  posts = POSTS.slice(0, 3);
  steps = [
    ['Vi leser meldingen', 'Vi går gjennom henvendelsen din og forbereder oss til samtalen.'],
    ['Vi tar kontakt', 'Du hører fra oss på telefon eller e-post. Vi svarer vanligvis innen 2 timer.'],
    ['Uforpliktende samtale', 'Vi finner ut hva du trenger, og du får et tydelig tilbud uten skjulte kostnader.'],
  ];

  ngOnInit() {
    applyV2Seo(this.seo, {
      path: '/takk',
      title: 'Takk for henvendelsen | Moderna Media',
      description: 'Vi har mottatt meldingen din og svarer vanligvis innen 2 timer.',
      noindex: true,
    });
  }
}

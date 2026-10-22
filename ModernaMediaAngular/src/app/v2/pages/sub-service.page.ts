import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { V2_BLOCKS } from '../v2-blocks';
import { SUB_SERVICES, SubServicePage } from '../sub-services';
import { applyV2Seo } from '../v2-seo';

/**
 * Service sub-pages (webdesign, grafisk design, logo design, teknisk SEO, innholdsproduksjon, off-page SEO).
 * The route's `data.page` picks the content from SUB_SERVICES.
 */
@Component({
  selector: 'app-v2-sub-service',
  standalone: true,
  imports: [RouterLink, ...V2_BLOCKS],
  template: `
    @let p = page;
    <div class="v2">
      <v2-svc-hero
        [crumbs]="p.crumbs"
        [pill]="p.pill"
        [h1]="p.h1"
        [gt]="p.gt"
        [sub]="p.sub"
        [checks]="p.checks"
        [primary]="p.primary"
        [bg]="p.bg"
        [anchors]="anchors"
        [formTitle]="p.form.title"
        [formSub]="p.form.sub || 'Fortell oss kort hva du trenger, så svarer vi vanligvis innen 2 timer.'"
        [formMessage]="p.form.message"
        [formButton]="p.form.button"
        [preselect]="p.preselect"
        [source]="p.source"
      />

      <v2-trust />

      <section class="soft" id="innhold" aria-labelledby="sub-what-title">
        <div class="wrap">
          <div class="head center">
            <span class="kicker">{{ p.what.kicker }}</span>
            <h2 class="h2" id="sub-what-title">{{ p.what.title }}</h2>
            <p class="lead">{{ p.what.lead }}</p>
          </div>
          <div class="tiles">
            @for (t of p.what.tiles; track t[1]) {
              <div class="tile">
                <div class="ic"><v2-icon [name]="t[0]" /></div>
                <h3>{{ t[1] }}</h3>
                <p>{{ t[2] }}</p>
              </div>
            }
          </div>
        </div>
      </section>

      @if (p.examples; as ex) {
        <section id="eksempler" aria-labelledby="sub-examples-title">
          <div class="wrap">
            <div class="head center">
              <span class="kicker">{{ ex.kicker }}</span>
              <h2 class="h2" id="sub-examples-title">{{ ex.title }}</h2>
              <p class="lead">{{ ex.lead }}</p>
            </div>
            <div class="examples" [class.two]="ex.items.length === 2">
              @for (e of ex.items; track e.src) {
                <figure>
                  <img
                    [src]="e.src"
                    [attr.srcset]="e.srcset"
                    sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 420px"
                    [width]="e.width"
                    [height]="e.height"
                    [alt]="e.alt"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>{{ e.caption }}</figcaption>
                </figure>
              }
            </div>
            <div class="more">
              <a class="link" [routerLink]="ex.link">{{ ex.linkLabel }} <v2-icon name="arrow" /></a>
            </div>
          </div>
        </section>
      }

      @defer (on idle; hydrate on viewport) {
        @for (info of p.info; track info.anchor; let odd = $odd) {
          <v2-info
            [anchor]="info.anchor"
            [soft]="alt ? !odd : odd"
            [rev]="odd"
            [img]="info.img"
            [alt]="info.alt"
            [kicker]="info.kicker"
            [title]="info.title"
            [text]="info.text"
            [list]="info.list || []"
            [link]="info.link"
            [linkLabel]="info.linkLabel"
            [fact]="info.fact || []"
          />
        }

        <section [class.soft]="alt" aria-label="Kundehistorie">
          <div class="wrap">
            <v2-case
              [key]="p.caseStudy.key"
              [kicker]="p.caseStudy.kicker"
              [title]="p.caseStudy.title"
              [metrics]="p.caseStudy.metrics"
            />
          </div>
        </section>
      }

      @defer (on idle; hydrate on viewport) {
        <v2-price-band
          [title]="p.price.title"
          [badge]="p.price.badge"
          [name]="p.price.name"
          [price]="p.price.price"
          [per]="p.price.per || ''"
          [list]="p.price.list"
          [cta]="p.price.cta"
          [cta2]="p.price.cta2 || 'Se alle priser'"
          [cta2Link]="p.price.cta2Link || '/priser'"
          [factors]="p.price.factors"
          [soft]="!alt"
        />
        <v2-process [cta]="p.primary" [soft]="alt" />
        <v2-faq [title]="p.faqTitle" [intro]="p.faqIntro" [items]="p.faq" [soft]="!alt" />

        <section [class.soft]="alt" aria-labelledby="sub-related-title">
          <div class="wrap">
            <div class="head center">
              <span class="kicker">Les også</span>
              <h2 class="h2" id="sub-related-title">{{ p.related.title }}</h2>
            </div>
            <div class="grid3">
              @for (r of p.related.items; track r.link) {
                <v2-svc-card [icon]="r.icon" [title]="r.title" [text]="r.text" [link]="r.link" [linkLabel]="r.linkLabel" />
              }
            </div>
          </div>
        </section>

        <v2-contact [preselect]="p.preselect" [source]="p.source" />
      }
    </div>
  `,
  styleUrl: './sub-service.page.scss',
})
export class V2SubServicePage implements OnInit {
  private seo = inject(SeoService);
  readonly page: SubServicePage = SUB_SERVICES[inject(ActivatedRoute).snapshot.data['page']];
  /** Section backgrounds alternate white/grey; the optional examples section shifts the pattern. */
  readonly alt = !!this.page.examples;

  readonly anchors: string[][] = [
    ['Dette får du', 'innhold'],
    ...(this.page.examples ? [['Eksempler', 'eksempler']] : []),
    [this.page.info[this.page.info.length - 1].kicker, this.page.info[this.page.info.length - 1].anchor],
    ['Priser', 'priser'],
    ['Spørsmål og svar', 'faq'],
  ];

  ngOnInit() {
    const p = this.page;
    applyV2Seo(this.seo, {
      path: p.path,
      title: p.seoTitle,
      description: p.seoDescription,
      crumbs: p.crumbs.map((c) => ({ name: c.label, path: c.link ?? p.path })),
      faq: p.faq,
      service: { name: p.serviceName, description: p.seoDescription, lowPrice: p.lowPrice },
    });
  }
}

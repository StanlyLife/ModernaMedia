import { Component, computed, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { V2_BLOCKS } from '../v2-blocks';
import { applyV2Seo } from '../v2-seo';
import { ARTICLES, postByUrl } from './posts';

/** One blog article. The route passes the slug as data. */
@Component({
  selector: 'app-v2-article',
  standalone: true,
  imports: [RouterLink, ...V2_BLOCKS],
  template: `
    @let a = article();
    <div class="v2">
      <v2-page-hero [crumbs]="[{ label: 'Blogg', link: '/blogg' }, { label: a.title }]" [pill]="[a.category.toUpperCase(), 'Blogg']" [h1]="a.title" [sub]="a.sub">
        <p class="article-meta">Publisert {{ a.dateLabel }} · {{ a.readTime }} · Moderna Media</p>
      </v2-page-hero>

      <article class="section" aria-labelledby="article-title">
        <div class="wrap">
          <div class="article">
            <img [src]="a.img" width="1280" height="720" alt="" style="width: 100%; height: 400px; object-fit: cover; border-radius: 24px; margin-bottom: 44px" />
            @for (b of a.blocks; track $index) {
              @if ('h2' in b) {
                <h2 [id]="$index === 0 ? 'article-title' : null">{{ b.h2 }}</h2>
              } @else if ('p' in b) {
                <p>{{ b.p }}</p>
              } @else if ('ul' in b) {
                <ul>
                  @for (l of b.ul; track l) {
                    <li><span class="tick"><v2-icon name="check" /></span><span>{{ l }}</span></li>
                  }
                </ul>
              } @else if ('ol' in b) {
                <ol>
                  @for (l of b.ol; track l) {
                    <li><span>{{ l }}</span></li>
                  }
                </ol>
              } @else if ('callout' in b) {
                <div class="callout">
                  <div><b>{{ b.callout.title }}</b><p>{{ b.callout.text }}</p></div>
                  <a class="btn btn-white" [routerLink]="b.callout.link">{{ b.callout.cta }} <v2-icon name="arrow" /></a>
                </div>
              }
            }
          </div>
        </div>
      </article>

      <section class="soft" aria-labelledby="related-title">
        <div class="wrap">
          <div class="head">
            <span class="kicker">Les også</span>
            <h2 class="h2" id="related-title">Flere artikler</h2>
          </div>
          <div class="grid2">
            @for (p of related(); track p.url) {
              <v2-post-card [post]="p" />
            }
          </div>
        </div>
      </section>

      <v2-contact [preselect]="a.contactService" [source]="'blogg/' + a.slug" title="Vil du at vi gjør jobben?" />
    </div>
  `,
})
export class ArticlePageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  article = computed(() => ARTICLES.find((a) => a.slug === this.route.snapshot.data['slug'])!);
  related = computed(() => this.article().related.map(postByUrl));

  ngOnInit() {
    const a = this.article();
    applyV2Seo(this.seo, {
      path: `/blogg/${a.slug}`,
      title: a.metaTitle,
      description: a.description,
      image: a.img,
      crumbs: [
        { name: 'Blogg', path: '/blogg' },
        { name: a.title, path: `/blogg/${a.slug}` },
      ],
      article: { headline: a.title, datePublished: a.datePublished, image: a.img },
    });
  }
}

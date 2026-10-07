import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ORGANIZATION_ID,
  SeoService,
  SITE_ORIGIN,
} from 'src/app/services/seo.service';
import {
  CaseStudy,
  getCaseStudyBySlug,
  INDEXABLE_CASE_STUDIES,
} from '../case-studies.data';
import { AboutYourNextProjectComponent } from 'src/app/components/about-your-next-project/about-your-next-project.component';

@Component({
  selector: 'app-case-study-page',
  standalone: true,
  imports: [CommonModule, RouterModule, AboutYourNextProjectComponent],
  templateUrl: './case-study-page.component.html',
  styleUrls: [
    './case-study-page.component.scss',
    './case-study-page.desktop.component.scss',
  ],
})
export class CaseStudyPageComponent {
  caseStudy?: CaseStudy;
  otherCaseStudies: CaseStudy[] = [];
  private readonly defaultOverlay =
    'linear-gradient(135deg, rgba(9, 14, 36, 0.85), rgba(38, 66, 142, 0.65))';

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const slug = params.get('slug');
        const study = getCaseStudyBySlug(slug);
        if (!study) {
          this.router.navigate(['/error']);
          return;
        }

        this.caseStudy = study;
        this.otherCaseStudies = INDEXABLE_CASE_STUDIES.filter(
          (other) => other.slug !== study.slug
        );
        this.updateSeo(study);
      });
  }

  private updateSeo(study: CaseStudy): void {
    const path = `/case-study/${study.slug}`;
    const canonicalUrl = `${SITE_ORIGIN}${path}`;
    const ogImage = `${SITE_ORIGIN}${study.ogImage}`;

    this.seo.updateSeo({
      title: study.seoTitle,
      description: study.seoDescription,
      url: canonicalUrl,
      robots: study.indexable
        ? 'index, follow, max-image-preview:large'
        : 'noindex, follow',
      image: ogImage,
      type: 'article',
    });

    this.seo.addStructuredData({
      '@context': 'https://schema.org',
      '@graph': [
        this.seo.createOrganizationNode(),
        {
          '@type': 'Article',
          '@id': `${canonicalUrl}#article`,
          headline: study.title,
          description: study.seoDescription,
          image: [ogImage, `${SITE_ORIGIN}${study.heroImage}`],
          datePublished: study.datePublished,
          dateModified: study.dateModified,
          inLanguage: 'nb-NO',
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
          author: { '@id': ORGANIZATION_ID },
          publisher: { '@id': ORGANIZATION_ID },
          about: {
            '@type': 'Organization',
            name: study.testimonial.company,
            url: study.website,
            address: study.location,
          },
          keywords: study.services.join(', '),
        },
        this.seo.createBreadcrumbs([
          { name: 'Forside', path: '/' },
          { name: 'Kundecaser', path: '/case-studies' },
          { name: study.testimonial.company, path },
        ]),
      ],
    });
  }

  websiteLabel(url: string): string {
    return new URL(url).hostname.replace(/^www\./, '');
  }

  trackByIndex(index: number): number {
    return index;
  }

  getHeroOverlay(study: CaseStudy | undefined): string {
    if (!study) {
      return this.defaultOverlay;
    }
    return study.heroOverlay ?? this.defaultOverlay;
  }
}

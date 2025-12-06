import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SeoService } from 'src/app/services/seo.service';
import {
  CASE_STUDIES,
  CaseStudy,
  getCaseStudyBySlug,
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
  readonly caseStudies = CASE_STUDIES;
  caseStudy?: CaseStudy;
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
        this.updateSeo(study);
      });
  }

  private updateSeo(study: CaseStudy): void {
    const canonicalUrl = `https://modernamedia.no/case-study/${study.slug}`;

    this.seo.updateSeo({
      title: study.seoTitle,
      description: study.seoDescription,
      keywords: study.services.join(', '),
      url: canonicalUrl,
      image: study.heroImage.startsWith('http')
        ? study.heroImage
        : `https://modernamedia.no${study.heroImage}`,
      type: 'article',
    });

    // Add structured data for the case study
    this.seo.addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: study.title,
      description: study.seoDescription,
      image: study.heroImage.startsWith('http')
        ? study.heroImage
        : `https://modernamedia.no${study.heroImage}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      author: {
        '@type': 'Organization',
        name: 'Moderna Media',
        url: 'https://modernamedia.no',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Moderna Media',
        logo: {
          '@type': 'ImageObject',
          url: 'https://modernamedia.no/assets/favicons/android-chrome-512x512.png',
        },
      },
      keywords: study.services,
    });
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

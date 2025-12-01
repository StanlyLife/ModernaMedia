import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { DomSanitizer, Meta, SafeHtml, Title } from '@angular/platform-browser';
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
  structuredData?: SafeHtml;
  private readonly defaultOverlay =
    'linear-gradient(135deg, rgba(9, 14, 36, 0.85), rgba(38, 66, 142, 0.65))';

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);
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
        this.updateMetaTags(study);
        this.updateStructuredData(study);
      });
  }

  private updateMetaTags(study: CaseStudy): void {
    this.title.setTitle(study.seoTitle);
    this.meta.updateTag({ name: 'description', content: study.seoDescription });
    this.meta.updateTag({ property: 'og:title', content: study.seoTitle });
    this.meta.updateTag({
      property: 'og:description',
      content: study.seoDescription,
    });
    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({
      property: 'og:image',
      content: study.heroImage,
    });
    this.seo.createLinkForCanonicalURL();
  }

  private updateStructuredData(study: CaseStudy): void {
    const canonicalUrl =
      typeof window !== 'undefined'
        ? `${window.location.origin}${this.router.url}`
        : this.router.url;

    const structured = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: study.title,
      description: study.seoDescription,
      image: study.heroImage,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      author: {
        '@type': 'Organization',
        name: 'Moderna Media',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Moderna Media',
        logo: {
          '@type': 'ImageObject',
          url: '/assets/favicons/android-chrome-512x512.png',
        },
      },
      keywords: study.services,
    };

    this.structuredData = this.sanitizer.bypassSecurityTrustHtml(
      JSON.stringify(structured)
    );
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

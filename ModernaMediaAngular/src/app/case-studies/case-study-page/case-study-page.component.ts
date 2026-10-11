import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  DestroyRef,
  ElementRef,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  ORGANIZATION_ID,
  SeoService,
  SITE_ORIGIN,
} from 'src/app/services/seo.service';
import {
  CaseStudy,
  CaseStudyVideo,
  getCaseStudyBySlug,
  INDEXABLE_CASE_STUDIES,
} from '../case-studies.data';
import { V2IconComponent } from 'src/app/v2/v2-icon.component';
import {
  Crumb,
  V2ContactComponent,
  V2CrumbsComponent,
} from 'src/app/v2/v2-blocks';

type HeroState = 'idle' | 'playing' | 'ended';

/** Service tags in the facts strip link to the matching service page. */
const SERVICE_LINKS: [RegExp, string][] = [
  [/seo/i, '/tjenester/bedrift/seo'],
  [/design|logo|ux|merkevare|branding/i, '/tjenester/bedrift/design'],
  [/nettside|utvikling|meny/i, '/tjenester/bedrift/utvikling'],
];

const CLIENT_COPY = {
  crumb: 'Kundecaser',
  storyTitle: 'Fra behov til resultat',
  delivKicker: 'Leveransen',
  delivTitle: 'Hva vi leverte',
  moreKicker: 'Flere kundehistorier',
  moreTitle: 'Se hva vi har gjort for andre',
  moreLink: 'Se alle kundecaser',
  contactTitle: 'Vil du ha resultater som dette?',
  source: 'Kundecase',
};

const CONCEPT_COPY: typeof CLIENT_COPY = {
  crumb: 'Casestudier',
  storyTitle: 'Slik ble det til',
  delivKicker: 'Innholdet',
  delivTitle: 'Hva vi laget',
  moreKicker: 'Flere caser',
  moreTitle: 'Se flere av arbeidene våre',
  moreLink: 'Se alle caser',
  contactTitle: 'Vil du ha noe lignende?',
  source: 'Case',
};

/** 'PT1M16S' → 76 */
function isoSeconds(iso: string): number {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(iso);
  return m ? +(m[1] ?? 0) * 3600 + +(m[2] ?? 0) * 60 + +(m[3] ?? 0) : 0;
}

/**
 * Video-first case page (Figma «Casestudier · Video-first», 113:150).
 * The hero is a cinema: the client photo with the story and three KPIs over it.
 * Play hides the text and the trailer fills the hero; when it ends, the photo
 * and text come back and the button says «Se igjen».
 */
@Component({
  selector: 'app-case-study-page',
  standalone: true,
  imports: [RouterLink, V2IconComponent, V2CrumbsComponent, V2ContactComponent],
  templateUrl: './case-study-page.component.html',
  styleUrls: ['./case-study-page.component.scss'],
})
export class CaseStudyPageComponent {
  readonly caseStudy = signal<CaseStudy | undefined>(undefined);
  otherCaseStudies: CaseStudy[] = [];

  /** videos[0] plays in the hero, videos[1] is the explainer. */
  readonly heroVideo = computed(() => this.caseStudy()?.showcase?.videos?.[0]);
  readonly explainer = computed(() => this.caseStudy()?.showcase?.videos?.[1]);
  /** The video whose chapters and transcript are listed under the hero. */
  readonly chapterVideo = computed(() => {
    const ex = this.explainer();
    if (ex) return ex;
    const hero = this.heroVideo();
    return hero?.chapters?.length || hero?.transcript ? hero : undefined;
  });
  /** Fixed texts. Concepts are our own work, so nothing may read as a client story. */
  readonly copy = computed(() =>
    this.caseStudy()?.kind === 'concept' ? CONCEPT_COPY : CLIENT_COPY
  );
  readonly crumbs = computed<Crumb[]>(() => [
    { label: this.copy().crumb, link: '/case-studies' },
    { label: this.caseStudy()?.client ?? '' },
  ]);

  readonly state = signal<HeroState>('idle');
  readonly paused = signal(true);
  readonly muted = signal(false);
  readonly current = signal(0);
  readonly progress = signal(0);
  readonly percent = computed(() => Math.round(this.progress()));
  readonly explainerOn = signal(false);

  private readonly cine = viewChild<ElementRef<HTMLElement>>('cine');
  private readonly film = viewChild<ElementRef<HTMLVideoElement>>('film');
  private readonly explainerFilm =
    viewChild<ElementRef<HTMLVideoElement>>('explainerFilm');

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly doc = inject(DOCUMENT);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const study = getCaseStudyBySlug(params.get('slug'));
        if (!study) {
          this.router.navigate(['/error']);
          return;
        }

        this.resetPlayers();
        this.caseStudy.set(study);
        this.otherCaseStudies = INDEXABLE_CASE_STUDIES.filter(
          (other) => other.slug !== study.slug && other.listed !== false
        );
        this.updateSeo(study);
      });

    // ?t=<seconds> starts the chapter video there (the Clip URLs in the structured data).
    afterNextRender(() => {
      const t = Number(this.route.snapshot.queryParamMap.get('t'));
      if (t > 0 && this.chapterVideo()) {
        this.playChapter(t, false);
      }
    });
  }

  // ---- Hero player ----

  play(): void {
    const v = this.film()?.nativeElement;
    if (!v) return;
    this.state.set('playing');
    v.currentTime = 0;
    v.play().catch(() => this.paused.set(true));
  }

  /** «Lukk video» and the end of the video: back to the photo and text. */
  close(): void {
    const v = this.film()?.nativeElement;
    if (v) {
      v.pause();
      // load() resets the element so the poster (the client photo) shows again.
      v.load();
    }
    if (this.doc.fullscreenElement) {
      this.doc.exitFullscreen().catch(() => undefined);
    }
    if (this.state() === 'playing') {
      this.state.set('ended');
    }
  }

  togglePause(): void {
    const v = this.film()?.nativeElement;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => this.paused.set(true));
    } else {
      v.pause();
    }
  }

  toggleMute(): void {
    const v = this.film()?.nativeElement;
    if (!v) return;
    v.muted = !v.muted;
    this.muted.set(v.muted);
  }

  fullscreen(): void {
    const cine = this.cine()?.nativeElement;
    const v = this.film()?.nativeElement as
      | (HTMLVideoElement & { webkitEnterFullscreen?: () => void })
      | undefined;
    if (this.doc.fullscreenElement) {
      this.doc.exitFullscreen().catch(() => undefined);
    } else if (cine?.requestFullscreen) {
      cine.requestFullscreen().catch(() => undefined);
    } else {
      // iPhone: only the video element itself can go full screen.
      v?.webkitEnterFullscreen?.();
    }
  }

  onTime(): void {
    const v = this.film()?.nativeElement;
    if (!v) return;
    this.current.set(v.currentTime);
    this.progress.set(v.duration ? (v.currentTime / v.duration) * 100 : 0);
  }

  seek(event: MouseEvent): void {
    const v = this.film()?.nativeElement;
    const track = event.currentTarget as HTMLElement;
    if (!v || !v.duration) return;
    const rect = track.getBoundingClientRect();
    v.currentTime =
      Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width)) *
      v.duration;
  }

  nudge(seconds: number): void {
    const v = this.film()?.nativeElement;
    if (v) v.currentTime = Math.max(0, v.currentTime + seconds);
  }

  // ---- Chapters ----

  /** Starts the chapter video at `start` seconds. */
  playChapter(start: number, autoplay = true): void {
    if (this.chapterVideo() === this.explainer()) {
      const v = this.explainerFilm()?.nativeElement;
      if (!v) return;
      this.explainerOn.set(true);
      v.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.startAt(v, start, autoplay);
      return;
    }
    // The chapters belong to the hero video.
    const v = this.film()?.nativeElement;
    if (!v) return;
    this.state.set('playing');
    this.cine()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
    this.startAt(v, start, autoplay);
  }

  /** Seeks once the video knows its length: with preload="none" there is no metadata yet. */
  private startAt(v: HTMLVideoElement, start: number, autoplay: boolean): void {
    const seek = () => (v.currentTime = start);
    if (v.readyState >= 1) {
      seek();
    } else {
      v.addEventListener('loadedmetadata', seek, { once: true });
      if (!autoplay) {
        v.preload = 'metadata';
        v.load();
      }
    }
    if (autoplay) v.play().catch(() => this.paused.set(true));
  }

  startExplainer(): void {
    const v = this.explainerFilm()?.nativeElement;
    if (!v) return;
    this.explainerOn.set(true);
    v.play().catch(() => undefined);
  }

  scrollToStory(event: Event): void {
    event.preventDefault();
    this.doc
      .getElementById('historien')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  private resetPlayers(): void {
    this.film()?.nativeElement.pause();
    this.explainerFilm()?.nativeElement.pause();
    this.state.set('idle');
    this.paused.set(true);
    this.current.set(0);
    this.progress.set(0);
    this.explainerOn.set(false);
  }

  // ---- Formatting ----

  /** 76 → '1:16' */
  clock(seconds: number): string {
    const s = Math.max(0, Math.floor(seconds));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }

  videoLength(video: CaseStudyVideo): string {
    return this.clock(isoSeconds(video.duration));
  }

  websiteLabel(study: CaseStudy): string {
    if (study.websiteLabel) return study.websiteLabel;
    return study.website
      ? new URL(study.website).hostname.replace(/^www\./, '')
      : '';
  }

  serviceLink(service: string): string | null {
    return SERVICE_LINKS.find(([re]) => re.test(service))?.[1] ?? null;
  }

  initials(name: string): string {
    return name
      .split(/\s+/)
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }

  cardImage(study: CaseStudy): string {
    return study.cardImage ?? `/assets/img/case/${study.slug}-640.webp`;
  }

  cardMetric(study: CaseStudy): { value: string; label: string } {
    const stat = study.stats[0];
    return (
      study.cardMetric ?? {
        value: stat?.value ?? '',
        label: stat?.description ?? stat?.label ?? '',
      }
    );
  }

  overlay(study: CaseStudy): string {
    return (
      study.heroOverlay ??
      'linear-gradient(100deg, rgba(9, 14, 36, 0.94) 0%, rgba(9, 14, 36, 0.72) 45%, rgba(38, 66, 142, 0.4) 100%)'
    );
  }

  // ---- SEO ----

  private updateSeo(study: CaseStudy): void {
    const path = `/case-study/${study.slug}`;
    const canonicalUrl = `${SITE_ORIGIN}${path}`;
    const ogImage = `${SITE_ORIGIN}${study.ogImage}`;
    const videos = study.showcase?.videos ?? [];
    const videoId = (i: number) => `${canonicalUrl}#video-${i + 1}`;

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

    // With a hero video the photo is the video's poster, which cannot use srcset.
    if (videos.length) {
      this.seo.preloadImage(
        study.heroImage,
        `${study.heroImage} ${study.heroImageWidth}w`,
        '100vw'
      );
    }

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
            name: study.client,
            ...(study.website ? { url: study.website } : {}),
            address: study.location,
          },
          keywords: study.services.join(', '),
          ...(videos.length
            ? { video: videos.map((_, i) => ({ '@id': videoId(i) })) }
            : {}),
        },
        ...videos.map((video, i) => {
          const end = isoSeconds(video.duration);
          const chapters = video.chapters ?? [];
          return {
            '@type': 'VideoObject',
            '@id': videoId(i),
            name: video.name,
            description: video.description,
            thumbnailUrl: [`${SITE_ORIGIN}${video.poster}`],
            contentUrl: `${SITE_ORIGIN}${video.src}`,
            uploadDate: video.uploadDate,
            duration: video.duration,
            inLanguage: 'nb-NO',
            publisher: { '@id': ORGANIZATION_ID },
            ...(video.transcript ? { transcript: video.transcript } : {}),
            // Key moments: each chapter is a Clip; ?t= starts the video there.
            ...(chapters.length
              ? {
                  hasPart: chapters.map((chapter, j) => ({
                    '@type': 'Clip',
                    name: chapter.title,
                    startOffset: chapter.start,
                    endOffset: chapters[j + 1]?.start ?? end,
                    url: `${canonicalUrl}?t=${chapter.start}`,
                  })),
                }
              : {}),
          };
        }),
        this.seo.createBreadcrumbs([
          { name: 'Forside', path: '/' },
          {
            name: study.kind === 'concept' ? CONCEPT_COPY.crumb : CLIENT_COPY.crumb,
            path: '/case-studies',
          },
          { name: study.client, path },
        ]),
      ],
    });
  }
}

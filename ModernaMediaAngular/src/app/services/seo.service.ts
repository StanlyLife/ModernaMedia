import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  /** Ignored by search engines; kept so existing callers still compile. */
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  robots?: string;
}

export const SITE_ORIGIN = 'https://modernamedia.no';
export const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
const WEBSITE_ID = `${SITE_ORIGIN}/#website`;

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private defaultImage = `${SITE_ORIGIN}/assets/Images/og-image.jpg`;
  private siteName = 'Moderna Media';

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private meta: Meta,
    private titleService: Title
  ) {}

  updateSeo(config: SeoConfig): void {
    this.titleService.setTitle(config.title);

    this.meta.updateTag({ name: 'description', content: config.description });
    this.meta.removeTag('name="keywords"');

    this.meta.updateTag({
      name: 'robots',
      content: config.robots || 'index, follow, max-image-preview:large',
    });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({
      property: 'og:description',
      content: config.description,
    });
    this.meta.updateTag({
      property: 'og:type',
      content: config.type || 'website',
    });
    this.meta.updateTag({ property: 'og:site_name', content: this.siteName });
    this.meta.updateTag({ property: 'og:locale', content: 'nb_NO' });
    this.meta.updateTag({
      property: 'og:image',
      content: config.image || this.defaultImage,
    });
    this.meta.updateTag({
      property: 'og:url',
      content: config.url || this.currentUrl(),
    });

    // Twitter / X
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: config.description,
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: config.image || this.defaultImage,
    });

    this.updateCanonicalURL(config.url);
  }

  updateCanonicalURL(url?: string): void {
    const existingCanonical = this.doc.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    const link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url || this.currentUrl());
    this.doc.head.appendChild(link);
  }

  // Legacy method for backward compatibility
  createLinkForCanonicalURL(): void {
    this.updateCanonicalURL();
  }

  /**
   * The current page on the public origin. Built from the path only, so the
   * host the server (or the prerenderer) saw never leaks into canonical URLs.
   */
  private currentUrl(): string {
    const path = new URL(this.doc.URL, SITE_ORIGIN).pathname;
    return `${SITE_ORIGIN}${path === '/' ? '/' : path.replace(/\/$/, '')}`;
  }

  /** Lets the browser start loading the LCP image before it parses the body. */
  preloadImage(href: string, srcset: string, sizes: string): void {
    if (this.doc.head.querySelector(`link[rel="preload"][href="${href}"]`)) {
      return;
    }
    const link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'preload');
    link.setAttribute('as', 'image');
    link.setAttribute('href', href);
    link.setAttribute('imagesrcset', srcset);
    link.setAttribute('imagesizes', sizes);
    link.setAttribute('fetchpriority', 'high');
    this.doc.head.appendChild(link);
  }

  addStructuredData(schema: object): void {
    this.removeStructuredData();

    const script = this.doc.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.setAttribute('id', 'structured-data');
    script.textContent = JSON.stringify(schema);
    this.doc.head.appendChild(script);
  }

  removeStructuredData(): void {
    const existingScript = this.doc.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }
  }

  // The business as one entity. Other pages can reference it by @id.
  createLocalBusinessSchema(): object {
    return {
      '@type': 'ProfessionalService',
      '@id': ORGANIZATION_ID,
      name: 'Moderna Media',
      alternateName: 'Moderna Media Digitalbyrå',
      description:
        'Digitalbyrå i Oslo som leverer nettsider, programvare, design og SEO for bedrifter',
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/assets/Images/LogoV2/Updated/Moderna%20Media%20-%20Logo%20&%20Text%20-%20Dark.jpg`,
      image: this.defaultImage,
      telephone: '+47 902 65 326',
      email: 'kontakt@modernamedia.no',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'Organisasjonsnummer',
        value: '926670018',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Oscars gate 76b',
        postalCode: '0256',
        addressLocality: 'Oslo',
        addressRegion: 'Oslo',
        addressCountry: 'NO',
      },
      areaServed: {
        '@type': 'Country',
        name: 'Norway',
      },
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '23:00',
      },
      founder: {
        '@type': 'Person',
        name: 'Stian Håve',
        jobTitle: 'Daglig leder',
        sameAs: ['https://www.linkedin.com/in/stianhave/'],
      },
      knowsAbout: [
        'Webutvikling',
        'Nettsider for bedrifter',
        'Programvareutvikling',
        'Webdesign',
        'Logodesign',
        'Grafisk design',
        'Søkemotoroptimalisering',
        'Teknisk SEO',
      ],
      sameAs: [
        'https://www.facebook.com/ModernaMedia',
        'https://www.instagram.com/moderna_media/',
        'https://www.linkedin.com/company/moderna-media',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digitale tjenester',
        itemListElement: [
          this.serviceOffer(
            'Nettsider for bedrifter',
            'Profesjonelle, responsive og SEO-optimaliserte nettsider',
            '/tjenester/bedrift/utvikling/hjemmeside-bedrift'
          ),
          this.serviceOffer(
            'Programvare og webapplikasjoner',
            'Skreddersydd programvare som automatiserer arbeidshverdagen',
            '/tjenester/bedrift/utvikling/programvare'
          ),
          this.serviceOffer(
            'Design',
            'Logo, webdesign og grafisk design',
            '/tjenester/bedrift/design'
          ),
          this.serviceOffer(
            'Søkemotoroptimalisering (SEO)',
            'Teknisk SEO, innholdsproduksjon og off-page SEO',
            '/tjenester/bedrift/seo'
          ),
        ],
      },
    };
  }

  /** Short form of the business, for pages that only need to name it. */
  createOrganizationNode(): object {
    return {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: 'Moderna Media',
      url: `${SITE_ORIGIN}/`,
      logo: `${SITE_ORIGIN}/assets/Images/LogoV2/Updated/Moderna%20Media%20-%20Logo%20&%20Text%20-%20Dark.jpg`,
    };
  }

  createBreadcrumbs(items: { name: string; path: string }[]): object {
    return {
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: `${SITE_ORIGIN}${item.path}`,
      })),
    };
  }

  /** Structured data for the homepage: business, website, page and FAQ. */
  createHomeSchema(
    page: { title: string; description: string },
    faq: { question: string; answer: string }[]
  ): object {
    const pageUrl = `${SITE_ORIGIN}/`;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        this.createLocalBusinessSchema(),
        {
          '@type': 'WebSite',
          '@id': WEBSITE_ID,
          url: pageUrl,
          name: 'Moderna Media',
          inLanguage: 'nb-NO',
          publisher: { '@id': ORGANIZATION_ID },
        },
        {
          '@type': 'WebPage',
          '@id': `${pageUrl}#webpage`,
          url: pageUrl,
          name: page.title,
          description: page.description,
          inLanguage: 'nb-NO',
          isPartOf: { '@id': WEBSITE_ID },
          about: { '@id': ORGANIZATION_ID },
          primaryImageOfPage: this.defaultImage,
        },
        {
          '@type': 'FAQPage',
          '@id': `${pageUrl}#faq`,
          inLanguage: 'nb-NO',
          mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        },
      ],
    };
  }

  private serviceOffer(name: string, description: string, path: string) {
    return {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
        description,
        url: `${SITE_ORIGIN}${path}`,
        provider: { '@id': ORGANIZATION_ID },
        areaServed: { '@type': 'Country', name: 'Norway' },
      },
    };
  }
}

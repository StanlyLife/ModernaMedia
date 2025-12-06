import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  robots?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private defaultImage = 'https://modernamedia.no/assets/Images/og-image.jpg';
  private siteName = 'Moderna Media';

  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private meta: Meta,
    private titleService: Title
  ) {}

  updateSeo(config: SeoConfig): void {
    // Update title
    this.titleService.setTitle(config.title);

    // Update meta description
    this.meta.updateTag({ name: 'description', content: config.description });

    // Update keywords if provided
    if (config.keywords) {
      this.meta.updateTag({ name: 'keywords', content: config.keywords });
    }

    // Update robots
    this.meta.updateTag({
      name: 'robots',
      content: config.robots || 'index, follow',
    });

    // Update Open Graph tags
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
    this.meta.updateTag({
      property: 'og:image',
      content: config.image || this.defaultImage,
    });

    if (config.url) {
      this.meta.updateTag({ property: 'og:url', content: config.url });
    }

    // Update Twitter Card tags
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

    // Update canonical URL
    this.updateCanonicalURL(config.url);
  }

  updateCanonicalURL(url?: string): void {
    // Remove existing canonical link if present
    const existingCanonical = this.doc.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Create new canonical link
    const link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');

    const canonicalUrl = url || this.doc.URL.replace('http://', 'https://');
    link.setAttribute('href', canonicalUrl);

    this.doc.head.appendChild(link);
  }

  // Legacy method for backward compatibility
  createLinkForCanonicalURL(): void {
    this.updateCanonicalURL();
  }

  addStructuredData(schema: object): void {
    // Remove existing structured data
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

  // Helper to create LocalBusiness schema
  createLocalBusinessSchema(): object {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': 'https://modernamedia.no',
      name: 'Moderna Media',
      description:
        'Digitalbyrå i Oslo som leverer nettsider, design og SEO for bedrifter',
      url: 'https://modernamedia.no',
      telephone: '+47 902 65 326',
      email: 'kontakt@modernamedia.no',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Oslo',
        addressCountry: 'NO',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 59.9139,
        longitude: 10.7522,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Norway',
      },
      priceRange: '$$',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
      sameAs: [
        'https://www.facebook.com/modernamedia',
        'https://www.linkedin.com/company/moderna-media',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digitale Tjenester',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Webutvikling',
              description: 'Profesjonelle nettsider og webapplikasjoner',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO',
              description: 'Søkemotoroptimalisering for bedre synlighet',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Design',
              description: 'Logo, webdesign og grafisk design',
            },
          },
        ],
      },
    };
  }
}

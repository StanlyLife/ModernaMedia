import { CommonModule, ViewportScroller, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
import { AboutYourNextProjectComponent } from '../../components/about-your-next-project/about-your-next-project.component';
import { ContactService } from './../../services/contact.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-blogg-post-restaurant-hjemmeside',
  templateUrl: './blogg-post-restaurant-hjemmeside.component.html',
  styleUrls: [
    './blogg-post-restaurant-hjemmeside.component.scss',
    './blogg-post-restaurant-hjemmeside.desktop.component.scss',
  ],
  standalone: true,
  imports: [CommonModule, AboutYourNextProjectComponent],
})
export class BloggPostRestaurantHjemmesideComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller,
    private cs: ContactService,
    private seo: SeoService,
    private router: Router
  ) {}
  imageCdn = environment.img;

  ngOnInit(): void {
    this.seo.updateSeo({
      title: SeoUtils.BloggRestaurantHjemmeside.title,
      description: SeoUtils.BloggRestaurantHjemmeside.description,
      keywords: SeoUtils.BloggRestaurantHjemmeside.keywords,
      url: 'https://modernamedia.no/blogg/hjemmeside-for-restaurant-bedrift',
      image:
        'https://modernamedia.no/assets/Images/Blogg/restauranthjemmeside/1280/pen%20dame%20som%20nyter%20maten%20etter%20hun%20fant%20nettsiden%20til%20en%20restaurant.webp',
      type: 'article',
    });

    // Add BlogPosting structured data
    this.seo.addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id':
          'https://modernamedia.no/blogg/hjemmeside-for-restaurant-bedrift',
      },
      headline: 'Hvorfor restauranten din trenger en hjemmeside',
      image:
        'https://modernamedia.no/assets/Images/Blogg/restauranthjemmeside/1280/pen%20dame%20som%20nyter%20maten%20etter%20hun%20fant%20nettsiden%20til%20en%20restaurant.webp',
      author: {
        '@type': 'Organization',
        name: 'Moderna Media',
        url: 'https://modernamedia.no/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Moderna Media',
        logo: {
          '@type': 'ImageObject',
          url: 'https://modernamedia.no/assets/Images/LogoV2/Updated/Moderna%20Media%20-%20Logo%20&%20Text%20-%20Dark.jpg',
        },
      },
      datePublished: '2024-01-14',
      dateModified: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      description:
        'Ifølge en undersøkelse utført under pandemien, sa 82% av kundene at de er mye mer tilbøyelige for å besøke en restaurant etter å ha sett nettsiden til bedriften.',
    });
  }

  scrollToId(id: string) {
    this.scroller.scrollToAnchor(id);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

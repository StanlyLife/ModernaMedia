import { Component, OnInit } from '@angular/core';
import { SeoService } from './../../../services/seo.service';
import { SeoUtils } from './../../../../utils/SeoUtils';
import { LandingComponent } from '../landing/landing.component';
import { TrustBadgesComponent } from '../trust-badges/trust-badges.component';
import { UspComponent } from '../usp/usp.component';
import { ServicesComponent } from '../services/services.component';
import { ProcessComponent } from '../process/process.component';
import { TestimonialsSectionComponent } from '../testimonials-section/testimonials-section.component';
import { AboutComponent } from '../about/about.component';
import { PricesComponent } from '../prices/prices.component';
import { ContactComponent } from '../contact/contact.component';
import { BlogShowcaseComponent } from '../blog-showcase/blog-showcase.component';
import { AboutYourNextProjectComponent } from '../../../components/about-your-next-project/about-your-next-project.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    LandingComponent,
    TrustBadgesComponent,
    UspComponent,
    ServicesComponent,
    ProcessComponent,
    TestimonialsSectionComponent,
    AboutComponent,
    PricesComponent,
    ContactComponent,
    BlogShowcaseComponent,
    AboutYourNextProjectComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: SeoUtils.home.title,
      description: SeoUtils.home.description,
      keywords: SeoUtils.home.keywords,
      url: 'https://modernamedia.no/',
      type: 'website',
    });

    // Add local business structured data
    this.seo.addStructuredData(this.seo.createLocalBusinessSchema());
  }
}

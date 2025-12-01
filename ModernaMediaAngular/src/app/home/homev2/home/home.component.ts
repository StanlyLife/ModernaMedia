import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './../../../services/seo.service';
import { SeoUtils } from './../../../../utils/SeoUtils';
import { LandingComponent } from '../landing/landing.component';
import { UspComponent } from '../usp/usp.component';
import { ServicesComponent } from '../services/services.component';
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
    UspComponent,
    ServicesComponent,
    AboutComponent,
    PricesComponent,
    ContactComponent,
    BlogShowcaseComponent,
    AboutYourNextProjectComponent,
  ],
})
export class HomeComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(SeoUtils.home.title);
  }

  ngOnInit() {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: SeoUtils.home.description,
      },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia',
    });
  }
}

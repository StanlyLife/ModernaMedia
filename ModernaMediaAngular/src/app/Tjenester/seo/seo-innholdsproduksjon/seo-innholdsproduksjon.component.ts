import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';
import { AboutYourNextProjectComponent } from '../../../components/about-your-next-project/about-your-next-project.component';
@Component({
  selector: 'app-seo-innholdsproduksjon',
  templateUrl: './seo-innholdsproduksjon.component.html',
  styleUrls: ['./seo-innholdsproduksjon.component.scss'],
  standalone: true,
  imports: [CommonModule, AboutYourNextProjectComponent],
})
export class SeoInnholdsproduksjonComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService,
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller
  ) {
    title.setTitle('');
  }
  ngOnInit() {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content: '',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia',
    });
  }

  scrollToId(id: string) {
    this.scroller.scrollToAnchor(id);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

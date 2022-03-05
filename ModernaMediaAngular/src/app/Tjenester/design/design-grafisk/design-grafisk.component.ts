import { SeoService } from '../../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { Component, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-design-grafisk',
  templateUrl: './design-grafisk.component.html',
  styleUrls: ['./design-grafisk.component.scss'],
})
export class DesignGrafiskComponent implements OnInit {
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

  scrollToId(id) {
    this.scroller.scrollToAnchor(id);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

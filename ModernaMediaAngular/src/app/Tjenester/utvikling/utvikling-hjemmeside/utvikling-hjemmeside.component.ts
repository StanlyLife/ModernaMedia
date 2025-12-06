import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SeoService } from '../../../services/seo.service';
import { SeoUtils } from 'src/utils/SeoUtils';
import { AboutYourNextProjectComponent } from '../../../components/about-your-next-project/about-your-next-project.component';
@Component({
  selector: 'app-utvikling-hjemmeside',
  templateUrl: './utvikling-hjemmeside.component.html',
  styleUrls: ['./utvikling-hjemmeside.component.scss'],
  standalone: true,
  imports: [CommonModule, AboutYourNextProjectComponent],
})
export class UtviklingHjemmesideComponent implements OnInit {
  constructor(
    private seo: SeoService,
    private sanitizer: DomSanitizer,
    private scroller: ViewportScroller
  ) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: SeoUtils.UtviklingHjemmeside.title,
      description: SeoUtils.UtviklingHjemmeside.description,
      keywords: SeoUtils.UtviklingHjemmeside.keywords,
      url: 'https://modernamedia.no/tjenester/bedrift/utvikling/hjemmeside-bedrift',
    });
  }

  scrollToId(id: string) {
    this.scroller.scrollToAnchor(id);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

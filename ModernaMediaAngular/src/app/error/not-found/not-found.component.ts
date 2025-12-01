import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, Meta, SafeUrl, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment.prod';
import { SeoService } from './../../services/seo.service';
import { SeoUtils } from './../../../utils/SeoUtils';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class NotFoundComponent implements OnInit {
  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(SeoUtils.notfound.title);
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  imageCdn = environment.img;
  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'description',
        content: SeoUtils.notfound.description,
      },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia',
    });
  }
}

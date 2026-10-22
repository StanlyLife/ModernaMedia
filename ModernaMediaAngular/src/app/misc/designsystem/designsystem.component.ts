import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SeoService, SITE_ORIGIN } from '../../services/seo.service';

@Component({
  selector: 'app-designsystem',
  templateUrl: './designsystem.component.html',
  styleUrls: ['./designsystem.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class DesignsystemComponent implements OnInit {
  private seo = inject(SeoService);

  ngOnInit() {
    // Internal style reference: keep it out of search results.
    this.seo.updateSeo({
      title: 'Designsystem | Moderna Media',
      description: 'Intern oversikt over typografi og komponenter på modernamedia.no.',
      url: `${SITE_ORIGIN}/misc/designsystem`,
      robots: 'noindex, nofollow',
    });
  }
}

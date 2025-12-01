import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Testimonial {
  companyLink: string;
  companyLinkLabel: string;
  companyLinkTitle: string;
  backgroundImageSrc: string;
  backgroundImageAlt: string;
  personImageSrc: string;
  personImageAlt: string;
  personImageClass?: string;
  caseStudyPath?: string;
  caseStudyCta?: string;
  details: string[];
  quote: string;
  rating: number;
  overlayColor?: string;
}

const DEFAULT_OVERLAY_COLOR = 'rgba(0, 115, 255, 0.403)';

const DEFAULT_TESTIMONIAL: Testimonial = {
  companyLink: 'https://solaparkering.no',
  companyLinkLabel: 'Sola parkering',
  companyLinkTitle: 'sola parkering hjemmeside',
  backgroundImageSrc:
    '../../../../assets/Images/testimonials/solaparkering/Parkering-sola-flyplassparkering-på-sola.jpg',
  backgroundImageAlt: 'Sola Parkering forsidebilde',
  personImageSrc:
    '../../../../assets/Images/testimonials/solaparkering/31fa76d5-35b6-468c-8c42-4291d6716f5e.webp',
  personImageAlt: 'Kunde av Moderna Media tjenester',
  personImageClass: 'svein',
  details: [
    'Svein Magnar',
    'Daglig leder',
    'Bedrifts nettside',
    'SEO & Markedsføring',
  ],
  quote:
    'Vi fikk designet og utviklet en nettside for Sola Parkering som var i tråd med vår identitet og som snakker godt til kundene. Vi er veldig fornøyde med tjeneste og servicen som fulgte. Jeg kan trygt anbefale Moderna Media til andre!',
  rating: 5,
  overlayColor: DEFAULT_OVERLAY_COLOR,
  caseStudyPath: '/case-studies/sola-parkering',
  caseStudyCta: 'Les casestudien',
};

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: [
    './testimonials.component.scss',
    './testimonials.desktop.component.scss',
  ],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class TestimonialsComponent {
  private _testimonial: Testimonial = DEFAULT_TESTIMONIAL;
  ratingStars: number[] = Array.from({ length: DEFAULT_TESTIMONIAL.rating });
  readonly defaultOverlayColor = DEFAULT_OVERLAY_COLOR;

  @Input()
  set testimonial(value: Testimonial | undefined) {
    this._testimonial = value ?? DEFAULT_TESTIMONIAL;
    const rating = Math.max(0, this._testimonial.rating);
    this.ratingStars = Array.from({ length: rating });
  }

  get testimonial(): Testimonial {
    return this._testimonial;
  }

  trackByIndex(index: number): number {
    return index;
  }
}

import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {
  TestimonialsComponent,
  Testimonial,
} from '../testimonials/testimonials.component';
@Component({
  selector: 'app-usp',
  templateUrl: './usp.component.html',
  styleUrls: ['./usp.component.scss', './usp.desktop.component.scss'],
  standalone: true,
  imports: [CommonModule, TestimonialsComponent],
})
export class UspComponent {
  testimonials: Testimonial[] = [
    {
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
      caseStudyPath: '/case-studies/sola-parkering',
      details: [
        'Svein Magnar',
        'Daglig leder',
        'Bedrifts nettside',
        'SEO & Markedsføring',
      ],
      quote:
        'Vi fikk designet og utviklet en nettside for Sola Parkering som var i tråd med vår identitet og som snakker godt til kundene. Vi er veldig fornøyde med tjeneste og servicen som fulgte. Jeg kan trygt anbefale Moderna Media til andre!',
      rating: 5,
      overlayColor: 'rgba(0, 115, 255, 0.403)',
    },
    {
      companyLink: 'https://example.com',
      companyLinkLabel: 'Marbella car spa',
      companyLinkTitle: 'Se et eksempelprosjekt',
      backgroundImageSrc: 'https://i.ibb.co/2YFtr2mG/image.png',
      backgroundImageAlt: 'Plassholderbilde av prosjekt',
      personImageSrc:
        '../../../../assets/Images/testimonials/mamrot/patrikmamrot.jpg',
      personImageAlt: 'Plassholder kundeillustrasjon',
      caseStudyPath: '/case-studies/marbella-car-spa',
      details: [
        'Patryk W. Mamrot',
        'Daglig leder',
        'Nettside + SEO',
        'Digitale kampanjer',
      ],
      quote:
        'Dette er en plassholder tilbakemelding du kan erstatte med et nytt kundesitat. Hold teksten kort, konkret og fokusert på resultatene dere leverer.',
      rating: 5,
      overlayColor: 'rgba(209, 165, 44, 0.31)',
    },
    {
      companyLink: 'https://fjerdingbypizzaoggrill.no',
      companyLinkLabel: 'Fjerdingby Pizza & Grill',
      companyLinkTitle: 'Fjerdingby Pizza og Grill hjemmeside',
      backgroundImageSrc:
        '../../../../assets/Images/testimonials/fjerdingby/fjerdingbypizzaoggril.webp',
      backgroundImageAlt: 'Fjerdingby Pizza og Grill restaurantinteriør',
      personImageSrc:
        'https://images.unsplash.com/photo-1521579971123-1192931a1452?auto=format&fit=crop&w=320&q=80',
      personImageAlt: 'Daglig leder hos Fjerdingby Pizza og Grill',
      caseStudyPath: '/case-studies/fjerdingby-pizza',
      details: [
        'Ena Hasanović',
        'Daglig leder',
        'Nettside + SEO',
        'Bestillingsløsning',
      ],
      quote:
        'Moderna Media ga oss en moderne bestillingsløsning som gjorde det enklere for kundene å handle, og ga oss bedre oversikt. Trafikken fra Google har doblet seg siden lansering.',
      rating: 5,
      overlayColor: 'rgba(227, 118, 16, 0.65)',
    },
    {
      companyLink: 'https://ostlandetbronnboring.no',
      companyLinkLabel: 'Østlandet Brønnboring',
      companyLinkTitle: 'Østlandet Brønnboring prosjekt',
      backgroundImageSrc:
        '../../../../assets/Images/testimonials/ostlandske/ostlandetbronnboring.webp',
      backgroundImageAlt: 'Borerigg i arbeid for Østlandet Brønnboring',
      personImageSrc:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=320&q=80',
      personImageAlt: 'Prosjektleder i Østlandet Brønnboring',
      caseStudyPath: '/case-studies/ostlandet-bronnboring',
      details: [
        'Marcus Hannevig',
        'Prosjektleder',
        'Nettside + SEO',
        'Leadshåndtering',
      ],
      quote:
        'Vi hadde behov for flere, bedre kvalifiserte leads i byggeperiodene. Den nye løsningen fra Moderna Media har gitt oss 3x flere forespørsler og bedre struktur på salgsprosessen.',
      rating: 5,
      overlayColor: 'rgba(0, 163, 73, 0.6)',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {}
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

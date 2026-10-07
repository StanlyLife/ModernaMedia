import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  TestimonialsComponent,
  Testimonial,
} from '../testimonials/testimonials.component';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [CommonModule, RouterModule, TestimonialsComponent],
  template: `
    <section class="testimonials-section" aria-label="Hva kundene sier">
      <div class="wrapper">
        <header class="titles">
          <p class="subtitle">Kundehistorier</p>
          <h2 class="title">Hva våre kunder sier</h2>
          <p class="description">
            Se hva bedrifter som deg har oppnådd med Moderna Media
          </p>
        </header>

        <div class="testimonials-grid">
          <app-testimonials
            *ngFor="let testimonial of testimonials"
            [testimonial]="testimonial"
          ></app-testimonials>
        </div>

        <div class="more-cases">
          <a routerLink="/case-studies" class="btn ghost">
            Se alle våre casestudier
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use 'src/variables' as *;

      .testimonials-section {
        padding: 80px 0;
        background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);

        .wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .titles {
          text-align: center;
          margin-bottom: 50px;

          .subtitle {
            color: $blue-primary;
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
          }

          .title {
            font-size: 2.25rem;
            font-weight: 800;
            color: $dark;
            margin: 0 0 15px 0;
          }

          .description {
            color: #64748b;
            font-size: 1.1rem;
            max-width: 500px;
            margin: 0 auto;
          }
        }

        .testimonials-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          align-items: stretch;
          justify-content: center;

          app-testimonials {
            flex: 1 1 48%;
            min-width: 280px;
            max-width: 600px;
            display: flex;
          }
        }

        .more-cases {
          text-align: center;
          margin-top: 40px;

          .btn.ghost {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 14px 28px;
            font-size: 1rem;
            font-weight: 600;
            color: $blue-primary;
            background: transparent;
            border: 2px solid $blue-primary;
            border-radius: 50px;
            text-decoration: none;
            transition: all 0.3s ease;

            svg {
              transition: transform 0.3s ease;
            }

            &:hover {
              background: $blue-primary;
              color: white;

              svg {
                transform: translateX(4px);
              }
            }
          }
        }
      }

      @media (max-width: 768px) {
        .testimonials-section {
          padding: 60px 0;

          .titles .title {
            font-size: 1.75rem;
          }

          .testimonials-grid {
            app-testimonials {
              flex: 1 1 100%;
              max-width: 100%;
            }
          }
        }
      }
    `,
  ],
})
export class TestimonialsSectionComponent {
  testimonials: Testimonial[] = [
    {
      companyLink: 'https://solaparkering.no',
      companyLinkLabel: 'Sola parkering',
      companyLinkTitle: 'sola parkering hjemmeside',
      backgroundImageSrc: '/assets/img/home/case-sola-parkering-650.webp',
      backgroundImageSrcset:
        '/assets/img/home/case-sola-parkering-650.webp 650w, /assets/img/home/case-sola-parkering-1300.webp 1300w',
      backgroundImageAlt: 'Parkeringsplassen til Sola Parkering',
      personImageSrc: '/assets/img/home/kunde-svein-magnar-200.webp',
      personImageAlt: 'Svein Magnar, daglig leder i Sola Parkering',
      caseStudyPath: '/case-study/sola-parkering',
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
      companyLink: 'https://www.carspamarbella.es/',
      companyLinkLabel: 'Marbella car spa',
      companyLinkTitle: 'Marbella Car Spa prosjekt',
      backgroundImageSrc: '/assets/img/home/case-marbella-car-spa-650.webp',
      backgroundImageSrcset:
        '/assets/img/home/case-marbella-car-spa-650.webp 650w, /assets/img/home/case-marbella-car-spa-1300.webp 1300w',
      backgroundImageAlt: 'Polering av bil hos Marbella Car Spa',
      personImageSrc: '/assets/img/home/kunde-patrik-200.webp',
      personImageAlt: 'Patrik, daglig leder i Marbella Car Spa',
      caseStudyPath: '/case-study/marbella-car-spa',
      details: [
        'Patrik',
        'Daglig leder',
        'Nettside + SEO',
        'Digitale kampanjer',
      ],
      quote:
        'Moderna Media leverte en profesjonell nettside som virkelig representerer kvaliteten vi står for. Siden lanseringen har vi sett en merkbar økning i kundehenvendelser.',
      rating: 5,
      overlayColor: 'rgba(209, 165, 44, 0.31)',
    },
    {
      companyLink: 'https://www.fjerdingbypizzaoggrill.no/',
      companyLinkLabel: 'Fjerdingby Pizza & Grill',
      companyLinkTitle: 'Fjerdingby Pizza og Grill hjemmeside',
      backgroundImageSrc: '/assets/img/home/case-fjerdingby-pizza-650.webp',
      backgroundImageSrcset:
        '/assets/img/home/case-fjerdingby-pizza-650.webp 650w, /assets/img/home/case-fjerdingby-pizza-1300.webp 1300w',
      backgroundImageAlt: 'Fjerdingby Pizza & Grill',
      personImageSrc: '/assets/img/home/kunde-ena-200.webp',
      personImageAlt: 'Ena Hasanović, daglig leder i Fjerdingby Pizza & Grill',
      caseStudyPath: '/case-study/fjerdingby-pizza',
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
      companyLink: 'https://bronn-energiboring.no/',
      companyLinkLabel: 'Østlandet Brønnboring',
      companyLinkTitle: 'Østlandet Brønnboring prosjekt',
      backgroundImageSrc: '/assets/img/home/case-ostlandet-bronnboring-650.webp',
      backgroundImageSrcset:
        '/assets/img/home/case-ostlandet-bronnboring-650.webp 650w, /assets/img/home/case-ostlandet-bronnboring-1300.webp 1300w',
      backgroundImageAlt: 'Borerigg i arbeid for Østlandet Brønnboring',
      personInitials: 'MH',
      caseStudyPath: '/case-study/ostlandet-bronnboring',
      details: [
        'Marcus Hannevig',
        'Prosjektleder',
        'Nettside + SEO',
        'Leadshåndtering',
      ],
      quote:
        'Etter å ha jobbet med flere byråer tidligere, er det befriende å endelig finne en partner som faktisk leverer det de lover. Profesjonelt fra start til slutt.',
      rating: 5,
      overlayColor: 'rgba(75, 85, 99, 0.6)',
    },
  ];
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CASE_STUDIES, CaseStudy } from '../case-studies.data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-case-studies-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="case-studies-hero">
      <div class="wrapper">
        <p class="subtitle">Våre prosjekter</p>
        <h1 class="title">Casestudier</h1>
        <p class="description">
          Se hvordan vi har hjulpet bedrifter som din med å vokse digitalt. Fra
          nettsider til SEO - her er resultatene som taler for seg selv.
        </p>
      </div>
    </section>

    <section class="case-studies-list">
      <div class="wrapper">
        <div class="cases-grid">
          <a
            *ngFor="let caseStudy of caseStudies"
            [routerLink]="['/case-study', caseStudy.slug]"
            class="case-card"
          >
            <div class="case-image">
              <img [src]="caseStudy.heroImage" [alt]="caseStudy.heroImageAlt" />
              <div class="overlay"></div>
            </div>
            <div class="case-content">
              <div class="case-tags">
                <span
                  class="tag"
                  *ngFor="let service of caseStudy.services.slice(0, 3)"
                >
                  {{ service }}
                </span>
              </div>
              <h2 class="case-title">{{ caseStudy.title }}</h2>
              <p class="case-subtitle">{{ caseStudy.subtitle }}</p>
              <div class="case-stats">
                <div
                  class="stat"
                  *ngFor="let stat of caseStudy.stats.slice(0, 2)"
                >
                  <span class="stat-value">{{ stat.value }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
              <div class="case-meta">
                <span class="industry">{{ caseStudy.industry }}</span>
                <span class="location">{{ caseStudy.location }}</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="wrapper">
        <h2>Klar for å bli vår neste suksesshistorie?</h2>
        <p>Ta kontakt for en uforpliktet samtale om ditt prosjekt.</p>
        <a routerLink="/kontakt" class="btn primary">Book et møte</a>
      </div>
    </section>
  `,
  styles: [
    `
      .case-studies-hero {
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        padding: 120px 0 80px;
        text-align: center;

        .wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .subtitle {
          color: #3b82f6;
          font-weight: 600;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .title {
          font-size: 3rem;
          font-weight: 800;
          color: #fff;
          margin: 0 0 20px 0;
        }

        .description {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin: 0;
        }
      }

      .case-studies-list {
        padding: 80px 0;
        background: #f8fafc;

        .wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .cases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 32px;
        }

        .case-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

            .case-image img {
              transform: scale(1.05);
            }
          }

          .case-image {
            position: relative;
            height: 220px;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: transform 0.5s ease;
            }

            .overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0, 0, 0, 0.3) 100%
              );
            }
          }

          .case-content {
            padding: 24px;

            .case-tags {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
              margin-bottom: 16px;

              .tag {
                background: #e0f2fe;
                color: #0369a1;
                font-size: 0.75rem;
                font-weight: 600;
                padding: 4px 10px;
                border-radius: 20px;
              }
            }

            .case-title {
              font-size: 1.5rem;
              font-weight: 700;
              color: #1a1a2e;
              margin: 0 0 8px 0;
            }

            .case-subtitle {
              font-size: 0.95rem;
              color: #64748b;
              line-height: 1.6;
              margin: 0 0 20px 0;
            }

            .case-stats {
              display: flex;
              gap: 24px;
              padding: 16px 0;
              border-top: 1px solid #e2e8f0;
              border-bottom: 1px solid #e2e8f0;
              margin-bottom: 16px;

              .stat {
                .stat-value {
                  display: block;
                  font-size: 1.25rem;
                  font-weight: 700;
                  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                }

                .stat-label {
                  display: block;
                  font-size: 0.8rem;
                  color: #64748b;
                  margin-top: 2px;
                }
              }
            }

            .case-meta {
              display: flex;
              gap: 16px;
              font-size: 0.85rem;
              color: #94a3b8;

              span {
                display: flex;
                align-items: center;
                gap: 4px;
              }
            }
          }
        }
      }

      .cta-section {
        padding: 80px 0;
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
        text-align: center;

        .wrapper {
          max-width: 600px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 12px 0;
        }

        p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 28px 0;
        }

        .btn.primary {
          display: inline-block;
          padding: 16px 40px;
          font-size: 1rem;
          font-weight: 700;
          border-radius: 50px;
          background: #fff;
          color: #3b82f6;
          text-decoration: none;
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }
        }
      }

      @media (max-width: 768px) {
        .case-studies-hero {
          padding: 100px 0 60px;

          .title {
            font-size: 2.25rem;
          }

          .description {
            font-size: 1rem;
          }
        }

        .case-studies-list {
          padding: 60px 0;

          .cases-grid {
            grid-template-columns: 1fr;
          }
        }

        .cta-section {
          padding: 60px 0;

          h2 {
            font-size: 1.5rem;
          }
        }
      }
    `,
  ],
})
export class CaseStudiesListComponent implements OnInit {
  caseStudies: CaseStudy[] = CASE_STUDIES;

  constructor(private seo: SeoService) {}

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Casestudier | Moderna Media - Se våre kunders suksesshistorier',
      description:
        'Utforsk hvordan vi har hjulpet bedrifter med nettsider, SEO og digital markedsføring. Se konkrete resultater og kundehistorier fra Moderna Media.',
      keywords:
        'casestudier, kundehistorier, nettside resultater, SEO resultater, digital markedsføring, Moderna Media prosjekter',
      url: 'https://modernamedia.no/case-studies',
      type: 'website',
    });
  }
}

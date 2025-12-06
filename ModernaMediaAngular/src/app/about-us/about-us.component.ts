import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../services/seo.service';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  linkedin?: string;
  grayscale?: boolean;
}

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="about-hero">
      <div class="wrapper">
        <p class="subtitle">Om oss</p>
        <h1 class="title">Vi er Moderna Media</h1>
        <p class="description">
          Et lidenskapelig team dedikert til å hjelpe norske bedrifter å lykkes
          digitalt
        </p>
      </div>
    </section>

    <section class="our-story">
      <div class="wrapper">
        <div class="story-content">
          <div class="story-text">
            <h2>Vår historie</h2>
            <p>
              Moderna Media ble grunnlagt med en klar visjon: å tilby
              høykvalitets digitale tjenester til bedrifter som ønsker å vokse
              og lykkes på nett. Vi så et hull i markedet – for mange byråer
              leverte middelmådige resultater til høye priser.
            </p>
            <p>
              Vår erfaring fra begge sider av bordet, både som leverandør og
              kunde, har gitt oss en unik forståelse for hva bedrifter virkelig
              trenger. Vi vet at en god nettside ikke bare handler om design –
              den må konvertere besøkende til kunder.
            </p>
            <p>
              I dag hjelper vi bedrifter over hele Norge med alt fra nettsider
              og SEO til grafisk design og skreddersydd programvare. Vår
              filosofi er enkel: vi leverer ikke før kunden er 100% fornøyd.
            </p>

            <div class="values">
              <div class="value">
                <div class="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div class="value-content">
                  <h4>100% Fornøyd-garanti</h4>
                  <p>Vi jobber til du er helt fornøyd med resultatet</p>
                </div>
              </div>
              <div class="value">
                <div class="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div class="value-content">
                  <h4>Personlig oppfølging</h4>
                  <p>Du får alltid en dedikert kontaktperson</p>
                </div>
              </div>
              <div class="value">
                <div class="value-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div class="value-content">
                  <h4>Kvalitet i fokus</h4>
                  <p>Alt bygges fra bunnen av, ingen ferdige maler</p>
                </div>
              </div>
            </div>
          </div>
          <div class="story-image">
            <img
              src="../../assets/Images/Home/about/640/Informasjon-om-digitalbyrå-eksperter-Moderna-Media-seo.webp"
              alt="Moderna Media teamet"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="our-team">
      <div class="wrapper">
        <header class="team-header">
          <p class="subtitle">Teamet</p>
          <h2>Møt folkene bak Moderna Media</h2>
          <p class="description">
            Vi er et lite, men dedikert team med bred kompetanse innen web,
            design og markedsføring
          </p>
        </header>

        <div class="team-grid">
          <div class="team-member" *ngFor="let member of teamMembers">
            <div
              class="member-image"
              [class.grayscale]="member.grayscale"
              *ngIf="member.image; else placeholder"
            >
              <img [src]="member.image" [alt]="member.name" />
            </div>
            <ng-template #placeholder>
              <div class="member-image placeholder-image">
                <span class="initials">{{ getInitials(member.name) }}</span>
              </div>
            </ng-template>
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p class="member-title">{{ member.title }}</p>
              <p class="member-bio">{{ member.bio }}</p>
              <a
                *ngIf="member.linkedin"
                [href]="member.linkedin"
                target="_blank"
                rel="noopener"
                class="linkedin-link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="wrapper">
        <h2>Klar til å starte et prosjekt med oss?</h2>
        <p>
          Ta kontakt for en uforpliktet prat om hvordan vi kan hjelpe din
          bedrift.
        </p>
        <a routerLink="/kontakt" class="btn primary">Ta kontakt</a>
      </div>
    </section>
  `,
  styles: [
    `
      .about-hero {
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
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin: 0;
        }
      }

      .our-story {
        padding: 100px 0;
        background: #fff;

        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .story-text {
          h2 {
            font-size: 2.25rem;
            font-weight: 800;
            color: #1a1a2e;
            margin: 0 0 24px 0;
          }

          p {
            font-size: 1.05rem;
            color: #475569;
            line-height: 1.8;
            margin: 0 0 20px 0;
          }
        }

        .values {
          margin-top: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;

          .value {
            display: flex;
            gap: 16px;
            align-items: flex-start;

            .value-icon {
              width: 48px;
              height: 48px;
              min-width: 48px;
              background: linear-gradient(135deg, #3b82f6, #8b5cf6);
              border-radius: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;

              svg {
                stroke: white;
                color: white;
              }
            }

            .value-content {
              h4 {
                font-size: 1.1rem;
                font-weight: 700;
                color: #1a1a2e;
                margin: 0 0 4px 0;
              }

              p {
                font-size: 0.95rem;
                color: #64748b;
                margin: 0;
              }
            }
          }
        }

        .story-image {
          img {
            width: 100%;
            height: auto;
            border-radius: 24px;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }
        }
      }

      .our-team {
        padding: 100px 0;
        background: linear-gradient(180deg, #f8fafc 0%, #fff 100%);

        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .team-header {
          text-align: center;
          margin-bottom: 60px;

          .subtitle {
            color: #3b82f6;
            font-weight: 600;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
          }

          h2 {
            font-size: 2.25rem;
            font-weight: 800;
            color: #1a1a2e;
            margin: 0 0 16px 0;
          }

          .description {
            font-size: 1.1rem;
            color: #64748b;
            max-width: 600px;
            margin: 0 auto;
          }
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .team-member {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;

          &:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);

            .member-image img {
              transform: scale(1.05);
            }
          }

          .member-image {
            height: 360px;
            overflow: hidden;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              object-position: center top;
              transition: transform 0.5s ease;
            }

            &.grayscale img {
              filter: grayscale(100%);
            }

            &.placeholder-image {
              background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
              display: flex;
              align-items: center;
              justify-content: center;

              .initials {
                font-size: 4rem;
                font-weight: 700;
                color: white;
                text-transform: uppercase;
              }
            }
          }

          .member-info {
            padding: 28px;

            h3 {
              font-size: 1.4rem;
              font-weight: 700;
              color: #1a1a2e;
              margin: 0 0 6px 0;
            }

            .member-title {
              font-size: 0.95rem;
              font-weight: 600;
              color: #3b82f6;
              margin: 0 0 16px 0;
            }

            .member-bio {
              font-size: 0.95rem;
              color: #64748b;
              line-height: 1.6;
              margin: 0 0 16px 0;
            }

            .linkedin-link {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              width: 36px;
              height: 36px;
              background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
              color: white;
              border-radius: 8px;
              transition: all 0.2s ease;

              svg {
                fill: white;
                color: white;
              }

              &:hover {
                background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
                transform: scale(1.1);
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

      @media (max-width: 1024px) {
        .our-story .story-content {
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .our-story .story-image {
          order: -1;

          img {
            max-height: 400px;
            object-fit: cover;
          }
        }

        .our-team .team-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .about-hero {
          padding: 100px 0 60px;

          .title {
            font-size: 2.25rem;
          }

          .description {
            font-size: 1.1rem;
          }
        }

        .our-story {
          padding: 60px 0;

          .story-text h2 {
            font-size: 1.75rem;
          }
        }

        .our-team {
          padding: 60px 0;

          .team-header h2 {
            font-size: 1.75rem;
          }

          .team-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
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
export class AboutUsComponent implements OnInit {
  teamMembers: TeamMember[] = [
    {
      name: 'Stian Håve',
      title: 'Daglig leder & Prosjektleder',
      image: '../../assets/Images/aboutus/stian håve.jpg',
      bio: 'Stian er begynte Moderna Media med en lidenskap for å skape helhetlige digitale opplevelser. Hans spesialitet ligger i komposisjon, design og produktutvikling – der han sørger for at hvert prosjekt leveres med kvalitet og presisjon.',
      linkedin: 'https://www.linkedin.com/in/stianhave/',
    },
    {
      name: 'Sander Håve',
      title: 'SEO & Markedsføring',
      image: '../../assets/Images/aboutus/sander håve.jpg',
      bio: 'Sander er vår ekspert på digital markedsføring og annonsering. Med spesialitet innen Google Ads, Meta Ads og søkemotoroptimalisering, sørger han for at kundene våre får maksimal synlighet og avkastning på sine investeringer.',
      linkedin: 'https://www.linkedin.com/in/sander-h%C3%A5ve-81452a223/',
      grayscale: true,
    },
    {
      name: 'Erik Kvalvik',
      title: 'Utvikler & SEO',
      image: '../../assets/Images/aboutus/erik kvalvik.jpg',
      bio: 'Erik kombinerer teknisk kompetanse med kreativitet. Med spesialitet innen design, front-end utvikling og React, skaper han moderne og brukervennlige løsninger som både ser bra ut og fungerer sømløst.',
      linkedin: 'https://www.linkedin.com/in/erik-kvalvik/',
    },
  ];

  constructor(private seo: SeoService) {}

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  ngOnInit() {
    this.seo.updateSeo({
      title: 'Om oss | Moderna Media - Digitalbyrå i Norge',
      description:
        'Lær mer om teamet bak Moderna Media. Vi er et dedikert team som hjelper norske bedrifter med nettsider, SEO, design og digital markedsføring.',
      keywords:
        'moderna media, digitalbyrå, om oss, team, nettsider, SEO, design, Norge',
      url: 'https://modernamedia.no/om-oss',
      type: 'website',
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trust-badges',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="trust-badges" aria-label="Våre partnere og sertifiseringer">
      <div class="wrapper">
        <div class="stats">
          <div class="stat">
            <span class="number">50+</span>
            <span class="label">Fornøyde kunder</span>
          </div>
          <div class="divider"></div>
          <div class="stat">
            <span class="number">100%</span>
            <span class="label">Fornøyd-garanti</span>
          </div>
          <div class="divider"></div>
          <div class="stat">
            <span class="number">5+</span>
            <span class="label">År erfaring</span>
          </div>
        </div>
        <div class="badges">
          <div class="badge" title="SSL Sikret">
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
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>SSL Sikret</span>
          </div>
          <div class="badge" title="GDPR Compliant">
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
            <span>GDPR</span>
          </div>
          <div class="badge" title="Norsk Bedrift">
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
              <path d="M3 21h18" />
              <path d="M9 8h1" />
              <path d="M9 12h1" />
              <path d="M9 16h1" />
              <path d="M14 8h1" />
              <path d="M14 12h1" />
              <path d="M14 16h1" />
              <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
            </svg>
            <span>Norsk</span>
          </div>
          <div class="badge" title="Rask Support">
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
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              />
            </svg>
            <span>Rask Support</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use 'src/variables' as *;

      .trust-badges {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        padding: 40px 0;

        .wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px;
          margin-bottom: 30px;
          flex-wrap: wrap;

          .stat {
            text-align: center;

            .number {
              display: block;
              font-size: 2.5rem;
              font-weight: 800;
              background: linear-gradient(
                135deg,
                $blue-primary,
                $purple-primary
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              line-height: 1.1;
            }

            .label {
              display: block;
              font-size: 0.9rem;
              color: #64748b;
              margin-top: 4px;
              font-weight: 500;
            }
          }

          .divider {
            width: 1px;
            height: 50px;
            background: #cbd5e1;
          }
        }

        .badges {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;

          .badge {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            background: white;
            border-radius: 50px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
            color: #475569;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.2s ease;

            svg {
              width: 18px;
              height: 18px;
              color: $blue-primary;
            }

            &:hover {
              transform: translateY(-2px);
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
          }
        }
      }

      @media (max-width: 600px) {
        .trust-badges {
          .stats {
            gap: 20px;

            .divider {
              display: none;
            }

            .stat .number {
              font-size: 2rem;
            }
          }

          .badges {
            gap: 12px;

            .badge {
              padding: 8px 12px;
              font-size: 0.8rem;
            }
          }
        }
      }
    `,
  ],
})
export class TrustBadgesComponent {}

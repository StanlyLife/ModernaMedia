import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HOME_FAQ } from './faq.data';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="faq-section" aria-labelledby="faq-title">
      <div class="wrapper">
        <header class="titles">
          <p class="subtitle">Ofte stilte spørsmål</p>
          <h2 class="title" id="faq-title">Spørsmål og svar</h2>
          <p class="description">
            Kort fortalt om hvem vi er, hva vi gjør og hvordan vi jobber.
          </p>
        </header>

        <div class="faq-list">
          @for (item of items; track item.question; let first = $first) {
            <details class="faq-item" [open]="first">
              <summary>
                <h3>{{ item.question }}</h3>
              </summary>
              <div class="answer">
                <p>{{ item.answer }}</p>
                @if (item.link) {
                  <a [routerLink]="item.link.href">{{ item.link.label }} →</a>
                }
              </div>
            </details>
          }
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      @use 'src/variables' as *;

      .faq-section {
        padding: 80px 0;
        background: linear-gradient(180deg, #fff 0%, #f8fafc 100%);
      }

      .wrapper {
        max-width: 860px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .titles {
        text-align: center;
        margin-bottom: 40px;

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

      .faq-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .faq-item {
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
        border: 1px solid rgba(0, 0, 0, 0.04);
        overflow: hidden;

        summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 24px;
          cursor: pointer;
          list-style: none;

          &::-webkit-details-marker {
            display: none;
          }

          &::after {
            content: '+';
            flex-shrink: 0;
            font-size: 1.5rem;
            line-height: 1;
            color: $blue-primary;
            transition: transform 0.2s ease;
          }

          h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: $dark;
            margin: 0;
          }
        }

        &[open] summary::after {
          transform: rotate(45deg);
        }

        .answer {
          padding: 0 24px 20px;

          p {
            color: #475569;
            line-height: 1.7;
            margin: 0;
          }

          a {
            display: inline-block;
            margin-top: 10px;
            font-weight: 600;
            color: $blue-primary;
          }
        }
      }

      @media (max-width: 768px) {
        .faq-section {
          padding: 60px 0;
        }

        .titles .title {
          font-size: 1.75rem;
        }

        .faq-item summary {
          padding: 16px 18px;
        }

        .faq-item .answer {
          padding: 0 18px 16px;
        }
      }
    `,
  ],
})
export class FaqComponent {
  items = HOME_FAQ;
}

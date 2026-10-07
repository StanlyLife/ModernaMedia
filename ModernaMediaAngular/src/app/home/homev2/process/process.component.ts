import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="process-section" aria-label="Hvordan det fungerer">
      <div class="wrapper">
        <header class="titles">
          <p class="subtitle">Enkel prosess</p>
          <h2 class="title">Hvordan det fungerer</h2>
          <p class="description">
            Fra første kontakt til lansering - vi gjør prosessen enkel og
            oversiktlig
          </p>
        </header>

        <div class="process-steps">
          <div class="step" *ngFor="let step of steps; let i = index">
            <div class="step-icon" [innerHTML]="getSafeIcon(step.icon)"></div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>

        <div class="cta-container">
          <a
            class="btn primary"
            href="#kontakt"
            (click)="scrollToContact($event)"
          >
            Start i dag – 100% uforpliktende
          </a>
          <p class="cta-note">Vi svarer vanligvis innen 2 timer</p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .process-section {
        padding: 80px 0;
        background: #fff;
      }

      .wrapper {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 2rem;
      }

      .titles {
        text-align: center;
        margin-bottom: 50px;
      }

      .titles .subtitle {
        color: #3b82f6;
        font-weight: 600;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 10px;
      }

      .titles .title {
        font-size: 2.25rem;
        font-weight: 800;
        color: #1a1a2e;
        margin: 0 0 15px 0;
      }

      .titles .description {
        color: #64748b;
        font-size: 1.1rem;
        max-width: 500px;
        margin: 0 auto;
      }

      .process-steps {
        display: flex;
        justify-content: center;
        gap: 40px;
      }

      .step {
        flex: 1;
        max-width: 280px;
        text-align: center;
        padding: 30px 20px;
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        border-radius: 20px;
        transition: all 0.3s ease;
      }

      .step:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .step-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 20px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
      }

      .step-icon :host ::ng-deep svg {
        width: 32px;
        height: 32px;
        color: white;
        stroke: white;
      }

      .step-title {
        font-size: 1.15rem;
        font-weight: 700;
        color: #1a1a2e;
        margin: 0 0 10px 0;
      }

      .step-description {
        font-size: 0.95rem;
        color: #64748b;
        line-height: 1.6;
        margin: 0;
      }

      .cta-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 50px;
      }

      .btn.primary {
        display: inline-block;
        text-decoration: none;
        padding: 18px 40px;
        font-size: 1rem;
        font-weight: 700;
        border-radius: 50px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(59, 130, 246, 0.35);
      }

      .btn.primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 30px rgba(59, 130, 246, 0.45);
      }

      .cta-note {
        margin-top: 12px;
        font-size: 0.85rem;
        color: #64748b;
      }

      @media (max-width: 900px) {
        .process-section {
          padding: 60px 0;
        }

        .process-steps {
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .step {
          max-width: 400px;
          width: 100%;
        }

        .titles .title {
          font-size: 1.75rem;
        }
      }
    `,
  ],
})
export class ProcessComponent {
  constructor(
    private scroller: ViewportScroller,
    private sanitizer: DomSanitizer
  ) {}

  getSafeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }

  steps = [
    {
      title: 'Uforpliktende samtale',
      description:
        'Vi starter med en gratis konsultasjon for å forstå dine behov og mål.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    },
    {
      title: 'Strategi & tilbud',
      description:
        'Vi lager en skreddersydd plan og gir deg et tydelig pristilbud uten skjulte kostnader.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/></svg>`,
    },
    {
      title: 'Vi leverer',
      description:
        'Vårt team går i gang og leverer resultatene du trenger for å lykkes.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
    },
  ];

  scrollToContact(event: Event) {
    event.preventDefault();
    this.scroller.scrollToAnchor('kontakt');
  }
}

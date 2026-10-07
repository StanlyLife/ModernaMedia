import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { V2IconComponent } from './v2-icon.component';

/** «Gratis nettside-analyse» band: the lead offer for visitors who are not ready to buy. */
@Component({
  selector: 'v2-magnet',
  standalone: true,
  imports: [RouterLink, V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:block' },
  template: `
    <section class="magnet" id="analyse" style="padding: 112px 0 56px">
      <div class="wrap">
        <div class="box">
          <div>
            <span class="kicker">Gratis nettside-analyse</span>
            <h2>Hvor godt presterer nettsiden din?</h2>
            <p>Få en gratis analyse av nettsiden din med konkrete forbedringer. Helt uforpliktende.</p>
            <ul>
              <li><span class="tick"><v2-icon name="check" /></span>Hastighet og teknisk SEO</li>
              <li><span class="tick"><v2-icon name="check" /></span>Synlighet på Google</li>
              <li><span class="tick"><v2-icon name="check" /></span>Brukervennlighet og konvertering</li>
            </ul>
          </div>
          <form class="form" (submit)="submit($event)" novalidate>
            <label><span class="sr-only">Adressen til nettsiden din</span>
              <input class="field" name="website" [value]="website" (input)="website = val($event)" placeholder="Adressen til nettsiden din, f.eks. dinbedrift.no" /></label>
            <label><span class="sr-only">E-post</span>
              <input class="field" name="email" type="email" [value]="email" (input)="email = val($event)" placeholder="E-post" autocomplete="email" /></label>
            @if (error()) {
              <p class="form-error" role="alert">{{ error() }}</p>
            }
            <button class="btn btn-white btn-block" type="submit" [disabled]="sending()">
              {{ sending() ? 'Sender …' : 'Få gratis analyse' }} <v2-icon name="arrow" />
            </button>
            <p class="alt">Vil du heller ha en gratis SEO-analyse? <a routerLink="/gratis-seo-analyse">Bestill her</a></p>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class V2MagnetComponent {
  private contact = inject(ContactService);
  private router = inject(Router);
  website = '';
  email = '';
  sending = signal(false);
  error = signal('');

  val(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  submit(event: Event) {
    event.preventDefault();
    if (!this.website.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim())) {
      this.error.set('Skriv inn adressen til nettsiden og e-posten din.');
      return;
    }
    this.error.set('');
    this.sending.set(true);
    this.contact
      .sendLead({ source: 'Gratis nettside-analyse', website: this.website, email: this.email, page: this.router.url })
      .subscribe({
        next: () => this.router.navigate(['/takk']),
        error: () => {
          this.sending.set(false);
          this.error.set('Noe gikk galt. Prøv igjen, eller ring oss på 902 65 326.');
        },
      });
  }
}

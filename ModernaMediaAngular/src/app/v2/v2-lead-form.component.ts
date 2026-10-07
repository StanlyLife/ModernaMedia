import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { V2IconComponent } from './v2-icon.component';
import { PHONE, PHONE_HREF } from './v2-data';

const SERVICES = ['Nettside', 'Programvare', 'Design', 'SEO', 'Vet ikke ennå'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Quote / contact form used in heroes and contact sections. Sends the lead and opens /takk.
 * Plain signals instead of @angular/forms keep the forms library out of the homepage bundle.
 */
@Component({
  selector: 'v2-lead-form',
  standalone: true,
  imports: [V2IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display:block' },
  template: `
    <form class="formcard" (submit)="submit($event)" novalidate>
      <span class="fc-badge"><i></i>Gratis og 100 % uforpliktende</span>
      <p class="fc-title">{{ title() }}</p>
      <p class="fc-sub">{{ sub() }}</p>

      <fieldset class="chips-wrap">
        <legend class="label">Hva trenger du hjelp med?</legend>
        <div class="chips">
          @for (s of services; track s) {
            <button type="button" class="chip" [class.on]="chosen().includes(s)" [attr.aria-pressed]="chosen().includes(s)" (click)="toggle(s)">{{ s }}</button>
          }
        </div>
      </fieldset>

      <div class="fields">
        <div class="row2">
          <label><span class="sr-only">Navn</span><input class="field" name="name" [value]="name()" (input)="name.set(val($event))" placeholder="Navn" autocomplete="name" /></label>
          <label><span class="sr-only">Telefon</span><input class="field" name="phone" [value]="phone()" (input)="phone.set(val($event))" placeholder="Telefon" type="tel" autocomplete="tel" [class.invalid]="showErrors() && !contactOk()" /></label>
        </div>
        <label><span class="sr-only">E-post</span><input class="field" name="email" [value]="email()" (input)="email.set(val($event))" placeholder="E-post" type="email" autocomplete="email" [class.invalid]="showErrors() && !contactOk()" /></label>
        <label><span class="sr-only">{{ messageLabel() }}</span><textarea class="field" name="message" [value]="message()" (input)="message.set(val($event))" [placeholder]="messageLabel()"></textarea></label>
      </div>

      @if (showErrors() && !contactOk()) {
        <p class="form-error" role="alert">Legg igjen e-post eller telefonnummer, så vi kan svare deg.</p>
      }
      @if (failed()) {
        <p class="form-error" role="alert">Noe gikk galt. Prøv igjen, eller ring oss på {{ phoneLabel }}.</p>
      }

      <button class="btn btn-primary btn-block" type="submit" [disabled]="sending()">
        {{ sending() ? 'Sender …' : button() }} <v2-icon name="arrow" />
      </button>
      <p class="micro"><v2-icon name="lock" />Vi bruker kun informasjonen til å svare deg. Ingen spam.</p>
      <div class="fc-alt">Heller ringe? <a [href]="phoneHref">{{ phoneLabel }}</a></div>
    </form>
  `,
})
export class V2LeadFormComponent implements OnInit {
  private contact = inject(ContactService);
  private router = inject(Router);

  title = input('Få et uforpliktende pristilbud');
  sub = input('Fortell oss kort hva du trenger, så svarer vi vanligvis innen 2 timer.');
  preselect = input<string>('Nettside');
  messageLabel = input('Kort om prosjektet (valgfritt)');
  button = input('Få pristilbud');
  source = input('Pristilbud');

  services = SERVICES;
  phoneLabel = PHONE;
  phoneHref = PHONE_HREF;
  chosen = signal<string[]>([]);
  sending = signal(false);
  failed = signal(false);
  showErrors = signal(false);

  name = signal('');
  phone = signal('');
  email = signal('');
  message = signal('');

  ngOnInit() {
    if (this.preselect()) this.chosen.set([this.preselect()]);
  }

  val(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  toggle(s: string) {
    this.chosen.update((list) => (list.includes(s) ? list.filter((x) => x !== s) : [...list, s]));
  }

  contactOk(): boolean {
    return EMAIL_RE.test(this.email().trim()) || this.phone().replace(/\D/g, '').length >= 8;
  }

  submit(event: Event) {
    event.preventDefault();
    this.showErrors.set(true);
    this.failed.set(false);
    if (!this.contactOk() || this.sending()) return;
    this.sending.set(true);
    this.contact
      .sendLead({
        source: this.source(),
        service: this.chosen().join(', '),
        page: this.router.url,
        name: this.name(),
        phone: this.phone(),
        email: this.email(),
        message: this.message(),
      })
      .subscribe({
        next: () => this.router.navigate(['/takk']),
        error: () => {
          this.sending.set(false);
          this.failed.set(true);
        },
      });
  }
}

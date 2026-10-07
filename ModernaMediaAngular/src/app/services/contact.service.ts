import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient, private toast: ToastService) {}

  // Formspark endpoint
  private formsparkUrl = 'https://submit-form.com/JMUltr5Y2';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
  });

  public errorMessage: string | undefined;
  public SendContactRequestResult = new BehaviorSubject<boolean>(false);

  /** Lead from the V2 forms (quote, contact, free analyses). The caller handles success and errors. */
  sendLead(lead: {
    source: string;
    service?: string;
    name?: string;
    email?: string;
    phone?: string;
    website?: string;
    message?: string;
    page?: string;
  }): Observable<unknown> {
    const payload = {
      name: lead.name || '',
      email: lead.email || '',
      phone: lead.phone || '',
      service: lead.service || '',
      website: lead.website || '',
      message: lead.message || '',
      page: lead.page || '',
      source: lead.source,
      timestamp: new Date().toISOString(),
    };
    return this.http.post(this.formsparkUrl, payload, { headers: this.headers });
  }

  SendContactRequest(model: any) {
    const payload = {
      name: model.name || '',
      email: model.email || '',
      phone: model.phone || '',
      business: model.business || '',
      message: model.body || '',
      source: 'Contact Form',
      timestamp: new Date().toISOString(),
    };

    this.http
      .post<any>(this.formsparkUrl, payload, { headers: this.headers })
      .subscribe({
        next: () => {
          this.toast.Toast(
            'Melding sendt!',
            'Takk! Vi vil ta kontakt med deg så snart som mulig.',
            'default',
            5000
          );
          this.SendContactRequestResult.next(true);
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
          this.toast.Toast(
            'Det oppstod en feil!',
            'Kontakt oss på tlf: 902 65 326!',
            'error',
            10000
          );
          this.SendContactRequestResult.next(false);
        },
      });
  }

  SendPriceRequest(model: any) {
    const payload = {
      name: model.name || '',
      email: model.email || '',
      phone: model.phone || '',
      business: model.business || '',
      message: model.body || model.message || '',
      source: 'Price Request Form',
      timestamp: new Date().toISOString(),
    };

    this.http
      .post<any>(this.formsparkUrl, payload, { headers: this.headers })
      .subscribe({
        next: () => {
          this.toast.Toast(
            'Melding sendt!',
            'Takk! Vi vil ta kontakt med deg så snart som mulig.',
            'default',
            5000
          );
          this.SendContactRequestResult.next(true);
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
          this.toast.Toast(
            'Det oppstod en feil!',
            'Kontakt oss på tlf: 902 65 326!',
            'error',
            10000
          );
          this.SendContactRequestResult.next(false);
        },
      });
  }

  SendAuditRequest(model: any) {
    const payload = {
      name: model.name || '',
      email: model.email || '',
      phone: model.phone || '',
      website: model.website || model.url || '',
      message: model.body || model.message || '',
      source: 'Audit Request Form',
      timestamp: new Date().toISOString(),
    };

    this.http
      .post<any>(this.formsparkUrl, payload, { headers: this.headers })
      .subscribe({
        next: () => {
          this.toast.Toast(
            'Melding sendt!',
            'Vi kontakter deg snarest!',
            'default',
            5000
          );
          this.SendContactRequestResult.next(true);
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('There was an error!', error);
          this.toast.Toast(
            'Det oppstod en feil!',
            'Kontakt oss på tlf: 902 65 326!',
            'error',
            10000
          );
          this.SendContactRequestResult.next(false);
        },
      });
  }
}

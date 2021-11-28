import { ToastService } from './toast.service';
import { environment } from './../../environments/environment';
import { CTA } from './../Models/CTA/CTA.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CTAMeetingService {
  public ModalOpen = new BehaviorSubject<boolean>(false);
  public errorMessage;
  private contactRequests: number = 0;
  constructor(private http: HttpClient, private toast: ToastService) {}
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private SendCTAMessageURL = environment.url + '/API/CTA/BookAMeeting';
  ToggleModal() {
    this.ModalOpen.next(!this.ModalOpen.value);
  }

  SendCTAMessage(body: CTA) {
    this.contactRequests = parseInt(localStorage.getItem('ContactRequests'));
    if (this.contactRequests >= 3) {
      this.toast.Toast(
        'For mange forespørsler',
        'Du har send for mange forespørsler!',
        'error',
        5000
      );
      return false;
    }
    var request = this.http.post<CTA>(this.SendCTAMessageURL, body);
    console.log(this.SendCTAMessageURL);
    request.subscribe({
      next: (data) => {
        if (isNaN(this.contactRequests)) {
          localStorage.setItem('ContactRequests', '1');
        } else {
          localStorage.setItem(
            'ContactRequests',
            this.contactRequests + 1 + ''
          );
        }
        this.toast.Toast(
          'Melding sendt!',
          'Vi kontakter deg snarest!',
          'default',
          5000
        );
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
      },
    });
    return request;
  }
}

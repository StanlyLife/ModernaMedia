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
  constructor(private http: HttpClient) {}
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private SendCTAMessageURL = environment.url + '/API/CTA/BookAMeeting';
  ToggleModal() {
    this.ModalOpen.next(!this.ModalOpen.value);
  }

  SendCTAMessage(body: CTA) {
    this.contactRequests = parseInt(localStorage.getItem('ContactRequests'));
    if (this.contactRequests >= 3) {
      return false;
    }
    localStorage.setItem('ContactRequests', this.contactRequests + 1 + '');
    var request = this.http.post<CTA>(this.SendCTAMessageURL, body);
    console.log(this.SendCTAMessageURL);
    request.subscribe({
      next: (data) => {
        console.log(this);
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      },
    });
    return request;
  }
}

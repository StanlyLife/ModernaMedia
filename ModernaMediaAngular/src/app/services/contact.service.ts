import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient, private toast: ToastService) {}
  private SendCTAMessageURL = environment.url + '/API/Contact/Contact';
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public errorMessage;
  public SendContactRequestResult = new BehaviorSubject<boolean>(false);
  SendContactRequest(model: any) {
    var request = this.http.post<any>(this.SendCTAMessageURL, model);
    var response;
    request.subscribe({
      next: (data) => {
        this.toast.Toast(
          'Melding sendt!',
          'Vi kontakter deg snarest!',
          'default',
          5000
        );
        this.SendContactRequestResult.next(true);
        response = true;
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
        response = false;
      },
    });
    return response;
  }
}

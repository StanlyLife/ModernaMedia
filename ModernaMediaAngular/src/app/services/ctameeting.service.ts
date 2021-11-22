import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CTAMeetingService {
  public ModalOpen = new BehaviorSubject<boolean>(false);
  constructor() {}

  ToggleModal() {
    this.ModalOpen.next(!this.ModalOpen.value);
  }
}

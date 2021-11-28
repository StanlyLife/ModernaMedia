import { ToastService } from './../../services/toast.service';
import { toast } from './toast.model';
import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  constructor(private toast: ToastService, protected elementRef: ElementRef) {}

  toasts = this.toast.Toasts;
  ngOnInit(): void {
    this.toast.Toasts.subscribe((args) => {
      this.UpdateToasts();
    });
  }
  ngOnDestroy() {
    this.toasts.unsubscribe();
  }
  DestroyToast(element, event): void {
    event.target.classList.remove('wobble-animation');
    event.target.classList.add('slide-out-animation');
    event.target.addEventListener('animationend', () => {
      this.toasts.value.splice(this.toasts.value.indexOf(element), 1);
    });
  }
  SlideOutAnimationEnd(element, toastObj): void {
    this.toasts.value.splice(this.toasts.value.indexOf(toastObj), 1);
  }
  UpdateToasts() {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { toast } from '../components/toast/toast.model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public Toasts = new BehaviorSubject<Array<toast>>([]);

  constructor() {}

  Toast(Title: string, Message?: string, Style?: string, Timer?: number) {
    const toastModel = new toast({
      Title: Title,
      Content: Message,
      Timer: Timer,
      Style: Style,
      TimeLeft: Timer,
      Count: 1,
      PercentageCompleted: 100,
    });
    this.AddToast(toastModel);
  }

  private AddToast(toast: toast) {
    const currentArr = this.Toasts.value;
    const updatedToast = [...currentArr, toast];
    let timer = setInterval(function () {
      toast.PercentageCompleted = toast.TimeLeft / (toast.Timer / 100);
      toast.TimeLeft = toast.TimeLeft - 10;
      if (toast.TimeLeft <= 0 || !toast.TimeLeft) {
        clearInterval(timer);
      }
    }, 10);
    this.Toasts.next(updatedToast);
  }
}

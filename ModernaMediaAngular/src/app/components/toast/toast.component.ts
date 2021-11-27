import { toast } from './toast.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent implements OnInit {
  constructor() {}

  toasts = [
    {
      Title: 'Title 1',
      Content: 'Thios is content',
      Count: '1',
      Timer: '500',
    },
    {
      Title: 'Title 2',
      Content: 'Thios is content',
      Count: '1',
      Timer: '500',
    },
  ];

  ngOnInit(): void {}
  DestroyToast(element, event): void {
    event.target.classList.remove('wobble-animation');
    event.target.classList.add('slide-out-animation');
    event.target.addEventListener('animationend', () => {
      this.toasts.splice(this.toasts.indexOf(element), 1);
    });
  }
}

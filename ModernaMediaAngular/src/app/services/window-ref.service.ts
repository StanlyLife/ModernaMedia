import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WindowRefService {
  constructor() {}
  get width() {
    return window.innerWidth;
  }
  get height() {
    return window.innerHeight;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerWindowRefService {
  constructor() {}

  get width() {
    return 1280;
  }
  get height() {
    return 1280;
  }
}

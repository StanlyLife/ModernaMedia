
import { Inject, Injectable, DOCUMENT } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(@Inject(DOCUMENT) private doc) {}

  createLinkForCanonicalURL() {
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    const url = this.doc.URL.replace('http://', 'https://');
    link.setAttribute('href', url);
  }
}

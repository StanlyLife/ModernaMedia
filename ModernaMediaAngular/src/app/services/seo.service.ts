import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(@Inject(DOCUMENT) private doc) {}
  
  createLinkForCanonicalURL() {
     let link: HTMLLinkElement = this.doc.createElement('link');
     link.setAttribute('rel', 'canonical');
     this.doc.head.appendChild(link);
     link.setAttribute('href', this.doc.URL);
   }
}

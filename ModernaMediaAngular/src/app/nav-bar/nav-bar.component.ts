import { DOCUMENT, Location } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { V2IconComponent } from '../v2/v2-icon.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, V2IconComponent],
})
export class NavBarComponent implements OnInit {
  private location = inject(Location);
  private doc = inject(DOCUMENT);

  mobileOpen = false;
  hidden = false;
  links = [
    { label: 'Utvikling', url: '/tjenester/bedrift/utvikling', exact: false },
    { label: 'Design', url: '/tjenester/bedrift/design', exact: false },
    { label: 'SEO', url: '/tjenester/bedrift/seo', exact: false },
    { label: 'Priser', url: '/priser', exact: true },
    { label: 'Casestudier', url: '/case-studies', exact: false },
    { label: 'Om oss', url: '/om-oss', exact: true },
  ];

  ngOnInit(): void {
    // The salary charts page is a full-screen tool without site chrome.
    this.hidden = this.location.path() === '/blogg/utviklerlonn';
  }

  /** «Få gratis tilbud»: scroll to the page's own contact form when there is one, else open /kontakt. */
  cta(event: Event) {
    const form = this.doc.getElementById('kontakt');
    if (form) {
      event.preventDefault();
      form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    this.close();
  }

  toggle() {
    this.mobileOpen = !this.mobileOpen;
  }

  close() {
    this.mobileOpen = false;
  }
}

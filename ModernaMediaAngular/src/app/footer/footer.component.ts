import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [RouterLink],
})
export class FooterComponent implements OnInit {
  constructor(private location: Location) {}
  hidden = false;
  year = new Date().getFullYear();
  columns = [
    {
      title: 'Utvikling',
      url: '/tjenester/bedrift/utvikling',
      links: [
        ['Nettsider for bedrift', '/tjenester/bedrift/utvikling/hjemmeside-bedrift'],
        ['Programvare', '/tjenester/bedrift/utvikling/programvare'],
        ['Priser', '/priser'],
      ],
    },
    {
      title: 'Design',
      url: '/tjenester/bedrift/design',
      links: [
        ['Logo design', '/tjenester/bedrift/design/logo-design'],
        ['Webdesign', '/tjenester/bedrift/design/web-design'],
        ['Grafisk design', '/tjenester/bedrift/design/grafisk-design'],
      ],
    },
    {
      title: 'SEO',
      url: '/tjenester/bedrift/seo',
      links: [
        ['Teknisk SEO', '/tjenester/bedrift/seo/teknisk-seo'],
        ['Innholdsproduksjon', '/tjenester/bedrift/seo/innholdsproduksjon'],
        ['Off-page SEO', '/tjenester/bedrift/seo/off-page-seo'],
        ['Gratis SEO-analyse', '/gratis-seo-analyse'],
      ],
    },
    {
      title: 'Selskapet',
      url: '/om-oss',
      links: [
        ['Om oss', '/om-oss'],
        ['Alle tjenester', '/tjenester'],
        ['Casestudier', '/case-studies'],
        ['Blogg', '/blogg'],
        ['Digitalbyrå i Oslo', '/digitalbyra-oslo'],
      ],
    },
  ];

  ngOnInit(): void {
    if (this.location.path() === '/blogg/utviklerlonn') {
      this.hidden = true;
    }
  }
}

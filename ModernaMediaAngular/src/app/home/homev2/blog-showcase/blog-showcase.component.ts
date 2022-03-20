import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-blog-showcase',
  templateUrl: './blog-showcase.component.html',
  styleUrls: [
    './blog-showcase.component.scss',
    './blog-showcase.desktop.component.scss',
  ],
})
export class BlogShowcaseComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  blogs = [
    {
      Published: '16 DES 2021',
      Title: 'Utvikler lønn',
      Author: 'Stian Håve',
      Organization: 'Moderna Media',
      Description:
        'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i Norge.',
      url: '/',
      img: '../../../../assets/Images/Home/blog/400/Utviklere-som-lager-bedrift-system-og-nettsider.webp',
      alt: '',
    },
    {
      Published: '16 DES 2021',
      Title: 'Utvikler lønn',
      Author: 'Stian Håve',
      Organization: 'Moderna Media',
      Description:
        'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i Norge.',
      url: '/',
      img: '../../../../assets/Images/Home/blog/400/Utviklere-som-lager-bedrift-system-og-nettsider.webp',
      alt: '',
    },
    {
      Published: '16 DES 2021',
      Title: 'Utvikler lønn',
      Author: 'Stian Håve',
      Organization: 'Moderna Media',
      Description:
        'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i Norge.',
      url: '/',
      img: '../../../../assets/Images/Home/blog/400/Utviklere-som-lager-bedrift-system-og-nettsider.webp',
      alt: '',
    },
    {
      Published: '16 DES 2021',
      Title: 'Utvikler lønn',
      Author: 'Stian Håve',
      Organization: 'Moderna Media',
      Description:
        'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i Norge.',
      url: '/',
      img: '../../../../assets/Images/Home/blog/400/Utviklere-som-lager-bedrift-system-og-nettsider.webp',
      alt: '',
    },
    {
      Published: '16 DES 2021',
      Title: 'Utvikler lønn',
      Author: 'Stian Håve',
      Organization: 'Moderna Media',
      Description:
        'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i Norge.',
      url: '/',
      img: '../../../../assets/Images/Home/blog/400/Utviklere-som-lager-bedrift-system-og-nettsider.webp',
      alt: '',
    },
    {
      Published: '16 DES 2021',
      Title: 'Utvikler lønn',
      Author: 'Stian Håve',
      Organization: 'Moderna Media',
      Description:
        'Hva tjente utviklerne i 2021 og har det vært en generell økning fra 2020? hvorfor har de med bonus også mest lønn? Gjennom artikkelen vil vi se på data samlet fra 1529 utviklere i Norge.',
      url: '/',
      img: '../../../../assets/Images/Home/blog/400/Utviklere-som-lager-bedrift-system-og-nettsider.webp',
      alt: '',
    },
  ];
  imageCdn = environment.img;
  ngOnInit(): void {}
}

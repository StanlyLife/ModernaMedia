import { SeoService } from './../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogg',
  templateUrl: './blogg.component.html',
  styleUrls: ['./blogg.component.scss']
})
export class BloggComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService
    ) {
      title.setTitle("Moderna media blogg, informasjon og kunnskap - Moderniser bedriften");
    }

   ngOnInit() {
     this.seo.createLinkForCanonicalURL();
     this.meta.addTags([
       {name: "description", content: "Moderna Media ønsker å dele kunnskap og informasjon om hvordan du kan digitalisere bedriften. her kan du lese om alt fra 'google analytics', 'google min bedrift' og 'søkemotoroptomalisering' til 'hvordan lage hjemmeside for bedrift'.  "},
       {name: 'robots', content: 'index, follow'}
     ]);
     this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia'
    });
  }

}

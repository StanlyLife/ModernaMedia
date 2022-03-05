import { Component, OnInit } from '@angular/core';
import { SeoService } from './../../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService
  ) {
    title.setTitle(
      'Digitalbyrå - Moderna Media - for bedriftens hjemmeside, design og seo'
    );
  }

  ngOnInit() {
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content:
          'Moderna Media utvikler hjemmesider og datasystem for bedrifter som ønsker en egen nettside, system eller app. Vi er også eksperter på SEO, Google analytics, google search og ikke minst design og web design. Et digitalbyrå med alt på et sted!',
      },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia',
    });
  }
}

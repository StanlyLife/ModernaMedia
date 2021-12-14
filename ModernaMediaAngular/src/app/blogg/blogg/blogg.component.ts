import { WindowRefService } from './../../services/window-ref.service';
import { SeoService } from './../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-blogg',
  templateUrl: './blogg.component.html',
  styleUrls: ['./blogg.component.scss'],
})
export class BloggComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService,
    private wf: WindowRefService
  ) {
    title.setTitle(
      'Moderna media blogg, informasjon og kunnskap - Moderniser bedriften'
    );
  }

  public vw: any = 500;
  imageCdn = environment.img;

  ngOnInit() {
    this.vw =
      this.wf.nativeWindow.innerWidth < this.wf.nativeWindow.innerHeight
        ? this.wf.nativeWindow.innerHeight
        : this.wf.nativeWindow.innerWidth;
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content:
          "Moderna Media ønsker å dele kunnskap og informasjon om hvordan du kan digitalisere bedriften. her kan du lese om alt fra 'google analytics', 'google min bedrift' og 'søkemotoroptomalisering' til 'hvordan lage hjemmeside for bedrift'.  ",
      },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia',
    });
  }
}

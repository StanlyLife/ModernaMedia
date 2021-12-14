import { WindowRefService } from './../../services/window-ref.service';
import { Title, Meta } from '@angular/platform-browser';
import { SeoService } from './../../services/seo.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService,
    private wf: WindowRefService
  ) {
    title.setTitle(
      'Vår historie - Moderna media digitalbyrå med fokus på webutvikling, design og seo for bedrifter'
    );
  }
  imageCdn = environment.img;
  public vw: any = 500;
  ngOnInit(): void {
    this.vw =
      this.wf.nativeWindow.innerWidth < this.wf.nativeWindow.innerHeight
        ? this.wf.nativeWindow.innerHeight
        : this.wf.nativeWindow.innerWidth;
    this.seo.createLinkForCanonicalURL();
    this.meta.addTags([
      {
        name: 'description',
        content:
          "Moderna Media utvikler nettsider og system for bedrifter som ønsker et eget nettsted, et tilpasset system eller en egen app. Vi har fokus og ekspertise innenfor 'system utvikling', 'web utvikling', 'søkemotoroptomalisering', 'grafisk design', 'webdesign' og mye mer. Les mer om hvorfor vi er det beste digitalbyrået i Norge",
      },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia',
    });
  }
}

import { SeoService } from './../../services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utvikling',
  templateUrl: './utvikling.component.html',
  styleUrls: ['./utvikling.component.scss']
})
export class UtviklingComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    private seo: SeoService
    ) {
      title.setTitle("Moderna Media Utvikling av nettsider og system for bedrifter");
    }

   ngOnInit() {
     this.seo.createLinkForCanonicalURL();
     this.meta.addTags([
       {name: "description", content: "Moderna Media utvikler nettsider og system for bedrifter som ønsker et eget nettsted, system eller app"},
       {name: 'robots', content: 'index, follow'}
     ]);
     this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia'
    });
  }  

}

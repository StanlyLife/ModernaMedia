import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { faAppleAlt, faAtlas, faBook, faCog, faCogs, faCrop, faCropAlt, faDesktop, faFileArchive, faFileCode, faGlobe, faGlobeAmericas, faImage, faMobile, faOtter, faPaintBrush, faProcedures, faStore, faTrademark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(
    private meta: Meta,
    private title: Title
    ) {
      title.setTitle("ModernaMedia Digitalbyrå for bedrifter. Bedrift nettsider, grafisk design og seo i Norge");
    }

   ngOnInit() {
     this.meta.addTags([
       {name: "description", content: "ModernaMedia er et digital byrå med ekstremt høy kompetanse innenfor web, seo og design!"},
       {name: 'robots', content: 'index, follow'}
     ]);
     this.meta.addTag({
      name: 'angular.ModernaMedia',
      content: 'ModernaMedia'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Cette application a été développée avec Angular version 11.0.0 et bootstrap 4.5.3' +
          ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
      });
  }  
  scrollToElement($element): void {

  }

}

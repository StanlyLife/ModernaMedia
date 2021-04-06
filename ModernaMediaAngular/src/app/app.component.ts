import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { faAppleAlt, faAtlas, faBook, faCog, faCogs, faCrop, faCropAlt, faDesktop, faFileArchive, faFileCode, faGlobe, faGlobeAmericas, faImage, faMobile, faOtter, faPaintBrush, faProcedures, faStore, faTrademark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faglobe = faGlobe;
  faapp = faMobile;
  fasoftware = faCog;

  falogo = faTrademark;
  fawebdesign = faCropAlt;
  fannet = faGlobeAmericas;
  
  facontent = faBook;
  faonpage = faFileCode;
  faoffpage = faFileArchive;

  constructor(
    private as: AppService,
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
  }  
  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }
}

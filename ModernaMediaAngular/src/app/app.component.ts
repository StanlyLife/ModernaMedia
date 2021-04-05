import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { faAppleAlt, faCog, faGlobe, faMobile, faProcedures, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faglobe = faGlobe;
  faapp = faMobile;
  fasoftware = faCog;
  
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

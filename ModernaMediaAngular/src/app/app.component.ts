import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meta } from '@angular/platform-browser';
import { faAppleAlt, faCog, faGlobe, faMobile, faProcedures, faStore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ModernaMediaAngular';
  test:string;
  text:string;
  faglobe = faGlobe;
  faapp = faMobile;
  fasoftware = faCog;
  weather$: Observable<any>;
  SampleMessage="Example of Angular Async Pipe";    
  
  constructor(
    private as: AppService,
    private meta: Meta
    ) {}

   ngOnInit() {
     this.meta.addTags([
       {name: "description", content: "ModernaMedia er et digital byrå med ekstremt høy kompetanse innenfor web, seo og design!"},
       {name: 'robots', content: 'index, follow'}
     ]);
    // //non async
    // var t = this.as.getTest();
    // t.subscribe(res => {
    //   this.test = res;
    //   console.log(this.test);
    // });

    // var x = this.as.getWeather();
    // x.subscribe( res =>
    //   {
    //     // this.weather$ = res;
    //     this.text = res[0].date;
    //     console.log(this.text);
    //   }
    // );


  }  
}

import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ModernaMediaAngular';
  test:string;
  text:string;

  weather$: Observable<any>;
  SampleMessage="Example of Angular Async Pipe";    
  
  constructor(private as: AppService, ) {}

   ngOnInit() {
    // await this.getWeatherAsyncPipe();
    //non async
    var t = this.as.getTest();
    t.subscribe(res => {
      this.test = res;
      console.log(this.test);
    });

    var x = this.as.getWeather();
    x.subscribe( res =>
      {
        // this.weather$ = res;
        this.text = res[0].date;
        console.log(this.text);
      }
    );


  }  
}

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
  text:string = "test"

  weather$: Observable<any>;
  SampleMessage="Example of Angular Async Pipe";    
  
  constructor(private as: AppService, ) {}

  async ngOnInit() {
    await this.getWeatherAsyncPipe();
    //non async
    this.as.getWeather().subscribe( res =>
      {
        this.text = res[0].date;
        console.log("got resolution");
        console.log(res);
        console.log(this.text);
      }
    );


  }
  public async getWeatherAsyncPipe() {    
        this.SampleMessage="Example of Angular Async Pipe";    
        this.weather$ = await this.as.getWeatherAsync();    
        console.log(this.weather$);
      }    
}

import { TransferState, makeStateKey } from '@angular/platform-browser';
import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public waeatherUrl = environment.url + '/api/weatherForecast/get';
  public testUrl = environment.url + '/api/test/get';

  constructor(
    private http: HttpClient,
    ) { }
  private headers = new HttpHeaders(
    {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : 'http://localhost:4200'
    });

  getWeather() : Observable<any> {
    var x = this.http.get(this.waeatherUrl, {headers: this.headers}).pipe();
    console.info("GET WEATHER");
    return x;
  }

  public getWeatherAsync():Observable<any> {
    return this.http.get<any[]>(this.waeatherUrl);    
  }

  public getTest():Observable<any> {
    return this.http.get<any[]>(this.testUrl);    
  }

  private handleError(err) {  
    console.log("ERROR IN APP SERVICE");
    console.log(err.error);
    console.error(err);
  }  

}

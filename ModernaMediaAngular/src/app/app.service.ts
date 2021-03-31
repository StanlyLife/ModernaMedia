import { environment } from './../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public waeatherUrl = environment.url + '/api/weatherForecast/get'
  constructor(private http: HttpClient) { }

  getWeather() : Observable<object> {
    const headers = new HttpHeaders(
      {'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : 'http://localhost:4200'
    }
      );
    var x = this.http.get(this.waeatherUrl, {headers: headers}).pipe();
    return x;
  }

  public getWeatherAsync():Observable<any> {
    return this.http.get<any[]>(this.waeatherUrl);    
  }

  private handleError(err) {  
    console.log("ERROR IN APP SERVICE");
    console.log(err.error);
    console.error(err);
  }  

}

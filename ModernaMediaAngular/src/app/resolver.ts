import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute , Router , Resolve , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable()
export class getUsersResolver implements Resolve<any>{
    

    constructor(private http: HttpClient) {
    }
    resolve(url) {
      return this.http.get(url);
    }
}
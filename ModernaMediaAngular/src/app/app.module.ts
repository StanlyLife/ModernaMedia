import { BrowserStateInterceptor } from './interceptors/browserstate.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TransferHttpCacheModule } from '@nguniversal/common'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

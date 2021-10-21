import { DesignModule } from './design/design.module';
import { SeoModule } from './seo/seo.module';
import { UtviklingModule } from './utvikling/utvikling.module';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LandingpageComponent } from './home/landingpage/landingpage.component';
import { TjenesterComponent } from './home/tjenester/tjenester.component';
import { MinibloggComponent } from './home/miniblogg/miniblogg.component';
import { OmossComponent } from './home/omoss/omoss.component';
import { TjenesterTjenesteComponent } from './home/tjenester/tjenester-tjeneste/tjenester-tjeneste.component';
import { MinibloggBlogsComponent } from './home/miniblogg/miniblogg-blogs/miniblogg-blogs.component';
import { KontaktComponent } from './home/kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    LandingpageComponent,
    TjenesterComponent,
    MinibloggComponent,
    OmossComponent,
    TjenesterTjenesteComponent,
    MinibloggBlogsComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    UtviklingModule,
    SeoModule,
    DesignModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch:'full',
        component: HomeComponent,
        data: {animation: "HomePage"}
      },
      {path: "**",redirectTo:"error"},
      {path: 'error', component: NotFoundComponent,data: {animation: "AboutPage"}},
    ])
  ],
  exports: [RouterModule],
  bootstrap: [
    AppComponent,
    NavBarComponent,
    FooterComponent
  ],
})
export class AppModule {}

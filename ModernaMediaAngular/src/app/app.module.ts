import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { AboutModule } from './about/about.module';
import { BloggModule } from './blogg/blogg.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignModule } from './design/design.module';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { KontaktComponent } from './home/kontakt/kontakt.component';
import { LandingpageComponent } from './home/landingpage/landingpage.component';
import { MinibloggBlogsComponent } from './home/miniblogg/miniblogg-blogs/miniblogg-blogs.component';
import { MinibloggComponent } from './home/miniblogg/miniblogg.component';
import { OmossComponent } from './home/omoss/omoss.component';
import { TjenesterTjenesteComponent } from './home/tjenester/tjenester-tjeneste/tjenester-tjeneste.component';
import { TjenesterComponent } from './home/tjenester/tjenester.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SeoModule } from './seo/seo.module';
import { UtviklingModule } from './utvikling/utvikling.module';

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
    BloggModule,
    AboutModule,
    ComponentsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
        data: { animation: 'HomePage' },
      },
      { path: '**', redirectTo: 'error' },
      {
        path: 'error',
        component: NotFoundComponent,
        data: { animation: 'AboutPage' },
      },
    ]),
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent, NavBarComponent, FooterComponent],
})
export class AppModule {}

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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    UtviklingModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch:'full',
        component: HomeComponent,
        data: {animation: "HomePage"}
      },
      // {
      //   path: '',
      //   component: HomeComponent
      // },
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

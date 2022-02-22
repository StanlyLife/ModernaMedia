import { ToolsModule } from './tools/tools.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//error
import { NotFoundComponent } from './error/not-found/not-found.component';
//globals
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

// homev2
import { HomeComponent } from './home/homev2/home/home.component';
import { LandingComponent } from './home/homev2/landing/landing.component';
import { ServicesComponent } from './home/homev2/services/services.component';
import { AboutComponent } from './home/homev2/about/about.component';
import { ContactComponent } from './home/homev2/contact/contact.component';
import { UspComponent } from './home/homev2/usp/usp.component';
import { PricesComponent } from './home/homev2/prices/prices.component';
import { BlogShowcaseComponent } from './home/homev2/blog-showcase/blog-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    //globals
    NavBarComponent,
    FooterComponent,
    // homev2
    LandingComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    UspComponent,
    PricesComponent,
    BlogShowcaseComponent,
    HomeComponent,
    //
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    ToolsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
      { path: '**', redirectTo: 'error' },
      {
        path: 'error',
        component: NotFoundComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent, NavBarComponent, FooterComponent],
})
export class AppModule {}

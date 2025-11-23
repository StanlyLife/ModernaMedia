import { BloggModule } from './blogg/blogg.module';
import { TjenesterModule } from './Tjenester/tjenester.module';
import { ToolsModule } from './tools/tools.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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

//Modules
import { MiscModule } from './misc/misc.module';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { RequestPriceFormComponent } from './forms/request-price-form/request-price-form.component';
import { RequestSeoAuditFormComponent } from './forms/request-audit-form/request-seo-audit-form.component';
import { RequestWebsiteAuditFormComponent } from './forms/request-website-audit-form/request-website-audit-form.component';
import { CaseStudiesComponent } from './home/homev2/case-studies/case-studies.component';
import { TestimonialsComponent } from './home/homev2/testimonials/testimonials.component';

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
    ContactFormComponent,
    RequestPriceFormComponent,
    RequestSeoAuditFormComponent,
    RequestWebsiteAuditFormComponent,
    CaseStudiesComponent,
    TestimonialsComponent,
    //
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    TjenesterModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          pathMatch: 'full',
          component: HomeComponent,
        },
        {
          path: 'kontakt',
          component: ContactFormComponent,
        },
        {
          path: 'pris',
          component: RequestPriceFormComponent,
        },
        {
          path: 'gratis-hjemmeside-analyse',
          component: RequestWebsiteAuditFormComponent,
        },
        {
          path: 'gratis-seo-analyse',
          component: RequestSeoAuditFormComponent,
        },
        { path: '**', redirectTo: 'error' },
        {
          path: 'error',
          component: NotFoundComponent,
        },
      ],
      { scrollPositionRestoration: 'enabled' }
    ),
    BloggModule,
    MiscModule,
    ToolsModule,
  ],
  providers: [provideClientHydration()],
  exports: [RouterModule],
  bootstrap: [AppComponent, NavBarComponent, FooterComponent],
})
export class AppModule {}

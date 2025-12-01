import { Routes } from '@angular/router';
import { BloggPostRestaurantHjemmesideComponent } from './blogg/blogg-post-restaurant-hjemmeside/blogg-post-restaurant-hjemmeside.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { RequestPriceFormComponent } from './forms/request-price-form/request-price-form.component';
import { RequestSeoAuditFormComponent } from './forms/request-audit-form/request-seo-audit-form.component';
import { RequestWebsiteAuditFormComponent } from './forms/request-website-audit-form/request-website-audit-form.component';
import { HomeComponent } from './home/homev2/home/home.component';
import { NotFoundComponent } from './error/not-found/not-found.component';
import { DesignComponent } from './Tjenester/design/design.component';
import { DesignGrafiskComponent } from './Tjenester/design/design-grafisk/design-grafisk.component';
import { DesignLogoComponent } from './Tjenester/design/design-logo/design-logo.component';
import { DesignWebComponent } from './Tjenester/design/design-web/design-web.component';
import { SeoComponent } from './Tjenester/seo/seo.component';
import { SeoTekniskComponent } from './Tjenester/seo/seo-teknisk/seo-teknisk.component';
import { SeoInnholdsproduksjonComponent } from './Tjenester/seo/seo-innholdsproduksjon/seo-innholdsproduksjon.component';
import { SeoOffPageComponent } from './Tjenester/seo/seo-off-page/seo-off-page.component';
import { UtviklingComponent } from './Tjenester/utvikling/utvikling.component';
import { UtviklingHjemmesideComponent } from './Tjenester/utvikling/utvikling-hjemmeside/utvikling-hjemmeside.component';
import { UtviklingSystemComponent } from './Tjenester/utvikling/utvikling-system/utvikling-system.component';
import { DeveloperSalarayChartsComponent } from './tools/developer-salaray-charts/developer-salaray-charts.component';
import { DesignsystemComponent } from './misc/designsystem/designsystem.component';
import { CaseStudyPageComponent } from './case-studies/case-study-page/case-study-page.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'kontakt', component: ContactFormComponent },
  { path: 'pris', component: RequestPriceFormComponent },
  {
    path: 'gratis-hjemmeside-analyse',
    component: RequestWebsiteAuditFormComponent,
  },
  { path: 'gratis-seo-analyse', component: RequestSeoAuditFormComponent },
  { path: 'tjenester/bedrift/design', component: DesignComponent },
  {
    path: 'tjenester/bedrift/design/grafisk-design',
    component: DesignGrafiskComponent,
  },
  {
    path: 'tjenester/bedrift/design/logo-design',
    component: DesignLogoComponent,
  },
  {
    path: 'tjenester/bedrift/design/web-design',
    component: DesignWebComponent,
  },
  {
    path: 'tjenester/bedrift/seo/søkemotoroptimalisering',
    component: SeoComponent,
  },
  { path: 'tjenester/bedrift/seo', component: SeoComponent },
  { path: 'tjenester/bedrift/seo/teknisk-seo', component: SeoTekniskComponent },
  {
    path: 'tjenester/bedrift/seo/innholdsproduksjon',
    component: SeoInnholdsproduksjonComponent,
  },
  {
    path: 'tjenester/bedrift/seo/off-page-seo',
    component: SeoOffPageComponent,
  },
  { path: 'tjenester/bedrift/utvikling', component: UtviklingComponent },
  {
    path: 'tjenester/bedrift/utvikling/hjemmeside-bedrift',
    component: UtviklingHjemmesideComponent,
  },
  {
    path: 'tjenester/bedrift/utvikling/programvare',
    component: UtviklingSystemComponent,
  },
  {
    path: 'blogg/hjemmeside-for-restaurant-bedrift',
    component: BloggPostRestaurantHjemmesideComponent,
  },
  { path: 'blogg/utviklerlonn', component: DeveloperSalarayChartsComponent },
  {
    path: 'case-studies/:slug',
    component: CaseStudyPageComponent,
  },
  { path: 'misc/designsystem', component: DesignsystemComponent },
  { path: 'error', component: NotFoundComponent },
  { path: '**', redirectTo: 'error' },
];

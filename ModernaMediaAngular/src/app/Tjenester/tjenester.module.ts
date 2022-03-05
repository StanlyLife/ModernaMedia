import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design/design.component';
import { UtviklingComponent } from './utvikling/utvikling.component';
import { SeoComponent } from './seo/seo.component';
import { TjenesterHeaderComponent } from './components/tjenester-header/tjenester-header.component';
import { TjenesterServicesComponent } from './components/tjenester-services/tjenester-services.component';
import { TjenesterInfoSectionComponent } from './components/tjenester-info-section/tjenester-info-section.component';
import { CtaCardComponent } from './components/cta-card/cta-card.component';
import { UtviklingHjemmesideComponent } from './utvikling/utvikling-hjemmeside/utvikling-hjemmeside.component';
import { UtviklingSystemComponent } from './utvikling/utvikling-system/utvikling-system.component';
import { SeoTekniskComponent } from './seo/seo-teknisk/seo-teknisk.component';
import { SeoInnholdsproduksjonComponent } from './seo/seo-innholdsproduksjon/seo-innholdsproduksjon.component';
import { SeoOffPageComponent } from './seo/seo-off-page/seo-off-page.component';
import { DesignGrafiskComponent } from './design/design-grafisk/design-grafisk.component';
import { DesignLogoComponent } from './design/design-logo/design-logo.component';
import { DesignWebComponent } from './design/design-web/design-web.component';

const routes: Routes = [
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
  {
    path: 'tjenester/bedrift/seo/teknisk-seo',
    component: SeoTekniskComponent,
  },
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
    path: 'tjenester/bedrift/utvikling/datasystem',
    component: UtviklingSystemComponent,
  },
];

@NgModule({
  declarations: [
    DesignComponent,
    UtviklingComponent,
    SeoComponent,
    TjenesterHeaderComponent,
    TjenesterServicesComponent,
    TjenesterInfoSectionComponent,
    CtaCardComponent,
    UtviklingHjemmesideComponent,
    UtviklingSystemComponent,
    SeoTekniskComponent,
    SeoInnholdsproduksjonComponent,
    SeoOffPageComponent,
    DesignGrafiskComponent,
    DesignLogoComponent,
    DesignWebComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class TjenesterModule {}

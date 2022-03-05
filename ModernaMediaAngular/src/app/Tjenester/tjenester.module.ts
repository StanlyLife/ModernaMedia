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

const routes: Routes = [
  { path: 'tjenester/bedrift/design', component: DesignComponent },
  {
    path: 'tjenester/bedrift/seo/søkemotoroptimalisering',
    component: SeoComponent,
  },
  { path: 'tjenester/bedrift/utvikling', component: UtviklingComponent },
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
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class TjenesterModule {}

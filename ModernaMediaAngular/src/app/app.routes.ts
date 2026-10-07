import { Routes } from '@angular/router';
import { HomeComponent } from './home/homev2/home/home.component';

// The homepage is part of the main bundle; every other page is loaded on demand.
const article = (slug: string) => ({
  path: `blogg/${slug}`,
  data: { slug },
  loadComponent: () =>
    import('./v2/pages/article.page').then((m) => m.ArticlePageComponent),
});

export const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'tjenester',
    loadComponent: () =>
      import('./v2/pages/tjenester.page').then((m) => m.TjenesterPageComponent),
  },
  {
    path: 'priser',
    loadComponent: () =>
      import('./v2/pages/priser.page').then((m) => m.PriserPageComponent),
  },
  {
    path: 'takk',
    loadComponent: () =>
      import('./v2/pages/takk.page').then((m) => m.TakkPageComponent),
  },
  {
    path: 'personvern',
    loadComponent: () =>
      import('./v2/pages/personvern.page').then((m) => m.PersonvernPageComponent),
  },
  {
    path: 'digitalbyra-oslo',
    loadComponent: () =>
      import('./v2/pages/oslo.page').then((m) => m.OsloPageComponent),
  },
  {
    path: 'blogg',
    pathMatch: 'full',
    loadComponent: () =>
      import('./v2/pages/blogg.page').then((m) => m.BloggPageComponent),
  },
  article('hva-koster-en-nettside'),
  article('teknisk-seo-sjekkliste'),
  article('slik-far-du-en-god-logo'),
  article('google-bedriftsprofil'),
  {
    path: 'kontakt',
    loadComponent: () =>
      import('./forms/contact-form/contact-form.component').then(
        (m) => m.ContactFormComponent
      ),
  },
  {
    path: 'pris',
    loadComponent: () =>
      import('./forms/request-price-form/request-price-form.component').then(
        (m) => m.RequestPriceFormComponent
      ),
  },
  {
    path: 'gratis-hjemmeside-analyse',
    loadComponent: () =>
      import(
        './forms/request-website-audit-form/request-website-audit-form.component'
      ).then((m) => m.RequestWebsiteAuditFormComponent),
  },
  {
    path: 'gratis-seo-analyse',
    loadComponent: () =>
      import('./forms/request-audit-form/request-seo-audit-form.component').then(
        (m) => m.RequestSeoAuditFormComponent
      ),
  },
  {
    path: 'tjenester/bedrift/design',
    loadComponent: () =>
      import('./Tjenester/design/design.component').then(
        (m) => m.DesignComponent
      ),
  },
  {
    path: 'tjenester/bedrift/design/grafisk-design',
    loadComponent: () =>
      import('./Tjenester/design/design-grafisk/design-grafisk.component').then(
        (m) => m.DesignGrafiskComponent
      ),
  },
  {
    path: 'tjenester/bedrift/design/logo-design',
    loadComponent: () =>
      import('./Tjenester/design/design-logo/design-logo.component').then(
        (m) => m.DesignLogoComponent
      ),
  },
  {
    path: 'tjenester/bedrift/design/web-design',
    loadComponent: () =>
      import('./Tjenester/design/design-web/design-web.component').then(
        (m) => m.DesignWebComponent
      ),
  },
  {
    // Legacy URL; the server answers it with a 301 to /tjenester/bedrift/seo.
    path: 'tjenester/bedrift/seo/søkemotoroptimalisering',
    redirectTo: 'tjenester/bedrift/seo',
  },
  {
    path: 'tjenester/bedrift/seo',
    loadComponent: () =>
      import('./Tjenester/seo/seo.component').then((m) => m.SeoComponent),
  },
  {
    path: 'tjenester/bedrift/seo/teknisk-seo',
    loadComponent: () =>
      import('./Tjenester/seo/seo-teknisk/seo-teknisk.component').then(
        (m) => m.SeoTekniskComponent
      ),
  },
  {
    path: 'tjenester/bedrift/seo/innholdsproduksjon',
    loadComponent: () =>
      import(
        './Tjenester/seo/seo-innholdsproduksjon/seo-innholdsproduksjon.component'
      ).then((m) => m.SeoInnholdsproduksjonComponent),
  },
  {
    path: 'tjenester/bedrift/seo/off-page-seo',
    loadComponent: () =>
      import('./Tjenester/seo/seo-off-page/seo-off-page.component').then(
        (m) => m.SeoOffPageComponent
      ),
  },
  {
    path: 'tjenester/bedrift/utvikling',
    loadComponent: () =>
      import('./Tjenester/utvikling/utvikling.component').then(
        (m) => m.UtviklingComponent
      ),
  },
  {
    path: 'tjenester/bedrift/utvikling/hjemmeside-bedrift',
    loadComponent: () =>
      import(
        './Tjenester/utvikling/utvikling-hjemmeside/utvikling-hjemmeside.component'
      ).then((m) => m.UtviklingHjemmesideComponent),
  },
  {
    path: 'tjenester/bedrift/utvikling/programvare',
    loadComponent: () =>
      import(
        './Tjenester/utvikling/utvikling-system/utvikling-system.component'
      ).then((m) => m.UtviklingSystemComponent),
  },
  {
    path: 'blogg/hjemmeside-for-restaurant-bedrift',
    loadComponent: () =>
      import(
        './blogg/blogg-post-restaurant-hjemmeside/blogg-post-restaurant-hjemmeside.component'
      ).then((m) => m.BloggPostRestaurantHjemmesideComponent),
  },
  {
    path: 'blogg/utviklerlonn',
    loadComponent: () =>
      import(
        './tools/developer-salaray-charts/developer-salaray-charts.component'
      ).then((m) => m.DeveloperSalarayChartsComponent),
  },
  {
    path: 'case-studies',
    loadComponent: () =>
      import('./case-studies/case-studies-list/case-studies-list.component').then(
        (m) => m.CaseStudiesListComponent
      ),
  },
  {
    path: 'om-oss',
    loadComponent: () =>
      import('./about-us/about-us.component').then((m) => m.AboutUsComponent),
  },
  {
    path: 'case-study/:slug',
    loadComponent: () =>
      import('./case-studies/case-study-page/case-study-page.component').then(
        (m) => m.CaseStudyPageComponent
      ),
  },
  {
    path: 'misc/designsystem',
    loadComponent: () =>
      import('./misc/designsystem/designsystem.component').then(
        (m) => m.DesignsystemComponent
      ),
  },
  {
    path: 'error',
    loadComponent: () =>
      import('./error/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
  {
    // Rendered in place (no redirect) so the server can answer with a real 404.
    path: '**',
    loadComponent: () =>
      import('./error/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

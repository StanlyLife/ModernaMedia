import { ApplicationConfig } from '@angular/core';
import {
  provideServerRendering,
  RenderMode,
  ServerRoute,
  withRoutes,
} from '@angular/ssr';
import { CASE_STUDIES } from './case-studies/case-studies.data';
import { ServerWindowRefService } from './services/server-window-ref.service';
import { WindowRefService } from './services/window-ref.service';

// Pages with no per-request data are rendered to static HTML at build time.
const PRERENDERED_PATHS = [
  '',
  'kontakt',
  'pris',
  'gratis-hjemmeside-analyse',
  'gratis-seo-analyse',
  'om-oss',
  'case-studies',
  'tjenester/bedrift/design',
  'tjenester/bedrift/design/grafisk-design',
  'tjenester/bedrift/design/logo-design',
  'tjenester/bedrift/design/web-design',
  'tjenester/bedrift/seo',
  'tjenester/bedrift/seo/teknisk-seo',
  'tjenester/bedrift/seo/innholdsproduksjon',
  'tjenester/bedrift/seo/off-page-seo',
  'tjenester/bedrift/utvikling',
  'tjenester/bedrift/utvikling/hjemmeside-bedrift',
  'tjenester/bedrift/utvikling/programvare',
  'blogg/hjemmeside-for-restaurant-bedrift',
  'blogg/utviklerlonn',
  'tjenester',
  'priser',
  'takk',
  'personvern',
  'digitalbyra-oslo',
  'blogg',
  'blogg/hva-koster-en-nettside',
  'blogg/teknisk-seo-sjekkliste',
  'blogg/slik-far-du-en-god-logo',
  'blogg/google-bedriftsprofil',
];

const serverRoutes: ServerRoute[] = [
  ...PRERENDERED_PATHS.map(
    (path): ServerRoute => ({ path, renderMode: RenderMode.Prerender })
  ),
  {
    path: 'case-study/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return CASE_STUDIES.map((study) => ({ slug: study.slug }));
    },
  },
  {
    path: 'tjenester/bedrift/seo/søkemotoroptimalisering',
    renderMode: RenderMode.Server,
    status: 301,
  },
  {
    path: 'misc/designsystem',
    renderMode: RenderMode.Server,
  },
  {
    path: 'error',
    renderMode: RenderMode.Server,
    status: 404,
  },
  {
    // Any URL that no route above matches renders the not-found page.
    path: '**',
    renderMode: RenderMode.Server,
    status: 404,
  },
];

export const appServerConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    {
      provide: WindowRefService,
      useClass: ServerWindowRefService,
    },
  ],
};

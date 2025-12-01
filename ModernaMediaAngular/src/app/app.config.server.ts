import { ApplicationConfig } from '@angular/core';
import { provideServerRendering, RenderMode, withRoutes } from '@angular/ssr';
import { CASE_STUDIES } from './case-studies/case-studies.data';
import { ServerWindowRefService } from './services/server-window-ref.service';
import { WindowRefService } from './services/window-ref.service';

export const appServerConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(
      withRoutes([
        {
          path: 'case-studies/:slug',
          renderMode: RenderMode.Prerender,
          async getPrerenderParams() {
            return CASE_STUDIES.map((study) => ({ slug: study.slug }));
          },
        },
        {
          path: '**',
          renderMode: RenderMode.Server,
        },
      ])
    ),
    {
      provide: WindowRefService,
      useClass: ServerWindowRefService,
    },
  ],
};

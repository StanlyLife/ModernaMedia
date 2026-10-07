import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.disable('x-powered-by');

app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

/**
 * Old URLs (from earlier sitemaps and links) moved permanently.
 */
const LEGACY_REDIRECTS: Record<string, string> = {
  '/bestill/kontakt': '/kontakt',
  '/bestill/seo-analyse': '/gratis-seo-analyse',
  '/bestill/nettside-analyse': '/gratis-hjemmeside-analyse',
  '/tjenester/bedrift/seo/søkemotoroptimalisering': '/tjenester/bedrift/seo',
  '/tjenester/bedrift/seo/sokemotoroptimalisering': '/tjenester/bedrift/seo',
  '/tjenester/bedrift/seo/teknisk': '/tjenester/bedrift/seo/teknisk-seo',
  '/tjenester/bedrift/seo/innhold': '/tjenester/bedrift/seo/innholdsproduksjon',
  '/tjenester/bedrift/seo/off-page': '/tjenester/bedrift/seo/off-page-seo',
  '/tjenester/bedrift/design/logo': '/tjenester/bedrift/design/logo-design',
  '/tjenester/bedrift/design/webdesign': '/tjenester/bedrift/design/web-design',
  '/tjenester/bedrift/design/grafisk': '/tjenester/bedrift/design/grafisk-design',
};

app.use((req, res, next) => {
  let path: string;
  try {
    path = decodeURIComponent(req.path).replace(/\/+$/, '');
  } catch {
    return next();
  }
  const target = LEGACY_REDIRECTS[path];
  if (target) {
    res.redirect(301, target);
    return;
  }
  next();
});

/**
 * Serve static files from /browser. Only content-hashed bundles are cached
 * "forever"; files that keep their name between deploys get shorter lifetimes.
 */
app.use(
  express.static(browserDistFolder, {
    index: false,
    redirect: false,
    setHeaders: (res, filePath) => {
      const file = filePath.replace(/\\/g, '/');
      let cacheControl = 'public, max-age=86400';
      if (/-[A-Z0-9]{8}\.(js|mjs|css)$/.test(file) || file.includes('/media/')) {
        cacheControl = 'public, max-age=31536000, immutable';
      } else if (/\.(txt|xml)$/.test(file)) {
        cacheControl = 'public, max-age=3600';
      } else if (file.includes('/assets/')) {
        cacheControl = 'public, max-age=2592000';
      }
      res.setHeader('Cache-Control', cacheControl);
    },
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => {
      if (!response) {
        return next();
      }
      // HTML must be revalidated so a deploy is visible right away.
      res.setHeader('Cache-Control', 'no-cache');
      return writeResponseToNodeResponse(response, res);
    })
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);

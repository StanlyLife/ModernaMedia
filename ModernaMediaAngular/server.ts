import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr/node';
import compression from 'compression';
import express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import bootstrap from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  server.use(compression());
  const devBrowserPath = join(process.cwd(), 'dist', 'dev', 'browser');
  const prodBrowserPath = join(
    process.cwd(),
    'dist',
    'ModernaMediaAngular',
    'browser'
  );
  const distFolder = existsSync(devBrowserPath)
    ? devBrowserPath
    : prodBrowserPath;
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? join(distFolder, 'index.original.html')
    : join(distFolder, 'index.html');
  const robotsPath = join(distFolder, 'robots.txt');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  // Express 5 no longer accepts wildcard strings such as '*.*', so use a regex
  // that catches any request containing an extension and serve it statically.
  server.get(
    /\.[^/]+$/,
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  server.get('/robots.txt', (req, res, next) => {
    if (existsSync(robotsPath)) {
      res.sendFile(robotsPath);
    } else {
      next();
    }
  });

  // All regular GET routes use the Angular engine. Avoid wildcard strings because
  // Express 5's path-to-regexp no longer accepts bare '*' patterns.
  server.use((req, res, next) => {
    if (req.method !== 'GET') {
      return next();
    }

    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: distFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';

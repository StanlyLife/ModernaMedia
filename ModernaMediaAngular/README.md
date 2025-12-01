# ModernaMediaAngular

Angular 21 + @angular/ssr application for Moderna Media. The project ships with both the browser bundle and an Express host (see `server.ts`) so we can deploy a single Node process that handles SSR, caching, and static assets.

## Requirements

- Node.js 18.x (required for Angular 18 toolchain)
- npm 9+
- `npm install` must be run from the repo root; a postinstall hook (`tools/fix-babel-runtime.cjs`) automatically syncs the correct `@babel/runtime` version into Angular's build tooling, so leave that script in place.
- `@swimlane/ngx-charts` still only declares Angular <=20 as a peer dependency; the repo-level `.npmrc` sets `legacy-peer-deps=true` so npm will install anyway until Swimlane ships Angular 21 metadata.

## Install

```powershell
npm install
```

> `npm install` also copies `node_modules/@babel/runtime` into `node_modules/@angular-devkit/build-angular/node_modules` to keep Babel helpers in sync. Do not delete `tools/fix-babel-runtime.cjs` unless you replace it with another solution.
>
> The install runs with `legacy-peer-deps` (via `.npmrc`) so the unresolved Angular 21 peer warning from `@swimlane/ngx-charts@23.x` does not block the install. Remove this override once Swimlane publishes Angular 21 peer support.

## Useful npm scripts

| Command             | Description                                                                 |
| ------------------- | --------------------------------------------------------------------------- |
| `npm run start`     | Client-only dev server with HMR on port 4200                                |
| `npm run dev:ssr`   | Live-reloading SSR dev server (wraps the `serve-ssr` target)                |
| `npm run build`     | Production browser build -> `dist/ModernaMediaAngular/browser`              |
| `npm run build:ssr` | Builds browser + server bundles for deployment                              |
| `npm run serve:ssr` | Runs `node dist/ModernaMediaAngular/server/main.js` (use after `build:ssr`) |
| `npm run prerender` | Generates static HTML via the SSR server configuration                      |
| `npm test`          | Karma unit tests                                                            |
| `npm run e2e`       | Protractor end-to-end tests                                                 |

## Development workflows

### SPA-only preview

```powershell
npm run start
```

Visit `http://localhost:4200/`. Hot reload handles most template/style edits quickly.

### Full SSR preview

```powershell
npm run dev:ssr
```

The script maps to the custom `serve-ssr` architect target (see `angular.json`) which runs the standard dev server with the SSR build pipeline enabled. Browser and server bundles rebuild on change while Express streams responses from `server.ts` at `http://localhost:4200/`.

### Styling conventions

- Common tokens/mixins/fonts live in `src/variables.scss` and are consumed via Sass modules.
- Any SCSS file that needs those definitions must use the module syntax:
  ```scss
  @use "src/variables" as *;
  ```
- Legacy `@import` has been removed project-wide to avoid Dart Sass deprecation warnings. Keep using `@use/@forward` when introducing new partials.

### SSR bootstrap notes

- `src/main.server.ts` bootstraps the standalone app with `bootstrapApplication` and now receives the `BootstrapContext` argument provided by Angular's SSR pipeline. If you customize the server bootstrap, preserve that signature so route extraction and prerendering continue to work.

## Production build + hosting

1. Compile optimized bundles:
   ```powershell
   npm run build:ssr
   ```
   Outputs go to `dist/ModernaMediaAngular/browser` and `dist/ModernaMediaAngular/server`.
2. Launch the compiled Express app (locally or on the server):
   ```powershell
   npm run serve:ssr
   ```
   or
   ```powershell
   node dist/ModernaMediaAngular/server/main.js
   ```
3. Behind IIS/Nginx/Apache, proxy all routes to the Node process. Static assets live in `dist/ModernaMediaAngular/browser`; `server.ts` already serves them with long-lived caching and handles `robots.txt`.

### Example: Ubuntu server under `/var/www/ModernaMedia`

1. **Get the code or build artifacts onto the box**
   - Git checkout: `git clone https://github.com/<org>/ModernaMedia.git /var/www/ModernaMedia/Angular && cd /var/www/ModernaMedia/Angular`
   - OR copy the already-built `dist/` folder into `/var/www/ModernaMedia/Angular/dist` (as in your current layout: `/var/www/ModernaMedia/Angular/dist/ModernaMediaAngular`).
2. **Install runtime dependencies** (skip if you copied the full repo and already ran `npm install`):
   ```bash
   cd /var/www/ModernaMedia/Angular
   npm ci --omit=dev
   ```
   If you only deploy the `dist` folder, install from the packaged `package-lock.json` inside `dist/ModernaMediaAngular` before starting the server:
   ```bash
   cd /var/www/ModernaMedia/Angular/dist/ModernaMediaAngular
   npm ci --omit=dev
   ```
3. **Start the SSR server**
   ```bash
   cd /var/www/ModernaMedia/Angular
   PORT=4000 node dist/ModernaMediaAngular/server/main.js
   ```
   Run it under a process manager (PM2, systemd, etc.) so it restarts automatically:
   ```bash
   pm2 start dist/ModernaMediaAngular/server/main.js --name moderna-media --env production --cwd /var/www/ModernaMedia/Angular
   ```
4. **Front it with Nginx/Apache** (recommended)
   - Reverse proxy `https://your-domain` to `http://127.0.0.1:4000`.
   - Serve TLS and configure gzip/caching at the proxy; the Express app already serves `/browser` assets with far-future caching headers.
   - If you want Nginx to handle static files directly, point it at `/var/www/ModernaMedia/Angular/dist/ModernaMediaAngular/browser` and keep `/` proxied to Node for SSR routes.

Whenever you deploy new code:

```bash
cd /var/www/ModernaMedia/Angular
git pull # or copy the fresh build
npm ci --omit=dev
npm run build:ssr
pm2 restart moderna-media
```

## Testing

- Unit tests: `npm test`
- Legacy e2e: `npm run e2e` (Protractor is deprecated; migrate when possible)

## Notes

- The build currently warns that target browsers no longer require Autoprefixer. Update `.browserslistrc` if you want silent builds.
- If you install new Angular build tooling, keep an eye on the `postinstall` script so the Babel runtime stays in sync.

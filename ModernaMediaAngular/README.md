# ModernaMediaAngular

Angular 21 + @angular/ssr application for Moderna Media (modernamedia.no). The build produces browser bundles, prerendered HTML for every static page, and an Express host (`src/server.ts`) that handles SSR, redirects, caching headers and static assets in a single Node process.

## Requirements

- Node.js 24 LTS (Angular 21 supports `^20.19 || ^22.12 || >=24`; the deploy workflow uses 24)
- npm 11+

## Install

```powershell
npm install
```

No `legacy-peer-deps`, postinstall hooks or overrides are needed any more.

## Useful npm scripts

| Command             | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| `npm run start`     | Dev server with SSR on port 4200                                           |
| `npm run build`     | Production build (same as `build:ssr`)                                     |
| `npm run build:ssr` | Builds browser + server bundles and prerenders static pages                |
| `npm run serve:ssr` | Runs `node dist/ModernaMediaAngular/server/server.mjs` (after a build)     |
| `npm test`          | Unit tests (Vitest)                                                        |
| `npm run analyze`   | Production build with `stats.json`; open it at https://esbuild.github.io/analyze/ |

## Development workflows

```powershell
npm run start
```

Visit `http://localhost:4200/`. The application builder's dev server renders on the server too.

### Running the production server locally

The SSR server only renders requests for hosts listed in `angular.json` (`security.allowedHosts`), which protects against SSRF/host-header attacks. For local testing allow `localhost` explicitly:

```powershell
$env:NG_ALLOWED_HOSTS = "localhost"; npm run serve:ssr
```

### Styling conventions

- Tokens and mixins live in `src/variables.scss` and are consumed with `@use "src/variables" as *;`.
- `src/variables.scss` must not output CSS: every component that `@use`s it would repeat that CSS.
- Fonts are self-hosted WOFF2 (Latin subset) in `src/assets/fonts/woff2` and declared once in `src/scss/_fonts.scss`, which only `src/styles.scss` loads. Never `@use` the fonts file from a component.
- `_fonts.scss` also defines metric-matched fallbacks ("Mosk Fallback", "Plex Fallback", "Pier Fallback": local Arial with `size-adjust`), listed right after each web font in the `$ff-*` stacks, so the font swap does not shift the layout.
- Critical CSS inlining is turned off in `angular.json` on purpose: the global stylesheet is small (~2 KB gzipped), and loading it normally prevented a large layout shift on the case-study pages.

### Images

- Homepage images live in `src/assets/img/home` as WebP in 1x/2x widths (`name-<width>.webp`) and are referenced with `srcset`, `sizes`, `width`/`height` and `loading="lazy"` (except the hero, which uses `fetchpriority="high"`).
- Use absolute `/assets/...` paths in templates.

### Rendering and routing

- Every page except the homepage is lazy-loaded (`loadComponent` in `src/app/app.routes.ts`).
- Homepage sections below the fold use `@defer (on idle; hydrate on viewport)`: they are server-rendered for crawlers and hydrate when scrolled into view (incremental hydration).
- `src/app/app.config.server.ts` lists the prerendered pages; unknown URLs render the not-found page with HTTP 404.
- Old URLs are 301-redirected in `src/server.ts` (`LEGACY_REDIRECTS`).

### SEO files

- `src/sitemap.xml`: every `<loc>` must match a route exactly.
- `src/robots.txt`: includes an explicit group for AI search crawlers.
- Case studies are indexed, except those with `indexable: false` in `case-studies.data.ts` (currently Marbella Car Spa): those get `noindex`, stay out of the sitemap/llms.txt, and are blocked for AI crawlers in robots.txt.
- `src/llms.txt`: short company summary for AI assistants.
- `src/1435d8d3dc63085d1c3b85e5e52be65c.txt`: IndexNow key. After each deploy, `tools/indexnow.mjs` submits the sitemap URLs to Bing/IndexNow.
- Structured data for the homepage is built in `SeoService.createHomeSchema()`. The FAQ content in `src/app/home/homev2/faq/faq.data.ts` feeds both the page and the FAQPage schema.

### SSR bootstrap notes

- `src/main.server.ts` bootstraps the standalone app with `bootstrapApplication` and receives the `BootstrapContext` argument provided by Angular's SSR pipeline. Preserve that signature so route extraction and prerendering keep working.

## Production build + hosting

The GitHub workflow in the repository root (`.github/workflows/Deploy-Angular.yml`) runs tests, builds, rsyncs `dist/` to the server, restarts PM2 and pings IndexNow on every push to `main`.

Manual equivalent:

```bash
npm ci
npm run build:ssr
PORT=4000 node dist/ModernaMediaAngular/server/server.mjs
```

Run it under PM2 (`pm2 start dist/ModernaMediaAngular/server/server.mjs --name moderna-media`) behind Nginx. Nginx must forward the real host (`proxy_set_header Host $host;`), otherwise the allowed-hosts check rejects the request.

Caching set by `src/server.ts`:

- Hashed JS/CSS: 1 year, `immutable`
- `/assets/*`: 30 days
- `robots.txt`, `sitemap.xml`, `llms.txt`: 1 hour
- HTML: `no-cache`

## Testing

- Unit tests: `npm test` (Vitest + jsdom via `@angular/build:unit-test`)

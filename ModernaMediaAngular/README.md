# ModernaMediaAngular

Angular 18 + @angular/ssr application for Moderna Media. The project ships with both the browser bundle and an Express host (see `server.ts`) so we can deploy a single Node process that handles SSR, caching, and static assets.

## Requirements

- Node.js 18.x (required for Angular 18 toolchain)
- npm 9+
- `npm install` must be run from the repo root; a postinstall hook (`tools/fix-babel-runtime.cjs`) automatically syncs the correct `@babel/runtime` version into Angular's build tooling, so leave that script in place.

## Install

```powershell
npm install
```

> `npm install` also copies `node_modules/@babel/runtime` into `node_modules/@angular-devkit/build-angular/node_modules` to keep Babel helpers in sync. Do not delete `tools/fix-babel-runtime.cjs` unless you replace it with another solution.

## Useful npm scripts

| Command | Description |
| --- | --- |
| `npm run start` | Client-only dev server with HMR on port 4200 |
| `npm run dev:ssr` | Live-reloading SSR dev server (browser + server bundles rebuilt on change) |
| `npm run build` | Production browser build -> `dist/ModernaMediaAngular/browser` |
| `npm run build:ssr` | Builds browser + server bundles for deployment |
| `npm run serve:ssr` | Runs `node dist/ModernaMediaAngular/server/main.js` (use after `build:ssr`) |
| `npm run prerender` | Generates static HTML via the SSR server configuration |
| `npm test` | Karma unit tests |
| `npm run e2e` | Protractor end-to-end tests |

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

This uses `@angular-devkit/build-angular:ssr-dev-server`, hosting both the browser bundle and the Express handler (default `http://localhost:4000`).

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

## Testing

- Unit tests: `npm test`
- Legacy e2e: `npm run e2e` (Protractor is deprecated; migrate when possible)

## Notes

- The build currently warns that target browsers no longer require Autoprefixer. Update `.browserslistrc` if you want silent builds.
- If you install new Angular build tooling, keep an eye on the `postinstall` script so the Babel runtime stays in sync.

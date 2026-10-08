# Moderna Media – modernamedia.no

## Ground rules
- This repo is **public** on GitHub. Never commit secrets, keys, passwords or server credentials. Secrets live in GitHub Actions secrets.
- A push to `main` deploys to production. Before pushing, run in `ModernaMediaAngular/`: `npm test -- --watch=false` and `npx ng build --configuration production`. Ask the owner before pushing.
- No cookie consent banner. Do not add, suggest or ask about one.

## Deploy
- `.github/workflows/Deploy-Angular.yml`: npm test → `build:ssr` → rsync `dist/` to the server over the deploy key (`SSH_PRIVATE_KEY`, pinned host key) → restart pm2 → reload nginx → check that https://modernamedia.no answers → IndexNow.
- `Deploy-DotNet.yml` is disabled. It logs in with a password, which the server no longer accepts, so it must move to an SSH key before it is turned back on.
- The .NET API (`ModernaMediaDotNet`, api.modernamedia.no, `ModernaMedia.service`) is **in use**. The Sola Parkering site polls `GET /WeatherForecast` (about 2,500 calls a day) for parking capacity from Giant Leap zone 7378. Never stop it without checking every endpoint in the nginx logs.

## Angular app (`ModernaMediaAngular`)
- Angular 21 with SSR and prerendering. Every static route needs four entries: `src/app/app.routes.ts`, `PRERENDERED_PATHS` in `src/app/app.config.server.ts` (otherwise the `**` route answers 404), `src/sitemap.xml` and `src/llms.txt`.
- V2 design system: building blocks in `src/app/v2`, new pages in `src/app/v2/pages`. Styles live in `src/scss/_v2.scss`, scoped under `.v2`.
- Forms post to Formspark via `ContactService.sendLead`, then open `/takk` (noindex). Use signals, not `@angular/forms`, to keep the homepage bundle under the 550 kB budget.
- SEO for V2 pages: `applyV2Seo` in `src/app/v2/v2-seo.ts` (title, meta, canonical and one JSON-LD graph).
- Prices, all eks. mva: nettsider from 25.000 kr (Flersiders 25.000 / Komplett 50.000 / Kompleks 115.000), programvare from 25.000 kr, design from 7.500 kr, SEO from 5.000 kr/mnd.
- Fonts (Mosk, Plex, Pier) are self-hosted (`src/scss/_fonts.scss`). Plex weights: 500 regular, 600 medium, 800 semibold, 900 bold.

## Server
- Linode, 1 GB RAM, Ubuntu 24.04 (upgraded from 20.04 on 2026-10-08), reached with `ssh modernamedia`. The key is on the owner's PC, never in the repo.
- Node 24 (NodeSource), which matches the CI build. pm2 7 runs the SSR server as `moderna-media`, and `pm2-root.service` starts it on boot. After changing Node or pm2, run `pm2 save` and reboot-test.
- nginx (`/etc/nginx/conf.d/ModernaMedia.conf`) proxies to the SSR server on `localhost:4000`. Certbot renews the certificates through the nginx plugin.
  - api.modernamedia.no proxies to the .NET API on `localhost:5000`.
  - The old `sites-enabled/default` is disabled. nginx.conf allows TLS 1.2/1.3 only and has `server_tokens off`.
- pm2-logrotate keeps app logs at 10 MB × 7 files, compressed. Unattended upgrades reboot at 02:00 UTC when an update requires it.
- Firewall (ufw) allows only ports 22, 80 and 443. fail2ban guards SSH, SSH accepts keys only (`/etc/ssh/sshd_config.d/10-key-only.conf`), and security updates install automatically.
- PostgreSQL 16 listens on localhost only, with database and user `modernamedia`. The connection string is in `/etc/modernamedia/database.env` (root only, never in the repo). A cron job (`/etc/cron.d/postgres-backup`) dumps the database nightly to `/var/backups/postgres` and keeps 14 days. There is no off-server copy yet.
- The .NET API targets .NET 7 but runs on the Ubuntu .NET 8 runtime through `DOTNET_ROLL_FORWARD=Major` (`/etc/systemd/system/ModernaMedia.service.d/roll-forward.conf`). Rebuild it for .NET 8 when it is next changed.

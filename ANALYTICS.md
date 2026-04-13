# Analytics setup

This blog uses a self-hosted [GoatCounter](https://www.goatcounter.com/) instance
to measure **engaged reads per article** in a privacy-friendly, cookieless way.

- **Zero cookies, zero client-side IDs** — nothing is stored in the browser.
- **Zero third-party services** — all data stays on `battistella.ovh`.
- **CNIL-exemption-eligible** audience measurement; no consent banner required.
- **Engaged reads only** — a hit is sent only after the reader has dwelled
  for 10 seconds **or** scrolled past 50% of the article, whichever happens first.

## Architecture

```
┌─────────────────────┐          beacon (GET /count)         ┌────────────────┐
│  blog.battistella   │ ─────────────────────────────────▶  │ stats.batti… │
│  (nginx + SPA)      │                                      │ (goatcounter)│
└─────────────────────┘                                      └──────┬───────┘
                                                                    │
                                                            SQLite file
                                                    ./goatcounter-data/db.sqlite3
```

Both services run side-by-side in the same `docker-compose.yml` under the shared
`lan` Traefik network. GoatCounter uses SQLite, so **no external database
service is needed**.

## One-time server setup

On the host where `docker compose` runs (i.e. `/opt/blog` per `deploy/deploy.sh`):

### 1. DNS

Add an `A` record (or `AAAA`) for `stats.battistella.ovh` pointing to the same
server IP as `blog.battistella.ovh`.

### 2. Sync `compose.yml`

Pull the latest `compose.yml` from the repo into `/opt/blog`:

```bash
cd /opt/blog
curl -fsSL https://raw.githubusercontent.com/Wifsimster/personal.blog/master/compose.yml -o compose.yml
```

(or `scp`/`git pull` if you version-control this directory)

### 3. Create the data volume and start GoatCounter

```bash
mkdir -p /opt/blog/goatcounter-data
chown -R 1000:1000 /opt/blog/goatcounter-data
docker compose up -d goatcounter
```

Wait ~10 seconds for Traefik to issue the Let's Encrypt certificate for
`stats.battistella.ovh`, then check it's reachable:

```bash
curl -sI https://stats.battistella.ovh | head -1
# HTTP/2 200
```

### 4. Create the admin user and site

GoatCounter's first-run setup is done via its CLI inside the container:

```bash
# Create the site (code = subdomain prefix inside GoatCounter, use "blog")
docker compose exec goatcounter goatcounter db create site \
  -vhost stats.battistella.ovh \
  -user.email battistella@proton.me \
  -user.password '<choose-a-password>'
```

Then log in at `https://stats.battistella.ovh` with that email/password.

### 5. Configure the blog to send beacons

Set the `VITE_STATS_URL` environment variable at **build time** in your GitHub
Actions workflow (or wherever the Docker image is built):

```yaml
# .github/workflows/release.yml
env:
  VITE_STATS_URL: https://stats.battistella.ovh/count
```

Rebuild and redeploy the blog image:

```bash
docker compose pull blog
docker compose up -d blog
```

### 6. Verify

1. Open an article on `blog.battistella.ovh`.
2. Stay 10+ seconds or scroll past the middle of the article.
3. Check the GoatCounter dashboard — the article path should appear within
   ~1 minute.

## What gets collected

For each engaged read, a single HTTP request is sent to GoatCounter containing
only:

| Field | Value | Notes |
|---|---|---|
| `p` | `/posts/slug` or `/en/posts/slug` | Article path, FR/EN kept separate |
| `t` | Article title | For the dashboard label |
| `r` | Same-origin referrer, else empty | Cross-site referrers are stripped |

GoatCounter additionally truncates the IP address and rotates a salt daily to
derive the visitor hash, per its [privacy design](https://www.goatcounter.com/help/gdpr).

**Never collected:** cookies, `localStorage`, `User-Agent` fingerprint, cross-site
referrer with query params, persistent visitor IDs.

## Operational notes

- **Backups.** The only state is `./goatcounter-data/db.sqlite3`. Back it up with
  your usual backup tool; no dump step needed since SQLite files are atomic.
- **Upgrades.** `docker compose pull goatcounter && docker compose up -d goatcounter`.
  GoatCounter handles its own schema migrations on start.
- **Log rotation.** GoatCounter writes minimal logs to stdout; rely on Docker's
  default log driver.
- **Uninstall.** `docker compose rm -sf goatcounter` and delete the
  `goatcounter-data` directory. The blog continues to work; the beacon silently
  no-ops if the endpoint is unreachable.

## Local development

In dev mode, `VITE_STATS_URL` is unset, so the composable is a **no-op**.
No beacons are sent, no network calls happen.

If you want to test locally against a dev GoatCounter:

```bash
VITE_STATS_URL=https://stats.battistella.ovh/count npm run dev
```

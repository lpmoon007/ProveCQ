# Auto-deploy to the VPS (GitHub Actions → Plesk over SSH)

Same setup as **belegendary.org**: every push to `main` builds the site in
GitHub's cloud and **rsyncs the finished files** into the Plesk VPS doc-root. The
server runs no Node — it just serves static files.

The workflow (`.github/workflows/deploy.yml`) is already in the repo. It stays
**inert** (build-only) until you add the secrets below, so nothing deploys by
accident. To pause deploys later, delete the `DEPLOY_SSH_KEY` secret.

> **How it differs from a "next start" server:** this app is exported to static
> HTML (`output: "export"` in `next.config.mjs` → `./out`). That's why it fits the
> same rsync model as the Astro site. The FPO → Prove 301 redirects therefore live
> in **`public/.htaccess`** (Apache/Plesk reads it from the doc-root), not in
> `next.config`. Interactive tools and the HubSpot form are client-side JS, so they
> work fine on a static host.

---

## Good news: reuse your Be Legendary key

This is the **same server and same deploy user** you already use for
belegendary.org. So you do **not** need the `gha_key` you just generated — you can
reuse the values that already work. Four of the five secrets are identical; only
the path changes.

### 1. Create the provecq site in Plesk (one time)

In Plesk, add the domain (or subdomain) **provecq.com** so it gets its own
doc-root, e.g. `/var/www/vhosts/provecq.com/httpdocs`. Point the domain's DNS at
the VPS and issue an SSL cert (Plesk → Let's Encrypt). Note the exact `httpdocs`
path — that's your `DEPLOY_PATH`.

### 2. Add the secrets to THIS repo

Secrets don't carry across repos, so add them to `ProveCQ` too:
Repo → **Settings → Secrets and variables → Actions → New repository secret**.

| Secret           | Value                                                                 |
| ---------------- | --------------------------------------------------------------------- |
| `DEPLOY_SSH_KEY` | **Same** private key as Be Legendary (paste its `DEPLOY_SSH_KEY` value) |
| `DEPLOY_HOST`    | **Same** as Be Legendary (e.g. `belegendary.org` or the server IP)      |
| `DEPLOY_USER`    | **Same** as Be Legendary (e.g. `belegen_ftp`)                           |
| `DEPLOY_PORT`    | **Same** as Be Legendary (usually `22`)                                 |
| `DEPLOY_PATH`    | **NEW** — the provecq doc-root, e.g. `/var/www/vhosts/provecq.com/httpdocs` |

> The existing `DEPLOY_SSH_KEY` already authenticates to this box, so no
> `ssh-copy-id` or new key is needed. (You can delete the `gha_key` /
> `gha_key.pub` files you generated earlier.)

### 3. Test

Push to `main`, or run it by hand: repo → **Actions → Deploy to VPS → Run
workflow**. Watch it build and rsync, then load provecq.com.

---

## Notes

- `rsync --delete` keeps the server exactly matching the build, but **never**
  touches `.well-known` (used for your SSL certificate) — same guard as
  Be Legendary.
- The build runs on GitHub's runners (Node 22); the VPS needs no Node.
- **Redirects** are in `public/.htaccess`. Edit that file (not `next.config`) to
  change the FPO → Prove 301 map; it ships in every build.
- **Later phases:** when auth, database, Stripe billing, or server-side HubSpot
  form posting land (handoff phases 3–5), a static host can't run them. At that
  point you'd move to a Node runtime — Plesk's Node.js/Passenger extension, or a
  platform like Vercel. Nothing to change now.

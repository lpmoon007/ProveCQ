# Deploying provecq.com to your own server

This repo auto-deploys to a Linux server you control. On every merge to `main`,
a GitHub Actions workflow (`.github/workflows/deploy.yml`) SSHes into your server,
pulls the new code, builds it, and reloads the app with **pm2** — zero downtime.

You set this up **once**. After that, the flow is:

```
open PR → review → merge to main → GitHub Actions builds & deploys → live
```

> Why a Node server (not plain static hosting)? The FPO→Prove 301 redirects and
> the generated `sitemap.xml` / `robots.txt` run on Next's server. So the app runs
> `next start` (Node) behind a reverse proxy — not a static file folder.

---

## 1. One-time server provisioning

SSH into your server as a sudo user and run these once. (Ubuntu/Debian shown; adapt
for your distro.)

### a. Install Node 20 + pm2 + git

```bash
# Node 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git

# pm2 (process manager) + let it start on boot
sudo npm install -g pm2
pm2 startup            # prints a command — run the command it prints
```

> Building Next.js needs ~1 GB RAM. On a small VPS, add swap first:
> `sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile`
> (persist it in `/etc/fstab`). Or switch to the "build in CI" variant (see §5).

### b. Give the server read access to the repo

Create a **read-only deploy key** so the server can `git pull`:

```bash
ssh-keygen -t ed25519 -C "provecq-deploy" -f ~/.ssh/provecq_deploy -N ""
cat ~/.ssh/provecq_deploy.pub
```

Add that **public** key in GitHub → repo **Settings → Deploy keys → Add deploy key**
(read-only is fine). Then tell git to use it:

```bash
cat >> ~/.ssh/config <<'EOF'
Host github-provecq
  HostName github.com
  User git
  IdentityFile ~/.ssh/provecq_deploy
EOF
```

### c. Clone and do the first build

```bash
cd /var/www          # or wherever you keep sites
git clone git@github-provecq:lpmoon007/ProveCQ.git provecq
cd provecq
npm ci
npm run build
pm2 start ecosystem.config.js   # starts the app on port 3000
pm2 save
```

Visit `http://YOUR_SERVER_IP:3000` — you should see the site.

### d. Put nginx in front (domain + HTTPS)

```bash
sudo apt-get install -y nginx
sudo tee /etc/nginx/sites-available/provecq <<'EOF'
server {
  server_name provecq.com www.provecq.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
}
EOF
sudo ln -s /etc/nginx/sites-available/provecq /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Free TLS cert + auto-renew
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d provecq.com -d www.provecq.com
```

Point your domain's DNS **A record** at the server's IP first, so certbot can verify.

---

## 2. GitHub secrets for the auto-deploy

The workflow needs to SSH in as a user that can pull + build + reload pm2. Create a
key **for GitHub** (separate from the repo deploy key above):

```bash
# On your local machine or the server:
ssh-keygen -t ed25519 -C "github-actions" -f gha_key -N ""
# add the PUBLIC key to the server's ~/.ssh/authorized_keys for the deploy user
```

Then in GitHub → repo **Settings → Secrets and variables → Actions → New repository secret**,
add:

| Secret        | Value                                                        |
| ------------- | ------------------------------------------------------------ |
| `SSH_HOST`    | server IP or hostname (e.g. `203.0.113.10`)                  |
| `SSH_USER`    | the deploy user (e.g. `deploy` or `ubuntu`)                  |
| `SSH_KEY`     | the **private** key contents (`gha_key`, full text)          |
| `SSH_PORT`    | SSH port (optional; defaults to `22`)                        |
| `DEPLOY_PATH` | absolute path to the clone (e.g. `/var/www/provecq`)         |

That's it. The next merge to `main` deploys automatically. You can also trigger a
deploy by hand: **Actions → Deploy to server → Run workflow**.

> The workflow only becomes active once `.github/workflows/deploy.yml` exists on
> your **default branch**. This branch (`claude/new-session-pja77r`) carries it —
> merging the PR into `main` activates it. If your default branch isn't `main`,
> change the `branches:` line in the workflow.

---

## 3. Environment variables (later phases)

When auth/DB/Stripe/HubSpot land, put their keys in a gitignored `.env.production`
on the server (in `DEPLOY_PATH`). `next build` / `next start` pick it up
automatically; pm2 already runs with `NODE_ENV=production`. Never commit real keys.

---

## 4. Rolling back

```bash
cd /var/www/provecq
git reset --hard <previous-good-commit-sha>
npm ci && npm run build
pm2 reload ecosystem.config.js
```

---

## 5. Alternative: build in CI instead of on the server

If your VPS is too small to build (low RAM), flip the workflow to build the app on
GitHub's runner and copy the artifact over (`.next`, `public`, `package*.json`,
`next.config.mjs`, `ecosystem.config.js`) via `rsync`, then run
`npm ci --omit=dev && pm2 reload` on the server. Ask and I'll swap the workflow to
that shape.

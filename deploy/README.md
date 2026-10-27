# Deploying to a VPS

AuctionFlow runs as Docker containers on a server you own. The layout leaves room for other projects on the same server:

```text
                 internet
                    │  :80 / :443
           ┌────────▼────────┐
           │  Caddy (proxy)  │  HTTPS certificates, one block per domain
           └───┬─────────┬───┘
     "proxy" network     └──── your other projects
           ┌───▼──────────────────────────────┐
           │ auctionflow stack                │
           │   web ──► indexer ──► postgres   │  ("internal" network, not public)
           └──────────────────────────────────┘
```

- `proxy/` is the shared front door. It runs once per server.
- `auctionflow/` is this project: Postgres, the indexer and the web app. Only the web app joins the `proxy` network; the indexer and the database are unreachable from outside.

## 1. Get a server and a domain

- **Server.** Ubuntu 24.04 with 2 vCPUs and 4 GB of RAM is plenty for AuctionFlow plus a few small projects. Hetzner Cloud (CX22, about €5/month) is the cheapest good option. DigitalOcean and Vultr are similar at about $12–24/month. Add your SSH public key when creating it, so you never log in with a password.
- **Domain.** Any registrar (Cloudflare, Porkbun, Namecheap). Create an **A record** for the name you want, for example `auctionflow.yourdomain.com`, pointing at the server's IP address. If you use Cloudflare, set it to "DNS only" (grey cloud) so Caddy can get its certificate.

## 2. Secure the server

Log in as root once, create your own user and lock things down:

```bash
ssh root@SERVER_IP
adduser deploy && usermod -aG sudo deploy
rsync --archive --chown=deploy:deploy ~/.ssh /home/deploy   # copy your SSH key
```

Then edit `/etc/ssh/sshd_config` and set `PermitRootLogin no` and `PasswordAuthentication no`, and restart SSH with `systemctl restart ssh`. Before closing the root session, check that `ssh deploy@SERVER_IP` works in a second terminal.

Allow only SSH and web traffic, and install security updates automatically:

```bash
sudo ufw allow OpenSSH && sudo ufw allow 80 && sudo ufw allow 443 && sudo ufw enable
sudo apt update && sudo apt install -y unattended-upgrades && sudo dpkg-reconfigure -plow unattended-upgrades
```

Docker publishes ports by editing iptables directly, bypassing ufw. That is why only Caddy publishes ports here, and nothing else should.

## 3. Install Docker

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker deploy   # then log out and back in
docker compose version
```

## 4. Start the shared proxy

The proxy belongs to the server, not to this repository, so copy it out of the repo first:

```bash
git clone https://github.com/Sodiq-123/AuctionFlow.git ~/apps/auctionflow
cp -r ~/apps/auctionflow/deploy/proxy ~/proxy
cd ~/proxy
nano Caddyfile        # replace auctionflow.example.com with your domain
docker compose up -d
```

## 5. Start AuctionFlow

```bash
cd ~/apps/auctionflow/deploy/auctionflow
cp .env.example .env
nano .env             # set POSTGRES_PASSWORD (openssl rand -hex 24), RPC_URL, PINATA_JWT
docker compose up -d --build
```

The first build takes a few minutes. Then:

```bash
docker compose ps                  # all three services "running"
docker compose logs -f indexer     # watch it sync; it serves data once caught up
```

Open `https://auctionflow.yourdomain.com`. Caddy fetches the certificate on the first request, which can take a few seconds.

## Everyday operations

| Task | Command (in `~/apps/auctionflow/deploy/auctionflow`) |
| --- | --- |
| Deploy a new version | `git pull && docker compose up -d --build` |
| Logs | `docker compose logs -f web` (or `indexer`, `postgres`) |
| Re-index from scratch, e.g. after a new contract deployment | change `INDEXER_SCHEMA` in `.env`, then `docker compose up -d` |
| Back up the database | `docker compose exec postgres pg_dump -U auctionflow auctionflow > backup.sql` |
| Restart everything | `docker compose restart` |

The database only holds what the indexer derived from the chain, so it can always be rebuilt by re-indexing. A backup just saves time.

## Adding another project

1. Give it a `docker-compose.yml` whose public service joins the external `proxy` network and has a `container_name`, as `web` does here.
2. Add a block to `~/proxy/Caddyfile`, for example `blog.yourdomain.com { reverse_proxy blog:8080 }`, and an A record for the name.
3. Reload Caddy with `cd ~/proxy && docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile`.

## Configuration reference

All settings are in `auctionflow/.env`; see `.env.example`.

- `RPC_URL`: what the indexer reads the chain through. One URL or several separated by commas. Free plans and public endpoints rate-limit, which slows the first sync; a paid RPC keeps it fast.
- `PINATA_JWT`: lets creators upload a token image. Create a key at pinata.cloud with permission to upload files. Without it, tokens launch without images.
- `CHAIN_ID`, `PUBLIC_RPC_URL`, `IPFS_GATEWAY`: compiled into the web app at build time, so change them and rebuild.

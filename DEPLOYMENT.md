# Batbox Analytics Dashboard - Deployment Guide

## Application URLs

| Environment | URL |
|-------------|-----|
| **Production** | Set in `.env` file |
| **Local Dev** | http://localhost:8080/ |

## Quick Deploy

```bash
./deploy.sh
```

## Setup

### 1. Create Environment File

Copy the template and fill in your server details:

```bash
cp .env.example .env
```

Edit `.env` with your server information:
```
DEPLOY_SERVER=your-server-ip
DEPLOY_USER=your-ssh-user
DEPLOY_PATH=/var/www/your-app-path
```

### 2. Ensure SSH Access

```bash
ssh-copy-id $DEPLOY_USER@$DEPLOY_SERVER
```

---

## Local Development

### Start Local Server

```bash
cd /path/to/chart
python3 -m http.server 8080
```

Then open: http://localhost:8080/index-all.html

### Why a Server is Needed

The dashboard loads CSV files using `fetch()`, which doesn't work with `file://` URLs due to browser CORS restrictions.

---

## Updating Data

To update the dashboard with new booking data:

1. Export new data from your booking system
2. Replace `addison-final.csv` and/or `vd-final.csv`
3. Update the date range in `data-all.js` if needed
4. Re-deploy: `./deploy.sh`

---

## Server Setup (One-Time)

### Nginx Configuration

Add to your nginx site config:

```nginx
location /batbox-analytics {
    alias /var/www/batbox-analytics;
    index index.html;
    try_files $uri $uri/ /batbox-analytics/index.html;
    
    # Optional: Basic auth
    auth_basic "Restricted";
    auth_basic_user_file /etc/nginx/.htpasswd_batbox;
}
```

### Create Password File (for auth)

```bash
htpasswd -c /etc/nginx/.htpasswd_batbox username
```

---

## Files to Deploy

| File | Purpose |
|------|---------|
| `index-all.html` → `index.html` | Main dashboard page |
| `styles-new.css` | All styles |
| `data-all.js` | Data loading & parsing |
| `charts-all-new.js` | Overview charts |
| `analytics-all-charts.js` | Gameplay analytics charts |
| `financial-all-charts.js` | Financial charts |
| `events-all-charts.js` | Events charts |
| `addison-final.csv` | Batbox Addison data |
| `vd-final.csv` | Virtual Dugout data |
| `assets/` | Logo images |

---

## Troubleshooting

### Clear Browser Cache

After deployment, hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)

### Check Nginx Logs

```bash
ssh user@server "tail -f /var/log/nginx/error.log"
```

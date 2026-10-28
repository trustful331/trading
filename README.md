# Elite Trade FX

React frontend at the repo root. Node and MongoDB will live in `BE/`.

## Run the site

```bash
npm install
npm run dev
```

Site: http://127.0.0.1:5175

## Run the API

```bash
docker compose up -d
cd BE
npm install
npm run dev
```

API: http://127.0.0.1:4000/api/health

If Docker is not installed, `npm run dev` still starts a practice MongoDB and keeps the data in `BE/.mongo`.

MongoDB stores clients, KYC, money requests, tickets, transactions, trading accounts, announcements, instruments, account types, and the audit log. Each collection has list, create, read, update, and delete under `/api/<name>`. The React app reads them in local dev. The GitHub Pages build keeps the sample data when `VITE_API_URL` is empty.

## GitHub Actions

- `.github/workflows/frontend.yml` checks the React app, then publishes `master` to GitHub Pages.
- `.github/workflows/backend.yml` runs only when `BE/` changes. It waits until `BE/package.json` exists.

A frontend-only push does not run the API job. An API-only push does not republish the site.

The Pages site will be `https://<github-user>.github.io/<repo>/`. In the repo, open Settings, Pages, and set the source to GitHub Actions before the first deploy.

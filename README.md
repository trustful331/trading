# Elite Trade FX

React frontend at the repo root. Node and MongoDB will live in `BE/`.

## Run the site

```bash
npm install
npm run dev
```

Site: http://127.0.0.1:5175

`BE/` is empty on purpose. Add the API there when the daily sessions start. Keep its `package.json` inside `BE/`, so the root app stays the frontend.

## GitHub Actions

- `.github/workflows/frontend.yml` checks the React app, then publishes `master` to GitHub Pages.
- `.github/workflows/backend.yml` runs only when `BE/` changes. It waits until `BE/package.json` exists.

A frontend-only push does not run the API job. An API-only push does not republish the site.

The Pages site will be `https://<github-user>.github.io/<repo>/`. In the repo, open Settings, Pages, and set the source to GitHub Actions before the first deploy.

# Decisions

| Topic | Decision | Status |
|---|---|---|
| Framework | Keep Vite + React + Redux + React Router. Do not migrate to Next.js | Locked by the existing project |
| Folders | `pages` / `containers` / `components` / `router` / `store` | Locked |
| Product name | Elite Trade FX | Current product name |
| Support email | support@elitetradefx.com | Brand address for Elite Trade FX. Not a verified mailbox until the domain is live |
| Regulator | None stated | Do not display a licence number |
| Spreads and leverage | Unpublished | Do not present invented figures as official |
| Account types | Silver, Gold, Platinum, Islamic in configuration | Commercial numbers empty |
| Backend | Node and MongoDB in `BE/` | Folder is empty until daily sessions start |
| Database | MongoDB | Postgres and Prisma removed |
| Market data | Simulated quotes in `src/data/market.ts` | Labelled in the UI |
| Deploys | GitHub Actions. Site to GitHub Pages, API from `BE/` | Vercel is not used |
| Client URLs | `/dashboard`, `/deposit`, `/platform`, and the other portal paths at the root. `/portal/*` redirects | Matches the brief |
| Uploaded docs | None in the repo | Re-read this file when they arrive |

Unresolved, not blocking development: jurisdiction, real payment vendor, real market-data vendor, and whether Islamic accounts are swap-free on every symbol.

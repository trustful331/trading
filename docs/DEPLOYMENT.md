# Deployment

## Local website

```bash
npm install
npm run dev
```

Site: http://127.0.0.1:5175

## Local API

```bash
npm run dev:api
```

API: http://127.0.0.1:4000/api/health

## Database

```bash
docker compose up -d postgres
```

Then set `DATABASE_URL` from `.env.example` and run Prisma migrate. Do not commit `.env`.

## Production shape

- Static site or Node host for the Vite build
- API process with the secrets
- Managed Postgres
- Payment, market data, and MT5 adapters selected with environment variables
- `mock` adapters refused when `NODE_ENV=production` (guard is in the API health payload today; enforce a hard fail before go-live)

No host, domain certificate, or registry is configured in this repo.

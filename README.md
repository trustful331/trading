# Elite Trade FX

Brokerage website, client portal, trading terminal, and admin desk.

Vite + React + TypeScript + Redux Toolkit + React Router + Tailwind. The API is a separate Node process. Providers are mocked until real credentials exist.

## Run

```bash
npm install
npm run dev
npm run dev:api
npm test
```

Site: http://127.0.0.1:5175  
API: http://127.0.0.1:4000/api/health

Postgres: `docker compose up -d postgres`, then copy `.env.example` to `.env`.

## Read next

`docs/ARCHITECTURE.md`, `docs/PROJECT_DECISIONS.md`, `docs/IMPLEMENTATION_PLAN.md`.

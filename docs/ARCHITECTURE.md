# Architecture

## Stack

The existing app stays on Vite, React, TypeScript, Redux Toolkit, and React Router. Next.js is not introduced. The earlier instruction to follow the Omni layout still holds.

| Folder | Role |
|---|---|
| `src/pages` | Thin route entries |
| `src/containers` | Screens |
| `src/components` | Shared UI |
| `src/router` | Routes and guards |
| `src/store` | Redux |
| `src/domain` | Money, ledger, providers. Safe to import from the UI |
| `server` | HTTP API. Not bundled into the website |
| `prisma` | PostgreSQL schema |

Redux keeps UI preferences. Server data will not be copied into one global store. When fetching starts, it stays next to the feature that needs it.

## Request path

```
Browser
  → React Router screen
  → domain provider interface
       → mock adapter (development)
       → MT5 / payments / market data (later, server-side only)
  → PostgreSQL ledger
```

The browser never receives broker passwords, payment secrets, or database URLs.

## Providers

`MarketDataProvider`, `TradingProvider`, and `PaymentProvider` live in `src/domain/providers`. Development uses the mock adapters. `TRADING_PROVIDER`, `MARKET_DATA_PROVIDER`, and `PAYMENT_PROVIDER` select the adapter. Only `mock` is implemented.

A balance changes only when the ledger posts an entry. A payment webhook must verify its signature and idempotency key before that post. A browser field `success=true` is ignored.

## API shape

```json
{ "success": true, "data": {}, "error": null, "requestId": "uuid" }
```

Health routes: `/api/health`, `/api/health/database`, `/api/health/trading`, `/api/health/market-data`. They report mode and configuration. They do not print secrets.

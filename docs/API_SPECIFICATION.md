# API

Base URL in development: `http://127.0.0.1:4000`.

Every JSON body uses `success`, `data`, `error`, `requestId`.

## Health

| Method | Path | Notes |
|---|---|---|
| GET | `/api/health` | Process up |
| GET | `/api/health/database` | Whether `DATABASE_URL` is set. No connection string in the body |
| GET | `/api/health/trading` | Active trading provider id |
| GET | `/api/health/market-data` | Active market-data provider id |

## Payments

| Method | Path | Notes |
|---|---|---|
| POST | `/api/payments/webhook` | Header `x-signature` must equal `PAYMENT_WEBHOOK_SECRET`. Body `{ "id", "status" }`. Replays with the same `id` do not post twice |

Unknown routes return 404 with `NOT_FOUND`.

Client portal routes are not API routes. They are documented in `IMPLEMENTATION_PLAN.md`.

Auth, orders, and KYC endpoints are specified here so they are not invented later in handlers:

| Method | Path | Rule |
|---|---|---|
| POST | `/api/auth/login` | Rate limited. Sets an httpOnly session cookie. Never returns the password hash |
| POST | `/api/orders` | Server recalculates margin. Rejects if the trading provider is mock unless the UI is in development mode |
| POST | `/api/deposits` | Creates `pending` only. Balance moves on a verified webhook |

Those three are not implemented yet. The webhook and health routes are.

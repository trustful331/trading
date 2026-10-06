# Implementation plan

## Phase 1 — foundation (this pass)

- Architecture notes in `/docs`
- Design tokens already in `src/index.css`
- Domain money, ledger, and provider interfaces
- Mock market, trading, and payment adapters
- Prisma schema and Docker Postgres service
- API health routes and payment webhook
- Development-mode banner
- Public pages stop showing unpublished spreads as facts
- Terminal chart reads the mock market-data provider

## Phase 2 — client portal behaviour

Wire dashboard, deposit, withdrawal, questionnaire, and documents to the API. Persist answers and files. Keep balances server-side.

## Phase 3 — trading

Order ticket, positions, and pending orders calling `TradingProvider`. Stream quotes over a websocket. Still mock until a vendor exists.

## Phase 4 — admin

RBAC, KYC review, deposit and withdrawal queues that write the ledger and the audit log.

## Phase 5 — integrations

Real market data, MT5 bridge, payment provider, email, private storage.

## Phase 6 — hardening

Rate limits, session cookies, CSP, e2e tests, production refusal of mock providers.

## Route map

Public: `/`, `/markets`, `/products`, `/accounts`, `/account-types`, `/platforms`, `/conditions`, `/funding`, `/education`, `/calendar`, `/about`, `/contact`, `/faq`, `/partners`, `/legal/:slug`

Auth: `/login`, `/register`, `/forgot-password`, `/reset-password`, `/verify-email`

Client: `/dashboard`, `/deposit`, `/withdraw-funds`, `/transactions-history`, `/questionnaire`, `/trading-info`, `/upload-documents`, `/security`, `/platform`, `/profile`, `/support`, `/partners`

Admin: `/admin`, `/admin/users`, `/admin/kyc`, `/admin/deposits`, `/admin/withdrawals`, `/admin/instruments`, `/admin/account-types`, `/admin/audit-logs`

# Database

PostgreSQL via Prisma. Schema: `prisma/schema.prisma`. Apply it when Docker is available:

```bash
docker compose up -d postgres
npx prisma migrate dev
```

Money columns are `Decimal`. The application ledger uses integer minor units (8 decimal places) and must not add JavaScript floats.

## Tables

User, Role, UserRole, Session, MfaFactor, LoginAttempt, CustomerProfile, AccountType, TradingAccount, Instrument, Order, Position, Trade, Payment, LedgerEntry, Transaction, QuestionnaireVersion, QuestionnaireResponse, KycDocument, AuditLog, Notification.

`LedgerEntry` is append-only in application code. `idempotencyKey` is unique. Cached balances, when added, must match the sum of entries.

Sessions and documents are server-side. Document rows store a storage key, never a public URL.

## Not applied yet

Migrations have not been run in this workspace. The API reports the database as not configured until `DATABASE_URL` is set and Prisma is generated.

# Payments

`PaymentProvider` creates a payment in `pending`. It does not credit a wallet.

Completion happens in `applyPaymentWebhook`:

1. Reject when `PAYMENT_WEBHOOK_SECRET` is missing.
2. Reject when `x-signature` does not match.
3. If the event id was already applied, return success and do not post again.
4. On `completed`, append one ledger credit.

`status: completed` inside a browser request is not a confirmation path. There is no such route.

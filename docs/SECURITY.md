# Security

This build is a development system. It is not cleared for live client money.

## In place

- No secrets in source. See `.env.example`.
- `.env` is gitignored.
- Payment webhook rejects missing or wrong signatures.
- Webhook handling is idempotent.
- Ledger amounts are integers, not floats.
- Mock trading cannot be described as a live MT5 session. The UI banner says development mode.
- Health checks do not echo credentials.

## Required before any real client

- Argon2id password hashes
- httpOnly, Secure, SameSite session cookies
- Server-side RBAC on every mutating route
- Rate limits on login, OTP, upload, and withdrawal
- Private document bucket and short-lived signed URLs
- Withdrawal allowed only after KYC approval, with a server-side balance check
- Append-only audit log
- CSP and related response headers
- No broker or payment secret in the browser bundle

## Compliance still outside this repo

A licence, client agreement, AML programme, segregated client money, and payment-provider contracts are legal work. They are not implied by this software.

# Requirements

No project document pack was uploaded. This file is the working specification until those files arrive. The public site at primetradefx.com was used only for information architecture: asset classes, client areas, and the idea of a first-party platform. Its sentences, licence claims, and prices are not copied.

## Product

Prime Trade FX is a brokerage web application with four surfaces:

1. Public website
2. Client portal
3. Trading terminal
4. Admin back office

## Confirmed from the reference structure

Asset classes to support: forex, metals, energies, indices, shares, commodities, and crypto CFDs.

Client areas: dashboard, deposit, withdraw, questionnaire, trading info, documents, transactions, security, platform.

Account-type names to configure, not hard-code as commercial facts: Silver, Gold, Platinum, Islamic (swap-free flag).

## Not confirmed

No uploaded file states leverage, spreads, swaps, minimum deposits, regulator, or restricted countries. Those values stay unpublished until official documentation arrives. The admin conditions screen is where they will be stored.

## Already on screen

Marketing pages, auth screens, client pages, and admin queues exist as a Vite React app. They are not yet backed by a database. A development banner states that quotes, balances, and orders are simulated.

## Still to build

Session auth, RBAC enforcement, PostgreSQL ledger, real provider adapters, email, private document storage, and tests beyond the money and webhook units.

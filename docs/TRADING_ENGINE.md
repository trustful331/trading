# Trading engine

The UI talks to `TradingProvider` and `MarketDataProvider`. It does not talk to MT5.

```ts
getAccount()
getPositions()
getOrders()
placeOrder()
cancelOrder()
closePosition()
getSymbols()
getQuote()
getHistoricalBars()
```

`MockTradingProvider` and `MockMarketDataProvider` are the only adapters. Bars are a deterministic simulation so the chart can be developed. They are not a market feed. The terminal prints that.

`Mt5TradingProvider` is a named stub. It throws `NOT_CONFIGURED`. Credentials, if they ever exist, stay in server environment variables and are never sent to the browser.

Order tickets, when enabled, must be recalculated on the server: volume, price, margin, instrument status, and account permission. Frontend estimates are hints only.

Configurable rules (minimum volume, trading hours, leverage, stop distance) belong in `Instrument` and `AccountType` rows, not in scattered components. Those columns exist in the Prisma schema and are empty until documented.

import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { applyPaymentWebhook, devLedger } from "../src/domain/providers/mock/payment.ts";
import { mockMarketData } from "../src/domain/providers/mock/marketData.ts";
import { mockTrading } from "../src/domain/providers/mock/trading.ts";

const port = Number(process.env.PORT ?? 4000);

function send(res: ServerResponse, status: number, data: unknown, error: { code: string; message: string } | null) {
  const body = JSON.stringify({
    success: error === null,
    data,
    error,
    requestId: crypto.randomUUID(),
  });
  res.writeHead(status, { "content-type": "application/json" });
  res.end(body);
}

async function readBody(req: IncomingMessage): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk as Buffer);
  return Buffer.concat(chunks).toString("utf8");
}

const server = createServer(async (req, res) => {
  const url = req.url ?? "/";
  if (req.method === "GET" && url === "/api/health") {
    send(res, 200, { status: "ok", mode: "development" }, null);
    return;
  }
  if (req.method === "GET" && url === "/api/health/database") {
    send(res, 200, { configured: Boolean(process.env.DATABASE_URL), provider: "postgresql" }, null);
    return;
  }
  if (req.method === "GET" && url === "/api/health/trading") {
    send(res, 200, { provider: mockTrading.id, live: false }, null);
    return;
  }
  if (req.method === "GET" && url === "/api/health/market-data") {
    send(res, 200, { provider: mockMarketData.id, live: false }, null);
    return;
  }
  if (req.method === "POST" && url === "/api/payments/webhook") {
    const result = applyPaymentWebhook({
      secret: process.env.PAYMENT_WEBHOOK_SECRET,
      signature: req.headers["x-signature"]?.toString(),
      body: await readBody(req),
      ledger: devLedger,
      accountId: "SIM-820441",
    });
    if (!result.ok) {
      const status = result.code === "NOT_CONFIGURED" ? 503 : 401;
      send(res, status, null, { code: result.code, message: "Webhook was not accepted." });
      return;
    }
    send(res, 200, { applied: result.applied }, null);
    return;
  }
  send(res, 404, null, { code: "NOT_FOUND", message: "No such route." });
});

server.listen(port, () => {
  console.log(`API listening on ${port}`);
});

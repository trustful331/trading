import "dotenv/config";
import cors from "cors";
import express from "express";
import { crudRouter } from "./crud.js";
import { openDatabase } from "./db.js";
import { resources } from "./resources.js";
import { seed } from "./seed.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ success: true, data: { service: "elitetrade-api", database: "mongodb" } });
});

for (const resource of resources) {
  app.use(`/api/${resource.path}`, crudRouter(resource.model));
}

const uri = process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/elitetrade";
const port = Number(process.env.PORT) || 4000;

try {
  await openDatabase(uri);
  await seed(resources);
} catch (error) {
  const message = error instanceof Error ? error.message : "Database connection failed";
  console.error(message);
  console.error("Start MongoDB with: docker compose up -d");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`API http://127.0.0.1:${port}`);
});

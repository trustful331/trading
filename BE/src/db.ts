import fs from "node:fs";
import path from "node:path";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

async function connect(uri: string) {
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, { serverSelectionTimeoutMS: 2000 });
}

export async function openDatabase(requested: string) {
  const local = requested.includes("127.0.0.1") || requested.includes("localhost");
  try {
    await connect(requested);
    console.log("MongoDB connected");
    return;
  } catch (error) {
    if (!local) throw error;
  }

  const dbPath = path.resolve(".mongo");
  fs.mkdirSync(dbPath, { recursive: true });
  const server = await MongoMemoryServer.create({
    instance: { dbName: "elitetrade", dbPath },
  });
  await connect(server.getUri());
  console.log("Practice MongoDB is running. Data stays in BE/.mongo");
}

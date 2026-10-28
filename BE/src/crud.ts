import { Router } from "express";
import type { Model } from "mongoose";

type Stored = {
  code: string;
  _id?: unknown;
  __v?: number;
  createdAt?: Date;
  updatedAt?: Date;
} & Record<string, unknown>;

function toRow(doc: Record<string, unknown>) {
  const rest = { ...doc };
  const code = String(rest.code ?? "");
  delete rest.code;
  delete rest._id;
  delete rest.__v;
  delete rest.createdAt;
  delete rest.updatedAt;
  return { id: code, ...rest };
}

export function crudRouter(model: Model<Stored>) {
  const router = Router();

  router.get("/", async (_req, res) => {
    const docs = await model.find().sort({ createdAt: -1 }).lean();
    res.json({ success: true, data: docs.map((doc) => toRow(doc)) });
  });

  router.get("/:id", async (req, res) => {
    const doc = await model.findOne({ code: req.params.id }).lean();
    if (!doc) {
      res.status(404).json({ success: false, error: "Not found" });
      return;
    }
    res.json({ success: true, data: toRow(doc) });
  });

  router.post("/", async (req, res) => {
    const body = req.body as Record<string, unknown>;
    const code = String(body.id ?? body.code ?? `NEW-${Date.now()}`);
    const fields = { ...body };
    delete fields.id;
    delete fields.code;
    try {
      const doc = await model.create({ ...fields, code });
      res.status(201).json({ success: true, data: toRow(doc.toObject()) });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Could not create";
      res.status(400).json({ success: false, error: message });
    }
  });

  router.put("/:id", async (req, res) => {
    const body = req.body as Record<string, unknown>;
    const fields = { ...body };
    delete fields.id;
    delete fields.code;
    const doc = await model.findOneAndUpdate({ code: req.params.id }, fields, {
      new: true,
      runValidators: true,
    }).lean();
    if (!doc) {
      res.status(404).json({ success: false, error: "Not found" });
      return;
    }
    res.json({ success: true, data: toRow(doc) });
  });

  router.delete("/:id", async (req, res) => {
    const doc = await model.findOneAndDelete({ code: req.params.id }).lean();
    if (!doc) {
      res.status(404).json({ success: false, error: "Not found" });
      return;
    }
    res.json({ success: true, data: toRow(doc) });
  });

  return router;
}

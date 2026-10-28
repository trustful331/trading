import type { Resource } from "./resources.js";

export async function seed(resources: Resource[]) {
  for (const resource of resources) {
    for (const row of resource.rows) {
      const code = String(row.id ?? "");
      const fields = { ...row };
      delete fields.id;
      await resource.model.updateOne({ code }, { $setOnInsert: { code, ...fields } }, { upsert: true });
    }
  }
}

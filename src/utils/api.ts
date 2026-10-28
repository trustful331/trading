import { useEffect, useState } from "react";
import apiEndpoint from "src/config/environment";

type Envelope<T> = { success?: boolean; data?: T };

export function useRecords<T>(path: string, fallback: readonly T[]): T[] {
  const [rows, setRows] = useState<T[]>([...fallback]);

  useEffect(() => {
    if (!apiEndpoint) return;
    const controller = new AbortController();
    fetch(`${apiEndpoint}${path}`, { signal: controller.signal })
      .then((response) => response.json())
      .then((body: Envelope<T[]>) => {
        if (body.success && Array.isArray(body.data)) setRows(body.data);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [path]);

  return rows;
}

export function useRecord<T>(path: string, fallback: T): T {
  const [row, setRow] = useState(fallback);

  useEffect(() => {
    if (!apiEndpoint) return;
    const controller = new AbortController();
    fetch(`${apiEndpoint}${path}`, { signal: controller.signal })
      .then((response) => response.json())
      .then((body: Envelope<T>) => {
        if (body.success && body.data) setRow(body.data);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [path]);

  return row;
}

export async function createRecord<T>(path: string, body: Record<string, string>): Promise<T | null> {
  if (!apiEndpoint) return null;
  const response = await fetch(`${apiEndpoint}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const payload = (await response.json()) as Envelope<T>;
  if (!response.ok || !payload.success || !payload.data) return null;
  return payload.data;
}

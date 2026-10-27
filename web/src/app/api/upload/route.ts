// Pins a launch's image and metadata JSON to IPFS through Pinata, so the
// Pinata key never reaches the browser.

const PINATA_JWT = process.env.PINATA_JWT;
const MAX_IMAGE_BYTES = 1_000_000;
const WINDOW_MS = 10 * 60_000;
const MAX_UPLOADS_PER_WINDOW = 5;

// Per-IP upload times. In memory: enough for one server, and it resets on restart.
const recentUploads = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const times = (recentUploads.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (times.length >= MAX_UPLOADS_PER_WINDOW) return true;
  times.push(now);
  recentUploads.set(ip, times);
  return false;
}

/** The image type from its first bytes. The browser-supplied type can't be trusted. */
function sniffImageType(bytes: Uint8Array): string | null {
  const starts = (sig: number[], offset = 0) => sig.every((b, i) => bytes[offset + i] === b);
  if (starts([0x89, 0x50, 0x4e, 0x47])) return "image/png";
  if (starts([0xff, 0xd8, 0xff])) return "image/jpeg";
  if (starts([0x47, 0x49, 0x46, 0x38])) return "image/gif";
  if (starts([0x52, 0x49, 0x46, 0x46]) && starts([0x57, 0x45, 0x42, 0x50], 8)) return "image/webp";
  return null;
}

function text(form: FormData, key: string, max: number): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function link(form: FormData, key: string): string | undefined {
  const value = text(form, key, 200);
  if (!value) return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

async function pin(file: Blob, name: string): Promise<string> {
  const body = new FormData();
  body.append("file", file, name);
  body.append("network", "public");
  const res = await fetch("https://uploads.pinata.cloud/v3/files", {
    method: "POST",
    headers: { Authorization: `Bearer ${PINATA_JWT}` },
    body,
  });
  if (!res.ok) throw new Error(`Pinata responded ${res.status}`);
  const json = await res.json();
  return json.data.cid as string;
}

/** Whether uploads are configured, so the form can hide the image field. */
export function GET(): Response {
  return Response.json({ enabled: !!PINATA_JWT });
}

export async function POST(request: Request): Promise<Response> {
  if (!PINATA_JWT) return Response.json({ error: "Uploads aren't configured" }, { status: 503 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return Response.json({ error: "Too many uploads, try again later" }, { status: 429 });

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ error: "Expected a form upload" }, { status: 400 });
  }

  const name = text(form, "name", 32);
  const symbol = text(form, "symbol", 10);
  if (!name || !symbol) return Response.json({ error: "Name and symbol are required" }, { status: 400 });

  const metadata: Record<string, string> = { name, symbol };
  const description = text(form, "description", 500);
  if (description) metadata.description = description;
  for (const key of ["website", "twitter", "telegram"]) {
    const url = link(form, key);
    if (url) metadata[key] = url;
  }

  try {
    const image = form.get("image");
    if (image instanceof File && image.size > 0) {
      if (image.size > MAX_IMAGE_BYTES) return Response.json({ error: "Image must be 1 MB or smaller" }, { status: 400 });
      const bytes = new Uint8Array(await image.arrayBuffer());
      const type = sniffImageType(bytes);
      if (!type) return Response.json({ error: "Image must be PNG, JPEG, GIF or WebP" }, { status: 400 });
      const cid = await pin(new Blob([bytes], { type }), `${symbol}-image`);
      metadata.image = `ipfs://${cid}`;
    }
    const json = new Blob([JSON.stringify(metadata)], { type: "application/json" });
    const cid = await pin(json, `${symbol}-metadata.json`);
    return Response.json({ uri: `ipfs://${cid}` });
  } catch (error) {
    console.error("upload failed", error);
    return Response.json({ error: "Upload failed, try again" }, { status: 502 });
  }
}

import "server-only";
import { headers } from "next/headers";

/**
 * The address this request came in on, for absolute links in link previews.
 * SITE_URL overrides it; otherwise it comes from the proxy's forwarded host
 * and scheme, so the app needs no configuration to know its own domain.
 */
export async function requestOrigin(): Promise<string> {
  if (process.env.SITE_URL) return process.env.SITE_URL;
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  return `${proto}://${host}`;
}

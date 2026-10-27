"use client";

import { useQuery } from "@tanstack/react-query";
import { resolveUri } from "./config";

/** The JSON a launch's metadataURI points at. Every field is optional. */
export type TokenMetadata = {
  description?: string;
  image?: string;
  twitter?: string;
  telegram?: string;
  website?: string;
};

export function useTokenMetadata(uri: string | undefined) {
  return useQuery({
    queryKey: ["metadata", uri],
    enabled: !!uri && (uri.startsWith("ipfs://") || uri.startsWith("https://")),
    staleTime: Infinity, // content-addressed: it never changes
    retry: 1,
    queryFn: async (): Promise<TokenMetadata> => {
      const res = await fetch(resolveUri(uri!));
      if (!res.ok) throw new Error("Metadata unavailable");
      const json = await res.json();
      return typeof json === "object" && json ? json : {};
    },
  });
}

/** Only http(s) links are rendered, so metadata can't inject javascript: URLs. */
export function safeLink(url: string | undefined): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.toString() : undefined;
  } catch {
    return undefined;
  }
}

"use client";

import { useState } from "react";
import { resolveUri } from "@/lib/config";

/** The token's image from its metadata, or its symbol's initials. */
export function TokenImage({ image, symbol, size = 56 }: { image?: string; symbol: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const src = image && (image.startsWith("ipfs://") || image.startsWith("https://")) ? resolveUri(image) : null;

  if (src && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- arbitrary IPFS hosts
      <img
        src={src}
        alt={symbol}
        width={size}
        height={size}
        onError={() => setFailed(true)}
        className="shrink-0 rounded-lg bg-panel-2 object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-lg bg-panel-2 font-bold text-accent"
      style={{ width: size, height: size, fontSize: size / 3 }}
    >
      {symbol.slice(0, 2).toUpperCase()}
    </div>
  );
}

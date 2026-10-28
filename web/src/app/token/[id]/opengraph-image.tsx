import { ImageResponse } from "next/og";
import { fetchAuction } from "@/lib/indexer";
import { paymentLabel } from "@/lib/config";
import { formatAmount, marketCap, percentLabel, progressPercent } from "@/lib/format";

export const alt = "A coin on AuctionFlow";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The card X, Telegram and others show for a shared coin link, drawn fresh so
 * the market cap and progress are current when someone opens the post.
 */
export default async function Image({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const row = /^\d+$/.test(id) ? await fetchAuction(id).catch(() => null) : null;

  const name = row?.name ?? "AuctionFlow";
  const symbol = row?.symbol ?? "";
  const percent = row ? (row.state === "ACTIVE" ? progressPercent(row.totalRaised, row.maxRaise) : 100) : 0;
  const cap = row ? `${formatAmount(marketCap(row.currentPrice, row.maxSupply, row.paymentDecimals))} ${paymentLabel(row.paymentTokenAddress)}` : "";
  const status = !row ? "Launch a coin on Base" : row.state === "MIGRATED" ? "On Uniswap" : row.state === "COMPLETED" ? "Graduated" : `${percentLabel(percent)} to Uniswap`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", gap: 56, padding: 72, background: "linear-gradient(125deg, #0047E0, #2E5BFF 50%, #6B4DFF)", color: "#fff" }}>
        <div
          style={{
            width: 340,
            height: 340,
            borderRadius: 999,
            padding: 22,
            display: "flex",
            background: "linear-gradient(160deg, #E0E9FF, #6E9BFF 40%, #0039B3)",
            boxShadow: "0 22px 0 #00287F",
          }}
        >
          <div
            style={{
              flex: 1,
              borderRadius: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #FFD66B, #FF8A5B)",
              fontSize: 140,
              fontWeight: 800,
            }}
          >
            {(symbol || "A").slice(0, 1)}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, flex: 1 }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>{name}</div>
          {row && <div style={{ fontSize: 34, color: "#DCE6FF" }}>{`$${symbol} · ${cap} market cap`}</div>}
          <div style={{ display: "flex", height: 26, borderRadius: 999, background: "rgba(255,255,255,.25)" }}>
            <div style={{ width: `${Math.max(3, percent)}%`, height: 26, borderRadius: 999, background: percent >= 100 ? "#5BE3A6" : "#fff" }} />
          </div>
          <div style={{ fontSize: 30, color: "#DCE6FF" }}>{status}</div>
          <div style={{ fontSize: 34, fontWeight: 800, marginTop: 10 }}>auctionflow</div>
        </div>
      </div>
    ),
    size
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { AreaSeries, ColorType, createChart, type UTCTimestamp } from "lightweight-charts";
import type { PricePoint } from "@/lib/indexer";
import { formatAmount, marketCap } from "@/lib/format";

const RANGES = [
  { label: "1H", seconds: 3600 },
  { label: "1D", seconds: 86_400 },
  { label: "1W", seconds: 604_800 },
  { label: "All", seconds: Infinity },
];

/** Market cap after every trade, on the curve and then on Uniswap. */
export function PriceChart({
  points,
  maxSupply,
  paymentDecimals,
  unit,
}: {
  points: PricePoint[];
  maxSupply: string;
  paymentDecimals: number;
  unit: string;
}) {
  const container = useRef<HTMLDivElement>(null);
  const [range, setRange] = useState("All");

  useEffect(() => {
    if (!container.current) return;
    const chart = createChart(container.current, {
      height: 240,
      layout: { background: { type: ColorType.Solid, color: "transparent" }, textColor: "#8A91A0", fontFamily: "inherit", attributionLogo: false },
      grid: { vertLines: { visible: false }, horzLines: { color: "#EEF1F6" } },
      rightPriceScale: { borderVisible: false },
      timeScale: { borderVisible: false, timeVisible: true },
      crosshair: { horzLine: { labelBackgroundColor: "#0052FF" }, vertLine: { labelBackgroundColor: "#0052FF" } },
      handleScroll: false,
      handleScale: false,
      autoSize: true,
    });
    const series = chart.addSeries(AreaSeries, {
      lineColor: "#0052FF",
      lineWidth: 3,
      topColor: "rgba(46,107,255,.28)",
      bottomColor: "rgba(46,107,255,0)",
      priceFormat: { type: "custom", formatter: (v: number) => `${v <= 0 ? "0" : formatAmount(v, 3)} ${unit}`, minMove: 1e-12 },
    });

    const span = RANGES.find((r) => r.label === range)!.seconds;
    const since = Date.now() / 1000 - span;
    // One point per second: the chart needs strictly increasing times, and
    // several trades can land in one block.
    const bySecond = new Map<number, number>();
    for (const p of points) {
      if (Number(p.timestamp) >= since) bySecond.set(Number(p.timestamp), marketCap(p.price, maxSupply, paymentDecimals));
    }
    // Carry the latest value to now, so a quiet coin's line still reaches the present.
    const latest = points.at(-1);
    if (latest) bySecond.set(Math.floor(Date.now() / 1000), marketCap(latest.price, maxSupply, paymentDecimals));
    series.setData([...bySecond].sort(([a], [b]) => a - b).map(([time, value]) => ({ time: time as UTCTimestamp, value })));
    chart.timeScale().fitContent();

    return () => chart.remove();
  }, [points, maxSupply, paymentDecimals, unit, range]);

  return (
    <div>
      <div ref={container} className="w-full" aria-label="Market cap chart" role="img" />
      <div className="mt-2 flex gap-1.5">
        {RANGES.map((r) => (
          <button
            key={r.label}
            onClick={() => setRange(r.label)}
            aria-pressed={range === r.label}
            className={`h-8 rounded-[10px] px-3 text-[13px] font-extrabold ${range === r.label ? "bg-ink text-white" : "bg-[#F0F3F9] text-muted"}`}
          >
            {r.label}
          </button>
        ))}
      </div>
    </div>
  );
}

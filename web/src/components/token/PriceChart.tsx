"use client";

import { useEffect, useRef } from "react";
import { AreaSeries, ColorType, createChart, type UTCTimestamp } from "lightweight-charts";
import type { PricePoint } from "@/lib/indexer";
import { priceToNumber } from "@/lib/format";

/** The curve price after every trade, in payment-token terms. */
export function PriceChart({ points, paymentDecimals }: { points: PricePoint[]; paymentDecimals: number }) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;
    const chart = createChart(container.current, {
      height: 280,
      layout: { background: { type: ColorType.Solid, color: "transparent" }, textColor: "#8b93a1" },
      grid: { vertLines: { color: "#1b1f26" }, horzLines: { color: "#1b1f26" } },
      rightPriceScale: { borderColor: "#262b33" },
      timeScale: { borderColor: "#262b33", timeVisible: true },
      autoSize: true,
    });
    const series = chart.addSeries(AreaSeries, {
      lineColor: "#4ade80",
      topColor: "rgba(74, 222, 128, 0.3)",
      bottomColor: "rgba(74, 222, 128, 0)",
      priceFormat: { type: "price", precision: 12, minMove: 1e-12 },
    });

    // One point per second: the chart needs strictly increasing times, and
    // several trades can land in one block.
    const bySecond = new Map<number, number>();
    for (const p of points) bySecond.set(Number(p.timestamp), priceToNumber(p.price, paymentDecimals));
    series.setData([...bySecond].map(([time, value]) => ({ time: time as UTCTimestamp, value })));
    chart.timeScale().fitContent();

    return () => chart.remove();
  }, [points, paymentDecimals]);

  return <div ref={container} className="w-full" />;
}

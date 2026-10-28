import type { Metadata } from "next";
import Link from "next/link";
import { Coin3D } from "@/components/Coin3D";

export const metadata: Metadata = { title: "How it works" };

const STEPS = [
  {
    title: "Anyone launches a coin",
    body: "Pick a name, a ticker, an image and whether it's bought with ETH or USDC. Every coin starts with the same supply and rules, and nobody gets coins for free, including the creator.",
  },
  {
    title: "The price follows a curve",
    body: "Each buy raises the price a little and each sell lowers it, along one fixed line. You can always sell back to the curve until the coin graduates.",
  },
  {
    title: "At its goal, it graduates",
    body: "When the money raised reaches the goal, trading on the curve closes. Anyone can then move the coin to a Uniswap pool, and it trades like any other coin on Base.",
  },
  {
    title: "Liquidity is locked forever",
    body: "Most of the raise goes into the Uniswap pool, and the pool position stays in the contract, which has no way to remove it. Nobody can pull the liquidity.",
  },
];

const MONEY = [
  ["Curve trades", "1% of every buy and sell goes to AuctionFlow."],
  ["At graduation", "80% of the raise goes into the Uniswap pool; 20% goes to the creator."],
  ["Uniswap trades", "The pool charges 1%. Of that, 80% goes to the creator and 20% to AuctionFlow."],
];

export default function HowItWorksPage() {
  return (
    <div className="mx-auto flex max-w-[760px] flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-[44px] leading-none font-extrabold tracking-[-0.045em] sm:text-[56px]">How AuctionFlow works</h1>
        <Coin3D size={110} mark="curve" className="hidden shrink-0 -rotate-12 sm:block" />
      </div>
      <ol className="flex flex-col gap-3.5">
        {STEPS.map((s, i) => (
          <li key={s.title} className="card flex gap-4 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-tint font-display text-lg font-extrabold text-blue-edge">{i + 1}</span>
            <div>
              <h2 className="text-lg font-extrabold">{s.title}</h2>
              <p className="mt-1 leading-relaxed text-muted">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
      <section className="card p-6">
        <h2 className="font-display text-2xl font-extrabold tracking-[-0.03em]">Where the money goes</h2>
        <dl className="mt-3">
          {MONEY.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1 border-b border-line py-3 last:border-0 sm:flex-row sm:gap-6">
              <dt className="w-40 shrink-0 font-bold">{k}</dt>
              <dd className="text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="rounded-[28px] bg-warn-tint p-6 text-warn">
        <h2 className="text-lg font-extrabold">The risks</h2>
        <p className="mt-1 leading-relaxed">
          Anyone can launch a coin, and we don&apos;t check who&apos;s behind it. Most coins lose value, often fast. Trades
          happen on Base and can&apos;t be undone. The contracts have not had an external audit yet.
        </p>
      </section>
      <div className="flex flex-wrap gap-3">
        <Link href="/create" className="btn btn-blue h-14 px-6 text-base">
          Create a coin
        </Link>
        <a href="https://github.com/Sodiq-123/AuctionFlow" target="_blank" rel="noreferrer" className="btn btn-white h-14 px-6 text-base">
          Read the contract and security notes
        </a>
      </div>
    </div>
  );
}

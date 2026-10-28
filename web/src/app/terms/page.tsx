import type { Metadata } from "next";
import { isTestnet } from "@/lib/config";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <article className="mx-auto flex max-w-[720px] flex-col gap-4 leading-relaxed">
      <h1 className="font-display text-[44px] font-extrabold tracking-[-0.045em]">Terms</h1>
      {isTestnet && (
        <p className="rounded-[20px] bg-warn-tint p-4 text-sm text-warn">
          This site runs on Base Sepolia, a test network. Coins and funds here have no real value.
        </p>
      )}
      <p>
        AuctionFlow is an interface to smart contracts on Base. Using it means you accept that:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Coins are created by anyone. We don&apos;t vet, endorse or guarantee any coin, creator or price.</li>
        <li>Transactions are final once they&apos;re on Base. We can&apos;t reverse, refund or recover them.</li>
        <li>You hold your own keys. We never have custody of your funds.</li>
        <li>You&apos;re responsible for following the laws where you live, including on taxes and on whether you may use this service.</li>
        <li>The contracts have not had an external audit. Use them at your own risk.</li>
        <li>We may hide a coin&apos;s name and image on this site, for example when it copies a real brand or person. The coin itself stays on Base.</li>
      </ul>
      <p className="text-sm text-muted">This is a plain-language summary and will be replaced by full terms before launch on Base mainnet.</p>
    </article>
  );
}

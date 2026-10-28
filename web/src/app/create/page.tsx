"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { parseEventLogs, type Address } from "viem";
import { useAccount, useSwitchChain, useWalletClient } from "wagmi";
import { maxBuyable, spotPrice, tokenAuctionAbi, type LaunchPreset } from "auctionflow-sdk";
import { chain, isWeth, siteOrigin, usdcAddress, wethAddress } from "@/lib/config";
import { readSdk, writeSdk } from "@/lib/sdk";
import { useTx } from "@/lib/tx";
import { useAuctions } from "@/lib/queries";
import { formatAmount, formatToken } from "@/lib/format";
import { SignInSheet } from "@/components/Wallet";
import { TxStatusView } from "@/components/TxStatus";
import { Coin3D } from "@/components/Coin3D";
import { CoinFrame, CurrencyBadge, Pill, Progress, useMounted } from "@/components/ui";

const MAX_IMAGE_BYTES = 1_000_000;

export default function CreatePage() {
  return (
    <Suspense>
      <Create />
    </Suspense>
  );
}

/** What a preset means for a creator: start price, final price, and how far it rises. */
function describe(preset: LaunchPreset, decimals: number) {
  const soldOut = maxBuyable(0n, preset.maxRaise, preset.basePrice, preset.slope, preset.maxSupply);
  const finalPrice = spotPrice(soldOut, preset.basePrice, preset.slope);
  const scale = 10 ** (decimals + 18);
  const supply = Number(preset.maxSupply) / 1e18;
  return {
    startCap: (Number(preset.basePrice) / scale) * supply,
    rise: Number(finalPrice) / Number(preset.basePrice),
    goal: formatToken(preset.maxRaise, decimals),
  };
}

function Create() {
  const prefill = useSearchParams().get("name") ?? "";
  const account = useAccount();
  const { data: walletClient } = useWalletClient();
  const { switchChain } = useSwitchChain();
  const { status, run, busy, reset } = useTx();
  const { data: auctions } = useAuctions();
  // The wallet reconnects before this Suspense boundary hydrates; until then, match the server.
  const mounted = useMounted();
  const address = mounted ? account.address : undefined;
  const chainId = mounted ? account.chainId : undefined;

  const [name, setName] = useState(prefill.slice(0, 32));
  const [symbol, setSymbol] = useState("");
  const [description, setDescription] = useState("");
  const [links, setLinks] = useState({ twitter: "", telegram: "", website: "" });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);
  const [currency, setCurrency] = useState<Address>(wethAddress);
  const [agreed, setAgreed] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [created, setCreated] = useState<{ id: string; name: string; symbol: string } | null>(null);
  const [signIn, setSignIn] = useState(false);

  // The standard launch for each currency, read from the contract.
  const { data: terms } = useQuery({
    queryKey: ["launch-terms"],
    queryFn: async () => {
      const [eth, usdc, paused] = await Promise.all([readSdk.getLaunchPreset(wethAddress), readSdk.getLaunchPreset(usdcAddress), readSdk.isPaused()]);
      return { eth, usdc, paused };
    },
  });
  const { data: uploads } = useQuery({
    queryKey: ["uploads-enabled"],
    queryFn: async () => (await (await fetch("/api/upload")).json()) as { enabled: boolean },
  });

  // Fall back to USDC if this deployment has no ETH preset.
  useEffect(() => {
    if (terms && !terms.eth && terms.usdc) setCurrency(usdcAddress);
  }, [terms]);

  useEffect(() => {
    if (!image) return setPreview(null);
    const url = URL.createObjectURL(image);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  const preset = isWeth(currency) ? terms?.eth : terms?.usdc;
  const decimals = isWeth(currency) ? 18 : 6;
  const unit = isWeth(currency) ? "ETH" : "USDC";
  const info = preset ? describe(preset, decimals) : null;
  const tickerTaken = mounted && !!symbol && auctions?.some((a) => a.symbol.toUpperCase() === symbol.toUpperCase());
  const wrongChain = !!address && chainId !== chain.id;
  const valid = name.trim().length > 0 && /^[A-Z0-9]{1,10}$/.test(symbol) && agreed && !!preset && !imageError;

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!address) return setSignIn(true);
    if (wrongChain) return switchChain({ chainId: chain.id });
    if (!walletClient || !valid) return;
    setUploadError(null);
    reset();

    // Pin the image and metadata first, then launch with the resulting URI.
    let uri = "";
    if (uploads?.enabled) {
      setUploading(true);
      const form = new FormData();
      form.set("name", name.trim());
      form.set("symbol", symbol);
      if (description.trim()) form.set("description", description.trim());
      for (const [key, value] of Object.entries(links)) if (value.trim()) form.set(key, value.trim());
      if (image) form.set("image", image);
      try {
        const res = await fetch("/api/upload", { method: "POST", body: form });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error ?? "Upload failed");
        uri = json.uri;
      } catch (error) {
        setUploading(false);
        return setUploadError((error as Error).message);
      }
      setUploading(false);
    }

    const receipt = await run([{ label: "Create on Base", send: () => writeSdk(walletClient).launch(name.trim(), symbol, uri, currency) }]);
    if (!receipt) return;
    const [log] = parseEventLogs({ abi: tokenAuctionAbi, eventName: "AuctionCreated", logs: receipt.logs });
    if (log) setCreated({ id: log.args.auctionId.toString(), name: name.trim(), symbol });
  }

  if (created) return <Live coin={created} image={preview} />;

  const button = !address
    ? "Sign in to create"
    : wrongChain
      ? `Switch to ${chain.name}`
      : terms?.paused
        ? "Launches are paused"
        : uploading
          ? "Saving your image…"
          : busy
            ? "Creating…"
            : `Launch ${name.trim() || "coin"} · network fee only`;

  return (
    <form onSubmit={submit} className="grid items-start gap-7 lg:grid-cols-[minmax(0,1fr)_380px]">
      <section className="flex flex-col gap-5">
        <h1 className="font-display text-[44px] leading-none font-extrabold tracking-[-0.045em] sm:text-[52px]">Make a coin</h1>
        <p className="max-w-[560px] text-[17px] leading-relaxed text-muted">
          It&apos;s free apart from the network fee. Everyone gets the same fair rules, and nobody gets coins for free, including you.
        </p>

        {terms?.paused && (
          <div className="rounded-[20px] bg-warn-tint p-4 text-sm text-warn">
            <b>New launches are paused for now.</b> Trading on existing coins carries on. Check back soon.
          </div>
        )}

        <div className="card grid gap-6 p-6 sm:grid-cols-[180px_minmax(0,1fr)]">
          {uploads?.enabled !== false ? (
            <label className="flex h-[180px] cursor-pointer flex-col items-center justify-center gap-2 self-start rounded-full border-[3px] border-dashed border-[#B8CBFF] bg-[#F5F8FF] text-center text-sm font-extrabold text-blue-edge hover:bg-blue-tint">
              {preview ? (
                // eslint-disable-next-line @next/next/no-img-element -- local preview
                <img src={preview} alt="Your coin's image" className="h-full w-full rounded-full object-cover" />
              ) : (
                <>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0052FF" strokeWidth="2.2" aria-hidden="true">
                    <path d="M12 16V4M7 9l5-5 5 5M4 20h16" />
                  </svg>
                  Add image
                  <span className="px-5 text-xs font-semibold text-muted">PNG, JPG, GIF or WebP up to 1 MB</span>
                </>
              )}
              <input
                type="file"
                accept="image/png,image/jpeg,image/gif,image/webp"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  setImageError(file && file.size > MAX_IMAGE_BYTES ? `That image is ${(file.size / 1e6).toFixed(1)} MB. The limit is 1 MB.` : null);
                  setImage(file && file.size <= MAX_IMAGE_BYTES ? file : null);
                }}
              />
            </label>
          ) : (
            <div className="flex h-[180px] items-center justify-center rounded-full bg-ground p-6 text-center text-xs font-semibold text-muted">
              Image uploads aren&apos;t set up on this server yet.
            </div>
          )}
          <div className="flex flex-col gap-3.5">
            <div className="grid gap-3 sm:grid-cols-[1fr_160px]">
              <label className="flex flex-col gap-1.5 text-sm font-bold">
                Name
                <input value={name} onChange={(e) => setName(e.target.value.slice(0, 32))} required placeholder="Moon Cat" className="field h-[52px] text-base" />
              </label>
              <label className="flex flex-col gap-1.5 text-sm font-bold">
                Ticker
                <input
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10))}
                  required
                  placeholder="MCAT"
                  className="field h-[52px] text-base"
                />
              </label>
            </div>
            {tickerTaken && (
              <p className="rounded-2xl bg-warn-tint px-3.5 py-2.5 text-[13px] font-semibold text-warn">
                Another coin already uses ${symbol}. You can still launch, but people may mix them up.
              </p>
            )}
            <label className="flex flex-col gap-1.5 text-sm font-bold">
              <span>
                Description <span className="font-medium text-muted">(optional)</span>
              </span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, 500))}
                rows={3}
                disabled={uploads?.enabled === false}
                className="field py-3 font-medium"
              />
            </label>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {(
                [
                  ["twitter", "X link"],
                  ["telegram", "Telegram link"],
                  ["website", "Website"],
                ] as const
              ).map(([key, placeholder]) => (
                <input
                  key={key}
                  value={links[key]}
                  onChange={(e) => setLinks({ ...links, [key]: e.target.value })}
                  placeholder={placeholder}
                  aria-label={placeholder}
                  type="url"
                  disabled={uploads?.enabled === false}
                  className="field h-[46px]"
                />
              ))}
            </div>
          </div>
        </div>
        {imageError && <p className="text-sm font-semibold text-danger">{imageError}</p>}

        <fieldset className="flex flex-col gap-3">
          <legend className="mb-3 font-display text-2xl font-extrabold tracking-[-0.03em]">What do people buy it with?</legend>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {[
              { token: wethAddress, preset: terms?.eth, body: "What Base traders hold. Buying takes one wallet prompt, and the Uniswap pool pairs with ETH.", tag: "Recommended" },
              { token: usdcAddress, preset: terms?.usdc, body: "Prices in dollars. Buyers allow USDC first, so their wallet asks twice.", tag: null },
            ]
              .filter((o) => o.preset)
              .map((o) => {
                const selected = currency === o.token;
                const dec = isWeth(o.token) ? 18 : 6;
                return (
                  <label
                    key={o.token}
                    className={`flex cursor-pointer flex-col gap-2.5 rounded-[24px] bg-white p-5 ${
                      selected ? "shadow-[inset_0_0_0_3px_var(--color-blue),0_6px_0_#C9D6F5]" : "shadow-[inset_0_0_0_2px_var(--color-line),0_6px_0_#E1E6F0]"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <input type="radio" name="currency" checked={selected} onChange={() => setCurrency(o.token)} className="h-5 w-5 accent-blue" />
                      <CurrencyBadge token={o.token} size={28} className="text-lg" />
                      {o.tag && (
                        <span className="ml-auto">
                          <Pill>{o.tag}</Pill>
                        </span>
                      )}
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{o.body}</span>
                    <span className="text-sm font-extrabold">
                      Graduates at {formatToken(o.preset!.maxRaise, dec)} {isWeth(o.token) ? "ETH" : "USDC"} raised
                    </span>
                  </label>
                );
              })}
          </div>
        </fieldset>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-[#3A3F4A]">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 h-5 w-5 accent-blue" />
          The name and image don&apos;t copy a real brand or person, and I know a coin can&apos;t be changed or deleted once it&apos;s live.
        </label>
        <button
          type="submit"
          disabled={!!address && !wrongChain && (!valid || busy || uploading || !!terms?.paused)}
          className="btn btn-blue h-16 text-lg [--edge:7px]"
        >
          {button}
        </button>
        {uploadError && <p className="text-sm font-semibold text-danger">Couldn&apos;t save your image: {uploadError}</p>}
        <TxStatusView status={status} />
      </section>

      <aside className="flex flex-col gap-5 lg:sticky lg:top-4">
        <div className="text-[13px] font-extrabold tracking-wide text-muted">PREVIEW</div>
        <div className="card flex flex-col gap-3.5 p-5">
          <span className="flex items-center gap-3">
            <CoinFrame image={preview ?? undefined} symbol={symbol || name || "?"} size={64} />
            <span className="min-w-0">
              <span className="block truncate font-display text-[22px] font-extrabold tracking-[-0.03em]">{name || "Your coin"}</span>
              <span className="text-[13px] font-semibold text-muted">${symbol || "TICKER"} · by you</span>
            </span>
          </span>
          {description && <span className="line-clamp-2 text-sm text-muted">{description}</span>}
          <span className="flex items-baseline justify-between">
            <span className="text-[13px] font-semibold text-muted">Market cap at launch</span>
            <b>{info ? `${formatAmount(info.startCap)} ${unit}` : "–"}</b>
          </span>
          <Progress percent={0} />
          <span className="text-[13px] font-extrabold text-blue-edge">0% to Uniswap</span>
        </div>
        {preset && info && (
          <div className="card flex flex-col gap-2.5 p-5 text-sm">
            <b className="text-base">Same rules for every coin</b>
            <Rule k="Supply" v={`${formatToken(preset.maxSupply, 18)}`} />
            <Rule k="Graduates at" v={`${info.goal} ${unit} raised`} />
            <Rule k="Price rise to graduation" v={`${Math.round(info.rise)}×`} />
            <Rule k="At graduation" v={`${Number(preset.liquidityBps) / 100}% pool · ${100 - Number(preset.liquidityBps) / 100}% you`} />
            <Rule k="After graduation" v="80% of pool fees to you" />
          </div>
        )}
      </aside>
      <SignInSheet open={signIn} onClose={() => setSignIn(false)} />
    </form>
  );
}

function Rule({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-muted">{k}</span>
      <b className="text-right">{v}</b>
    </div>
  );
}

const CONFETTI = [
  [6, 8, 10, 22, "#fff", 20], [24, 4, 14, 14, "#5BE3A6", 0], [44, 10, 8, 20, "#FFD66B", -30], [64, 5, 12, 26, "#C4B5FF", 40],
  [84, 12, 14, 14, "#FFB27A", 15], [12, 22, 16, 16, "#FFD66B", 0], [78, 30, 10, 24, "#fff", -50], [5, 44, 12, 12, "#5BE3A6", 30],
  [90, 48, 16, 16, "#C4B5FF", 0], [20, 60, 10, 22, "#FFB27A", 60], [72, 62, 12, 12, "#fff", -20], [48, 3, 10, 10, "#5BE3A6", 0],
] as const;

/** The moment after launch: the coin, confetti, and ways to share it. */
function Live({ coin, image }: { coin: { id: string; name: string; symbol: string }; image: string | null }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteOrigin()}/token/${coin.id}`;
  const tweet = `https://x.com/intent/post?text=${encodeURIComponent(`I just launched $${coin.symbol} on AuctionFlow 🚀`)}&url=${encodeURIComponent(url)}`;
  return (
    <section className="relative mx-auto flex max-w-[560px] flex-col items-center gap-5 overflow-hidden rounded-[36px] bg-[linear-gradient(160deg,#0047E0,#2E5BFF_55%,#6B4DFF)] px-6 pt-16 pb-8 text-center text-white">
      {CONFETTI.map(([x, y, w, h, c, a], i) => (
        <span key={i} className="absolute rounded-[3px]" style={{ left: `${x}%`, top: `${y}%`, width: w, height: h, background: c, transform: `rotate(${a}deg)` }} aria-hidden="true" />
      ))}
      <div className="relative">
        <div
          className="relative flex h-[180px] w-[180px] items-center justify-center rounded-full p-3"
          style={{ background: "linear-gradient(160deg,#E0E9FF,#6E9BFF 40%,#0039B3)", boxShadow: "0 12px 0 #00287F, 0 34px 50px rgba(0,16,70,.5)" }}
        >
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element -- local preview
            <img src={image} alt="" className="h-full w-full rounded-full object-cover" />
          ) : (
            <Coin3D size={130} mark="curve" />
          )}
        </div>
      </div>
      <h1 className="relative mt-4 font-display text-[46px] leading-none font-extrabold tracking-[-0.045em]">It&apos;s live!</h1>
      <p className="relative text-blue-soft">
        ${coin.symbol} is on Base. Share it so the first buyers find it.
      </p>
      <div className="relative flex w-full flex-col gap-2.5">
        <a href={tweet} target="_blank" rel="noreferrer" className="btn h-14 bg-white text-base text-blue-edge [--edge-color:#9DB8FF] [--edge:6px]">
          Share on X
        </a>
        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={() => {
              navigator.clipboard.writeText(url);
              setCopied(true);
            }}
            className="btn h-[52px] bg-white/15 text-white [--edge-color:rgba(0,16,70,.35)]"
          >
            {copied ? "Copied" : "Copy link"}
          </button>
          <Link href={`/token/${coin.id}`} className="btn h-[52px] bg-white/15 text-white [--edge-color:rgba(0,16,70,.35)]">
            Go to my coin
          </Link>
        </div>
      </div>
    </section>
  );
}

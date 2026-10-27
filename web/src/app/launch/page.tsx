"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { erc20Abi, parseEventLogs } from "viem";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import { tokenAuctionAbi } from "auctionflow-sdk";
import { auctionAddress, chain } from "@/lib/config";
import { readSdk, writeSdk } from "@/lib/sdk";
import { useTx } from "@/lib/tx";
import { formatToken } from "@/lib/format";

const field = "mt-1 w-full rounded-lg border border-line bg-panel-2 px-3 py-2.5 outline-none focus:border-accent";

export default function LaunchPage() {
  const router = useRouter();
  const { address, chainId } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const { status, run, busy } = useTx();
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // The terms every one-click launch gets, read from the contract.
  const { data: terms } = useQuery({
    queryKey: ["launch-terms"],
    enabled: !!publicClient,
    queryFn: async () => {
      const read = <T,>(functionName: "launchPreset" | "defaultFeeBps") =>
        publicClient!.readContract({ address: auctionAddress, abi: tokenAuctionAbi, functionName }) as Promise<T>;
      const [preset, feeBps, paused] = await Promise.all([
        read<readonly [`0x${string}`, bigint, bigint, bigint, bigint, bigint]>("launchPreset"),
        read<bigint>("defaultFeeBps"),
        readSdk.isPaused(),
      ]);
      const [paymentToken, maxSupply, , , maxRaise, liquidityBps] = preset;
      const [decimals, symbol] = await Promise.all([
        publicClient!.readContract({ address: paymentToken, abi: erc20Abi, functionName: "decimals" }),
        publicClient!.readContract({ address: paymentToken, abi: erc20Abi, functionName: "symbol" }),
      ]);
      return { maxSupply, maxRaise, liquidityBps, feeBps, paused, decimals, symbol };
    },
  });
  const { data: uploads } = useQuery({
    queryKey: ["uploads-enabled"],
    queryFn: async () => (await (await fetch("/api/upload")).json()) as { enabled: boolean },
  });

  useEffect(() => {
    if (!image) return setPreview(null);
    const url = URL.createObjectURL(image);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!walletClient) return;
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name")).trim();
    const symbol = String(form.get("symbol")).trim().toUpperCase();
    setUploadError(null);

    // Pin the image and metadata first, then launch with the resulting URI.
    let uri = "";
    if (uploads?.enabled) {
      setUploading(true);
      form.set("symbol", symbol);
      if (image) form.set("image", image);
      const res = await fetch("/api/upload", { method: "POST", body: form });
      const json = await res.json();
      setUploading(false);
      if (!res.ok) return setUploadError(json.error ?? "Upload failed");
      uri = json.uri;
    }

    const receipt = await run([{ label: "Launch", send: () => writeSdk(walletClient).launch(name, symbol, uri) }]);
    if (!receipt) return;
    const [created] = parseEventLogs({ abi: tokenAuctionAbi, eventName: "AuctionCreated", logs: receipt.logs });
    router.push(created ? `/token/${created.args.auctionId}` : "/");
  }

  const wrongChain = !!address && chainId !== chain.id;
  const disabled = !walletClient || wrongChain || busy || uploading || !!terms?.paused;

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-2xl font-bold">Launch a token</h1>
      <p className="mt-2 text-muted">
        One transaction creates your token. It trades on a bonding curve immediately, and graduates to Uniswap when it
        reaches the threshold.
      </p>

      {terms && (
        <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <Term label="Supply" value={`${formatToken(terms.maxSupply, 18)} tokens`} />
          <Term label="Graduates at" value={`${formatToken(terms.maxRaise, terms.decimals)} ${terms.symbol} raised`} />
          <Term label="At graduation" value={`${Number(terms.liquidityBps) / 100}% to Uniswap, the rest to you`} />
          <Term label="Trading fee" value={`${Number(terms.feeBps) / 100}% per trade`} />
        </dl>
      )}

      <form onSubmit={submit} className="mt-6 space-y-4 rounded-xl border border-line bg-panel p-5">
        <label className="block text-sm">
          Name
          <input name="name" required maxLength={32} placeholder="Flow Demo" className={field} />
        </label>
        <label className="block text-sm">
          Symbol
          <input
            name="symbol"
            required
            maxLength={10}
            pattern="[A-Za-z0-9]+"
            title="Letters and numbers only"
            placeholder="FLOW"
            className={`${field} uppercase`}
          />
        </label>

        {uploads?.enabled ? (
          <>
            <label className="block text-sm">
              Description
              <textarea name="description" maxLength={500} rows={3} className={field} />
            </label>
            <label className="block text-sm">
              Image <span className="text-muted">(PNG, JPEG, GIF or WebP, up to 1 MB)</span>
              <div className="mt-1 flex items-center gap-3">
                {preview && (
                  // eslint-disable-next-line @next/next/no-img-element -- local preview
                  <img src={preview} alt="" className="h-14 w-14 rounded-lg object-cover" />
                )}
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/gif,image/webp"
                  onChange={(e) => setImage(e.target.files?.[0] ?? null)}
                  className="text-sm text-muted file:mr-3 file:rounded-lg file:border-0 file:bg-panel-2 file:px-3 file:py-2 file:text-white"
                />
              </div>
            </label>
            <div className="grid gap-3 sm:grid-cols-3">
              {(["website", "twitter", "telegram"] as const).map((key) => (
                <label key={key} className="block text-sm capitalize">
                  {key === "twitter" ? "X" : key}
                  <input name={key} type="url" placeholder="https://" className={field} />
                </label>
              ))}
            </div>
          </>
        ) : (
          <p className="text-sm text-muted">Image uploads aren&apos;t configured on this server, so tokens launch without one.</p>
        )}

        <button
          type="submit"
          disabled={disabled}
          className="w-full rounded-lg bg-accent py-3 font-semibold text-accent-ink disabled:cursor-not-allowed disabled:opacity-50"
        >
          {!address
            ? "Connect a wallet to launch"
            : wrongChain
              ? `Switch to ${chain.name} to launch`
              : terms?.paused
                ? "Launches are paused"
                : uploading
                  ? "Uploading…"
                  : busy && status.state === "busy"
                    ? `${status.label}…`
                    : "Launch"}
        </button>
        {uploadError && <p className="text-sm text-danger">{uploadError}</p>}
        {status.state === "error" && <p className="text-sm text-danger">{status.message}</p>}
        <p className="text-xs text-muted">
          Launching is free apart from gas. Your name, symbol and metadata are permanent once launched.
        </p>
      </form>
    </div>
  );
}

function Term({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-line bg-panel p-3">
      <dt className="text-xs text-muted">{label}</dt>
      <dd className="mt-1 font-medium">{value}</dd>
    </div>
  );
}

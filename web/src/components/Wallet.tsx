"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { erc20Abi, formatEther } from "viem";
import { useAccount, useBalance, useConnect, useDisconnect, useReadContract, useSwitchChain, type Connector } from "wagmi";
import { chain, explorerUrl, isTestnet, usdcAddress } from "@/lib/config";
import { formatAmount, formatToken, shortAddress } from "@/lib/format";
import { Sheet } from "./ui";

/** A wallet's avatar: a gradient seeded by its address. */
export function Avatar({ address, size = 24 }: { address: string; size?: number }) {
  const hue = parseInt(address.slice(2, 8), 16) % 360;
  return (
    <span
      className="inline-block shrink-0 rounded-full"
      style={{ width: size, height: size, background: `linear-gradient(135deg, hsl(${hue} 90% 75%), hsl(${(hue + 60) % 360} 80% 55%))` }}
    />
  );
}

function useEthBalance() {
  const { address } = useAccount();
  return useBalance({ address, query: { enabled: !!address, refetchInterval: 15_000 } }).data?.value;
}

/** The header's wallet control: sign in, switch network, or the account menu. */
export function WalletButton() {
  const { address, isConnected, chainId } = useAccount();
  const { switchChain, isPending: switching } = useSwitchChain();
  const eth = useEthBalance();
  const [signIn, setSignIn] = useState(false);
  const [account, setAccount] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // The wallet is only known in the browser; render the signed-out button until then.
  if (!mounted || !isConnected || !address) {
    return (
      <>
        <button onClick={() => setSignIn(true)} className="btn btn-blue h-11 px-5 [--edge:4px]">
          Sign in
        </button>
        <SignInSheet open={signIn} onClose={() => setSignIn(false)} />
      </>
    );
  }

  if (chainId !== chain.id) {
    return (
      <button onClick={() => switchChain({ chainId: chain.id })} disabled={switching} className="btn btn-ink h-11 px-4 [--edge:4px]">
        {switching ? "Switching…" : `Switch to ${chain.name}`}
      </button>
    );
  }

  return (
    <>
      <button
        onClick={() => setAccount(true)}
        className="flex h-11 items-center gap-2 rounded-[14px] bg-white px-3 text-sm font-bold shadow-[inset_0_0_0_2px_var(--color-line)] hover:shadow-[inset_0_0_0_2px_#C9D6F5]"
      >
        <Avatar address={address} />
        <span>{shortAddress(address)}</span>
        {eth !== undefined && <span className="hidden text-muted sm:inline">· {formatAmount(Number(formatEther(eth)))} ETH</span>}
      </button>
      <AccountSheet open={account} onClose={() => setAccount(false)} />
    </>
  );
}

/** Wallets to offer: each one the browser announced, then Coinbase Wallet's app. */
function useWalletChoices(): Connector[] {
  const { connectors } = useConnect();
  const announced = connectors.filter((c) => c.type === "injected" && c.id !== "injected");
  const generic = connectors.find((c) => c.id === "injected");
  const coinbase = connectors.find((c) => c.type === "coinbaseWallet");
  const walletConnect = connectors.find((c) => c.type === "walletConnect");
  // The generic entry only helps when no wallet announced itself but one is present.
  const hasLegacyWallet = typeof window !== "undefined" && "ethereum" in window;
  return [...announced, ...(announced.length === 0 && hasLegacyWallet && generic ? [generic] : []), ...(coinbase ? [coinbase] : []), ...(walletConnect ? [walletConnect] : [])];
}

export function SignInSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { connect, isPending, error, variables } = useConnect({ mutation: { onSuccess: onClose } });
  const choices = useWalletChoices();
  const hasBrowserWallet = choices.some((c) => c.type === "injected");
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <Sheet open={open} onClose={onClose} title="Sign in with a wallet">
      <div className="flex flex-col gap-2.5">
        {choices.map((connector) => {
          const pending = isPending && variables?.connector === connector;
          const isCoinbase = connector.type === "coinbaseWallet";
          const isWalletConnect = connector.type === "walletConnect";
          return (
            <button
              key={connector.uid}
              onClick={() => {
                // WalletConnect opens its own QR window; ours steps aside for it.
                if (isWalletConnect) onClose();
                connect({ connector });
              }}
              disabled={isPending}
              className="flex h-[64px] items-center gap-3 rounded-[18px] bg-ground px-4 text-left font-bold hover:bg-blue-tint disabled:opacity-60"
            >
              {connector.icon ? (
                // eslint-disable-next-line @next/next/no-img-element -- the wallet's own data-URI icon
                <img src={connector.icon} alt="" className="h-9 w-9 rounded-[10px]" />
              ) : (
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-[10px] text-xs font-extrabold text-white ${
                    isCoinbase ? "bg-blue" : isWalletConnect ? "bg-[#3B99FC]" : "bg-ink"
                  }`}
                >
                  {isCoinbase ? "CB" : isWalletConnect ? "WC" : "W"}
                </span>
              )}
              <span className="flex-1">
                {connector.id === "injected" ? "Browser wallet" : connector.name}
                <span className="block text-[13px] font-medium text-muted">
                  {pending
                    ? "Check your wallet…"
                    : isCoinbase
                      ? "App, extension or passkey"
                      : isWalletConnect
                        ? "Scan a QR code with any wallet app"
                        : "In this browser"}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {!hasBrowserWallet && (
        <div className="mt-4 rounded-[20px] bg-ground p-4 text-sm leading-relaxed">
          <b>No wallet in this browser?</b> On a phone, open this page in your wallet app&apos;s browser:
          <div className="mt-3 grid grid-cols-2 gap-2">
            <a href={`https://go.cb-w.com/dapp?cb_url=${encodeURIComponent(pageUrl)}`} className="btn btn-blue h-11 text-sm [--edge:4px]">
              Coinbase Wallet
            </a>
            <a href={`https://metamask.app.link/dapp/${pageUrl.replace(/^https?:\/\//, "")}`} className="btn btn-white h-11 text-sm [--edge:4px]">
              MetaMask
            </a>
          </div>
        </div>
      )}

      {error && (
        <p className="mt-3 text-sm font-semibold text-danger">
          {/rejected|denied/i.test(error.message) ? "You cancelled in your wallet." : "Couldn't connect. Try again or pick another wallet."}
        </p>
      )}
      <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-muted">
        New to crypto? A wallet takes about two minutes to set up.{" "}
        <a href="https://www.coinbase.com/wallet" target="_blank" rel="noreferrer" className="font-bold text-blue">
          Get Coinbase Wallet
        </a>
      </p>
    </Sheet>
  );
}

function AccountSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const eth = useEthBalance();
  const { data: usdc } = useReadContract({
    address: usdcAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address!],
    query: { enabled: !!address && open },
  });
  const [copied, setCopied] = useState(false);
  const [funds, setFunds] = useState(false);
  if (!address) return null;

  return (
    <>
      <Sheet open={open && !funds} onClose={onClose} title="Your wallet">
        <div className="flex items-center gap-3">
          <Avatar address={address} size={48} />
          <div className="flex-1">
            <b className="text-[17px]">{shortAddress(address)}</b>
            <div className="text-[13px] text-muted">{chain.name}</div>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(address);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="h-11 rounded-[14px] bg-ground px-3 text-sm font-bold"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <div className="rounded-[18px] bg-ground p-3.5">
            <div className="text-[13px] text-muted">ETH</div>
            <b className="font-display text-xl">{eth === undefined ? "–" : formatAmount(Number(formatEther(eth)))}</b>
          </div>
          <div className="rounded-[18px] bg-ground p-3.5">
            <div className="text-[13px] text-muted">USDC</div>
            <b className="font-display text-xl">{usdc === undefined ? "–" : formatToken(usdc, 6)}</b>
          </div>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <Link href="/portfolio" onClick={onClose} className="flex h-[52px] items-center rounded-2xl bg-ground px-4 font-bold">
            Portfolio and claims
          </Link>
          <button onClick={() => setFunds(true)} className="flex h-[52px] items-center rounded-2xl bg-ground px-4 font-bold">
            Get ETH or USDC
          </button>
          <a href={`${explorerUrl}/address/${address}`} target="_blank" rel="noreferrer" className="flex h-[52px] items-center rounded-2xl bg-ground px-4 font-bold">
            View on Basescan
          </a>
          <button
            onClick={() => {
              disconnect();
              onClose();
            }}
            className="h-[52px] rounded-2xl font-extrabold text-danger"
          >
            Sign out
          </button>
        </div>
      </Sheet>
      <FundsSheet open={open && funds} onClose={() => setFunds(false)} address={address} />
    </>
  );
}

export function FundsSheet({ open, onClose, address }: { open: boolean; onClose: () => void; address?: string }) {
  return (
    <Sheet open={open} onClose={onClose} title={isTestnet ? "Get test ETH and USDC" : "Add ETH to your wallet"}>
      {isTestnet ? (
        <div className="flex flex-col gap-3">
          <div className="rounded-[20px] bg-warn-tint p-4 text-sm leading-relaxed text-warn">
            <b>This is the test network.</b> Coins here have no real value, and test funds are free from faucets.
          </div>
          <a href="https://portal.cdp.coinbase.com/products/faucet" target="_blank" rel="noreferrer" className="btn btn-blue h-14">
            Get free test ETH
          </a>
          <a href="https://faucet.circle.com/" target="_blank" rel="noreferrer" className="btn btn-white h-14">
            Get free test USDC
          </a>
        </div>
      ) : (
        <p className="text-sm leading-relaxed text-muted">
          <b className="text-ink">On Base:</b> buy ETH in your wallet app or on an exchange like Coinbase, and send it to your
          address on the Base network. Keep a little ETH for network fees.
        </p>
      )}
      {address && (
        <div className="mt-4 flex items-center gap-2 rounded-2xl bg-ground px-3 py-2.5 text-[13px]">
          <span className="flex-1 truncate font-bold">{address}</span>
          <button onClick={() => navigator.clipboard.writeText(address)} className="h-9 rounded-[10px] bg-white px-3 font-extrabold">
            Copy
          </button>
        </div>
      )}
    </Sheet>
  );
}

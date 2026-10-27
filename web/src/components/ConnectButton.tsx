"use client";

import { useState } from "react";
import { useAccount, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { chain } from "@/lib/config";
import { shortAddress } from "@/lib/format";

export function ConnectButton() {
  const { address, isConnected, chainId } = useAccount();
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: switching } = useSwitchChain();
  const [open, setOpen] = useState(false);

  if (!isConnected) {
    return (
      <div className="flex flex-col items-end">
        <button
          onClick={() => connect({ connector: connectors[0] })}
          disabled={isPending}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-ink hover:opacity-90 disabled:opacity-60"
        >
          {isPending ? "Connecting…" : "Connect wallet"}
        </button>
        {error && (
          <span className="mt-1 text-xs text-danger">
            {(error as Error).name === "ProviderNotFoundError" ? "Install a browser wallet such as MetaMask" : "Couldn't connect"}
          </span>
        )}
      </div>
    );
  }

  if (chainId !== chain.id) {
    return (
      <button
        onClick={() => switchChain({ chainId: chain.id })}
        disabled={switching}
        className="rounded-lg bg-danger px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
      >
        Switch to {chain.name}
      </button>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-lg border border-line bg-panel px-4 py-2 font-mono text-sm hover:bg-panel-2"
      >
        {shortAddress(address!)}
      </button>
      {open && (
        <button
          onClick={() => {
            disconnect();
            setOpen(false);
          }}
          className="absolute right-0 mt-2 w-full rounded-lg border border-line bg-panel px-4 py-2 text-sm hover:bg-panel-2"
        >
          Disconnect
        </button>
      )}
    </div>
  );
}

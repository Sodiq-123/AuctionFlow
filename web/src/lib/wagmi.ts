import { createConfig, http } from "wagmi";
import { coinbaseWallet, injected } from "wagmi/connectors";
import { base, baseSepolia } from "viem/chains";
import { chain, rpcUrl } from "./config";

export const wagmiConfig = createConfig({
  chains: [chain],
  connectors: [
    // Browser wallets: MetaMask, Rabby, the Coinbase extension and the like.
    // Each one that announces itself (EIP-6963) also gets its own entry.
    injected(),
    // Coinbase Wallet's app and smart wallet, by QR code or passkey.
    coinbaseWallet({ appName: "AuctionFlow" }),
  ],
  // Both chains need a transport for the types; only the active one is used.
  transports: {
    [base.id]: http(chain.id === base.id ? rpcUrl : undefined),
    [baseSepolia.id]: http(chain.id === baseSepolia.id ? rpcUrl : undefined),
  },
  ssr: true,
});

declare module "wagmi" {
  interface Register {
    config: typeof wagmiConfig;
  }
}

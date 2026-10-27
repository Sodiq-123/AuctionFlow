import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { base, baseSepolia } from "viem/chains";
import { chain, rpcUrl } from "./config";

export const wagmiConfig = createConfig({
  chains: [chain],
  // Browser wallets: MetaMask, Coinbase Wallet, Rabby and the like.
  connectors: [injected()],
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

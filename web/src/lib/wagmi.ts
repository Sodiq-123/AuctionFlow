import { createConfig, http } from "wagmi";
import { coinbaseWallet, injected, walletConnect } from "wagmi/connectors";
import { base, baseSepolia } from "viem/chains";
import { chain, rpcUrl, siteOrigin } from "./config";

/** WalletConnect needs a free project ID from cloud.reown.com; without one it isn't offered. */
const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const wagmiConfig = createConfig({
  chains: [chain],
  connectors: [
    // Browser wallets: MetaMask, Rabby, the Coinbase extension and the like.
    // Each one that announces itself (EIP-6963) also gets its own entry.
    injected(),
    // Coinbase Wallet's app and smart wallet, by QR code or passkey.
    coinbaseWallet({ appName: "AuctionFlow" }),
    // Any other wallet app, by QR code or a link on phones.
    ...(walletConnectProjectId
      ? [
          walletConnect({
            projectId: walletConnectProjectId,
            metadata: {
              name: "AuctionFlow",
              description: "Launch a coin on Base",
              url: siteOrigin(),
              icons: [`${siteOrigin()}/icon.svg`],
            },
            qrModalOptions: { themeMode: "light", themeVariables: { "--wcm-accent-color": "#0052FF" } },
          }),
        ]
      : []),
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

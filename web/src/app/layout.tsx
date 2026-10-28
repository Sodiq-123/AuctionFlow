import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Footer, Header, MobileNav } from "@/components/Header";
import { RiskNotice } from "@/components/RiskNotice";
import { siteUrl } from "@/lib/config";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700", "800"], variable: "--font-jakarta" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-bricolage" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "AuctionFlow · launch a coin on Base", template: "%s · AuctionFlow" },
  description: "Launch a coin in a minute. It trades on a fair price curve, then moves to Uniswap with its liquidity locked forever.",
};

export const viewport: Viewport = { themeColor: "#F5F7FB" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${bricolage.variable}`}>
      <body className="min-h-screen font-sans text-[15px] antialiased">
        <Providers>
          <Header />
          <main className="mx-auto max-w-[1200px] px-4 pt-2 pb-8 sm:px-6">{children}</main>
          <Footer />
          <MobileNav />
          <RiskNotice />
        </Providers>
      </body>
    </html>
  );
}

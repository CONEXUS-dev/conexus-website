import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, JetBrains_Mono } from "next/font/google";
import FocusProvider from "@/components/nav/FocusProvider";
import GlobalNav from "@/components/nav/GlobalNav";
import "./globals.css";

const editorial = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-editorial",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CONEXUS — Calibrated AI Systems, Products, and Research",
  description:
    "CONEXUS develops calibrated AI systems, human-facing products, controlled research, and optimization architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${editorial.variable} ${jetbrains.variable}`}>
      <body className="bg-void text-data font-mono antialiased">
        <FocusProvider>
          <GlobalNav />
          <main>{children}</main>
        </FocusProvider>
      </body>
    </html>
  );
}

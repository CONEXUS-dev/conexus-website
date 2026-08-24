import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import LedgerEscapeHatch from "@/components/LedgerEscapeHatch";
import "./globals.css";

// Variable serif (wght 100–900) backing the scroll-driven kinetic typography
// in Scene 2; exposed as --font-fraunces for the `font-display` theme token.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CONEXUS",
  description: "Not another AI company. The solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} antialiased`}>
        {children}
        <LedgerEscapeHatch />
      </body>
    </html>
  );
}

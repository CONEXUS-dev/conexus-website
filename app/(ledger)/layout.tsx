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
  title: "CONEXUS — Not Another AI Company. The Solution.",
  description:
    "The world is drowning in crude data because it lacks a method to make it safe. CONEXUS doesn't add to the noise. We eliminate it.",
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

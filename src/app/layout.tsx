import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <script
          data-goatcounter="https://cdb.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.goatcounter = {
                path: function(p) {
                  return location.host + p;
                }
              };
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}

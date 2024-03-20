import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const IBM = IBM_Plex_Sans({ weight: "400", subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Algem - Liquidity for your assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/fav.svg" sizes="any" />

      <body className={IBM.className}>{children}</body>
    </html>
  );
}

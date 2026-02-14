import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coors Light — Cold As The Rockies",
  description:
    "Coors Light is a leading American light lager known for its Cold Filtered brewing process and iconic mountain branding that emphasizes refreshing, crisp drinkability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${bebas.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

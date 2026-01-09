import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

import { Sacramento } from "next/font/google";

const sacramento = Sacramento({
  weight: "400",
  variable: "--font-sacramento",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alonica Cafe",
  description: "Experience the finest coffee in a warm, premium atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${sacramento.variable} antialiased bg-cafe-50 text-cafe-900 font-sans flex flex-col min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

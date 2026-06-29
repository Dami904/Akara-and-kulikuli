import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Web3Nova — Websites for Akara & Kulikuli Businesses",
  description:
    "We build beautiful, fast websites for akara and kulikuli entrepreneurs in Nigeria. Take orders online, grow your brand, and dominate your city.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="bg-white text-[#111] min-h-screen">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "SMC Academy",
  description:
    "Learn in-demand digital skills at SMC Academy. Train in Web3, blockchain, forex, coding, graphics design, crypto and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="m-0 bg-white text-[#12141a] font-(family-name:--font-inter) text-base leading-[1.6] antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "SMC Academy — Tech & Financial Skills for Builders",
  description:
    "SMC Academy is the education arm of SMC DAO. Learn blockchain development, personal finance and trading skills inside a real community.",
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

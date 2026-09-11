import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const AeonikFont = localFont({
  src: [
    {
      path: "./fonts/Aeonik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Aeonik-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Aeonik-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
});

export const metadata: Metadata = {
  title: "SMC Academy",
  description:
    "Learn in-demand digital skills at SMC Academy. Train in Web3, blockchain, forex, coding, graphics design, crypto and more.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={AeonikFont.className}>
      <body className="m-0 bg-background text-black text-base leading-[1.6] antialiased">
        {children}
      </body>
    </html>
  );
}

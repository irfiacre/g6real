import React from "react";
import { Syne } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Metadata } from 'next';
// @ts-ignore
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "G6 Real Estate | Best Real estate agent in Kigali",
  description:
    "Best Real estate in Kigali. Let us guide to become a home/land owner (Trusted by 100+ customers)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full m-0">
      <body
        className={`${syne.className} h-full m-0`}
        suppressHydrationWarning
      >
          <ToastContainer />
          {children}
      </body>
    </html>
  );
}

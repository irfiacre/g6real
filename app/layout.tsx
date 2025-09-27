import React from "react";
import { Syne } from "next/font/google";
// import { primaryColorBg } from "@/constants/values";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { Metadata } from 'next';
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
    <html lang="en">
      <body
        className={syne.className}
        // style={{ backgroundColor: primaryColorBg }}
        suppressHydrationWarning
      >
        {/* <SessionProvider> */}
          <ToastContainer />
          {children}
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}

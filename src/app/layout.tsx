import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {Providers} from "./providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Mike's Mobile Maintenance",
  description: "My name is Mike, and I am an experienced and certified mechanic who specializes in providing on-site vehicle repairs and maintenance. My goal is to make vehicle repairs as convenient as possible for my customers by coming to them, instead of the other way around.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <Providers>
        <body className={inter.className}>{children}</body>
      </Providers> 
    </html>
  );
}

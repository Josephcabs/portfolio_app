import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Links from "@/components/Links";
import Header from "@/components/Header";
// import VideoToggle from "@/components/VideoToggle/VideoToggle";
import { Analytics } from "@vercel/analytics/react";
import { Suspense } from "react";
import Loader from "@/components/Loader/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio for Joseph Caballero",
  description: "Made by Joseph Caballero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loader />}>
          <div className="w-full flex flex-col sticky top-0 z-1000 bg-[#0a0a0a]">
            <div className="text-4xl font-bold text-center">
              <Header />
            </div>
            <div className="flex items-center justify-center text-2xl w-full">
              <Links />
            </div>
          </div>
          {children}
          {/* <VideoToggle /> */}
          <img
            src="/boxing.png"
            alt="Boxing"
            className="fixed bottom-0 left-0 right-0 top-0 h-full w-full -z-10"
            loading="lazy"
          />
        </Suspense>
      </body>
    </html>
  );
}

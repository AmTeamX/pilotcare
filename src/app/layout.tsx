import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PilotCare - Pilot Health & Compliance Management",
  description: "Comprehensive pilot fatigue management, flight duty tracking, and health monitoring system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <Navigation />
        {/* Mobile App Container */}
        <main className="max-w-md mx-auto min-h-screen bg-white pt-[52px] pb-20 shadow-2xl">
          {children}
        </main>
      </body>
    </html>
  );
}

import "@/app/(app)/globals.css";
import { ThemeProvider } from "@/app/(frontend)/provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "The Great Great Company",
  description: "The Great Great Company is a company that makes great products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      <main className="min-h-screen relative bg-main flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div>{children}</div>
      </main>
    </div>
  );
}

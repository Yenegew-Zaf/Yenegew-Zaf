import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/Navbar";

const lato = Lato({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "LaliAx",
  description: "A place for making a world green again",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <header className="fixed left-0 top-0 z-[999] w-full">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}

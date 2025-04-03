import type { Metadata } from "next";
import { Geist, Geist_Mono, Square_Peg, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const squarePeg = Square_Peg({
  variable: "--font-square-peg",
  subsets: ["latin"],
  weight: "400",
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Its me, telling you about myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${squarePeg.variable} ${bricolageGrotesque.variable} antialiased max-w-[2000px] mx-auto`}
        data-new-gr-c-s-check-loaded="14.1229.0"
        data-gr-ext-installed=""
      >
        {children}
      </body>
    </html>
  );
}

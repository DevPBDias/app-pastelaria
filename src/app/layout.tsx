import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";

const robotoCond = Roboto_Condensed({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "App pastelaria",
  description: "Local onde tem pastel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoCond.className}>{children}</body>
    </html>
  );
}

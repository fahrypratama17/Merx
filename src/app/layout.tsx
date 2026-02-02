import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../shared/style/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Merx — Simple Product Management Platform",
  description:
    "Merx is a simple and focused product management platform that helps you create, update, and organize products with clarity and ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

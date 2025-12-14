import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "My Green Lab - Accelerating Sustainability",
  description: "At My Green Lab® we are igniting a global shift toward environmentally responsible scientific research by helping labs to reduce their environmental impact.",
  keywords: ["sustainability", "laboratory", "green lab", "environmental impact", "certification", "science"],
  authors: [{ name: "My Green Lab" }],
  creator: "My Green Lab",
  publisher: "My Green Lab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mygreenlab.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mygreenlab.org",
    title: "My Green Lab - Accelerating Sustainability",
    description: "At My Green Lab® we are igniting a global shift toward environmentally responsible scientific research by helping labs to reduce their environmental impact.",
    siteName: "My Green Lab",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Green Lab - Accelerating Sustainability",
    description: "At My Green Lab® we are igniting a global shift toward environmentally responsible scientific research by helping labs to reduce their environmental impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

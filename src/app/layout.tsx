import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import "./globals.css";
import { organizationSchema } from "@/utils/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "My Green Lab - Accelerating a Global Culture of Sustainability in Scientific Research",
  description: "At My Green Lab® we are igniting a global shift toward environmentally responsible scientific research by helping labs to reduce their environmental impact.",
  keywords: ["laboratory sustainability", "green lab", "sustainable science", "environmental impact", "lab certification", "green chemistry", "energy efficiency", "waste reduction"],
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
    title: "My Green Lab - Accelerating a Global Culture of Sustainability in Scientific Research",
    description: "At My Green Lab® we are igniting a global shift toward environmentally responsible scientific research by helping labs to reduce their environmental impact.",
    siteName: "My Green Lab",
    images: [
      {
        url: "https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png",
        width: 1200,
        height: 630,
        alt: "My Green Lab - Laboratory Sustainability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Green Lab - Accelerating a Global Culture of Sustainability in Scientific Research",
    description: "At My Green Lab® we are igniting a global shift toward environmentally responsible scientific research by helping labs to reduce their environmental impact.",
    images: ["https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png"],
    creator: "@mygreenlab",
    site: "@mygreenlab",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
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
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="https://mygreenlab.org/wp-content/uploads/2025/07/mygreenlab-logo.png" as="image" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="min-h-screen bg-white font-['Inter',_sans-serif]">
          {children}
        </main>
        <FooterCTA />
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { GoogleAdSense } from "@/components/analytics/google-adsense";
import { AdSidebars } from "@/components/ads/ad-sidebars";
import { JsonLd, organizationSchema } from "@/components/seo/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://passiveaggressiveemails.com"),
  title: {
    template: "%s | PassiveAggressiveEmails.com",
    default: "Passive Aggressive Email Generator | PassiveAggressiveEmails.com",
  },
  description:
    "Generate perfectly crafted passive-aggressive emails for every workplace situation. From politely professional to 'per my previous email.' Free tool with 1000+ templates.",
  openGraph: {
    siteName: "PassiveAggressiveEmails.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "google-adsense-account": "ca-pub-2873608919569451",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFBF5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1714" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <TooltipProvider>
            <JsonLd data={organizationSchema()} />
            <Header />
            <AdSidebars>
              {children}
            </AdSidebars>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
        <GoogleAnalytics />
        <GoogleAdSense />
      </body>
    </html>
  );
}

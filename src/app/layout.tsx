import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ConsentProvider } from "@/components/consent/consent-provider";
import { GoogleTag } from "@/components/analytics/google-tag";
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
  metadataBase: new URL("https://www.passiveaggressiveemails.com"),
  title: {
    template: "%s | PassiveAggressiveEmails",
    default: "Passive Aggressive Email Generator | PassiveAggressiveEmails",
  },
  description:
    "Generate passive-aggressive emails for every workplace situation. From politely professional to 'per my previous email.' Free tool.",
  openGraph: {
    title: "Passive Aggressive Email Generator",
    description: "Generate passive-aggressive emails for every workplace situation. From politely professional to 'per my previous email.' Free tool.",
    siteName: "PassiveAggressiveEmails.com",
    type: "website",
    locale: "en_US",
    url: "https://www.passiveaggressiveemails.com",
    images: [{ url: "https://www.passiveaggressiveemails.com/api/og?title=Passive+Aggressive+Email+Generator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Passive Aggressive Email Generator",
    description: "Generate passive-aggressive emails for every workplace situation. Free tool.",
    images: ["https://www.passiveaggressiveemails.com/api/og?title=Passive+Aggressive+Email+Generator"],
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
          <ConsentProvider>
            <TooltipProvider>
              <JsonLd data={organizationSchema()} />
              <Header />
              <AdSidebars>
                {children}
              </AdSidebars>
              <Footer />
            </TooltipProvider>
          </ConsentProvider>
        </ThemeProvider>
        <GoogleTag />
      </body>
    </html>
  );
}

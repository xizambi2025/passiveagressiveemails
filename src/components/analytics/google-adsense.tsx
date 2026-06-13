import Script from "next/script";

export function GoogleAdSense() {
  return (
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2873608919569451"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

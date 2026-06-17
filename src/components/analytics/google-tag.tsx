import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-86BBY7ZL37";
const ADSENSE_CLIENT = "ca-pub-2873608919569451";

export function GoogleTag() {
  return (
    <>
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-config" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
          try {
            var raw = localStorage.getItem('pa-consent-v1');
            if (raw) {
              var c = JSON.parse(raw);
              var allowAds = c.advertising && !c.saleOptOut;
              var allowAnalytics = c.analytics && !c.saleOptOut;
              gtag('consent', 'update', {
                ad_storage: allowAds ? 'granted' : 'denied',
                ad_user_data: allowAds ? 'granted' : 'denied',
                ad_personalization: allowAds ? 'granted' : 'denied',
                analytics_storage: allowAnalytics ? 'granted' : 'denied'
              });
            } else if (navigator.globalPrivacyControl) {
              gtag('consent', 'update', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied'
              });
            }
          } catch (e) {}
        `}
      </Script>
      <Script
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
    </>
  );
}

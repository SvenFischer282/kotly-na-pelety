import { useEffect } from "react";
import { CookiePreferences } from "./useCookieConsent";

const ADSENSE_CLIENT_ID = "ca-pub-7036558483573380";

export const useGoogleAdsense = (preferences: CookiePreferences) => {
  useEffect(() => {
    // Only load AdSense if advertising cookies are accepted
    if (!preferences.advertising) {
      return;
    }

    // Check if AdSense is already loaded
    if (document.querySelector(`script[src*="adsbygoogle.js"]`)) {
      return;
    }

    // Load AdSense script
    const script = document.createElement("script");
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`;
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
  }, [preferences.advertising]);
};

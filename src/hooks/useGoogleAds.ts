import { useEffect } from "react";
import { CookiePreferences } from "./useCookieConsent";

const GA_MEASUREMENT_ID = "G-Q3T5GZRQPE";
const GOOGLE_ADS_ID = "AW-16467395568";

export const useGoogleAds = (preferences: CookiePreferences) => {
  useEffect(() => {
    // Only load Google Ads if advertising cookies are accepted
    if (!preferences.advertising) {
      return;
    }

    // Check if gtag is already loaded
    if (window.gtag) {
      // If gtag exists, just add the Google Ads config
      window.gtag("config", GOOGLE_ADS_ID);
      return;
    }

    // Load gtag script if not already loaded
    const existingScript = document.querySelector(
      `script[src*="googletagmanager.com/gtag/js"]`
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);
    }

    // Initialize gtag if not already done
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
    }

    // Configure both GA and Google Ads
    window.gtag("config", GA_MEASUREMENT_ID);
    window.gtag("config", GOOGLE_ADS_ID);
  }, [preferences.advertising]);
};

// Track a conversion event
export const trackConversion = (transactionId?: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-16467395568/PNWBCLHOtqQbEPCHoqw9",
      transaction_id: transactionId || "",
    });
  }
};

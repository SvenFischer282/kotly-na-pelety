import { useEffect } from "react";
import { CookiePreferences } from "./useCookieConsent";

const GA_MEASUREMENT_ID = "G-51W617QD7D";

export const useGoogleAnalytics = (preferences: CookiePreferences) => {
  useEffect(() => {
    // Only load GA if analytics cookies are accepted
    if (!preferences.analytics) {
      return;
    }

    // Check if GA is already loaded
    if (window.gtag) {
      return;
    }

    // Load GA script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
  }, [preferences.analytics]);
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

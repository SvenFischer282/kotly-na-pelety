import { createContext, useContext, ReactNode } from 'react';
import { useCookieConsent, CookiePreferences } from '@/hooks/useCookieConsent';
import { useGoogleAnalytics } from '@/hooks/useGoogleAnalytics';
import { useGoogleAdsense } from '@/hooks/useGoogleAdsense';
import { useGoogleAds } from '@/hooks/useGoogleAds';

interface CookieConsentContextType {
  showBanner: boolean;
  preferences: CookiePreferences;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  updatePreference: (key: keyof CookiePreferences, value: boolean) => void;
  setShowBanner: (show: boolean) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const cookieConsent = useCookieConsent();
  
  // Conditionally load Google services based on cookie preferences
  useGoogleAnalytics(cookieConsent.preferences);
  useGoogleAdsense(cookieConsent.preferences);
  useGoogleAds(cookieConsent.preferences);

  return (
    <CookieConsentContext.Provider value={cookieConsent}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsentContext = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsentContext must be used within a CookieConsentProvider');
  }
  return context;
};

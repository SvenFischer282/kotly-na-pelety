import { useState } from 'react';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Cookie, Settings } from 'lucide-react';

export const CookieBanner = () => {
  const {
    showBanner,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    updatePreference,
  } = useCookieConsent();

  const [showSettings, setShowSettings] = useState(false);

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowSettings(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-in-right">
        <Card className="max-w-4xl mx-auto p-6 shadow-strong border-border bg-card">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-shrink-0">
              <Cookie className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-lg text-card-foreground">
                We Value Your Privacy
              </h3>
              <p className="text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                You can customize your preferences or read our{' '}
                <a href="#" className="text-primary hover:underline font-medium">
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </a>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
                className="gap-2"
              >
                <Settings className="w-4 h-4" />
                Customize
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={rejectAll}
              >
                Reject All
              </Button>
              <Button
                size="sm"
                onClick={acceptAll}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Accept All
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="w-5 h-5 text-primary" />
              Cookie Preferences
            </DialogTitle>
            <DialogDescription>
              Choose which cookies you want to accept. You can change your preferences at any time.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Necessary Cookies */}
            <div className="space-y-3 p-4 rounded-lg bg-muted/50">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="necessary"
                  checked={true}
                  disabled
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor="necessary"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Necessary Cookies (Required)
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    These cookies are essential for the website to function properly. 
                    They enable basic features like page navigation and access to secure areas. 
                    The website cannot function properly without these cookies.
                  </p>
                </div>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="space-y-3 p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="analytics"
                  checked={preferences.analytics}
                  onCheckedChange={(checked) =>
                    updatePreference('analytics', checked as boolean)
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor="analytics"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Analytics Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    These cookies help us understand how visitors interact with our website 
                    by collecting and reporting information anonymously. This helps us improve 
                    the website's functionality and user experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="space-y-3 p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="marketing"
                  checked={preferences.marketing}
                  onCheckedChange={(checked) =>
                    updatePreference('marketing', checked as boolean)
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor="marketing"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Marketing Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    These cookies are used to track visitors across websites to display 
                    relevant advertisements and marketing campaigns. They help measure 
                    the effectiveness of our advertising efforts.
                  </p>
                </div>
              </div>
            </div>

            {/* Preference Cookies */}
            <div className="space-y-3 p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="preferences"
                  checked={preferences.preferences}
                  onCheckedChange={(checked) =>
                    updatePreference('preferences', checked as boolean)
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor="preferences"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Preference Cookies
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    These cookies enable the website to remember choices you make 
                    (such as language or region) and provide enhanced, personalized features. 
                    They may also remember changes you've made to text size, fonts, and other customizable parts.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                For more information about how we use cookies, please read our{' '}
                <a href="#" className="text-primary hover:underline font-medium">
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary hover:underline font-medium">
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setShowSettings(false)}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Save Preferences
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

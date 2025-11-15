import { useState } from "react";
import { useCookieConsentContext } from "@/contexts/CookieConsentContext";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { Cookie, Settings } from "lucide-react";

export const CookieBanner = () => {
  const {
    showBanner,
    preferences,
    acceptAll,
    rejectAll,
    savePreferences,
    updatePreference,
  } = useCookieConsentContext();

  const [showSettings, setShowSettings] = useState(false);

  if (!showBanner) return null;

  const handleSavePreferences = () => {
    savePreferences(preferences);
    setShowSettings(false);
  };

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animation-slide-in-right">
        <Card className="max-w-4xl mx-auto p-6 shadow-strong border-border bg-card">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-shrink-0">
              <Cookie className="w-8 h-8 text-primary" />
            </div>

            <div className="flex-1 space-y-2">
              <h3 className="font-semibold text-lg text-card-foreground">
                Ceníme si vaše súkromie
              </h3>
              <p className="text-sm text-muted-foreground">
                Používame analytické súbory cookie (Google Analytics) na analýzu
                návštevnosti a zlepšovanie funkčnosti našej webstránky. Vaše údaje sú anonymizované.
                Kliknutím na "Prijať všetko" súhlasíte s
                naším používaním súborov cookie. Môžete si prispôsobiť svoje
                preferencie alebo si prečítať naše{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:underline font-medium"
                >
                  Zásady ochrany osobných údajov
                </a>
                .
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
                Prispôsobiť
              </Button>
              <Button variant="secondary" size="sm" onClick={rejectAll}>
                Odmietnuť všetko
              </Button>
              <Button
                size="sm"
                onClick={acceptAll}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Prijať všetko
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
              Preferencie súborov cookie
            </DialogTitle>
            <DialogDescription>
              Vyberte, ktoré súbory cookie chcete prijať. Svoje preferencie
              môžete kedykoľvek zmeniť.
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
                    Nevyhnutné súbory cookie (povinné)
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tieto súbory cookie sú nevyhnutné pre správne fungovanie
                    webovej stránky. Umožňujú základné funkcie, ako je navigácia
                    na stránke a prístup k zabezpečeným oblastiam. Bez týchto
                    súborov cookie nemôže webová stránka správne fungovať.
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
                    updatePreference("analytics", checked as boolean)
                  }
                  className="mt-1"
                />
                <div className="flex-1">
                  <Label
                    htmlFor="analytics"
                    className="text-base font-semibold cursor-pointer"
                  >
                    Analytické súbory cookie (Google Analytics)
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Používame Google Analytics na analýzu návštevnosti webstránky.
                    Zhromažďujeme anonymizované údaje o vašom zariadení, prehliadači
                    a tom, ako používate našu webstránku. IP adresy sú anonymizované.
                    Tieto informácie nám pomáhajú zlepšovať funkčnosť a používateľskú
                    skúsenosť webovej stránky.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Pre viac informácií o tom, ako používame súbory cookie, si
                prečítajte naše{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary hover:underline font-medium"
                >
                  Zásady ochrany osobných údajov
                </a>
                .
              </p>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button variant="outline" onClick={() => setShowSettings(false)}>
              Zrušiť
            </Button>
            <Button
              onClick={handleSavePreferences}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Uložiť preferencie
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

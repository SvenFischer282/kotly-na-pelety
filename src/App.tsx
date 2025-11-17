import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieBanner } from "@/components/CookieBanner";
import { CookieConsentProvider, useCookieConsentContext } from "@/contexts/CookieConsentContext";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import OchranaUdajov from "./pages/OchranaUdajov";
import Informacie from "./pages/Informacie";
import TepelneCerpadla from "./pages/TepelneCerpadla";
import FloatingCornerBanner from "./components/FloatingCornerBanner";

const queryClient = new QueryClient();

const AppContent = () => {
  const { preferences } = useCookieConsentContext();
  useGoogleAnalytics(preferences);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/kotly" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/tepelne-cerpadla" element={<TepelneCerpadla />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/informacie" element={<Informacie />} />
        <Route path="/privacy-policy" element={<OchranaUdajov />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CookieConsentProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <FloatingCornerBanner />
          <CookieBanner />
          <AppContent />
        </TooltipProvider>
      </CookieConsentProvider>
    </QueryClientProvider>
  );
};

export default App;

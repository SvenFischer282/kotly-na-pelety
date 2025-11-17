import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const TepelneCerpadla = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 mt-20 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Tepelné čerpadlá</h1>
          
          <div className="bg-card rounded-lg border border-border p-8 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Download className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-3">Katalóg tepelných čerpadiel</h2>
              <p className="text-muted-foreground mb-6">
                Stáhněte si kompletný katalóg tepelných čerpadiel s technickými parametrami a cenami.
              </p>
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a
                href="https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/pdf/ZARUKA%20A%20ASISTENCIA%20SKpdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <Download className="mr-2 w-5 h-5" />
                Stiahnuť katalóg (PDF)
              </a>
            </Button>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Potrebujete viac informácií? Kontaktujte nás pre individuálnu konzultáciu.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <a href="/#contact">Kontaktovať nás</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TepelneCerpadla;

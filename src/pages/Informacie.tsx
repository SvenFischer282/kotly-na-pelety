import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";

import { ArrowRight } from "lucide-react";

const Informacie = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 md:px-6 my-16 py-12">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Informácie</h1>
          <Separator className="my-8" />

          <p className="text-lg text-textPrimary leading-relaxed mb-6">
            Od roku 2015 pôsobíme na Slovenskom trhu ako stabilný dodávateľ
            pevného paliva a riešení pre vykurovanie domácností. Našou hlavnou
            činnosťou je predaj kvalitného paliva, medzi ktoré patria pelety,
            brikety a palivové drevo pre rodinné domy, firmy aj prevádzky.
            Dlhoročná prax nám umožnila vybudovať si silné postavenie v regióne,
            poskytovať odborné poradenstvo a zabezpečiť spoľahlivé dodávky počas
            celej vykurovacej sezóny.
          </p>

          <p className="text-lg text-textPrimary leading-relaxed mb-6">
            Na základe našich skúseností a rastúcich potrieb trhu sme sa
            rozhodli rozšíriť naše portfólio aj o ponuku moderných vykurovacích
            zariadení. Do nášho sortimentu zaraďujeme kvalitné talianske pece a
            kotly určené na pevné palivo, ktoré sa vyznačujú vysokou úrovňou
            spracovania, spoľahlivou prevádzkou a dlhodobou životnosťou.
          </p>

          <p className="text-lg text-textPrimary leading-relaxed mb-6">
            Naším cieľom je poskytovať komplexné riešenia pre domácnosti aj
            prevádzky - od dodávky paliva až po zabezpečenie vhodného a
            efektívneho vykurovacieho zariadenia. Dbáme na to, aby každý
            zákazník získal produkty prémiovej kvality, podporené odbornými
            službami a garanciou spoľahlivosti.
          </p>

          <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20 flex flex-col items-center justify-center">
            <p className="text-xl font-semibold text-center">
              Nakupujte bezpečne a so zárukou u autorizovaného predajcu!
            </p>
            <Button asChild variant="outline" size="lg" className="mt-8">
              <a
                href="https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/pdf/ZARUKA%20A%20ASISTENCIA%20SKpdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Záruka a asistencia
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Informacie;

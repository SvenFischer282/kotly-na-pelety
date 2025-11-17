import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";

const Informacie = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 md:px-6 my-16 py-12">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Informácie</h1>
          <Separator className="my-8" />

          <p className="text-lg text-textPrimary leading-relaxed mb-6">
            Predávame krbové vložky, pece, kachle, antikorové komíny a
            príslušenstvo za výhodné ceny priamo k Vám zákazníkom. Predaj krbov
            lacno, lacnejšie, najlacnejšie. Izolačné platne, pece, krbové pece,
            kachľové pece, moderné krby, teplovodné krbové vložky renovovaných
            značiek.
          </p>

          <p className="text-lg text-textPrimary leading-relaxed mb-6">
            Naším cieľom je poskytnúť na slovenskom trhu vysokokvalitný
            internetový predaj zameraný na KRBY, teplovodné krbové vložky,
            kachle, sporáky a kompletný sortiment príslušenstva. Predaj krbov,
            kachlí a krbových pecí, sporákov s garantovanou kvalitou za výhodné
            ceny sú zárukou a zároveň cestou k maximálnej spokojnosti Vás našich
            zákazníkov.
          </p>

          <p className="text-lg text-textPrimary leading-relaxed mb-6">
            Ponúkame Vám široký sortiment, ktorý tvoria aj liatinové
            teplovzdušné krbové vložky značiek, Kratki, Kzp, Flama ale aj
            teplovodné krby Edilkamin a Kratki, ktoré sú preferované hlavne pri
            výstavbe nízko-energetických rodinných domov.
          </p>

          <p className="text-lg text-textPrimary leading-relaxed mb-6">
            S rýchle rastúcim rozvojom vykurovacej a krbovej techniky sa náš
            sortiment bude neustále dopĺňať o nové produkty, čo si vyžaduje
            vývoj na trhu a zvyšujúce sa požiadavky našich zákazníkov.
          </p>

          <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-xl font-semibold text-center">
              Nakupujte bezpečne a so zárukou u autorizovaného predajcu!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Informacie;

import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import { ArrowRight, ArrowLeft, Check, Home, Droplet } from "lucide-react";
import { Link } from "react-router-dom";

type Product = Database["public"]["Tables"]["products"]["Row"];

const STEPS = [
  { id: 1, title: "Plocha na vykurovanie", icon: Home },
  { id: 2, title: "Ohrev vody", icon: Droplet },
  { id: 3, title: "Odporúčanie", icon: Check },
];

const AREA_OPTIONS = [
  { label: "do 80 m²", value: 80, volume: 200 },
  { label: "80–120 m²", value: 100, volume: 300 },
  { label: "120–200 m²", value: 160, volume: 500 },
  { label: "viac než 200 m²", value: 220, volume: 700 },
];

export default function BoilerConfigurator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [heatingArea, setHeatingArea] = useState(100);
  const [waterHeating, setWaterHeating] = useState<string>("no");
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [noMatchFound, setNoMatchFound] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const configuratorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*");

      if (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        return;
      }

      if (data) {
        // Generate public image URLs from Supabase Storage
        const productsWithImages = data.map((product) => {
          if (!product.image) {
            return {
              ...product,
              image: "/placeholder.svg",
            };
          }
          
          const { data: urlData } = supabase.storage
            .from("images")
            .getPublicUrl(product.image);

          return {
            ...product,
            image: urlData.publicUrl,
          };
        });
        
        setProducts(productsWithImages);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const progress = (currentStep / STEPS.length) * 100;

  const handleNext = () => {
    if (currentStep === 2) {
      // Calculate recommendations
      const requiredVolume = heatingArea * 2.5; // Približný objem miestnosti v m³
      const needsWaterHeating = waterHeating === "yes";

      const filtered = products.filter((product) => {
        const volumeMatch = product.heating_volume_m3
          ? product.heating_volume_m3 >= requiredVolume * 0.8
          : false;

        const waterMatch = needsWaterHeating
          ? product.water_heating === true
          : true;

        return volumeMatch && waterMatch;
      });

      if (filtered.length > 0) {
        setRecommendedProducts(filtered);
        setNoMatchFound(false);
      } else {
        setRecommendedProducts([]);
        setNoMatchFound(true);
      }
    }
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
    configuratorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    configuratorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleReset = () => {
    setCurrentStep(1);
    setHeatingArea(100);
    setWaterHeating("no");
    setRecommendedProducts([]);
    setNoMatchFound(false);
    configuratorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const currentAreaOption =
    AREA_OPTIONS.find((opt) => heatingArea <= opt.value) ||
    AREA_OPTIONS[AREA_OPTIONS.length - 1];

  return (
    <section
      ref={configuratorRef}
      className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background overflow-x-hidden"
      id="configurator"
    >
      <div className="container max-w-4xl mx-auto px-4 overflow-x-hidden">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Konfigurátor Kotla
          </h2>
          <p className="text-textPrimary text-lg">
            Nájdite si ideálny kotol v 3 jednoduchých krokoch
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 animate-fade-in">
          <Progress value={progress} className="h-2 mb-4" />
          <div className="flex justify-between  px-1">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center flex-1 transition-all ${
                    isActive
                      ? "scale-105  md:scale-110"
                      : isCompleted
                      ? "opacity-100"
                      : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${
                      isCompleted
                        ? "bg-primary text-primary-foreground"
                        : isActive
                        ? "bg-primary/20 border-2 border-primary text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <Icon className="w-5 h-5" />
                    )}
                  </div>
                  <span
                    className={`text-xs md:text-sm text-center ${
                      isActive ? "font-semibold" : ""
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <Card className="animate-fade-in shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">
              {currentStep === 1 && "Aká je plocha na vykurovanie?"}
              {currentStep === 2 && "Potrebujete ohrev vody?"}
              {currentStep === 3 && "Odporúčané kotly"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 &&
                "Vyberte približnú plochu, ktorú chcete vykurovať"}
              {currentStep === 2 &&
                "Či budete kotol používať aj na prípravu teplej vody"}
              {currentStep === 3 && "Na základe vašich požiadaviek odporúčame"}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {/* Step 1: Heating Area */}
            {currentStep === 1 && (
              <div className="space-y-8">
                <div className="space-y-">
                  <div className="flex justify-between items-center">
                    <Label className="text-lg">Plocha: {heatingArea} m²</Label>
                    <span className="text-sm text-muted-foreground">
                      {currentAreaOption.label}
                    </span>
                  </div>
                  <Slider
                    value={[heatingArea]}
                    onValueChange={([value]) => setHeatingArea(value)}
                    min={40}
                    max={250}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>40 m²</span>
                    <span>250 m²</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                  {AREA_OPTIONS.map((option) => (
                    <Button
                      key={option.value}
                      variant={
                        heatingArea <= option.value &&
                        heatingArea >
                          (AREA_OPTIONS[AREA_OPTIONS.indexOf(option) - 1]
                            ?.value || 0)
                          ? "default"
                          : "outline"
                      }
                      onClick={() => setHeatingArea(option.value)}
                      className="h-auto py-4 flex flex-col gap-1"
                    >
                      <span className="font-semibold text-sm sm:text-base">
                        {option.label}
                      </span>
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Water Heating */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <RadioGroup
                  value={waterHeating}
                  onValueChange={setWaterHeating}
                  className="space-y-4"
                >
                  <div
                    className={`flex items-center space-x-3 p-6 rounded-lg border-2 transition-all cursor-pointer ${
                      waterHeating === "yes"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setWaterHeating("yes")}
                  >
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="flex-1 cursor-pointer">
                      <div className="font-semibold text-lg">
                        Áno, potrebujem ohrev vody
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Kotol bude pripravovať aj teplú úžitkovú vodu
                      </div>
                    </Label>
                  </div>

                  <div
                    className={`flex items-center space-x-3 p-6 rounded-lg border-2 transition-all cursor-pointer ${
                      waterHeating === "no"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setWaterHeating("no")}
                  >
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no" className="flex-1 cursor-pointer">
                      <div className="font-semibold text-lg">
                        Nie, len vykurovanie
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Kotol bude slúžiť len na vykurovanie priestorov
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Step 3: Recommendations */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Vaše požiadavky:</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Plocha na vykurovanie: {heatingArea} m²</li>
                    <li>
                      • Ohrev vody: {waterHeating === "yes" ? "Áno" : "Nie"}
                    </li>
                  </ul>
                </div>

                {noMatchFound ? (
                  <div className="space-y-6">
                    <div className="text-center py-8">
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                          <span className="text-3xl">📋</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-xl mb-3">
                        Momentálne nemáme kotol presne na vaše požiadavky
                      </h3>
                      <p className="text-textPrimary mb-6 max-w-md mx-auto">
                        Neváhajte nás kontaktovať a radi vám pomôžeme nájsť
                        ideálne riešenie. Môžete si tiež stiahnuť náš kompletný
                        katalóg produktov na objednávku.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button asChild size="lg" variant="default">
                          <a
                            href="https://dgvswatqmbvaqfznixyg.supabase.co/storage/v1/object/public/pdf/katalog_produktov.pdf"
                            target="_blank"
                            className="gap-2"
                          >
                            Otvoriť katalóg produktov
                          </a>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                          <Link to="/#contact">Kontaktovať nás</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : recommendedProducts.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">
                      Odporúčané produkty:
                    </h3>
                    <div className="grid gap-4">
                      {recommendedProducts.map((product) => (
                        <Card
                          key={product.product_id}
                          className="overflow-hidden hover:shadow-lg transition-shadow"
                        >
                          <div className="flex flex-col md:flex-row">
                            <div className="w-full aspect-[4/3] md:w-1/3 md:h-auto md:aspect-auto">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>

                            <div className="flex-1 p-4 sm:p-6">
                              <h4 className="font-bold text-xl md:text-xl mb-2">
                                {product.name}
                              </h4>
                              <p className="text-textSecondary mb-4 text-sm">
                                {product.description}
                              </p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-4">
                                <div>
                                  <span className="text-textPrimary">
                                    Vykurovací objem:
                                  </span>
                                  <span className="font-semibold ml-2">
                                    {product.heating_volume_m3} m³
                                  </span>
                                </div>
                                <div>
                                  <span className="text-textPrimary">
                                    Účinnosť:
                                  </span>
                                  <span className="font-semibold ml-2">
                                    {product.efficiency_max_percent}%
                                  </span>
                                </div>
                              </div>
                              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                <span className="text-2xl font-bold text-primary">
                                  {product.price_eur} €
                                </span>
                                <Link to={`/product/${product.product_id}`}>
                                  <Button className="w-full sm:w-auto">
                                    Zobraziť Detail
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 animate-fade-in">
          {currentStep > 1 && currentStep < 3 && (
            <Button variant="outline" onClick={handleBack} size="lg">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Späť
            </Button>
          )}
          {currentStep === 3 && (
            <Button variant="outline" onClick={handleReset} size="lg">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Začať odznova
            </Button>
          )}
          {currentStep < 3 && (
            <Button onClick={handleNext} size="lg" className="ml-auto">
              {currentStep === 2 ? "Zobraziť odporúčanie" : "Ďalej"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

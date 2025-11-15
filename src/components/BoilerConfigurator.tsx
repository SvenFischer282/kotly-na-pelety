import { useState } from "react";
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
import { products, Product } from "@/data/products";
import { ArrowRight, ArrowLeft, Check, Home, Droplet } from "lucide-react";
import { Link } from "react-router-dom";

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

      setRecommendedProducts(
        filtered.length > 0 ? filtered : products.slice(0, 2)
      );
    }
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleReset = () => {
    setCurrentStep(1);
    setHeatingArea(100);
    setWaterHeating("no");
    setRecommendedProducts([]);
  };

  const currentAreaOption =
    AREA_OPTIONS.find((opt) => heatingArea <= opt.value) ||
    AREA_OPTIONS[AREA_OPTIONS.length - 1];

  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container max-w-4xl mx-auto px-4">
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
          <div className="flex justify-between">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = currentStep === step.id;
              const isCompleted = currentStep > step.id;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center flex-1 transition-all ${
                    isActive
                      ? "scale-110"
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
                <div className="space-y-4">
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
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
                      <span className="font-semibold">{option.label}</span>
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

                {recommendedProducts.length > 0 ? (
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
                            <div className="md:w-1/3 h-48 md:h-auto">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1 p-6">
                              <h4 className="font-bold text-xl mb-2">
                                {product.name}
                              </h4>
                              <p className="text-muted-foreground mb-4">
                                {product.description}
                              </p>
                              <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                                <div>
                                  <span className="text-muted-foreground">
                                    Vykurovací objem:
                                  </span>
                                  <span className="font-semibold ml-2">
                                    {product.heating_volume_m3} m³
                                  </span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">
                                    Účinnosť:
                                  </span>
                                  <span className="font-semibold ml-2">
                                    {product.efficiency_max_percent}%
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="text-2xl font-bold text-primary">
                                  {product.price_eur} €
                                </span>
                                <Link to={`/product/${product.product_id}`}>
                                  <Button>
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
                ) : (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      Nenašli sa žiadne vhodné produkty. Kontaktujte nás pre
                      viac informácií.
                    </p>
                  </div>
                )}
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

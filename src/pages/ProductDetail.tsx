import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Check, Phone, Mail } from "lucide-react";
import { getProductById } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl font-display font-bold mb-4">
              Produkt nenájdený
            </h1>
            <p className="text-muted-foreground mb-8">
              Zadaný produkt neexistuje v našej ponuke.
            </p>
            <Link to="/produkty">
              <Button className="bg-gradient-primary btn-premium">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Späť na produkty
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 animate-fade-in">
            <Link
              to="/produkty"
              className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Späť na produkty
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="animate-fade-in">
              <Card className="overflow-hidden border-border/50 shadow-card">
                <CardContent className="p-0">
                  {product.isPopular && (
                    <div className="absolute top-6 right-6 z-10">
                      <Badge className="bg-accent text-accent-foreground font-medium shadow-medium">
                        Najpredávanejší
                      </Badge>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-cover"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {product.category === "home"
                    ? "Domáce Kotly"
                    : "Priemyselné Kotly"}
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-display font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-textPrimary leading-relaxed">
                  {product.description}
                </p>
              </div>

              <Separator />

              {/* Price */}
              <div className="bg-secondary/30 rounded-2xl p-6">
                <div className="flex items-baseline space-x-2 mb-2">
                  <span className="text-sm text-textSecondary">Cena od</span>
                  <span className="text-5xl font-bold font-display text-primary">
                    {product.price}
                  </span>
                  <span className="text-xl text-muted-foreground">€</span>
                </div>
                <p className="text-sm text-textSecondary">
                  Cena zahŕňa DPH, doprava a inštalácia sa účtuje osobitne
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-border/50">
                  <CardContent className="p-4">
                    <div className="text-sm text-textSecondary mb-1">Výkon</div>
                    <div className="text-2xl font-bold font-display text-primary">
                      {product.power}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border/50">
                  <CardContent className="p-4">
                    <div className="text-sm text-textSecondary mb-1">
                      Účinnosť
                    </div>
                    <div className="text-2xl font-bold font-display text-accent">
                      {product.efficiency}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 bg-gradient-primary hover:opacity-90 btn-premium text-lg py-6"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Zavolať
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-2 text-lg py-6"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Dopyt
                </Button>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Description Section */}
              <Card className="border-border/50 shadow-soft animate-fade-in">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-display font-bold mb-6">
                    O Produkte
                  </h2>
                  <p className="text-lg text-textSecondary leading-relaxed">
                    {product.detailedDescription}
                  </p>
                </CardContent>
              </Card>

              {/* Features Section */}
              <Card className="border-border/50 shadow-soft animate-fade-in">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-display font-bold mb-6">
                    Vlastnosti
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-textSecondary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Specifications Sidebar */}
            <div className="animate-fade-in">
              <Card className="border-border/50 shadow-soft sticky top-24">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-display font-bold mb-6">
                    Špecifikácie
                  </h2>
                  <div className="space-y-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center py-3">
                          <span className="text-sm text-textSecondary">
                            {spec.label}
                          </span>
                          <span className="font-semibold text-foreground">
                            {spec.value}
                          </span>
                        </div>
                        {index < product.specifications.length - 1 && (
                          <Separator />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <Card className="mt-16 bg-gradient-primary text-primary-foreground border-0 shadow-strong animate-fade-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-display font-bold mb-4">
                Máte záujem o tento produkt?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Kontaktujte nás pre nezáväznú cenovú ponuku, konzultáciu alebo
                obhliadku.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+421900000000">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent-light text-accent-foreground btn-premium px-8"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    +421 900 000 000
                  </Button>
                </a>
                <a href="mailto:info@kotlynapelety.sk">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 px-8"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    info@kotlynapelety.sk
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

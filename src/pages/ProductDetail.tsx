import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  Check,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { emptyProduct } from "@/lib/emptyProduct";

const ProductDetail = () => {
  const [product, setProduct] = useState(emptyProduct);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // const product = getProductById(Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("product_id", id)
        .single();

      if (error) {
        console.error("Error fetching product:", error);
        return;
      }

      // ✅ Build full image URLs from Supabase Storage
      const bucket = "images"; // replace with your actual bucket name

      // Main image
      let imageUrl = data.image;
      if (imageUrl && !imageUrl.startsWith("http")) {
        const { data: publicUrlData } = supabase.storage
          .from(bucket)
          .getPublicUrl(imageUrl);
        imageUrl = publicUrlData?.publicUrl || imageUrl;
      }

      // Gallery images
      let imageUrls: string[] = [];
      if (Array.isArray(data.images)) {
        imageUrls = data.images.map((imgPath: string) => {
          if (imgPath.startsWith("http")) return imgPath;
          const { data: publicUrlData } = supabase.storage
            .from(bucket)
            .getPublicUrl(imgPath);
          return publicUrlData?.publicUrl || imgPath;
        });
      }

      setProduct({
        ...data,
        image: imageUrl,
        images: imageUrls,
      });
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    setSelectedImage(0);
  }, [id]);

  const totalImages = product?.images?.length || 1;

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

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
            <Link to="/products">
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
              to="/products"
              className="text-sm text-muted-foreground hover:text-accent transition-colors inline-flex items-center"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Späť na produkty
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image Gallery */}
            <div className="animate-fade-in space-y-4">
              <Card className="overflow-hidden border-border/50 shadow-card relative group">
                <CardContent className="p-0">
                  <div className="aspect-square bg-secondary/30 flex items-center justify-center overflow-hidden relative">
                    <img
                      src={product.images?.[selectedImage] || product.image}
                      alt={`${product.name} - Image ${selectedImage + 1}`}
                      className="w-full h-full object-contain transition-all duration-500"
                    />

                    {/* Navigation Arrows */}
                    {product.images && product.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 hover:bg-background border border-border shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="w-5 h-5 text-foreground" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/90 hover:bg-background border border-border shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                          aria-label="Next image"
                        >
                          <ChevronRight className="w-5 h-5 text-foreground" />
                        </button>

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/90 text-sm font-medium border border-border">
                          {selectedImage + 1} / {totalImages}
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Thumbnail Navigation */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-6 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                        selectedImage === index
                          ? "border-primary shadow-lg ring-2 ring-primary/20"
                          : "border-border/50 hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {selectedImage === index && (
                        <div className="absolute inset-0 bg-primary/10"></div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {product.category === "home"
                      ? "Domáce Kotly"
                      : product.category === "industrial"
                      ? "Priemyselné Kotly"
                      : product.category}
                  </Badge>  
                  {/* {product.rating && (
                    <Badge className="bg-accent/10 text-accent border-accent/20">
                      ⭐ {product.rating}
                    </Badge>
                  )} */}
                  {product.water_heating && (
                    <Badge className="bg-blue-400/10 text-blue-600 hover:bg-blue-400/50 border-blue-500/20">
                      Ohrev vody
                    </Badge>
                  )}
                  {product.energy_class && (
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      Energetická trieda {product.energy_class}
                    </Badge>
                  )}
                </div>
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
                    {product.price_eur}
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
                      {product.power_nominal_min_kw &&
                      product.power_nominal_max_kw
                        ? `${product.power_nominal_min_kw} - ${product.power_nominal_max_kw} kW`
                        : product.power_nominal_max_kw
                        ? `${product.power_nominal_max_kw} kW`
                        : "N/A"}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-border/50">
                  <CardContent className="p-4">
                    <div className="text-sm text-textSecondary mb-1">
                      Účinnosť
                    </div>
                    <div className="text-2xl font-bold font-display text-accent">
                      {product.efficiency_max_percent
                        ? `${product.efficiency_max_percent}%`
                        : "N/A"}
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

          {/* Specifications */}
          <Card className="border-border/50 shadow-soft animate-fade-in">
            <CardContent className="p-8">
              <h2 className="text-3xl font-display font-bold mb-6">
                Technické Špecifikácie
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(product.power_total_min_kw || product.power_total_max_kw) && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Celkový výkon
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.power_total_min_kw && product.power_total_max_kw
                        ? `${product.power_total_min_kw} - ${product.power_total_max_kw} kW`
                        : product.power_total_max_kw
                        ? `${product.power_total_max_kw} kW`
                        : `${product.power_total_min_kw} kW`}
                    </div>
                  </div>
                )}
                {(product.power_nominal_min_kw ||
                  product.power_nominal_max_kw) && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Nominálny výkon
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.power_nominal_min_kw &&
                      product.power_nominal_max_kw
                        ? `${product.power_nominal_min_kw} - ${product.power_nominal_max_kw} kW`
                        : product.power_nominal_max_kw
                        ? `${product.power_nominal_max_kw} kW`
                        : `${product.power_nominal_min_kw} kW`}
                    </div>
                  </div>
                )}
                {(product.efficiency_min_percent ||
                  product.efficiency_max_percent) && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">Účinnosť</div>
                    <div className="text-lg font-semibold text-accent">
                      {product.efficiency_min_percent &&
                      product.efficiency_max_percent
                        ? `${product.efficiency_min_percent} - ${product.efficiency_max_percent}%`
                        : product.efficiency_max_percent
                        ? `${product.efficiency_max_percent}%`
                        : `${product.efficiency_min_percent}%`}
                    </div>
                  </div>
                )}
                {(product.pellet_consumption_min_kg_h ||
                  product.pellet_consumption_max_kg_h) && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Spotreba peliet
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.pellet_consumption_min_kg_h &&
                      product.pellet_consumption_max_kg_h
                        ? `${product.pellet_consumption_min_kg_h} - ${product.pellet_consumption_max_kg_h} kg/h`
                        : product.pellet_consumption_max_kg_h
                        ? `${product.pellet_consumption_max_kg_h} kg/h`
                        : `${product.pellet_consumption_min_kg_h} kg/h`}
                    </div>
                  </div>
                )}
                {(product.electrical_power_min_w ||
                  product.electrical_power_max_w) && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Elektrický príkon
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.electrical_power_min_w &&
                      product.electrical_power_max_w
                        ? `${product.electrical_power_min_w} - ${product.electrical_power_max_w} W`
                        : product.electrical_power_max_w
                        ? `${product.electrical_power_max_w} W`
                        : `${product.electrical_power_min_w} W`}
                    </div>
                  </div>
                )}
                {product.heating_volume_m3 && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Vykurovací objem
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.heating_volume_m3} m³
                    </div>
                  </div>
                )}
                {product.pellet_tank_capacity_kg && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Kapacita zásobníka
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.pellet_tank_capacity_kg} kg
                    </div>
                  </div>
                )}
                {product.exhaust_diameter_mm && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Priemer výfuku
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.exhaust_diameter_mm} mm
                    </div>
                  </div>
                )}
                {product.air_inlet_diameter_mm && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Priemer prívodu vzduchu
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.air_inlet_diameter_mm} mm
                    </div>
                  </div>
                )}
                {product.weight_kg && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">Hmotnosť</div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.weight_kg} kg
                    </div>
                  </div>
                )}
                {product.dimensions_mm_WxDxH && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Rozmery (Š×H×V)
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.dimensions_mm_WxDxH} mm
                    </div>
                  </div>
                )}
                {product.energy_class && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">
                      Energetická trieda
                    </div>
                    <div className="text-lg font-semibold text-green-600">
                      {product.energy_class}
                    </div>
                  </div>
                )}
                {product.water_heating !== null && (
                  <div className="space-y-1">
                    <div className="text-sm text-textSecondary">Ohrev vody</div>
                    <div className="text-lg font-semibold text-foreground">
                      {product.water_heating ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <span className="text-red-500">Nie</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

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

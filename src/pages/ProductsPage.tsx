import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const ProductsPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  // Filter states
  const [heatingVolume, setHeatingVolume] = useState<number[]>([0]);
  const [waterHeating, setWaterHeating] = useState<boolean | null>(null);
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    const fetchData = async () => {
      // 1️⃣ Fetch product data
      const { data, error } = await supabase.from("products").select("*");

      if (error) {
        console.error("Error loading products:", error);
        return;
      }

      if (!data) return;

      // 2️⃣ Convert image paths to public Supabase Storage URLs
      const productsWithImages = data.map((product) => {
        const { data: urlData } = supabase.storage
          .from("images") // your bucket name in Supabase
          .getPublicUrl(product.image); // the column in DB with image path

        return {
          ...product,
          image: urlData.publicUrl, // final image URL for <img src=...>
        };
      });

      // 3️⃣ Update component state
      setProducts(productsWithImages);
      setFilteredProducts(productsWithImages);
      setLoading(false);
    };

    fetchData();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = [...products];

    // Filter by heating volume
    if (heatingVolume[0] > 0) {
      filtered = filtered.filter(
        (p) => p.heating_volume_m3 && p.heating_volume_m3 >= heatingVolume[0]
      );
    }

    // Filter by water heating
    if (waterHeating !== null) {
      filtered = filtered.filter((p) => p.water_heating === waterHeating);
    }

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((p) => p.category === category);
    }

    setFilteredProducts(filtered);
  }, [heatingVolume, waterHeating, category, products]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="pt-32 pb-24 bg-gradient-subtle flex-1">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                <span className="block mt-2">Kotly Na Pelety</span>
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed">
                Kompletný sortiment moderných kotlov na pelety pre domácnosti aj
                priemyselné použitie. Každý model je starostlivo vybraný pre
                maximálnu efektivitu a spoľahlivosť.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
              <ProductCardSkeleton />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-32 pb-24 bg-gradient-subtle flex-1">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              <span className="block mt-2">Kotly Na Pelety</span>
            </h1>
            <p className="text-xl text-textSecondary leading-relaxed">
              Kompletný sortiment moderných kotlov na pelety pre domácnosti aj
              priemyselné použitie. Každý model je starostlivo vybraný pre
              maximálnu efektivitu a spoľahlivosť.
            </p>
          </div>

          {/* Filters */}
          <Card className="p-6 mb-8 animate-fade-in">
            <h2 className="text-xl font-semibold mb-6 text-foreground">
              Filtre
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Heating Volume Filter */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">
                  Vykurovací objem (min {heatingVolume[0]} m³)
                </Label>
                <Slider
                  value={heatingVolume}
                  onValueChange={setHeatingVolume}
                  max={300}
                  step={10}
                  className="w-full"
                />
              </div>

              {/* Water Heating Filter */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Ohrev vody</Label>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="water-yes"
                      checked={waterHeating === true}
                      onCheckedChange={(checked) =>
                        setWaterHeating(checked ? true : null)
                      }
                    />
                    <Label htmlFor="water-yes" className="cursor-pointer">
                      Áno
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="water-no"
                      checked={waterHeating === false}
                      onCheckedChange={(checked) =>
                        setWaterHeating(checked ? false : null)
                      }
                    />
                    <Label htmlFor="water-no" className="cursor-pointer">
                      Nie
                    </Label>
                  </div>
                </div>
              </div>

              {/* Category Filter */}
              <div className="space-y-3">
                <Label className="text-sm font-medium">Kategória</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Vyberte kategóriu" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Všetky</SelectItem>
                    <SelectItem value="Peletové kotly">
                      Peletové kotly
                    </SelectItem>
                    <SelectItem value="Krby na drevo">Krby na drevo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {filteredProducts.length === 0 ? (
              <div className="col-span-full text-center py-12 text-textSecondary">
                Žiadne produkty nezodpovedajú zvoleným filtrom.
              </div>
            ) : (
              filteredProducts.map((product, index) => (
                <div
                  key={product.product_id}
                  className="animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard
                    product_id={product.product_id}
                    name={product.name}
                    description={product.description}
                    power_nominal_max_kw={product.power_nominal_max_kw}
                    efficiency_max_percent={product.efficiency_max_percent}
                    price_eur={product.price_eur}
                    image={product.image} //  public URL from Supabase Storage
                    rating={product.rating}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;

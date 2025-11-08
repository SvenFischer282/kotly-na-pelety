import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Gauge, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product_id: number;
  name: string;
  description: string;
  power_nominal_max_kw: number | null;
  efficiency_max_percent: number | null;
  price_eur: number;
  image: string;
  rating?: number | null;
}

const ProductCard = ({
  product_id,
  name,
  description,
  power_nominal_max_kw,
  efficiency_max_percent,
  price_eur,
  image,
  rating,
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card transition-all duration-300 hover:border-primary/30 border-border/50 flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="relative h-64 overflow-hidden bg-secondary/30 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain transition-opacity duration-300 group-hover:opacity-90"
          />
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
        <div className="flex-1">
          <CardTitle className="text-2xl font-display mb-2 text-textPrimary line-clamp-2">
            {name}
          </CardTitle>
          <CardDescription className="text-base text-textSecondary line-clamp-3">
            {description}
          </CardDescription>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <Flame className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Výkon</div>
              <div className="font-semibold text-foreground">
                {power_nominal_max_kw ? `${power_nominal_max_kw} kW` : "N/A"}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <Gauge className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Účinnosť</div>
              <div className="font-semibold text-foreground">
                {efficiency_max_percent ? `${efficiency_max_percent}%` : "N/A"}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="flex items-baseline space-x-2">
            <span className="text-sm text-muted-foreground">Od</span>
            <span className="text-3xl font-bold font-display text-primary">
              {price_eur.toLocaleString("sk-SK")}
            </span>
            <span className="text-sm text-muted-foreground">€</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link to={`/produkt/${product_id}`} className="w-full">
          <Button
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity btn-premium group/btn"
            size="lg"
          >
            Zobraziť Detail
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

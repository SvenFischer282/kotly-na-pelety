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
  id: number;
  name: string;
  description: string;
  power: string;
  efficiency: string;
  price: string;
  image: string;
  isPopular?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  power,
  efficiency,
  price,
  image,
  isPopular,
}: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-2 card-glow border-border/50">
      {isPopular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-accent text-accent-foreground font-medium shadow-medium">
            Najpredávanejší
          </Badge>
        </div>
      )}

      <CardHeader className="p-0">
        <div className="relative h-64 overflow-hidden bg-secondary/30 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div>
          <CardTitle className="text-2xl font-display mb-2 text-textPrimary transition-colors">
            {name}
          </CardTitle>
          <CardDescription className="text-base text-textSecondary">
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
              <div className="font-semibold text-foreground">{power}</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <Gauge className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Účinnosť</div>
              <div className="font-semibold text-foreground">{efficiency}</div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="flex items-baseline space-x-2">
            <span className="text-sm text-muted-foreground">Od</span>
            <span className="text-3xl font-bold font-display text-primary">
              {price}
            </span>
            <span className="text-sm text-muted-foreground">€</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Link to={`/produkt/${id}`} className="w-full">
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

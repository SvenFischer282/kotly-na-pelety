import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm h-[600px] flex flex-col">
      <CardHeader className="p-0">
        <Skeleton className="w-full h-[280px] rounded-b-none" />
      </CardHeader>
      
      <CardContent className="flex-1 p-6 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        
        <div className="space-y-3 pt-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex items-center justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-10 w-32" />
      </CardFooter>
    </Card>
  );
};

export default ProductCardSkeleton;

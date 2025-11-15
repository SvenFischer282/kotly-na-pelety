import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const FloatingCornerBanner = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const isMobile = useIsMobile();

  if (isMobile && !isExpanded) {
    return (
      <Button
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full p-0 bg-accent hover:bg-accent-light shadow-elegant animate-in slide-in-from-left duration-300"
        size="icon"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-2 animate-in slide-in-from-left duration-500">
      <a
        href="https://briketyruf.sk"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div className="bg-accent hover:bg-accent-light text-white px-6 py-4 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Predaj peliet a brikiet</span>
            <span className="text-xs opacity-90">Navštívte náš obchod</span>
          </div>
          <ExternalLink className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>
      {isMobile && (
        <Button
          onClick={() => setIsExpanded(false)}
          className="h-12 w-12 rounded-full p-0 bg-accent hover:bg-accent-light shadow-elegant"
          size="icon"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </Button>
      )}
    </div>
  );
};

export default FloatingCornerBanner;

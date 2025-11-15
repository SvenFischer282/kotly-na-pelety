import { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";

const FloatingCornerBanner = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const isMobile = useIsMobile();

  const handleClose = () => {
    setIsClosing(true);

    // Wait for animation to finish
    setTimeout(() => {
      setIsExpanded(false); // unmount banner
      setIsClosing(false); // reset closing state
    }, 500);
  };

  const handleOpen = () => {
    setIsOpening(true);
    setIsExpanded(true);

    // Wait a tick to trigger the transition after mount
    setTimeout(() => {
      setIsOpening(false);
    }, 0);
  };

  // ============================
  // MOBILE — COLLAPSED STATE
  // ============================
  if (isMobile && !isExpanded && !isClosing) {
    return (
      <Button
        onClick={handleOpen}
        className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full p-0 bg-accent hover:bg-accent-light shadow-elegant
                   transition-all duration-300 animate-in fade-in slide-in-from-left"
        size="icon"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </Button>
    );
  }

  // ============================
  // BANNER (VISIBLE OR CLOSING)
  // ============================
  return (
    <div
      className={`
        fixed bottom-6 left-6 z-50 flex items-center gap-2
        transition-all duration-500 ease-in-out
        ${
          isClosing || isOpening
            ? "opacity-0 -translate-x-10 scale-95"
            : "opacity-100 translate-x-0 scale-100"
        }
      `}
    >
      <a
        href="https://briketyruf.sk"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div
          className="bg-accent hover:bg-accent-light text-white px-6 py-4 rounded-lg shadow-elegant
                     hover:shadow-glow transition-all duration-300 hover:scale-105
                     flex items-center gap-3"
        >
          <div className="flex flex-col">
            <span className="text-sm font-semibold">
              Predaj peliet a brikiet
            </span>
            <span className="text-xs opacity-90">Navštívte náš obchod</span>
          </div>
          <ExternalLink className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
      </a>

      {isMobile && (
        <Button
          onClick={handleClose}
          className="h-12 w-12 rounded-full p-0 bg-accent hover:bg-accent-light shadow-elegant transition-all duration-300"
          size="icon"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </Button>
      )}
    </div>
  );
};

export default FloatingCornerBanner;

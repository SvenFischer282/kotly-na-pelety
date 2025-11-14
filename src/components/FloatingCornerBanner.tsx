import { ExternalLink } from "lucide-react";

const FloatingCornerBanner = () => {
  return (
    <a
      href="https://your-pellets-website.com" // Replace with your actual website URL
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
    >
      <div className="bg-accent hover:bg-accent-light text-white px-6 py-4 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-sm font-semibold">Predaj peliet a brikiet</span>
          <span className="text-xs opacity-90">Navštívte náš eshop</span>
        </div>
        <ExternalLink className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
      </div>
    </a>
  );
};

export default FloatingCornerBanner;

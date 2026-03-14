import { Search, Bell, ChevronDown, Menu } from "lucide-react";

const Header = () => {
  return (
    <nav className="bg-secondary/90 backdrop-blur-md text-secondary-foreground px-6 py-3 flex items-center justify-between sticky top-0 z-50 border-b border-border/10">
      <div className="flex items-center gap-8">
        <span className="text-lg font-bold border border-secondary-foreground/30 rounded px-3 py-1 tracking-wide">
          HACKSPHERE
        </span>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <span className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors">
            About 
          </span>
          <span className="cursor-pointer hover:text-primary transition-colors">Hackathons</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Projects</span>
          <span className="cursor-pointer hover:text-primary transition-colors">Blog</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <span className="hidden md:inline text-sm font-medium cursor-pointer hover:text-primary transition-colors">
          Host a hackathon
        </span>
        <Search size={18} className="cursor-pointer hover:text-primary transition-colors" />
        <Bell size={18} className="cursor-pointer hover:text-primary transition-colors" />
        <Menu size={18} className="md:hidden cursor-pointer hover:text-primary transition-colors" />
        <div className="hidden md:block w-8 h-8 rounded-full bg-primary/30 border border-primary/40" />
      </div>
    </nav>
  );
};

export default Header;

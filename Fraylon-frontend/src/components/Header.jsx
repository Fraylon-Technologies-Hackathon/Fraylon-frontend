import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "./lib/utils (1)";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Schedule", href: "#schedule" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  const handleScrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const yOffset = -80; 
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false); 
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-200 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LEFT SPACE */}
        <div className="w-[120px]" />

        {/* CENTER NAV (desktop) */}
        <div className="hidden md:flex items-center gap-6 px-4 py-2 rounded-full bg-white/70 backdrop-blur-lg border border-gray-200 shadow-sm">
          <span className="mr-4 text-lg font-bold bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
            AI Hacksphere
          </span>

          {navLinks.map((link) => (
            <button
              key={link.name}
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleScrollTo(link.href)}
              className="relative px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-teal-600 transition rounded-full"
            >
              {hovered === link.name && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-blue-400/20"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </button>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex items-center justify-end w-[120px]">
          <button
            className="md:hidden p-2 bg-white/80 backdrop-blur rounded-full border border-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
          >
            <div className="flex flex-col p-6 gap-4">
              <div className="text-lg font-bold text-center bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent mb-2">
                AI Hacksphere
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.name}
                  className="text-center text-gray-700 font-medium py-2 hover:text-teal-500 transition"
                  onClick={() => handleScrollTo(link.href)}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
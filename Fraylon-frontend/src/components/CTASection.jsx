
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24">
      <div className="container-main">
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 border border-white/10 ${isVisible ? "animate-scale-in" : "opacity-0"
            }`}
        >
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[hsl(var(--gradient-brand-end))]/10 blur-[120px]" />
          <div className="absolute top-1/4 left-0 w-[300px] h-[300px] rounded-full bg-[hsl(var(--gradient-brand-start))]/10 blur-[110px]" />

          {/* Background (same image) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/cta-bg.jpg')" }}
          />

          {/* Brand overlay */}
          <div className="absolute inset-0 bg-[hsl(var(--background))]/80 backdrop-blur-sm" />

          {/* subtle brand glow */}
          <div className="absolute -top-24 -left-24 w-[320px] h-[320px] rounded-full bg-[hsl(var(--gradient-brand-start))]/20 blur-[120px]" />
          <div className="absolute -bottom-24 -right-24 w-[320px] h-[320px] rounded-full bg-[hsl(var(--gradient-brand-end))]/20 blur-[120px]" />

          {/* Content */}
          <div className="relative z-10 text-center py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>

            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Register now to secure your spot. Form your team, choose a theme,
              and start innovating with developers from around the globe.
            </p>

            <Button
              size="lg"
              
              className="h-12 sm:h-13 px-8 sm:px-10 rounded-xl text-sm sm:text-base 
              bg-gradient-to-r from-[hsl(var(--gradient-brand-start))] to-[hsl(var(--gradient-brand-end))] 
              hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_-10px_hsl(var(--accent)/0.7)]"
            >
              Register for the Hackathon
              <ArrowRight size={18} />
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

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
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/cta-bg.jpg')" }}
          />

          <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" />

          {/* Content */}
          <div className="relative z-10 text-center py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16">

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Ready to Build Something Amazing?
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Register now to secure your spot. Form your team, choose a theme,
              and start innovating with developers from around the globe.
            </p>

            <Button
              size="lg"
              className="h-12 sm:h-13 px-8 sm:px-10 rounded-xl text-sm sm:text-base 
              bg-gradient-to-r from-primary to-purple-500 
              hover:opacity-90 transition-all duration-300"
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
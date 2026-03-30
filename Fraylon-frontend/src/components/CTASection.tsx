import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CTASection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-500"
    >
      <div className="container-main flex justify-center">
        <div
          className={`relative w-full max-w-4xl rounded-3xl transition-all duration-700 ${
            isVisible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl px-6 sm:px-10 lg:px-16 py-14 sm:py-16 text-center">

            <div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-300/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl" />

      
            <div className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm rounded-full bg-teal-100 text-teal-700 font-medium">
              🚀 Ready to Transform Your Work?
            </div>

           
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Your Next <span className="text-teal-600">Breakthrough</span> <br />
              Starts Here
            </h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join thousands of innovators building the future. Collaborate,
              create, and turn your ideas into reality faster than ever before.
            </p>

     
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="h-12 px-8 rounded-xl text-sm sm:text-base 
                bg-gradient-to-r from-teal-500 to-blue-500 text-white
                hover:opacity-90 transition-all duration-300 shadow-lg flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight size={18} />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 rounded-xl text-sm sm:text-base 
                border-teal-500 text-teal-600 hover:bg-teal-50 transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

           
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>👥 Trusted by 50,000+ creators</span>
              <span>⚡ 10x faster results</span>
              <span>🔒 100% secure</span>
            </div>

          
            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm">
              🎁 Limited time: Get 3 months free
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
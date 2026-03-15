const scrollToThemes = () => {
  const section = document.getElementById("themes");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Code2,
  Cpu,
  Zap,
  Rocket,
  Binary,
} from "lucide-react";

const orbitIcons = [
  { Icon: Code2, delay: 0, size: 22 },
  { Icon: Cpu, delay: 1.2, size: 20 },
  { Icon: Zap, delay: 2.4, size: 18 },
  { Icon: Rocket, delay: 3.6, size: 22 },
  { Icon: Binary, delay: 4.8, size: 20 },
];

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s]"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          transform: loaded ? "scale(1)" : "scale(1.1)",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container-main py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl flex-1 text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8 transition-all duration-700 ${loaded ? "animate-fade-in-left" : "opacity-0"
                }`}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Registration Open
              </span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 transition-all duration-700 ${loaded ? "animate-fade-in" : "opacity-0"
                }`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-foreground">AI HACKSPHERE</span>
              <br />
              <span className="text-gradient">2026</span>
            </h1>

            <p
              className={`text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 ${loaded ? "animate-fade-in" : "opacity-0"
                }`}
              style={{ animationDelay: "0.4s" }}
            >
              Join innovators worldwide to build the future of technology.
              Explore cutting-edge themes, form teams, and create projects that
              make a real impact.
            </p>

            {/* Event info */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-sm text-surface-foreground/70 transition-all duration-700 ${loaded ? "animate-fade-in" : "opacity-0"
                }`}
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span>March 15 – 17, 2026</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Online & Global</span>
              </div>

              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary" />
                <span>500+ Participants</span>
              </div>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-700 ${loaded ? "animate-fade-in" : "opacity-0"
                }`}
              style={{ animationDelay: "0.8s" }}
            >
              {/* Register Button */}
              <Button
                size="lg"
                className="h-12 px-8 rounded-xl text-white font-semibold 
    bg-gradient-to-r from-primary to-purple-500 
    hover:from-primary/90 hover:to-purple-600 
    shadow-lg hover:shadow-primary/40 
    transition-all duration-300"
              >
                Register Now <ArrowRight size={18} />
              </Button>

              {/* Explore Button */}
              <Button
                size="lg"
                onClick={scrollToThemes}
                className="h-12 px-8 rounded-xl font-semibold 
    bg-surface border border-primary/30 
    text-primary hover:bg-primary hover:text-white 
    transition-all duration-300 shadow-md"
              >
                Explore Themes
              </Button>
            </div>
          </div>

          {/* RIGHT SIDE ORBIT ANIMATION */}
          <div
            className={`hidden lg:flex items-center justify-center flex-shrink-0 transition-all duration-1000 ${loaded ? "animate-fade-in-right" : "opacity-0"
              }`}
            style={{ animationDelay: "0.5s" }}
          >
            <div className="relative w-[280px] h-[280px] xl:w-[340px] xl:h-[340px]">

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-primary/15 animate-spin-slow" />

              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-primary/20 animate-spin-reverse" />

              {/* Inner glow */}
              <div className="absolute inset-16 rounded-full bg-primary/5 border border-primary/25 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-primary">48h</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    of innovation
                  </div>
                </div>
              </div>

              {/* Orbit icons */}
              {orbitIcons.map(({ Icon, delay, size }, i) => {
                const angle = (360 / orbitIcons.length) * i;

                return (
                  <div
                    key={i}
                    className="absolute w-10 h-10 rounded-xl bg-surface border border-primary/20 flex items-center justify-center shadow-lg animate-float"
                    style={{
                      top: `${50 + 42 * Math.sin((angle * Math.PI) / 180)}%`,
                      left: `${50 + 42 * Math.cos((angle * Math.PI) / 180)}%`,
                      transform: "translate(-50%, -50%)",
                      animationDelay: `${delay}s`,
                      animationDuration: `${3 + i * 0.3}s`,
                    }}
                  >
                    <Icon size={size} className="text-primary" />
                  </div>
                );
              })}

              {/* Pulsing dots */}
              {[0, 90, 180, 270].map((deg, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/60 animate-pulse"
                  style={{
                    top: `${50 + 50 * Math.sin((deg * Math.PI) / 180)}%`,
                    left: `${50 + 50 * Math.cos((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${i * 0.4}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
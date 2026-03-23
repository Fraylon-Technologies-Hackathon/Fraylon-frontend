import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const scrollToThemes = () => {
    const section = document.getElementById("themes");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
      {/* 🔥 Background Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt=""
              className="w-full h-full object-cover"
            />

            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`} />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* 🔥 Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 py-24 flex items-center min-h-screen">
          <div className="max-w-2xl w-full text-center lg:text-left">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8 transition-all duration-700 ${
                loaded ? "animate-fade-in-left" : "opacity-0"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-primary">
                Registration Open • 2026
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 transition-all duration-700 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <span className="text-white">AI HACK</span>
              <br />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500">
                SPHERE
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              Join 500+ innovators to build next-gen AI solutions, compete, and
              collaborate globally.
            </p>

            {/* Info cards */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-sm text-surface-foreground/70 transition-all duration-700 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.6s" }}
            >
              {[
                { icon: <Calendar size={18} />, label: "March 15-17", sub: "2026" },
                { icon: <MapPin size={18} />, label: "Global", sub: "Hybrid" },
                { icon: <Users size={18} />, label: "500+ Devs", sub: "Worldwide" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md"
                >
                  <div className="p-2 rounded-lg bg-primary/20 text-primary">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">{item.label}</div>
                    <div className="text-xs text-white/60">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 transition-all duration-700 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              {/* Register Button */}
              <Button
                size="lg"
                onClick={() => navigate("/register")}
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
                View Tracks
              </button>
            </div>
          </div>

          {/* RIGHT SIDE ORBIT ANIMATION */}
          <div
            className={`hidden lg:flex items-center justify-center flex-shrink-0 transition-all duration-1000 ${
              loaded ? "animate-fade-in-right" : "opacity-0"
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

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-8 bg-primary" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
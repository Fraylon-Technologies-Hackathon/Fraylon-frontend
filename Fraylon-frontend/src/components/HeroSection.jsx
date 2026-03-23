import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

const slides = [
  { src: slide1, overlay: "from-teal/70 via-emerald/50 to-black/70" },
  { src: slide2, overlay: "from-primary/70 via-teal/50 to-black/70" },
  { src: slide3, overlay: "from-accent/60 via-primary/50 to-black/70" },
  { src: slide4, overlay: "from-emerald/70 via-teal/50 to-black/70" },
  { src: slide5, overlay: "from-primary/60 via-accent/50 to-black/70" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const next = useCallback(() => {
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  useEffect(() => {
    const i = setInterval(next, 5000);
    return () => clearInterval(i);
  }, [next]);

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
              className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
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
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tighter transition-all duration-1000 delay-100 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span className="text-white">AI HACK</span>
              <br />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-500">
                SPHERE
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 mb-10 transition-all duration-1000 delay-200 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Join 500+ innovators to build next-gen AI solutions, compete, and
              collaborate globally.
            </p>

            {/* Info cards */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 transition-all duration-1000 delay-300 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
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
              className={`flex flex-col sm:flex-row items-center lg:items-start 
              justify-center lg:justify-start gap-4 transition-all duration-1000 delay-500 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              
              {/* 🚀 Primary Button */}
              <button
                className="h-14 px-10 rounded-xl font-semibold text-white 
                bg-gradient-to-r from-teal-400 via-emerald-500 to-blue-500
                hover:from-teal-300 hover:via-emerald-400 hover:to-blue-400
                shadow-lg shadow-emerald-500/30
                hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]
                transition-all duration-300 flex items-center justify-center"
              >
                Secure Your Spot
                <ArrowRight className="ml-2" />
              </button>

              {/* 🌑 Secondary Button */}
              <button
                className="h-14 px-10 rounded-xl font-semibold text-white 
                bg-white/10 backdrop-blur-md border border-white/20
                hover:bg-gradient-to-r hover:from-teal-400/20 hover:via-emerald-400/20 hover:to-blue-400/20
                hover:border-teal-300/40
                transition-all duration-300"
              >
                View Tracks
              </button>
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
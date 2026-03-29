import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const slides = [
  { src: "/slide1.jpg", overlay: "from-black/70 via-black/50 to-black/70" },
  { src: "/slide2.jpg", overlay: "from-black/70 via-black/50 to-black/70" },
  { src: "/slide3.jpg", overlay: "from-black/70 via-black/50 to-black/70" },
  { src: "/slide4.jpg", overlay: "from-black/70 via-black/50 to-black/70" },
  { src: "/slide5.jpg", overlay: "from-black/70 via-black/50 to-black/70" },
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

  useEffect(() => {
    const i = setInterval(next, 5000);
    return () => clearInterval(i);
  }, [next]);

  const handleViewTracks = () => {
    const section = document.getElementById("themes");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={slide.src} alt="hero" className="w-full h-full object-cover scale-105" />
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`} />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container-main min-h-screen flex items-center">
          <div className="max-w-2xl w-full text-center lg:text-left">

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-6 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <div className="h-2 w-2 bg-primary rounded-full animate-ping" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/90">
                Registration Open • 2026
              </span>
            </div>

            {/* Title */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
            >
              <span className="text-white">AI HACK</span>
              <br />
              <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                SPHERE
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`text-base md:text-lg text-white/70 mb-8 max-w-xl ${
                loaded ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Join 500+ innovators to build next-gen AI solutions, compete, and collaborate globally.
            </p>

            {/* Info Cards */}
            <div className="flex flex-wrap gap-4 mb-10 justify-center lg:justify-start">
              {[
                { icon: <Calendar size={18} />, label: "March 15-17", sub: "2026" },
                { icon: <MapPin size={18} />, label: "Global", sub: "Hybrid" },
                { icon: <Users size={18} />, label: "500+ Devs", sub: "Worldwide" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md"
                >
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <div className="text-xs text-white/60">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => navigate("/register")}   // ✅ navigates to /register page
                className="text-sm px-10 py-1 rounded-lg text-white
                    bg-linear-to-r from-teal-500 to-blue-500
                    hover:opacity-90 transition"
              >
                Register Now <ArrowRight size={18} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={handleViewTracks}              // ✅ smooth scrolls to #tracks
                className="px-8 py-4 rounded-xl border-white/30 text-white hover:bg-white hover:text-black"
              >
                View Tracks
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full ${
              i === current ? "w-8 bg-white" : "w-4 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
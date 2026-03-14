import { useEffect, useRef, useState } from "react";
import { Brain, Globe, Shield, Link2, Lightbulb } from "lucide-react";

const themes = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Build intelligent solutions using AI/ML — from predictive models to generative applications.",
    icon: Brain,
    image: "/theme-ai.jpg",
    textColor: "text-theme-ai",
    glowColor: "shadow-theme-ai/30",
  },
  {
    title: "Web Development",
    description:
      "Craft modern web experiences with cutting-edge frameworks, APIs, and design systems.",
    icon: Globe,
    image: "/theme-web.jpg",
    textColor: "text-theme-web",
    glowColor: "shadow-theme-web/30",
  },
  {
    title: "Cybersecurity",
    description:
      "Develop tools that protect systems, detect threats, and build a more secure digital world.",
    icon: Shield,
    image: "/theme-cyber.jpg",
    textColor: "text-theme-cyber",
    glowColor: "shadow-theme-cyber/30",
  },
  {
    title: "Blockchain / Web3",
    description:
      "Explore decentralized applications, smart contracts, and token economies.",
    icon: Link2,
    image: "/theme-blockchain.jpg",
    textColor: "text-theme-blockchain",
    glowColor: "shadow-theme-blockchain/30",
  },
  {
    title: "Open Innovation",
    description:
      "Got a unique idea? This is your space — surprise us with creative, impactful solutions.",
    icon: Lightbulb,
    image: "/theme-open.jpg",
    textColor: "text-theme-open",
    glowColor: "shadow-theme-open/30",
  },
];

const marqueeThemes = [...themes, ...themes];

const ThemeCard = ({ theme }) => {
  const Icon = theme.icon;

  return (
    <div
      className={`relative flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[340px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl ${theme.glowColor} hover:shadow-2xl transition-all duration-500`}
    >
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={theme.image}
          alt={theme.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6 bg-surface">
        <div className="flex items-center gap-3 mb-3">
          <Icon size={20} className={theme.textColor} />
          <h3 className="text-base font-semibold text-surface-foreground group-hover:text-primary transition-colors">
            {theme.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {theme.description}
        </p>
      </div>
    </div>
  );
};

const ThemesSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 overflow-hidden">

      {/* Header */}
      <div
        className={`container-main mb-14 transition-all duration-700 ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        <div className="text-center">
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
            Explore Tracks
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Challenge
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pick a theme that excites you. Each track has dedicated mentors,
            resources, and prizes waiting for you.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div
          className="flex gap-6 py-4 animate-marquee"
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {marqueeThemes.map((theme, index) => (
            <ThemeCard key={`${theme.title}-${index}`} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
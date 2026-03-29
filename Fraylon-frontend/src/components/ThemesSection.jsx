import { useRef, useEffect, useCallback } from "react";
import { Brain, Globe, Shield, Link2, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const themes = [
  {
    slug: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Build intelligent solutions using AI/ML — from predictive models to generative applications.",
    icon: Brain,
    image: "/theme-ai.jpg",
  },
  {
    slug: "web-dev",
    title: "Web Development",
    description:
      "Craft modern web experiences with cutting-edge frameworks, APIs, and design systems.",
    icon: Globe,
    image: "/theme-web.jpg",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Develop tools that protect systems and detect threats.",
    icon: Shield,
    image: "/theme-cyber.jpg",
  },
  {
    slug: "blockchain",
    title: "Blockchain / Web3",
    description:
      "Explore decentralized applications and smart contracts.",
    icon: Link2,
    image: "/theme-blockchain.jpg",
  },
  {
    slug: "open-innovation",
    title: "Open Innovation",
    description:
      "Bring creative ideas that solve real-world challenges.",
    icon: Lightbulb,
    image: "/theme-open.jpg",
  },
];

const ThemeCard = ({ theme }) => {
  const Icon = theme.icon;
  const navigate = useNavigate();

  return (
    <div className="flex-shrink-0 py-3">
      <div
        className="w-[240px] rounded-2xl overflow-hidden
        bg-fray-bg-card border border-fray-border-soft
        shadow-lg flex flex-col
        hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]
        hover:border-fray-accent-primary/50
        hover:scale-105
        transition-all duration-500 group"
        style={{ height: "320px" }}
      >
        {/* Image */}
        <div className="h-32 overflow-hidden flex-shrink-0 relative">
          <img
            src={theme.image}
            alt={theme.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-fray-bg-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Card body */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-start gap-2 mb-2">
            <Icon
              size={16}
              className="text-fray-accent-primary flex-shrink-0 mt-0.5"
            />
            <h3 className="text-fray-accent-primary font-semibold text-sm leading-tight">
              {theme.title}
            </h3>
          </div>

          <p className="text-xs text-fray-text-subtle leading-relaxed flex-1">
            {theme.description}
          </p>

          <button
            onClick={() => navigate(`/explore/${theme.slug}`)}
            style={{
              background: "linear-gradient(to right, #22D3EE, #38BDF8, #A5B4FC)",
              transition:
                "opacity 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
            }}
            className="mt-4 w-full text-xs px-3 py-2 rounded-md
            text-fray-bg-base font-semibold"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 16px rgba(34,211,238,0.6), 0 0 32px rgba(56,189,248,0.3)";
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.opacity = "0.92";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.opacity = "1";
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

const ThemesSection = () => {
  const sliderRef = useRef(null);
  const animFrameRef = useRef(null);
  const isPausedRef = useRef(false);
  const SPEED = 0.6;

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const allCards = [...themes, ...themes, ...themes];

  const autoScroll = useCallback(() => {
    const el = sliderRef.current;
    if (!el) return;

    if (!isPausedRef.current) {
      el.scrollLeft += SPEED;
      const setWidth = el.scrollWidth / 3;

      if (el.scrollLeft >= setWidth * 2) {
        el.scrollLeft -= setWidth;
      }
    }

    animFrameRef.current = requestAnimationFrame(autoScroll);
  }, []);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const setWidth = el.scrollWidth / 3;
    el.scrollLeft = setWidth;

    animFrameRef.current = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animFrameRef.current);
  }, [autoScroll]);

  const pauseScroll = () => {
    isPausedRef.current = true;
  };

  const onMouseDown = (e) => {
    isDraggingRef.current = true;
    isPausedRef.current = true;
    dragStartXRef.current = e.pageX;
    scrollStartRef.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.pageX - dragStartXRef.current;
    sliderRef.current.scrollLeft = scrollStartRef.current - dx;
  };

  const onMouseUp = () => {
    isDraggingRef.current = false;
    isPausedRef.current = false;
    sliderRef.current.style.cursor = "grab";
  };

  const onMouseLeave = () => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      sliderRef.current.style.cursor = "grab";
    }
    isPausedRef.current = false;
  };

  const onTouchStart = (e) => {
    isDraggingRef.current = true;
    isPausedRef.current = true;
    dragStartXRef.current = e.touches[0].pageX;
    scrollStartRef.current = sliderRef.current.scrollLeft;
  };

  const onTouchMove = (e) => {
    if (!isDraggingRef.current) return;
    const dx = e.touches[0].pageX - dragStartXRef.current;
    sliderRef.current.scrollLeft = scrollStartRef.current - dx;
  };

  const onTouchEnd = () => {
    isDraggingRef.current = false;
    isPausedRef.current = false;
  };

  return (
    <section id="themes" className="py-24 bg-fray-bg-section">
      <div className="text-center mb-14">
        <span className="text-fray-accent-primary text-sm font-semibold tracking-widest uppercase mb-3 block">
          Explore Tracks
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-fray-text-primary mb-4">
          Choose Your Challenge
        </h2>

        <p className="text-fray-text-subtle text-lg max-w-2xl mx-auto">
          Pick a theme and explore example problem statements.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div
          ref={sliderRef}
          onMouseEnter={pauseScroll}
          onMouseLeave={onMouseLeave}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="flex gap-5 px-6 no-scrollbar select-none"
          style={{
            overflowX: "auto",
            overflowY: "visible",
            cursor: "grab",
          }}
        >
          {allCards.map((theme, index) => (
            <ThemeCard key={index} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
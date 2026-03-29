import { useRef, useEffect, useCallback } from "react";
import { Brain, Globe, Shield, Link2, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

/** TYPES */
type ThemeType = {
  slug: string;
  title: string;
  description: string;
  icon: any;
  image: string;
};

/** DATA */
export const themes: ThemeType[] = [
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

/** CARD */
const ThemeCard = ({ theme }: { theme: ThemeType }) => {
  const Icon = theme.icon;
  const navigate = useNavigate();

  return (
    <div className="flex-shrink-0 py-3">
      <div
        className="w-[240px] rounded-2xl overflow-hidden
        bg-white border border-slate-200
        shadow-sm flex flex-col
        hover:shadow-lg hover:border-teal-200
        hover:scale-105
        transition-all duration-500 group"
        style={{ height: "320px" }}
      >
        {/* Image */}
        <div className="h-32 overflow-hidden relative">
          <img
            src={theme.image}
            alt={theme.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-start gap-2 mb-2">
            <Icon size={16} className="text-teal-600 mt-0.5" />
            <h3 className="text-slate-900 font-semibold text-sm">
              {theme.title}
            </h3>
          </div>

          <p className="text-xs text-slate-600 flex-1 leading-relaxed">
            {theme.description}
          </p>

          <button
            onClick={() => navigate(`/explore/${theme.slug}`)}
            className="mt-4 w-full text-xs px-3 py-2 rounded-md
            text-white font-semibold
            bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-500
            hover:opacity-90 transition"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

/** MAIN SECTION */
const ThemesSection = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);

  const dragStartXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const SPEED = 0.6;

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

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [autoScroll]);

  /** INTERACTIONS */
  const onMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;

    isDraggingRef.current = true;
    isPausedRef.current = true;
    dragStartXRef.current = e.pageX;
    scrollStartRef.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = "grabbing";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !sliderRef.current) return;

    const dx = e.pageX - dragStartXRef.current;
    sliderRef.current.scrollLeft = scrollStartRef.current - dx;
  };

  const onMouseUp = () => {
    if (!sliderRef.current) return;

    isDraggingRef.current = false;
    isPausedRef.current = false;
    sliderRef.current.style.cursor = "grab";
  };

  const onMouseLeave = () => {
    if (!sliderRef.current) return;

    isDraggingRef.current = false;
    isPausedRef.current = false;
    sliderRef.current.style.cursor = "grab";
  };

  /** TOUCH SUPPORT */
  const onTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!sliderRef.current || !touch) return;

    isDraggingRef.current = true;
    isPausedRef.current = true;
    dragStartXRef.current = touch.pageX;
    scrollStartRef.current = sliderRef.current.scrollLeft;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!isDraggingRef.current || !sliderRef.current || !touch) return;

    const dx = touch.pageX - dragStartXRef.current;
    sliderRef.current.scrollLeft = scrollStartRef.current - dx;
  };

  const onTouchEnd = () => {
    isDraggingRef.current = false;
    isPausedRef.current = false;
  };

  return (
    <section className="py-28 relative overflow-hidden bg-[#f8fafc]">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <div className="text-center mb-14">
        <span className="text-teal-600 text-sm font-semibold uppercase">
          Explore Tracks
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
          Choose Your Challenge
        </h2>

        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
          Pick a theme and explore example problem statements.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">
        <div
          ref={sliderRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="flex gap-5 px-6 no-scrollbar select-none"
          style={{ overflowX: "auto", cursor: "grab" }}
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
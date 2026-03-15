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
    description: "Develop tools that protect systems and detect threats.",
    icon: Shield,
    image: "/theme-cyber.jpg",
  },
  {
    slug: "blockchain",
    title: "Blockchain / Web3",
    description: "Explore decentralized applications and smart contracts.",
    icon: Link2,
    image: "/theme-blockchain.jpg",
  },
  {
    slug: "open-innovation",
    title: "Open Innovation",
    description: "Bring creative ideas that solve real-world challenges.",
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
        bg-zinc-900 border border-zinc-800
        shadow-lg flex flex-col
        hover:shadow-[0_0_40px_rgba(59,130,246,0.8)]
        hover:border-blue-400/60
        hover:scale-105
        transition-all duration-500 group"
        style={{ height: "320px" }}
      >
        {/* Image */}
        <div className="h-32 overflow-hidden flex-shrink-0">
          <img
            src={theme.image}
            alt={theme.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
        </div>

        {/* Card body */}
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-start gap-2 mb-2">
            <Icon size={16} className="text-blue-400 flex-shrink-0 mt-0.5" />
            <h3 className="text-white font-semibold text-sm leading-tight">
              {theme.title}
            </h3>
          </div>

          <p className="text-xs text-zinc-400 leading-relaxed flex-1">
            {theme.description}
          </p>

          <button
            onClick={() => navigate(`/explore/${theme.slug}`)}
            className="mt-4 w-full text-xs px-3 py-2 rounded-md
            bg-blue-500 hover:bg-blue-400
            text-white transition duration-300 font-medium"
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

  // Drag state
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const scrollStartRef = useRef(0);

  const allCards = [...themes, ...themes, ...themes];

  // ── Autoscroll loop ──────────────────────────────────────────
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

  // ── Hover pause / resume ─────────────────────────────────────
  const pauseScroll = () => { isPausedRef.current = true; };
  const resumeScroll = () => {
    // Only resume if not currently dragging
    if (!isDraggingRef.current) isPausedRef.current = false;
  };

  // ── Drag handlers ────────────────────────────────────────────
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

  // ── Touch handlers (mobile drag) ─────────────────────────────
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
    <section id="themes" className="py-24">

      <div className="text-center mb-14">
        <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
          Explore Tracks
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Choose Your Challenge
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Pick a theme and explore example problem statements.
        </p>
      </div>

      {/* No arrows — drag or let it autoscroll */}
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
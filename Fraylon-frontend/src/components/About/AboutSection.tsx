import React, { useState, useRef } from "react";
import { motion, } from "framer-motion";
import { Zap, Users, Handshake, Trophy, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    title: "48H Coding Sprint",
    desc: "A high-octane environment where teams design, build, and deploy within a strict 48-hour window.",
    icon: Zap,
    color: "from-amber-400 to-orange-600",
  },
  {
    title: "Global Network",
    desc: "Connect with elite developers and designers from across the globe in a collaborative ecosystem.",
    icon: Users,
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Industry Challenges",
    desc: "Tackle high-stakes problems curated by industry leaders and top-tier tech organizations.",
    icon: Handshake,
    color: "from-emerald-400 to-teal-600",
  },
  {
    title: "Elite Showcase",
    desc: "Demonstrate your engineering prowess to a panel of expert judges and venture capitalists.",
    icon: Trophy,
    color: "from-purple-400 to-pink-600",
  },
];

const HighlightCard = ({ item, index }: any) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-[1px] rounded-2xl overflow-hidden bg-slate-800/50 hover:bg-gradient-to-br transition-all duration-500"
    >
      {/* Animated Border/Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(250px circle at ${mousePos.x}px ${mousePos.y}px, rgba(45, 212, 191, 0.4), transparent 80%)`,
        }}
      />

      {/* Main Card Body */}
      <div className="relative z-20 h-full bg-slate-950 rounded-[15px] p-8 flex flex-col items-start gap-4">
        {/* Icon with Glowing Backdrop */}
        <div className="relative">
          <div className={`absolute inset-0 blur-xl opacity-20 bg-gradient-to-r ${item.color}`} />
          <div className="relative p-3 rounded-xl bg-slate-900 border border-slate-800 text-white">
            <Icon size={28} strokeWidth={1.5} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors flex items-center gap-2">
            {item.title}
            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </h3>
          <p className="text-slate-400 leading-relaxed text-sm font-light">
            {item.desc}
          </p>
        </div>

      
        <div className={`absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${item.color}`} />
      </div>
    </motion.div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      
   <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-200/40 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/40 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
    

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <HighlightCard key={index} item={item} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default AboutSection;
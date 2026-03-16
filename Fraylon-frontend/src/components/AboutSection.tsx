import React, { useState } from "react";
import { Zap, Users, Handshake, Trophy } from "lucide-react";

const highlights = [
  {
    title: "48 Hour Coding Sprint",
    desc: "A fast-paced hackathon where teams collaborate to design, build and present innovative solutions.",
    icon: Zap,
  },
  {
    title: "Global Collaboration",
    desc: "Developers, designers and innovators work together to turn bold ideas into real prototypes.",
    icon: Users,
  },
  {
    title: "Real-World Challenges",
    desc: "Participants tackle meaningful problems across technology domains and industries.",
    icon: Handshake,
  },
  {
    title: "Innovation Showcase",
    desc: "Present your solutions to mentors and judges and gain visibility for your work.",
    icon: Trophy,
  },
];

const HighlightCard = ({ item }: any) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Icon = item.icon;

  return (
    <div
      onMouseMove={handleMouseMove}
      className="
        group relative
        bg-[hsl(var(--surface))/0.6]
        backdrop-blur-md
        p-7 rounded-xl
        border border-white/10
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-primary/60
        hover:shadow-[0_0_35px_hsl(var(--primary)/0.25)]
        cursor-pointer
        overflow-hidden
      "
    >
    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 border border-primary/40"></div>
      {/* Cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, hsl(var(--primary) / 0.25), transparent 70%)`,
        }}
      />

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Icon */}
      <div className="relative mb-4 flex justify-center">
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <Icon size={24} className="text-primary" />
        </div>
      </div>

      <h3 className="relative text-xl font-semibold mb-2">
        {item.title}
      </h3>

      <p className="relative text-sm text-muted-foreground leading-relaxed">
        {item.desc}
      </p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-b from-[hsl(var(--hero-from))] to-[hsl(var(--background))] text-[hsl(var(--foreground))]"
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-6">
          About the Hackathon
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
          Fraylon Hackathon is a 48-hour innovation challenge
          where developers, designers and problem solvers
          collaborate to build impactful technology solutions.
        </p>

        <p className="max-w-2xl mx-auto text-gray-400 mb-14">
          The event encourages creativity, collaboration and rapid prototyping,
          bringing together talented minds to transform ideas into real projects.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {highlights.map((item, index) => (
            <HighlightCard key={index} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
import { motion } from "framer-motion";

const insightsData = [
  {
    title: "Top AI Projects Winning Hackathons",
    category: "Trends",
    desc: "Explore cutting-edge AI ideas dominating global hackathons.",
    stats: "2.5K+ submissions",
    read: "5 min read",
    date: "Aug 2025",
  },
  {
    title: "Build an MVP in 24 Hours",
    category: "Guide",
    desc: "Rapid prototyping strategies used by winning teams.",
    stats: "120+ teams used",
    read: "4 min read",
    date: "Jul 2025",
  },
  {
    title: "Hackathon to Funded Startup",
    category: "Success",
    desc: "How ideas became venture-backed startups.",
    stats: "50% conversion",
    read: "6 min read",
    date: "Jun 2025",
  },
  {
    title: "What Judges Really Look For",
    category: "Mentor Tips",
    desc: "Winning criteria from top industry experts.",
    stats: "30+ mentors",
    read: "3 min read",
    date: "Aug 2025",
  },
  {
    title: "Web3 & Blockchain Trends",
    category: "Trends",
    desc: "Decentralized apps shaping the future.",
    stats: "800+ projects",
    read: "5 min read",
    date: "Jul 2025",
  },
  {
    title: "UI/UX Secrets for Hackathons",
    category: "Design",
    desc: "How design wins judges in minutes.",
    stats: "95% impact rate",
    read: "4 min read",
    date: "Aug 2025",
  },
  {
    title: "Top Tech Stacks in 2025",
    category: "Tech",
    desc: "Most used stacks by winning teams.",
    stats: "React, AI, Firebase",
    read: "6 min read",
    date: "Jun 2025",
  },
  {
    title: "Global Hackathon Growth",
    category: "Data",
    desc: "How hackathons are scaling worldwide.",
    stats: "10K+ devs",
    read: "5 min read",
    date: "Aug 2025",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Insights & <span className="text-teal-500">Analytics</span>
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl">
              Deep dive into trends, data, and strategies shaping modern hackathons.
            </p>
          </div>

          {/* <button className="hidden md:block px-5 py-2 rounded-full 
            bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 
            text-white text-sm shadow-md hover:opacity-90 transition">
            View All
          </button> */}
        </div>

        {/* FEATURED CARD */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 60 }}
          className="relative mb-10 p-[2px] rounded-3xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400 blur-xl opacity-70" />

          {/* Content */}
          <div className="relative p-10 rounded-3xl bg-gradient-to-r from-teal-500 via-blue-500 to-cyan-500 text-white shadow-xl">
            <h3 className="text-3xl font-bold">
              🚀 The Future of Hackathons: AI + Startup Ecosystem
            </h3>

            <p className="mt-4 max-w-2xl opacity-90">
              Discover how AI-powered innovation and startup culture are transforming hackathons into launchpads for billion-dollar ideas.
            </p>

            <div className="mt-6 flex gap-6 text-sm opacity-90">
              <span>🔥 5K+ Readers</span>
              <span>⏱ 7 min read</span>
              <span>📅 Aug 2025</span>
            </div>
          </div>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {insightsData.map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ delay: i * 0.05 }}
              className="relative group p-[1px] rounded-2xl"
            >
              {/* Glow Border */}
              <div className="
                absolute inset-0 rounded-2xl
                bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400
                opacity-0 group-hover:opacity-100
                blur-lg transition duration-500
              " />

              {/* Card */}
              <div className="
                relative bg-white rounded-2xl p-6
                border border-gray-100
                shadow-md
                group-hover:-translate-y-2
                group-hover:shadow-xl
                transition
              ">
                {/* Category */}
                <span className="text-xs text-teal-500 uppercase font-semibold">
                  {item.category}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>

                {/* Stats */}
                <div className="mt-4 text-xs text-blue-500 font-medium">
                  📊 {item.stats}
                </div>

                {/* Footer */}
                <div className="mt-4 flex justify-between text-xs text-gray-400">
                  <span>{item.read}</span>
                  <span>{item.date}</span>
                </div>

                {/* CTA */}
                {/* <button className="mt-4 text-sm text-teal-500 hover:text-blue-500 transition">
                  Read More →
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
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
    <section       id="insights" className="py-20 md:py-28 relative px-4 md:px-6 overflow-hidden  ">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Insights & <span className="text-gradient">Analytics</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-600 max-w-xl mx-auto"
          >
            Deep dive into trends, data, and strategies shaping modern hackathons.
          </motion.p>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          className="relative mb-10 md:mb-16 max-w-5xl mx-auto group"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400 via-blue-400 to-cyan-400 blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />
          
          <div className="relative p-6 md:p-12 rounded-3xl bg-white/90 backdrop-blur-xl shadow-xl border border-white/50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  🚀 The Future of Hackathons: AI + Startup Ecosystem
                </h3>
                <p className="mt-4 text-gray-600 max-w-2xl">
                  Discover how AI-powered innovation and startup culture are transforming hackathons into launchpads for billion-dollar ideas.
                </p>
              </div>
           
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {insightsData.map((item, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: i * 0.05 }}
              className="group h-full"
            >
              <div className="
                relative h-full flex flex-col
                bg-white/70 backdrop-blur-md rounded-2xl p-6
                border border-white/60
                shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
                hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]
                group-hover:-translate-y-2
                transition-all duration-300
                overflow-hidden
              ">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-teal-50 text-[10px] text-teal-600 uppercase font-bold tracking-wider group-hover:bg-teal-500 group-hover:text-white transition-colors">
                      {item.category}
                    </span>
                    <div className="h-2 w-2 rounded-full bg-blue-400 group-hover:animate-ping" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-600 leading-relaxed flex-grow">
                    {item.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-gray-100/50">
                    <div className="text-xs text-blue-500 font-bold mb-3 flex items-center gap-2">
                       <span className="p-1 rounded bg-blue-50">📊</span> {item.stats}
                    </div>

                    <div className="flex justify-between text-[11px] text-gray-400 font-medium">
                      <span className="flex items-center gap-1">⏱ {item.read}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
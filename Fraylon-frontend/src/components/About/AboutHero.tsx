import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Heart, Shield, Globe, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id = "about" className="relative py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      {/* Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-teal-200/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-blue-200/30 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT VISUAL */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl blur-2xl opacity-10" />

            <div className="relative grid grid-cols-12 gap-3 sm:gap-4">
              {/* Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="col-span-12 sm:col-span-6 bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white shadow-lg"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                  Lightning Fast
                </h4>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">
                  48-Hour Sprint
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                variants={itemVariants}
                className="col-span-12 sm:col-span-6 h-40 sm:h-48 rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow"
              >
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                  alt="Hackathon"
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </motion.div>

              {/* Image */}
              <motion.div
                variants={itemVariants}
                className="col-span-12 sm:col-span-5 h-48 sm:h-64 rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow"
              >
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
                  alt="Collaboration"
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </motion.div>

              {/* Card */}
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="col-span-12 sm:col-span-7 bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white shadow-lg flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                  </div>

                  <div className="flex -space-x-2 sm:-space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                      >
                        <img src={`https://i.pravatar.cc/150?u=${i}`} />
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg mt-3 sm:mt-4">
                    Global Community
                  </h4>
                  <p className="text-sm text-slate-500">
                    Join 1000+ hackers worldwide.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-1.5 text-xs font-bold text-teal-700 uppercase bg-teal-100 rounded-full">
                Established 2024
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
                Where Code Meets <br />
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Infinite Intelligence
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                AI HACK SPHERE is the ultimate playground for visionaries.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-y border-slate-200 py-6 text-center"
            >
              {[
                ["$50K+", "Prize Pool"],
                ["36H", "Duration"],
                ["20+", "Sponsors"],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900">
                    {value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                to="/about-details"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-bold 
                text-white rounded-xl bg-slate-900 hover:bg-slate-800 transition"
              >
                Our Full Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 md:mt-20 grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {[
            { icon: <Cpu />, title: "API Access", text: "Free credits provided." },
            { icon: <Globe />, title: "Hybrid Mode", text: "Join from anywhere." },
            { icon: <Shield />, title: "Ownership", text: "You own your work." },
          ].map((f, i) => (
            <div
              key={i}
              className="flex gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:shadow-md transition"
            >
              <div className="text-teal-600">{f.icon}</div>
              <div>
                <h5 className="font-bold text-slate-900">{f.title}</h5>
                <p className="text-sm text-slate-500">{f.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
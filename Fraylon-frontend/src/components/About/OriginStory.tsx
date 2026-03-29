import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ShieldCheck,
  Cpu,
  Globe,
  Award,
  Sparkles,
  ArrowLeft,
  Zap,
  Users,
  Target,
  ChevronRight
} from "lucide-react";

const OriginStory: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Scroll Progress Bar Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBack = () => {
    // If using react-router: navigate(-1)
    window.history.back();
  };

  return (
    <div className="relative w-full min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-teal-100">
      
      {/* --- NEXT LEVEL HEADER --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200" : "bg-transparent"
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] bg-teal-500 origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="group flex items-center gap-2 text-slate-600 hover:text-teal-600 transition-colors"
          >
            <div className="p-2 rounded-full group-hover:bg-teal-50 border border-transparent group-hover:border-teal-100 transition-all">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-semibold text-sm sm:text-base hidden sm:block">Back to Home</span>
          </button>
      
        </div>
      </header>

   
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-teal-200/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-200/30 blur-[120px] rounded-full" />
      </div>

     
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 text-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
            bg-white border border-slate-200 text-teal-700 text-xs sm:text-sm font-bold mb-8 shadow-sm"
          >
            <Sparkles size={14} className="text-teal-500 animate-pulse" />
            THE JOURNEY SO FAR
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]"
          >
            Empowering The <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-emerald-500 to-blue-600">
              Problem Solvers
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl sm:max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            AI Hacksphere is more than a competition — it’s a high-octane 
            environment where code becomes the catalyst for change.
          </motion.p>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 bg-white/50 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-xl">
            {[
              { label: "Hackers", value: "5,000+" },
              { label: "Projects", value: "1,200+" },
              { label: "Countries", value: "40+" },
              { label: "Prizes", value: "$50k+" },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-2xl sm:text-4xl font-black text-slate-900 group-hover:text-teal-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-xs sm:text-sm uppercase tracking-[0.2em] font-bold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          
          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white border border-slate-100 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Award className="text-teal-600 w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 tracking-tight">
                Our Origin Story
              </h2>

              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>Started in 2021, AI Hacksphere was built on a simple, disruptive belief:</p>
                <p className="text-2xl font-bold text-slate-900 border-l-4 border-teal-500 pl-6 py-2 italic">
                  “The best way to predict the future is to hack it into existence.”
                </p>
                <p>
                  What began as a localized meetup for high-frequency builders has scaled into a global ecosystem 
                  supporting founders, engineers, and dreamers.
                </p>
           
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full -mr-16 -mt-16 blur-3xl" />
          </motion.div>

          <div className="lg:col-span-5 grid gap-6">
            {[
              {
                title: "Radical Inclusion",
                icon: <Users className="text-purple-500" />,
                desc: "Code knows no borders. We prioritize talent over titles.",
                color: "group-hover:bg-purple-50"
              },
              {
                title: "Build for Impact",
                icon: <Target className="text-emerald-500" />,
                desc: "We don't do 'hello world'. We solve billion-person problems.",
                color: "group-hover:bg-emerald-50"
              },
              {
                title: "Open Collaboration",
                icon: <Globe className="text-blue-500" />,
                desc: "Knowledge is the only resource that grows when shared.",
                color: "group-hover:bg-blue-50"
              },
            ].map((v, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-slate-100 p-6 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-slate-50 transition-colors ${v.color}`}>
                  {v.icon}
                </div>
                <h4 className="font-bold text-xl text-slate-900 mb-1">
                  {v.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default OriginStory;
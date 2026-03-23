import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";

const ScheduleHero = () => {
  return (
    <section className="min-h-screen bg-white text-black flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm text-gray-500 mb-4">Event Planning Simplified</p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            The better way <br />
            to schedule your <br />
            <span className="bg-gradient-to-r from-teal-500 to-blue-600 text-transparent bg-clip-text">
              hackathon
            </span>
          </h1>

          <p className="text-gray-500 mb-8 max-w-md">
            Manage your hackathon timeline, sessions, and events with a clean and modern scheduling experience.
          </p>
        </div>

        {/* RIGHT CARD UI */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-200 rounded-3xl p-6 shadow-xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-lg">Event Schedule</h3>
            <span className="text-sm text-gray-500">March 2026</span>
          </div>

          <div className="space-y-4">
            {[
              { time: "09:00 AM", title: "Opening Ceremony", icon: CalendarDays },
              { time: "10:30 AM", title: "Problem Release", icon: Clock },
              { time: "02:00 PM", title: "Hacking Begins", icon: Clock },
              { time: "06:00 PM", title: "Mentorship", icon: CalendarDays },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-teal-400 transition"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{item.time}</p>
                    <p className="font-medium">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScheduleHero;
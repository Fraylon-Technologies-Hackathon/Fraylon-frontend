import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const Schedule = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center px-6 py-20">

      {/* 🌿 Background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50" />

      <div className="container-main grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-1px rounded-3xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-teal-400 via-blue-400 to-cyan-400 blur-xl opacity-40" />

          {/* Card */}
          <div className="relative bg-white rounded-3xl p-6 shadow-xl">

            <h2 className="text-xl font-semibold mb-4 text-gray-900">
              Create New Meeting
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name of Meeting"
                className="w-full bg-white border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />

              <div className="flex gap-4">
                <input
                  type="date"
                  className="flex-1 bg-white border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <input
                  type="time"
                  className="flex-1 bg-white border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
              </div>

              <select className="w-full bg-white border border-gray-200 rounded-xl p-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400">
                <option>Select Partner</option>
                <option>Partner 1</option>
                <option>Partner 2</option>
              </select>

              <button
                className="w-full rounded-xl p-3 text-white font-medium
                bg-linear-to-r from-teal-500 to-blue-500
                hover:opacity-90 transition shadow-lg"
              >
                Create Meeting
              </button>
            </form>

            {/* Recent Meetings */}
            <h3 className="text-lg font-semibold mt-8 mb-4 text-gray-900">
              Recent Meetings
            </h3>

            <div className="space-y-3">
              {["Case Study Review", "Tech Talk", "Project Demo"].map((title, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-50 border border-gray-200 p-3 rounded-xl"
                >
                  <div>
                    <p className="text-sm text-gray-500">23 Mar, 10:00 AM</p>
                    <p className="font-medium text-gray-900">{title}</p>
                  </div>
                  <button className="text-teal-600 text-sm font-medium hover:text-blue-500 transition">
                    View
                  </button>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative p-[1px] rounded-3xl"
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-teal-400 via-blue-400 to-cyan-400 blur-xl opacity-40" />

          {/* Card */}
          <div className="relative bg-white rounded-3xl p-6 shadow-xl">

            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-lg text-gray-900">Calendar</h3>
              <span className="text-sm text-gray-500">March 2026</span>
            </div>

            {/* Calendar */}
            <div className="grid grid-cols-7 gap-2 text-center text-sm mb-6">
              {["Mo","Tu","We","Th","Fr","Sa","Su"].map((day) => (
                <div key={day} className="font-semibold text-gray-700">{day}</div>
              ))}

              {Array.from({ length: 30 }, (_, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg cursor-pointer transition
                  ${i + 1 === 23 
                    ? "bg-linear-to-r from-teal-500 to-blue-500 text-white" 
                    : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            {/* Today's Meetings */}
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              Today's Meetings
            </h3>

            <div className="space-y-3">
              {["Case Study Review", "Tech Talk", "Project Demo"].map((title, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center bg-gray-50 border border-gray-200 p-3 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <User size={20} className="text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">10:00 - 11:00 AM</p>
                      <p className="font-medium text-gray-900">{title}</p>
                    </div>
                  </div>

                  <button
                    className="text-sm px-3 py-1 rounded-lg text-white
                    bg-linear-to-r from-teal-500 to-blue-500
                    hover:opacity-90 transition"
                  >
                    Start
                  </button>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Schedule;
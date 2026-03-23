import { motion } from "framer-motion";
import React from "react";

export default function WhyChooseAgency() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#f5f7fa] via-[#eef2f7] to-[#e9f6f4]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose <span className="text-teal-500">Our Hackathon</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl leading-relaxed">
            Experience innovation, mentorship, and real-world impact. Build
            future-ready solutions alongside talented developers, designers,
            and startup founders.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* 95 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            className="col-span-12 md:col-span-5 p-10 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-xl hover:-translate-y-2 transition"
          >
            <h3 className="text-6xl font-bold">95%</h3>
            <p className="opacity-90 mt-2">Participant Satisfaction</p>
          </motion.div>

          {/* 120 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            className="col-span-12 md:col-span-4 p-10 rounded-3xl bg-indigo-50 border border-indigo-100 shadow-md hover:-translate-y-2 transition"
          >
            <h3 className="text-5xl font-bold text-indigo-600">120+</h3>
            <p className="text-gray-600 mt-2">Projects Delivered</p>
          </motion.div>

          {/* Image */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: .9 }}
            className="col-span-12 md:col-span-3 row-span-2 rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="/whysec.jpg"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
              alt=""
            />
          </motion.div>

          {/* 24/7 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            className="col-span-12 md:col-span-3 p-8 rounded-3xl bg-teal-50 border border-teal-100 shadow-md hover:-translate-y-2 transition"
          >
            <h3 className="text-3xl font-bold text-teal-600">24/7</h3>
            <p className="text-gray-600 mt-2">Mentor Support</p>
          </motion.div>

          {/* Quote */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            className="col-span-12 md:col-span-6 p-8 rounded-3xl bg-purple-50 border border-purple-100 shadow-md hover:-translate-y-2 transition"
          >
            <p className="text-gray-700 leading-relaxed">
              “Your success is our mission — we don’t just host hackathons,
              we build innovation ecosystems where ideas become startups.”
            </p>
            <div className="mt-6 text-sm text-gray-400">
              Hackathon Organizing Team
            </div>
          </motion.div>

          {/* 50 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            className="col-span-12 md:col-span-3 p-8 rounded-3xl bg-lime-300 shadow-md hover:-translate-y-2 transition"
          >
            <h3 className="text-4xl font-bold text-black">50%</h3>
            <p className="text-black/70 mt-2">Startup Conversion</p>
          </motion.div>

          {/* 10K */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            className="col-span-12 md:col-span-4 p-8 rounded-3xl bg-sky-50 border border-sky-100 shadow-md hover:-translate-y-2 transition"
          >
            <h3 className="text-4xl font-bold text-sky-600">10K+</h3>
            <p className="text-gray-600 mt-2">Global Developers</p>
          </motion.div>

          {/* 30 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            className="col-span-12 md:col-span-5 p-8 rounded-3xl bg-emerald-50 border border-emerald-100 shadow-md hover:-translate-y-2 transition"
          >
            <h3 className="text-4xl font-bold text-emerald-600">30+</h3>
            <p className="text-gray-600 mt-2">Industry Mentors</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



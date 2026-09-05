"use client";

import { motion } from "framer-motion";

const stats = [
  ["500+", "Students trained"],
  ["6+", "Career tracks"],
  ["95%", "Course completion rate"],
  ["4.9/5", "Average student rating"],
];

function AcademyStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.12 }}
    >
      <section className="bg-[#12141a] py-10 text-white">
        <div className="max-w-290 w-full mx-auto px-8 max-[600px]:px-5 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-0">
          {stats.map(([v, l]) => (
            <div className="px-3 text-center" key={l}>
              <b className="text-4xl font-bold text-white">{v}</b>
              <span className="mt-2 block text-sm text-white/62">{l}</span>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default AcademyStats;

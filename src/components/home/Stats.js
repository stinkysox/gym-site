"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "5000+", label: "Happy Members" },
  { value: "50+", label: "Certified Trainers" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Gym Access" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-neutral-900 border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6"
            >
              <h3 className="text-4xl md:text-6xl font-oswald font-bold text-gold mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 uppercase tracking-widest text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

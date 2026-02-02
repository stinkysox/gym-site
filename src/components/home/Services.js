"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, User } from "lucide-react";

const services = [
  {
    icon: <Dumbbell size={40} />,
    title: "Strength Training",
    description: "Build muscle and increase power with our state-of-the-art free weights and resistance machines."
  },
  {
    icon: <HeartPulse size={40} />,
    title: "Cardio & Fitness",
    description: "Boost your endurance with our advanced treadmills, ellipticals, and HIIT zones."
  },
  {
    icon: <User size={40} />,
    title: "Personal Training",
    description: "Get 1-on-1 coaching from certified experts to smash your fitness goals faster."
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mt-2">
            Premium <span className="text-stroke-gold">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900 border border-white/5 p-8 rounded-sm hover:border-gold/50 transition-colors group cursor-pointer"
            >
              <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-oswald font-bold mb-4 uppercase">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

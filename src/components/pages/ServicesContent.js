"use client";

import { motion } from "framer-motion";
import CTA from "@/components/shared/CTA";
import { Dumbbell, HeartPulse, User, Users, Apple, Trophy } from "lucide-react";

const services = [
  {
    icon: <Dumbbell size={48} />,
    title: "Strength Training",
    description: "Our free weights area is equipped with olympic benches, squat racks, and dumbbells up to 100kg."
  },
  {
    icon: <HeartPulse size={48} />,
    title: "Cardio Zone",
    description: "Treadmills, ellipticals, rowing machines, and stair masters with integrated entertainment screens."
  },
  {
    icon: <Users size={48} />,
    title: "Group Classes",
    description: "Join our energetic classes including Zumba, Yoga, CrossFit, and High-Intensity Interval Training."
  },
  {
    icon: <User size={48} />,
    title: "Personal Training",
    description: "Work one-on-one with certified trainers to create a customized plan tailored to your body and goals."
  },
  {
    icon: <Apple size={48} />,
    title: "Nutrition Guidance",
    description: "Expert advice on diet and supplementation to fuel your workouts and maximize recovery."
  },
  {
    icon: <Trophy size={48} />,
    title: "Competition Prep",
    description: "Specialized coaching for bodybuilding, powerlifting, and athletic competitions."
  },
];

export default function ServicesContent() {
  return (
    <main className="bg-black text-white pt-24">
      
      {/* Header */}
      <section className="py-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">Train With The Best</span>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mt-4 mb-2">
            Our <span className="text-stroke-gold">Services</span>
          </h1>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-neutral-900 border border-white/5 p-10 rounded-sm hover:border-gold transition-all hover:-translate-y-2"
            >
              <div className="text-white mb-6 group-hover:text-gold transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-oswald font-bold uppercase mb-4">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import CTA from "@/components/shared/CTA";
import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const trainers = [
  {
    name: "John Doe",
    role: "Head Coach",
    specialty: "Bodybuilding & Strength",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "Jane Smith",
    role: "Senior Trainer",
    specialty: "CrossFit & HIIT",
    image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=687&auto=format&fit=crop"
  },
  {
    name: "Mike Johnson",
    role: "Personal Trainer",
    specialty: "Functional Training",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop"
  },
  {
    name: "Emily Davis",
    role: "Yoga Instructor",
    specialty: "Mobility & Recovery",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop"
  },
];

export default function TrainersContent() {
  return (
    <main className="bg-black text-white pt-24">
      
      {/* Header */}
      <section className="py-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">Meet The Pros</span>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mt-4 mb-2">
            Expert <span className="text-stroke-gold">Trainers</span>
          </h1>
        </motion.div>
      </section>

      {/* Trainers Grid */}
      <section className="pb-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm"
            >
              <div className="relative h-[400px] w-full bg-neutral-900">
                <Image 
                    src={trainer.image} 
                    alt={trainer.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-oswald font-bold uppercase text-white">{trainer.name}</h3>
                  <p className="text-gold font-medium text-sm mb-2">{trainer.role}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-4">{trainer.specialty}</p>
                  
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <a href="#" className="hover:text-gold transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}

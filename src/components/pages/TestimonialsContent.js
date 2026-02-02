"use client";

import { motion } from "framer-motion";
import CTA from "@/components/shared/CTA";
import { Star } from "lucide-react";

// Extended list of testimonials
const testimonials = [
  {
    name: "Arjun Kumar",
    role: "Member since 2023",
    review: "Golden Fitness changed my life. The trainers are incredible and the community is so supportive.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Pro Athlete",
    review: "Best gym in the city. The equipment is top-tier and the vibe is unmatched. Highly recommend!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Bodybuilder",
    review: "If you are serious about gains, this is the place. No nonsense, just hard work and great results.",
    rating: 5,
  },
  {
    name: "Anjali R.",
    role: "Yoga Enthusiast",
    review: "The group classes are amazing. I've never felt more energetic and flexible.",
    rating: 4,
  },
  {
    name: "Dev K.",
    role: "Weight Loss Journey",
    review: "Lost 20kg in 6 months thanks to the personal training program here. Life changing!",
    rating: 5,
  },
  {
    name: "Lakshmi M.",
    role: "Busy Professional",
    review: "Love that it's open late. Perfect for my schedule. Clean, safe, and professional.",
    rating: 5,
  },
];

export default function TestimonialsContent() {
  return (
    <main className="bg-black text-white pt-24">
      
      {/* Header */}
      <section className="py-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">Member Reviews</span>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mt-4 mb-2">
            Success <span className="text-stroke-gold">Stories</span>
          </h1>
        </motion.div>
      </section>

      {/* Reviews Grid */}
      <section className="pb-24 container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 p-8 rounded-sm border border-white/5 hover:border-gold/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={`${i < t.rating ? "fill-gold text-gold" : "text-gray-600"}`} />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.review}"</p>
              <div>
                <h4 className="text-lg font-oswald font-bold uppercase">{t.name}</h4>
                <p className="text-sm text-gold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}

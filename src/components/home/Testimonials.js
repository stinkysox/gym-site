"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">Success Stories</span>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mt-2">
            What Members <span className="text-stroke-gold">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 p-8 rounded-sm border border-white/5"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
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
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import CTA from "@/components/shared/CTA";

const history = [
  { year: "2010", title: "The Beginning", description: "Golden Fitness opened its first small studio in Vijayawada with a focus on personal training." },
  { year: "2015", title: "Expansion", description: "Moved to a larger facility and introduced group classes and advanced cardio equipment." },
  { year: "2020", title: "Premium Facelift", description: "Rebranded to Golden Fitness with a focus on luxury, high-performance training environments." },
  { year: "2024", title: "State of the Art", description: "Launched our flagship center with sauna, steam bath, and smart fitness technology." },
];

export default function AboutContent() {
  return (
    <main className="bg-black text-white pt-24">
      
      {/* Header */}
      <section className="py-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">Who We Are</span>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mt-4 mb-8">
            Our <span className="text-stroke-gold">Legacy</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto px-6 font-light">
            We are more than just a gym. We are a community dedicated to physical excellence, mental toughness, and the pursuit of a golden lifestyle.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12">
          <div className="flex-1 p-8 border-l-4 border-gold bg-black/20">
            <h3 className="text-3xl font-oswald font-bold uppercase mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To empower individuals to reach their peak potential through world-class coaching, state-of-the-art facilities, and a supportive environment that fosters growth and discipline.
            </p>
          </div>
          <div className="flex-1 p-8 border-l-4 border-white bg-black/20">
            <h3 className="text-3xl font-oswald font-bold uppercase mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the premier fitness destination in India, known for transforming lives and setting the gold standard for health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-oswald font-bold uppercase text-center mb-16">
            Journey to <span className="text-gold">Gold</span>
          </h2>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 md:-translate-x-[1px] space-y-12 md:space-y-0">
            {history.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative pl-12 md:pl-0 md:flex ${index % 2 === 0 ? "md:justify-end md:pr-12 md:text-right" : "md:justify-start md:pl-12"}`}
              >
                {/* Dot */}
                <div className="absolute top-0 left-[-5px] w-3 h-3 bg-gold rounded-full md:left-1/2 md:-translate-x-1.5 shadow-[0_0_10px_#D4AF37]" />
                
                <div className="md:w-1/2">
                  <span className="text-5xl font-oswald font-bold text-white/5 absolute -top-4 -z-10 left-8 md:left-auto md:right-auto md:mx-0">
                    {item.year}
                  </span>
                  <div className="bg-neutral-900 border border-white/5 p-6 rounded-sm relative z-10 hover:border-gold/30 transition-colors">
                    <span className="text-gold font-bold text-xl block mb-2">{item.year}</span>
                    <h3 className="text-2xl font-oswald font-bold uppercase mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

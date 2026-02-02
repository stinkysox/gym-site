"use client";

import { motion } from "framer-motion";
import Membership from "@/components/home/Membership";
import CTA from "@/components/shared/CTA";
import { CheckCircle } from "lucide-react";

export default function MembershipContent() {
  return (
    <main className="bg-black text-white pt-24">
      
      {/* Header */}
      <section className="py-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">Invest In Yourself</span>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mt-4 mb-2">
            Membership <span className="text-stroke-gold">Plans</span>
          </h1>
        </motion.div>
      </section>

      {/* Reuse Membership Component */}
      <div className="-mt-12">
        <Membership />
      </div>

      {/* Additional Info */}
      <section className="py-20 bg-neutral-900 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
           <h2 className="text-3xl font-oswald font-bold uppercase mb-8 text-center">Why Join Golden Fitness?</h2>
           <div className="grid md:grid-cols-2 gap-6">
              {[
                "No long-term contracts required",
                "Freeze your membership anytime",
                "Access to all Golden Fitness locations",
                "Free fitness assessment on joining",
                "Hygiene and safety is our top priority",
                "Community events and challenges"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="text-gold shrink-0" size={20} />
                  <span>{item}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

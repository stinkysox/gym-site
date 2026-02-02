"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "2000",
    features: ["Gym Access", "Locker Room", "Free WiFi"],
    recommended: false,
  },
  {
    name: "Standard",
    price: "4000",
    features: ["All Basic Features", "Group Classes", "1 Personal Training Session"],
    recommended: true,
  },
  {
    name: "Premium",
    price: "7500",
    features: ["All Standard Features", "Unlimited Personal Training", "Sauna Access", "Nutrition Plan"],
    recommended: false,
  },
];

export default function Membership() {
  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">Join The Club</span>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mt-2">
            Membership <span className="text-gold">Plans</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-sm border ${
                plan.recommended ? "border-gold bg-black shadow-lg shadow-gold/10 scale-105" : "border-white/10 bg-neutral-900/50"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-gold text-black text-xs font-bold px-3 py-1 uppercase translate-x-[1px] -translate-y-[1px]">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-oswald font-bold uppercase mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold font-oswald mb-6 text-gold">
                ₹{plan.price} <span className="text-sm text-gray-400 font-sans font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300 text-sm">
                    <Check size={16} className="text-gold mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/contact?plan=${plan.name}`} className="block">
                <Button variant={plan.recommended ? "primary" : "outline"} className="w-full">
                  Choose Plan
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="py-24 bg-neutral-900 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-sm overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop')" }}
              />
               <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-transparent border-2 border-gold -z-10 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-transparent border-2 border-white/20 -z-10 hidden md:block" />
          </motion.div>

          {/* Text */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="w-full lg:w-1/2"
          >
            <span className="text-gold uppercase tracking-widest font-semibold text-sm">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mt-2 mb-6 text-white">
              We Are <span className="text-gold">Golden Fitness</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              Founded on the belief that fitness is the ultimate path to personal power, Golden Fitness provides a sanctuary for those ready to transform. We combine cutting-edge equipment with a motivating atmosphere designed to push you beyond your limits.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              Whether you are a beginner or a pro athlete, our community supports your journey to greatness.
            </p>
            <Link href="/about">
              <Button variant="outline">Learn More</Button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

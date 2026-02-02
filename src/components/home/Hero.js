"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')", // Gym image
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="block text-gold font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Welcome to Golden Fitness
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold uppercase leading-tight mb-6">
            Forge Your <br /> <span className="text-gold">Golden</span> Legacy
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Experience premium facilities, expert coaching, and a community dedicated to excellence. Your journey starts here.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/membership">
              <Button variant="primary" className="w-full md:w-auto text-lg px-8 py-4">Join Now</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full md:w-auto text-lg px-8 py-4">Book a Free Trial</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

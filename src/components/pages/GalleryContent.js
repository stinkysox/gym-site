"use client";

import { motion } from "framer-motion";
import CTA from "@/components/shared/CTA";

const images = [
   "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1374&auto=format&fit=crop",
   "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop",
];

export default function GalleryContent() {
  return (
    <main className="bg-black text-white pt-24">
      
      {/* Header */}
      <section className="py-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">Inside The Gym</span>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mt-4 mb-2">
            Our <span className="text-stroke-gold">Gallery</span>
          </h1>
        </motion.div>
      </section>

      {/* Gallery Form */}
      <section className="pb-24 container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
           {images.map((src, index) => (
             <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="break-inside-avoid relative group overflow-hidden rounded-sm"
             >
               <img src={src} alt="Gym" className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <span className="text-gold font-oswald text-xl uppercase tracking-widest border-b-2 border-gold pb-1">Golden Fitness</span>
               </div>
             </motion.div>
           ))}
        </div>
      </section>
      
      <CTA />
    </main>
  );
}

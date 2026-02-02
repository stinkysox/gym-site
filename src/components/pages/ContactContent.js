"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (plan) {
      setMessage(`I am interested in the ${plan} membership plan. Please send me more details.`);
    }
  }, [plan]);

  return (
    <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-neutral-900 p-8 md:p-12 border border-white/5"
    >
        <h2 className="text-3xl font-oswald font-bold uppercase mb-2">Send Message</h2>
        <p className="text-gray-400 mb-8 text-sm">Have a question? We'll get back to you within 24 hours.</p>

        <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
            <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Name</label>
                <input type="text" className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Phone</label>
                <input type="tel" className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="+91 999 999 9999" />
            </div>
            </div>
            
            <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email</label>
            <input type="email" className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:border-gold outline-none transition-colors" placeholder="john@example.com" />
            </div>

            <div>
            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Message</label>
            <textarea 
                rows={4} 
                className="w-full bg-black border border-white/10 text-white px-4 py-3 focus:border-gold outline-none transition-colors" 
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            </div>

            <Button type="submit" variant="primary" className="w-full py-4">Send Message</Button>
        </form>
    </motion.div>
  );
}

export default function ContactContent() {
  return (
    <Suspense fallback={<div className="bg-black min-h-screen pt-24 text-white text-center">Loading...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}

function ContactPageContent() {
  return (
    <main className="bg-black text-white pt-24">
      
      {/* Header */}
      <section className="py-20 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-widest font-semibold text-sm">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-oswald font-bold uppercase mt-4 mb-2">
            Contact <span className="text-stroke-gold">Us</span>
          </h1>
        </motion.div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-oswald font-bold uppercase mb-8">Visit Our Gym</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase mb-1">Address</h3>
                  <p className="text-gray-400">123 Fitness Main Rd,<br />Benz Circle, Vijayawada,<br />Andhra Pradesh 520010</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase mb-1">Phone</h3>
                  <p className="text-gray-400">+91 987 654 3210</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase mb-1">Email</h3>
                  <p className="text-gray-400">info@goldenfitness.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-neutral-900 flex items-center justify-center text-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold uppercase mb-1">Hours</h3>
                  <p className="text-gray-400">Mon - Sat: 5:00 AM - 10:00 PM<br />Sun: 6:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Embed - Placeholder for Vijayawada */}
            <div className="mt-12 h-64 w-full bg-neutral-900 rounded-sm overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15263.123456789!2d80.648015!3d16.506174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e4e6f1234567%3A0x1234567890abcdef!2sBenz%20Circle%2C%20Vijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                className="grayscale opacity-70 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <ContactForm />

        </div>
      </section>
    </main>
  );
}

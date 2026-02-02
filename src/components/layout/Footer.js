import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-oswald font-bold text-white uppercase tracking-widest mb-4">
            Golden<span className="text-gold">Fitness</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Premium fitness center dedicated to helping you achieve your goals with top-tier equipment and expert training.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-oswald font-bold text-gold mb-6 uppercase">Quick Links</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li><Link href="/about" className="hover:text-gold transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-gold transition">Our Services</Link></li>
            <li><Link href="/trainers" className="hover:text-gold transition">Expert Trainers</Link></li>
            <li><Link href="/membership" className="hover:text-gold transition">Membership Plans</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-oswald font-bold text-gold mb-6 uppercase">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="text-gold" size={18} />
              <span>Vijayawada, Andhra Pradesh</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-gold" size={18} />
              <span>+91 987 654 3210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-gold" size={18} />
              <span>info@goldenfitness.com</span>
            </li>
          </ul>
        </div>

        {/* Hours & Social */}
        <div>
          <h3 className="text-xl font-oswald font-bold text-gold mb-6 uppercase">Opening Hours</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Mon - Sat: 5:00 AM - 10:00 PM</li>
            <li>Sunday: 6:00 AM - 1:00 PM</li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gold hover:text-black transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gold hover:text-black transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-gold hover:text-black transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} Golden Fitness. All Rights Reserved.
      </div>
    </footer>
  );
}

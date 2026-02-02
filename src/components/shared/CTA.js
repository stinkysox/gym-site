"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-gold text-black text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-6">
          Ready to Transform Your Life?
        </h2>
        <p className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto">
          Join Golden Fitness today and get access to premier equipment, expert trainers, and a supportive community.
        </p>
        <Link href="/membership">
          <Button variant="black" className="bg-black text-gold hover:bg-white hover:text-black px-10 py-4 text-xl">
            Start Your Journey
          </Button>
        </Link>
      </div>
    </section>
  );
}

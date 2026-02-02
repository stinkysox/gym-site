"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function BMICalculator() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);

      if (bmiValue < 18.5) setMessage("Underweight");
      else if (bmiValue >= 18.5 && bmiValue < 25) setMessage("Normal weight");
      else if (bmiValue >= 25 && bmiValue < 30) setMessage("Overweight");
      else setMessage("Obese");
    }
  };

  return (
    <section className="py-24 bg-neutral-900 text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-widest font-semibold text-sm">Fitness Tools</span>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mt-2 mb-6">
              Calculate Your <span className="text-stroke-gold">BMI</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Body Mass Index (BMI) is a simple tool that estimates body fat based on your height and weight. Use our calculator to check if you're in a healthy range.
            </p>
            
            <div className="bg-black p-8 border border-white/10 rounded-sm">
              <form onSubmit={calculateBMI} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gold mb-2 uppercase font-semibold">Height (cm)</label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder="e.g. 175"
                      className="w-full bg-neutral-900 border border-white/20 p-3 text-white focus:border-gold outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gold mb-2 uppercase font-semibold">Weight (kg)</label>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder="e.g. 70"
                      className="w-full bg-neutral-900 border border-white/20 p-3 text-white focus:border-gold outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
                <Button variant="primary" className="w-full">
                  Calculate Now
                </Button>
              </form>

              {bmi && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-4 bg-neutral-900 border border-gold/30 text-center"
                >
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Your BMI Is</p>
                  <div className="text-4xl font-oswald font-bold text-gold mb-2">{bmi}</div>
                  <p className="text-white font-medium">Result: <span className="text-gold">{message}</span></p>
                </motion.div>
              )}
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="relative hidden md:block"
          >
             {/* Abstract visual or image could go here, for now using a table */}
            <div className="bg-neutral-800/50 p-8 border border-white/5">
                <h3 className="text-xl font-oswald font-bold uppercase mb-6 text-center">BMI Categories</h3>
                <div className="space-y-4">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gray-400">Underweight</span>
                        <span className="text-white text-right">&lt; 18.5</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gold font-semibold">Normal weight</span>
                        <span className="text-white text-right">18.5 - 24.9</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gray-400">Overweight</span>
                        <span className="text-white text-right">25 - 29.9</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                        <span className="text-gray-400">Obesity</span>
                        <span className="text-white text-right">30 or greater</span>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-gold text-black hover:bg-gold-hover",
  outline: "border-2 border-gold text-gold hover:bg-gold hover:text-black",
  ghost: "text-white hover:text-gold",
  white: "bg-white text-black hover:bg-gray-200",
};

export default function Button({
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 font-oswald font-bold uppercase tracking-wide transition-all duration-300 rounded-sm",
        variants[variant],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon?: LucideIcon;
  emoji?: string;
  title: string;
  children: React.ReactNode;
  variant?: "default" | "warning" | "highlight";
  delay?: number;
}

export function InfoCard({ 
  icon: Icon, 
  emoji, 
  title, 
  children, 
  variant = "default",
  delay = 0 
}: InfoCardProps) {
  const variantStyles = {
    default: "bg-white border-l-4 border-[#D4A574]",
    warning: "bg-amber-50 border-l-4 border-amber-400",
    highlight: "bg-[#1a1a1a] text-white border-l-4 border-[#D4A574]"
  };

  const titleStyles = {
    default: "text-[#1a1a1a]",
    warning: "text-amber-800",
    highlight: "text-white"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className={`rounded-lg p-5 shadow-sm ${variantStyles[variant]}`}
    >
      <div className="flex items-center gap-3 mb-3">
        {Icon && (
          <div className={`p-2 rounded-lg ${variant === "highlight" ? "bg-[#D4A574]" : "bg-[#1a1a1a]"}`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
        )}
        {emoji && <span className="text-2xl">{emoji}</span>}
        <h3 className={`font-semibold text-lg ${titleStyles[variant]}`}>{title}</h3>
      </div>
      <div className={variant === "highlight" ? "text-white/90" : "text-gray-700"}>
        {children}
      </div>
    </motion.div>
  );
}

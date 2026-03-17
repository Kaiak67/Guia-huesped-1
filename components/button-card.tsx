"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface ButtonCardProps {
  title: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

export function ButtonCard({ title, icon: Icon, href, delay = 0 }: ButtonCardProps) {
  const router = useRouter();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      onClick={() => router.push(href)}
      className="button-card group flex items-center gap-4 p-5 bg-white rounded-xl shadow-md w-full text-left"
    >
      <div className="p-3 bg-[#1a1a1a] rounded-lg group-hover:bg-[#D4A574] transition-colors duration-300 flex-shrink-0">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-base md:text-lg font-medium text-[#1a1a1a]">
        {title}
      </span>
    </motion.button>
  );
}

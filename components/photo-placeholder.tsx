"use client";

import { Camera } from "lucide-react";
import { motion } from "framer-motion";

interface PhotoPlaceholderProps {
  description: string;
  aspectRatio?: string;
  delay?: number;
}

export function PhotoPlaceholder({ 
  description, 
  aspectRatio = "aspect-video",
  delay = 0 
}: PhotoPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className={`${aspectRatio} bg-gray-100 border-2 border-dashed border-[#D4A574] rounded-lg flex flex-col items-center justify-center p-6 text-center`}
    >
      <Camera className="w-12 h-12 text-[#D4A574] mb-3" />
      <p className="text-sm text-gray-500 max-w-xs">
        <span className="font-medium text-[#1a1a1a]">Foto:</span> {description}
      </p>
    </motion.div>
  );
}

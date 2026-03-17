"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { motion } from "framer-motion";
import { InfoCard } from "@/components/info-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Clock, Key, MapPin, Lightbulb } from "lucide-react";

export default function CheckInOutPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.checkInOut ?? content.es.checkInOut;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("checkInOut")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Times */}
        <div className="grid grid-cols-2 gap-4">
          <InfoCard icon={Clock} title="Check-in" variant="highlight" delay={0.1}>
            <p className="text-3xl font-bold text-[#D4A574]">{data?.checkInTime ?? "2:00 PM"}</p>
          </InfoCard>
          <InfoCard icon={Clock} title="Check-out" variant="highlight" delay={0.2}>
            <p className="text-3xl font-bold text-[#D4A574]">{data?.checkOutTime ?? "10:00 AM"}</p>
          </InfoCard>
        </div>

        {/* Smart Lock */}
        <InfoCard icon={Key} title={language === "es" ? "Cerradura Inteligente" : "Smart Lock"} delay={0.3}>
          <p>{data?.smartLock ?? ""}</p>
        </InfoCard>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img
            src={language === "es" ? "/images/cerradura_es.jpg" : "/images/cerradura_en.jpg"}
            alt={language === "es" 
              ? "Instrucciones de uso de la cerradura digital Yale" 
              : "Digital lock usage instructions - Yale"
            }
            className="w-full h-auto"
          />
        </motion.div>

        {/* Location */}
        <InfoCard icon={MapPin} title={language === "es" ? "Ubicación" : "Location"} delay={0.4}>
          <p>{data?.location ?? ""}</p>
        </InfoCard>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img
            src="/images/entrada_cabana.jpg"
            alt={language === "es" ? "Entrada lateral de la cabaña" : "Cabin side entrance"}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Tip */}
        <InfoCard emoji="💡" title="Tip" variant="warning" delay={0.5}>
          <p>{data?.tip ?? ""}</p>
        </InfoCard>
      </div>
    </main>
  );
}

"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Thermometer, Flame, Sun, Moon, DoorOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function HeatingPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.heating ?? content.es.heating;
  const temperatures = data?.temperatures ?? [];

  const tempIcons = [Sun, Moon, DoorOpen];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("heating")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Thermostat Info */}
        <InfoCard icon={Thermometer} title={language === "es" ? "Termostato" : "Thermostat"} delay={0.1}>
          <p>{data?.thermostat ?? ""}</p>
        </InfoCard>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img src="/images/termostato.jpg" alt={language === "es" ? "Termostato en la cocina" : "Thermostat in the kitchen"} className="w-full h-auto" />
        </motion.div>

        {/* Temperature Recommendations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {temperatures.map((temp: { situation: string; temp: string }, index: number) => {
            const Icon = tempIcons[index] ?? Sun;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-[#1a1a1a] rounded-xl p-5 text-center"
              >
                <Icon className="w-8 h-8 text-[#D4A574] mx-auto mb-3" />
                <p className="text-white/60 text-sm mb-2">{temp?.situation ?? ""}</p>
                <p className="text-[#D4A574] text-2xl font-bold">{temp?.temp ?? ""}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Gas Stove */}
        <InfoCard icon={Flame} title={language === "es" ? "Estufa a Gas" : "Gas Stove"} delay={0.5}>
          <p>{data?.stove ?? ""}</p>
        </InfoCard>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img src="/images/encendedor_estufa.jpg" alt={language === "es" ? "Chispero para encender la estufa" : "Lighter to light the stove"} className="w-full h-auto" />
        </motion.div>
      </div>
    </main>
  );
}

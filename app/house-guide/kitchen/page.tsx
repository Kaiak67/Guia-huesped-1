"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { ChefHat, Trash2, SprayCan, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function KitchenPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.kitchen ?? content.es.kitchen;
  const items = data?.items ?? [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("kitchen")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Appliances List */}
        <InfoCard icon={ChefHat} title={language === "es" ? "Electrodomésticos Disponibles" : "Available Appliances"} delay={0.1}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {items.map((item: string, index: number) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-[#D4A574] rounded-full" />
                {item}
              </motion.li>
            ))}
          </ul>
        </InfoCard>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img src="/images/vista_cocina.jpg" alt={language === "es" ? "Vista de la cocina" : "Kitchen view"} className="w-full h-auto" />
        </motion.div>

        {/* Trash Location */}
        <InfoCard icon={Trash2} title={language === "es" ? "Basurero y Limpieza" : "Trash & Cleaning"} delay={0.4}>
          <p className="mb-2">{data?.trash ?? ""}</p>
          <p className="text-amber-600 font-medium">{data?.cleaning ?? ""}</p>
        </InfoCard>

        {/* Emergency Kits */}
        <InfoCard icon={Heart} title={language === "es" ? "Kits de Emergencia" : "Emergency Kits"} variant="warning" delay={0.5}>
          <p>{data?.emergencyKits ?? ""}</p>
        </InfoCard>
      </div>
    </main>
  );
}

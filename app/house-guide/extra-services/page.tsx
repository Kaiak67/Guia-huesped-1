"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { Gift, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ExtraServicesPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.extraServices ?? content.es.extraServices;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("extraServices")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a1a1a] rounded-2xl p-8 text-center"
        >
          <div className="inline-flex p-4 bg-[#D4A574] rounded-full mb-6">
            <Clock className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-white text-2xl font-medium mb-4">
            {language === "es" ? "Próximamente" : "Coming Soon"}
          </h2>
          <p className="text-white/80">{data?.message ?? ""}</p>
        </motion.div>

        {/* Placeholder for future services */}
        <div className="text-center text-gray-500 py-8">
          <Gift className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <p>
            {language === "es" 
              ? "Los servicios adicionales se mostrarán aquí cuando estén disponibles."
              : "Additional services will be displayed here when available."
            }
          </p>
        </div>
      </div>
    </main>
  );
}

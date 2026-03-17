"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Trash2, Recycle, Truck, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function TrashPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.trash ?? content.es.trash;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("trash")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <InfoCard icon={Trash2} title={language === "es" ? "Al Salir" : "When Leaving"} delay={0.1}>
          <p>{data?.departure ?? ""}</p>
        </InfoCard>

        <InfoCard icon={Recycle} title={language === "es" ? "Reciclaje" : "Recycling"} delay={0.2}>
          <p>{data?.glass ?? ""}</p>
        </InfoCard>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img src="/images/basurero.jpg" alt={language === "es" ? "Basurero bajo el lavaplatos" : "Trash can under the sink"} className="w-full aspect-video object-cover" />
        </motion.div>

        <InfoCard icon={Truck} title={language === "es" ? "Recolección de Basura" : "Garbage Collection"} delay={0.3}>
          <p className="mb-2">{data?.collection ?? ""}</p>
          <p className="text-[#D4A574] font-medium">{data?.tip ?? ""}</p>
        </InfoCard>

        <InfoCard icon={AlertTriangle} title={language === "es" ? "¡Importante!" : "Important!"} variant="warning" delay={0.4}>
          <p className="font-medium">{data?.warning ?? ""}</p>
        </InfoCard>
      </div>
    </main>
  );
}

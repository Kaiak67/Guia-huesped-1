"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { Tv } from "lucide-react";
import { motion } from "framer-motion";

export default function EntertainmentPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.entertainment ?? content.es.entertainment;
  const services = data?.services ?? [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("entertainment")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <InfoCard icon={Tv} title={language === "es" ? "Smart TV" : "Smart TV"} delay={0.1}>
          <p>{data?.tv ?? ""}</p>
        </InfoCard>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {services.map((service: { name: string; icon: string; desc?: string; logo?: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-[#1a1a1a] rounded-xl p-5 text-center flex flex-col items-center justify-center"
            >
              {service?.logo ? (
                <img src={service.logo} alt={service?.name ?? ""} className="h-10 w-auto" />
              ) : (
                <span className="text-4xl block">{service?.icon ?? "📺"}</span>
              )}
              {service?.desc && (
                <p className="text-white/60 text-xs mt-2">{service.desc}</p>
              )}
            </motion.div>
          ))}
        </div>

        <InfoCard emoji="💡" title="Tip" variant="warning" delay={0.6}>
          <p>{data?.tip ?? ""}</p>
        </InfoCard>
      </div>
    </main>
  );
}

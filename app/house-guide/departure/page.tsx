"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { LogOut, CheckSquare, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function DeparturePage() {
  const { language, t } = useLanguage();
  const data = content[language]?.departure ?? content.es.departure;
  const instructions = data?.instructions ?? [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("departure")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Checklist */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-[#D4A574]" />
            {language === "es" ? "Lista de Verificación" : "Checklist"}
          </h3>
          {instructions.map((item: { task: string; desc: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#D4A574]"
            >
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 border-2 border-[#D4A574] rounded flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1a1a1a]">{item?.task ?? ""}</p>
                  <p className="text-gray-600 text-sm mt-1">{item?.desc ?? ""}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message */}
        <InfoCard icon={MessageSquare} title={language === "es" ? "Un Mensaje de tus Anfitriones" : "A Message from Your Hosts"} variant="highlight" delay={0.7}>
          <p>{data?.message ?? ""}</p>
        </InfoCard>
      </div>
    </main>
  );
}

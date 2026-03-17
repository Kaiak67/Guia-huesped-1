"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { Phone, Hospital, AlertTriangle, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function EmergencyPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.emergency ?? content.es.emergency;
  const hosts = data?.hosts ?? [];
  const hospitals = data?.hospitals ?? [];
  const emergencyNumbers = data?.emergencyNumbers ?? [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("emergency")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Host Contacts */}
        <InfoCard icon={Users} title={language === "es" ? "Contacto de Anfitriones" : "Host Contacts"} variant="highlight" delay={0.1}>
          <div className="space-y-3">
            {hosts.map((host: { name: string; phone: string }, index: number) => (
              <div key={index} className="flex items-center justify-between">
                <span>{host?.name ?? ""}</span>
                <a 
                  href={`tel:${host?.phone ?? ""}`} 
                  className="bg-[#D4A574] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#c49564] transition-colors"
                >
                  {host?.phone ?? ""}
                </a>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Emergency Numbers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {emergencyNumbers.map((item: { service: string; number: string }, index: number) => (
            <motion.a
              key={index}
              href={`tel:${item?.number ?? ""}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="bg-red-600 text-white rounded-xl p-4 text-center hover:bg-red-700 transition-colors"
            >
              <p className="text-3xl font-bold">{item?.number ?? ""}</p>
              <p className="text-sm mt-1 opacity-90">{item?.service ?? ""}</p>
            </motion.a>
          ))}
        </div>

        {/* Hospitals */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#1a1a1a] flex items-center gap-2">
            <Hospital className="w-5 h-5 text-[#D4A574]" />
            {language === "es" ? "Hospitales Cercanos" : "Nearby Hospitals"}
          </h3>
          {hospitals.map((hospital: { type: string; name: string; address: string; note?: string; mapUrl?: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#D4A574]"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="text-xs text-[#D4A574] font-medium uppercase">{hospital?.type ?? ""}</p>
                  <p className="font-semibold text-[#1a1a1a] mt-1">{hospital?.name ?? ""}</p>
                  <p className="text-gray-600 text-sm mt-1">{hospital?.address ?? ""}</p>
                  {hospital?.note && (
                    <p className="text-amber-600 text-sm mt-2 font-medium">{hospital.note}</p>
                  )}
                </div>
                {hospital?.mapUrl && (
                  <a 
                    href={hospital.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#D4A574] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#c49564] transition-colors flex items-center gap-1 ml-4"
                  >
                    📍 {language === "es" ? "Ubicación" : "Location"}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

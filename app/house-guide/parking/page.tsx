"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Car, CircleDollarSign, MapPin, Shield } from "lucide-react";

export default function ParkingPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.parking ?? content.es.parking;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("parking")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <InfoCard icon={CircleDollarSign} title={language === "es" ? "Gratuito" : "Free"} variant="highlight" delay={0.1}>
          <p className="text-xl">{data?.free ?? ""}</p>
        </InfoCard>

        <InfoCard icon={MapPin} title={language === "es" ? "Ubicación Recomendada" : "Recommended Location"} delay={0.2}>
          <p>{data?.recommended ?? ""}</p>
        </InfoCard>

        <InfoCard icon={Shield} title={language === "es" ? "Seguridad" : "Safety"} delay={0.3}>
          <p>{data?.alternative ?? ""}</p>
        </InfoCard>
      </div>
    </main>
  );
}

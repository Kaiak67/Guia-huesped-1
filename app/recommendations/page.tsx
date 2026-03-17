"use client";

import { useLanguage } from "@/lib/language-context";
import { Header } from "@/components/header";
import { ButtonCard } from "@/components/button-card";
import { UtensilsCrossed, Landmark } from "lucide-react";
import { motion } from "framer-motion";

export default function RecommendationsPage() {
  const { language, t } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={t("localRecommendations")} backPath="/" sidebarType="recommendations" />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a1a1a] rounded-2xl p-8 mb-8 text-center"
        >
          <h2 className="text-[#D4A574] text-2xl font-medium mb-3">
            Punta Arenas
          </h2>
          <p className="text-white/80">
            {language === "es" 
              ? "Descubre los mejores lugares para comer y visitar en la ciudad más austral de Chile continental."
              : "Discover the best places to eat and visit in the southernmost city of continental Chile."
            }
          </p>
        </motion.div>

        {/* Navigation Cards */}
        <div className="space-y-4">
          <ButtonCard
            title={t("restaurants")}
            icon={UtensilsCrossed}
            href="/recommendations/restaurants"
            delay={0.1}
          />
          <ButtonCard
            title={t("touristPlaces")}
            icon={Landmark}
            href="/recommendations/places"
            delay={0.2}
          />
        </div>
      </div>
    </main>
  );
}

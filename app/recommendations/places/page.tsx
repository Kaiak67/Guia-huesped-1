"use client";

import { useLanguage } from "@/lib/language-context";
import { touristPlaces } from "@/lib/content";
import { Header } from "@/components/header";
import { MapPin, Clock, DollarSign, Lightbulb, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function PlacesPage() {
  const { language, t } = useLanguage();
  const data = touristPlaces[language] ?? touristPlaces.es;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={t("touristPlaces")} backPath="/recommendations" sidebarType="recommendations" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {data.map((place, index) => (
          <motion.div
            key={place?.id ?? index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-video bg-gray-200">
              <img
                src={place?.image ?? "/placeholder.jpg"}
                alt={place?.name ?? "Place"}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a]">{place?.name ?? ""}</h3>
                  <p className="text-[#D4A574] text-sm font-medium">{place?.type ?? ""}</p>
                </div>
                <div className="flex items-center gap-1 text-[#1a1a1a] bg-gray-100 px-3 py-1 rounded-full">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm font-medium">{place?.entryFee ?? t("free")}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{place?.description ?? ""}</p>
              
              {/* Highlight */}
              {place?.highlight && (
                <div className="bg-[#1a1a1a] rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-[#D4A574] flex-shrink-0 mt-0.5" />
                    <p className="text-white text-sm">{place.highlight}</p>
                  </div>
                </div>
              )}
              
              {/* Details */}
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#D4A574] flex-shrink-0" />
                  <span>{place?.address ?? ""}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 text-[#D4A574] flex-shrink-0" />
                  <span>{place?.hours ?? ""}</span>
                </div>
              </div>
              
              {/* Tip */}
              {place?.tip && (
                <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 text-sm">{place.tip}</p>
                  </div>
                </div>
              )}
              
              {/* Actions */}
              {place?.mapUrl && (
                <a
                  href={place.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#333] transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  📍 {language === "es" ? "Ubicación" : "Location"}
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

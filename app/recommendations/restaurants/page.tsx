"use client";

import { useLanguage } from "@/lib/language-context";
import { restaurants } from "@/lib/content";
import { Header } from "@/components/header";
import { MapPin, Phone, Clock, DollarSign, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function RestaurantsPage() {
  const { language, t } = useLanguage();
  const data = restaurants[language] ?? restaurants.es;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={t("restaurants")} backPath="/recommendations" sidebarType="recommendations" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {data.map((restaurant, index) => (
          <motion.div
            key={restaurant?.id ?? index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white rounded-xl shadow-md overflow-hidden ${
              restaurant?.honorable ? "border-2 border-[#D4A574]" : ""
            }`}
          >
            {restaurant?.honorable && (
              <div className="bg-[#D4A574] text-white px-4 py-2 text-center">
                <span className="flex items-center justify-center gap-2">
                  <Star className="w-4 h-4" />
                  {t("honorableMention")}
                </span>
              </div>
            )}
            
            {/* Image */}
            <div className="relative aspect-video bg-gray-200">
              <img
                src={restaurant?.image ?? "/placeholder.jpg"}
                alt={restaurant?.name ?? "Restaurant"}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-[#1a1a1a]">{restaurant?.name ?? ""}</h3>
                  <p className="text-[#D4A574] text-sm font-medium">{restaurant?.type ?? ""}</p>
                </div>
                <div className="flex items-center gap-1 text-[#1a1a1a] bg-gray-100 px-3 py-1 rounded-full">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm font-medium">{restaurant?.priceRange ?? ""}</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">{restaurant?.description ?? ""}</p>
              
              {/* Details */}
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-[#D4A574] flex-shrink-0" />
                  <span>{restaurant?.address ?? ""}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 text-[#D4A574] flex-shrink-0" />
                  <span>{restaurant?.phone ?? ""}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 text-[#D4A574] flex-shrink-0" />
                  <span>{restaurant?.hours ?? ""}</span>
                </div>
              </div>
              
              {/* Recommendation */}
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 italic">
                  "👍 {restaurant?.recommendation ?? ""}"
                </p>
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                {restaurant?.mapUrl && (
                  <a
                    href={restaurant.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#333] transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    📍 {language === "es" ? "Ubicación" : "Location"}
                  </a>
                )}
                {restaurant?.link && (
                  <a
                    href={restaurant.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#D4A574] text-white rounded-lg hover:bg-[#c49564] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {t("menu")}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

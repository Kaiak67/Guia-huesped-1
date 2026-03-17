"use client";

import { useLanguage } from "@/lib/language-context";
import { restaurants, touristPlaces } from "@/lib/content";
import { Header } from "@/components/header";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MapComponent = dynamic(
  () => import("@/components/map-component"),
  { 
    ssr: false,
    loading: () => (
      <div className="h-[calc(100vh-120px)] bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#D4A574] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading map...</p>
        </div>
      </div>
    )
  }
);

function MapContent() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();
  const focusId = searchParams?.get("focus");
  const focusType = searchParams?.get("type");

  const restaurantData = restaurants[language] ?? restaurants.es;
  const placesData = touristPlaces[language] ?? touristPlaces.es;

  // Combine all locations
  const allLocations = [
    ...(restaurantData?.map(r => ({
      id: r?.id ?? 0,
      name: r?.name ?? "",
      type: "restaurant" as const,
      category: r?.type ?? "",
      coords: r?.coords ?? { lat: -53.16, lng: -70.91 }
    })) ?? []),
    ...(placesData?.map(p => ({
      id: p?.id ?? 0,
      name: p?.name ?? "",
      type: "place" as const,
      category: p?.type ?? "",
      coords: p?.coords ?? { lat: -53.16, lng: -70.91 }
    })) ?? [])
  ];

  // Find focused location
  const focusedLocation = focusId && focusType
    ? allLocations.find(loc => loc?.id === parseInt(focusId) && loc?.type === focusType)
    : null;

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={t("location")} backPath="/recommendations" sidebarType="recommendations" />
      
      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#D4A574]" />
            <span className="text-sm text-gray-600">{t("restaurants")}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-[#1a1a1a]" />
            <span className="text-sm text-gray-600">{t("touristPlaces")}</span>
          </div>
        </div>

        <MapComponent 
          locations={allLocations}
          focusedLocation={focusedLocation ?? undefined}
          language={language}
        />
      </div>
    </main>
  );
}

export default function MapPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#D4A574] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <MapContent />
    </Suspense>
  );
}

"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    welcome: "Bienvenidos",
    selectLanguage: "Selecciona tu idioma",
    houseGuide: "Guía de la Casa",
    localRecommendations: "Recomendaciones Locales",
    checkInOut: "Check-in / Check-out",
    wifi: "WiFi",
    houseRules: "Reglas de la Casa",
    heating: "Calefacción y Clima",
    entertainment: "Entretenimiento",
    kitchen: "Cocina y Electrodomésticos",
    nespresso: "Máquina de Café",
    washingMachine: "Lavadora",
    trash: "Basura y Reciclaje",
    emergency: "Emergencias",
    parking: "Estacionamiento",
    departure: "Instrucciones de Salida",
    hosts: "Conoce a tus Anfitriones",
    extraServices: "Servicios Adicionales",
    restaurants: "Restaurantes y Bares",
    touristPlaces: "Lugares Turísticos",
    location: "Ubicación",
    back: "Volver",
    viewOnMap: "Ver en mapa",
    menu: "Ver menú",
    website: "Sitio web",
    priceRange: "Rango de precios",
    address: "Dirección",
    phone: "Teléfono",
    hours: "Horarios",
    entryFee: "Entrada",
    free: "Gratis",
    practicalTips: "Tips prácticos",
    whyRecommend: "Por qué lo recomendamos",
    honorableMention: "Mención Honorable",
    downloadPDF: "Descargar PDF",
    scanQR: "Escanea el código QR",
    allLocations: "Todas las ubicaciones",
    welcomeSubtitle: "Tu guía completa para una estadía perfecta",
    chooseSection: "Elige una sección",
    allSections: "Todas las secciones",
    allCategories: "Todas las categorías",
    recommendations: "Recomendaciones",
    rules: "Reglas",
    places: "Lugares"
  },
  en: {
    welcome: "Welcome",
    selectLanguage: "Select your language",
    houseGuide: "House Guide",
    localRecommendations: "Local Recommendations",
    checkInOut: "Check-in / Check-out",
    wifi: "WiFi",
    houseRules: "House Rules",
    heating: "Heating & Climate",
    entertainment: "Entertainment",
    kitchen: "Kitchen & Appliances",
    nespresso: "Coffee Machine",
    washingMachine: "Washing Machine",
    trash: "Trash & Recycling",
    emergency: "Emergency Info",
    parking: "Parking",
    departure: "Departure Instructions",
    hosts: "Meet Your Hosts",
    extraServices: "Extra Services",
    restaurants: "Restaurants & Bars",
    touristPlaces: "Tourist Places",
    location: "Location",
    back: "Back",
    viewOnMap: "View on map",
    menu: "View menu",
    website: "Website",
    priceRange: "Price range",
    address: "Address",
    phone: "Phone",
    hours: "Hours",
    entryFee: "Entry fee",
    free: "Free",
    practicalTips: "Practical tips",
    whyRecommend: "Why we recommend it",
    honorableMention: "Honorable Mention",
    downloadPDF: "Download PDF",
    scanQR: "Scan QR code",
    allLocations: "All locations",
    welcomeSubtitle: "Your complete guide for a perfect stay",
    chooseSection: "Choose a section",
    allSections: "All sections",
    allCategories: "All categories",
    recommendations: "Recommendations",
    rules: "Rules",
    places: "Places"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "es" || saved === "en")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] ?? key;
  };

  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

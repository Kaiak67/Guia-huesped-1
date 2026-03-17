"use client";

import { useLanguage } from "@/lib/language-context";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, MapPin } from "lucide-react";

export default function LandingPage() {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();

  const handleLanguageSelect = (lang: "es" | "en") => {
    setLanguage(lang);
  };

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-6">
      {/* Language Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
          {t("welcome")}
        </h1>
        <p className="text-[#D4A574] text-lg md:text-xl">
          {t("welcomeSubtitle")}
        </p>
      </motion.div>

      {/* Language Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex gap-6 mb-16"
      >
        <button
          onClick={() => handleLanguageSelect("es")}
          className={`flex flex-col items-center gap-3 px-8 py-6 rounded-xl transition-all duration-300 ${
            language === "es"
              ? "bg-[#D4A574] text-[#1a1a1a] scale-105"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          <span className="text-5xl">🇨🇱</span>
          <span className="font-medium">Español</span>
        </button>
        <button
          onClick={() => handleLanguageSelect("en")}
          className={`flex flex-col items-center gap-3 px-8 py-6 rounded-xl transition-all duration-300 ${
            language === "en"
              ? "bg-[#D4A574] text-[#1a1a1a] scale-105"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          <span className="text-5xl">🇺🇸</span>
          <span className="font-medium">English</span>
        </button>
      </motion.div>

      {/* Main Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-2xl"
      >
        <p className="text-white/60 text-center mb-6">{t("chooseSection")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => handleNavigate("/house-guide")}
            className="button-card group flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-lg"
          >
            <div className="p-4 bg-[#1a1a1a] rounded-full group-hover:bg-[#D4A574] transition-colors duration-300">
              <Home className="w-8 h-8 text-white" />
            </div>
            <span className="text-xl font-medium text-[#1a1a1a]">
              {t("houseGuide")}
            </span>
          </button>

          <button
            onClick={() => handleNavigate("/recommendations")}
            className="button-card group flex flex-col items-center gap-4 p-8 bg-white rounded-xl shadow-lg"
          >
            <div className="p-4 bg-[#1a1a1a] rounded-full group-hover:bg-[#D4A574] transition-colors duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <span className="text-xl font-medium text-[#1a1a1a]">
              {t("localRecommendations")}
            </span>
          </button>
        </div>
      </motion.div>

      {/* Location info */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-12 text-white/40 text-sm"
      >
        Punta Arenas, Magallanes, Chile 🇨🇱
      </motion.p>
    </main>
  );
}

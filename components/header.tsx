"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useRouter } from "next/navigation";
import { ArrowLeft, Globe, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { Sidebar } from "./sidebar";

interface HeaderProps {
  title: string;
  backPath?: string;
  sidebarType?: "house-guide" | "recommendations";
}

export function Header({ title, backPath = "/", sidebarType }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {sidebarType && (
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 -ml-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => router.push(backPath)}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">{t("back")}</span>
            </button>
          </div>

          <h1 className="text-lg md:text-xl font-medium text-white truncate max-w-[50%]">
            {title}
          </h1>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <Globe className="w-4 h-4 text-[#D4A574]" />
            <span className="text-white text-sm font-medium">
              {language === "es" ? "🇺🇸 EN" : "🇨🇱 ES"}
            </span>
          </button>
        </div>
      </motion.header>

      {sidebarType && (
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          type={sidebarType}
        />
      )}
    </>
  );
}

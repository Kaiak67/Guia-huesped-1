"use client";

import { useLanguage } from "@/lib/language-context";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  Key,
  Wifi,
  ScrollText,
  Thermometer,
  Tv,
  ChefHat,
  Coffee,
  WashingMachine,
  Trash2,
  Car,
  AlertTriangle,
  LogOut,
  Users,
  Gift,
  UtensilsCrossed,
  Landmark,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  type: "house-guide" | "recommendations";
}

const houseGuideSections = [
  { key: "checkInOut", icon: Key, href: "/house-guide/check-in-out" },
  { key: "wifi", icon: Wifi, href: "/house-guide/wifi" },
  { key: "rules", icon: ScrollText, href: "/house-guide/rules" },
  { key: "heating", icon: Thermometer, href: "/house-guide/heating" },
  { key: "entertainment", icon: Tv, href: "/house-guide/entertainment" },
  { key: "kitchen", icon: ChefHat, href: "/house-guide/kitchen" },
  { key: "nespresso", icon: Coffee, href: "/house-guide/nespresso" },
  { key: "washingMachine", icon: WashingMachine, href: "/house-guide/washing-machine" },
  { key: "trash", icon: Trash2, href: "/house-guide/trash" },
  { key: "parking", icon: Car, href: "/house-guide/parking" },
  { key: "emergency", icon: AlertTriangle, href: "/house-guide/emergency" },
  { key: "departure", icon: LogOut, href: "/house-guide/departure" },
  { key: "hosts", icon: Users, href: "/house-guide/hosts" },
  { key: "extraServices", icon: Gift, href: "/house-guide/extra-services" },
];

const recommendationSections = [
  { key: "restaurants", icon: UtensilsCrossed, href: "/recommendations/restaurants" },
  { key: "places", icon: Landmark, href: "/recommendations/places" },
];

export function Sidebar({ isOpen, onClose, type }: SidebarProps) {
  const { t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const sections = type === "house-guide" ? houseGuideSections : recommendationSections;
  const indexPath = type === "house-guide" ? "/house-guide" : "/recommendations";
  const indexKey = type === "house-guide" ? "houseGuide" : "recommendations";
  const IndexIcon = Home;

  const handleNavigation = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed left-0 top-0 h-full w-72 bg-[#1a1a1a] z-50 shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-white font-medium text-lg">{t(indexKey)}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white/80" />
              </button>
            </div>

            {/* Index Link */}
            <div className="p-2">
              <button
                onClick={() => handleNavigation(indexPath)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  pathname === indexPath
                    ? "bg-[#D4A574]/20 text-[#D4A574]"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <IndexIcon className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {type === "house-guide" ? t("allSections") : t("allCategories")}
                </span>
              </button>
            </div>

            {/* Divider */}
            <div className="px-4 py-2">
              <div className="h-px bg-white/10" />
            </div>

            {/* Sections */}
            <nav className="p-2 space-y-1">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = pathname === section.href;

                return (
                  <button
                    key={section.key}
                    onClick={() => handleNavigation(section.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-[#D4A574]/20 text-[#D4A574]"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{t(section.key)}</span>
                  </button>
                );
              })}
            </nav>

            {/* Footer - Switch Section */}
            <div className="p-4 mt-4 border-t border-white/10">
              <button
                onClick={() => handleNavigation(type === "house-guide" ? "/recommendations" : "/house-guide")}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors text-white/80 hover:text-white"
              >
                {type === "house-guide" ? (
                  <>
                    <Landmark className="w-5 h-5" />
                    <span className="text-sm">{t("recommendations")}</span>
                  </>
                ) : (
                  <>
                    <Home className="w-5 h-5" />
                    <span className="text-sm">{t("houseGuide")}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

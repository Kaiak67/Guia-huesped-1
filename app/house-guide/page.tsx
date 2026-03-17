"use client";

import { useLanguage } from "@/lib/language-context";
import { Header } from "@/components/header";
import { ButtonCard } from "@/components/button-card";
import {
  DoorOpen,
  Wifi,
  ScrollText,
  Thermometer,
  Tv,
  ChefHat,
  Coffee,
  WashingMachine,
  Trash2,
  AlertTriangle,
  Car,
  LogOut,
  Users,
  Gift,
} from "lucide-react";

export default function HouseGuidePage() {
  const { t } = useLanguage();

  const sections = [
    { key: "checkInOut", icon: DoorOpen, href: "/house-guide/check-in-out" },
    { key: "wifi", icon: Wifi, href: "/house-guide/wifi" },
    { key: "houseRules", icon: ScrollText, href: "/house-guide/rules" },
    { key: "heating", icon: Thermometer, href: "/house-guide/heating" },
    { key: "entertainment", icon: Tv, href: "/house-guide/entertainment" },
    { key: "kitchen", icon: ChefHat, href: "/house-guide/kitchen" },
    { key: "nespresso", icon: Coffee, href: "/house-guide/nespresso" },
    { key: "washingMachine", icon: WashingMachine, href: "/house-guide/washing-machine" },
    { key: "trash", icon: Trash2, href: "/house-guide/trash" },
    { key: "emergency", icon: AlertTriangle, href: "/house-guide/emergency" },
    { key: "parking", icon: Car, href: "/house-guide/parking" },
    { key: "departure", icon: LogOut, href: "/house-guide/departure" },
    { key: "hosts", icon: Users, href: "/house-guide/hosts" },
    { key: "extraServices", icon: Gift, href: "/house-guide/extra-services" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={t("houseGuide")} backPath="/" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sections.map((section, index) => (
            <ButtonCard
              key={section.key}
              title={t(section.key)}
              icon={section.icon}
              href={section.href}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

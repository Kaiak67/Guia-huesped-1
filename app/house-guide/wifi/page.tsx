"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { Wifi, Copy, Check } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WifiPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.wifi ?? content.es.wifi;
  const [copied, setCopied] = useState(false);

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(data?.password ?? "");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("wifi")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#1a1a1a] rounded-2xl p-8 text-center"
        >
          <div className="inline-flex p-4 bg-[#D4A574] rounded-full mb-6">
            <Wifi className="w-12 h-12 text-white" />
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-white/60 text-sm mb-1">
                {language === "es" ? "Nombre de red" : "Network name"}
              </p>
              <p className="text-white text-3xl font-bold">{data?.network ?? "Casa"}</p>
            </div>
            
            <div>
              <p className="text-white/60 text-sm mb-1">
                {language === "es" ? "Contraseña" : "Password"}
              </p>
              <div className="flex items-center justify-center gap-3">
                <p className="text-[#D4A574] text-3xl font-mono font-bold">
                  {data?.password ?? "pelota1122"}
                </p>
                <button
                  onClick={copyPassword}
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                  title={language === "es" ? "Copiar" : "Copy"}
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <InfoCard emoji="💡" title="Tip" variant="warning" delay={0.2}>
          <p>{data?.tip ?? ""}</p>
        </InfoCard>
      </div>
    </main>
  );
}

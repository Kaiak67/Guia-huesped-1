"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Users, Phone, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function HostsPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.hosts ?? content.es.hosts;
  const contacts = data?.contacts ?? [];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("hosts")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Hosts Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img
            src="/images/anfitriones.jpg"
            alt={language === "es" ? "Tus anfitriones" : "Your hosts"}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1a1a1a] rounded-2xl p-8 text-center"
        >
          <div className="inline-flex p-4 bg-[#D4A574] rounded-full mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <div className="text-white text-lg leading-relaxed whitespace-pre-line">
            {data?.message ?? ""}
          </div>
        </motion.div>

        {/* Contacts */}
        <div className="space-y-4">
          {contacts.map((contact: { name: string; role?: string; phone: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-between"
            >
              <div>
                <p className="font-semibold text-[#1a1a1a]">{contact?.name ?? ""}</p>
                {contact?.role && (
                  <p className="text-gray-500 text-sm">{contact.role}</p>
                )}
              </div>
              <a 
                href={`tel:${contact?.phone ?? ""}`} 
                className="flex items-center gap-2 bg-[#1a1a1a] text-white px-4 py-2 rounded-lg hover:bg-[#333] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{contact?.phone ?? ""}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

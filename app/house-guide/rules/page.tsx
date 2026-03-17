"use client";

import { useLanguage } from "@/lib/language-context";
import { content } from "@/lib/content";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { motion } from "framer-motion";

export default function RulesPage() {
  const { language, t } = useLanguage();
  const data = content[language]?.houseRules ?? content.es.houseRules;
  const rules = data?.rules ?? [];
  const catStory = data?.catStory ?? { title: "", story: "" };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header title={data?.title ?? t("houseRules")} backPath="/house-guide" sidebarType="house-guide" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Rules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {rules.map((rule: { icon: string; rule: string; desc: string }, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#D4A574]"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{rule?.icon ?? "📋"}</span>
                <div>
                  <h3 className="font-semibold text-[#1a1a1a] mb-1">{rule?.rule ?? ""}</h3>
                  <p className="text-gray-600 text-sm">{rule?.desc ?? ""}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cat Story */}
        <InfoCard emoji="🐱" title={catStory?.title ?? ""} variant="warning" delay={0.6}>
          <p className="text-sm leading-relaxed">{catStory?.story ?? ""}</p>
        </InfoCard>
      </div>
    </main>
  );
}

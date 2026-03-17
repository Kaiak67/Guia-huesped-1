"use client";

import { useLanguage } from "@/lib/language-context";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { WashingMachine, Power, Play, Droplets, Thermometer, Timer, Lock, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WashingMachinePage() {
  const { language } = useLanguage();

  const controlButtons = language === "es" ? [
    { name: "ON/OFF", desc: "Presiona para encender/apagar. Se apaga automáticamente 5 seg después de terminar." },
    { name: "PROGRAMAS", desc: "Presiona repetidamente para seleccionar entre 10 programas." },
    { name: "INICIO/PAUSA", desc: "Presiona para iniciar o pausar el ciclo de lavado." },
    { name: "NIVEL DE AGUA", desc: "Para cambiar la temperatura: mantén presionado el botón por 3 segundos, luego presiónalo repetidamente para escoger. Fría (luz apagada), Caliente (luz encendida), Tibia (luz parpadeando)." },
    { name: "PASOS DE LAVADO", desc: "Selecciona el proceso: REMOJO, LAVADO, ENJUAGUE, CENTRIFUGADO." },
    { name: "LAVADO DIFERIDO", desc: "Pospone el inicio del lavado de 2 a 24 horas." },
  ] : [
    { name: "ON/OFF", desc: "Press to turn on/off. Automatically turns off 5 sec after finishing." },
    { name: "PROGRAMS", desc: "Press repeatedly to select from 10 programs." },
    { name: "START/PAUSE", desc: "Press to start or pause the wash cycle." },
    { name: "WATER LEVEL", desc: "To change temperature: hold button for 3 seconds, then press repeatedly to select. Cold (light off), Hot (light on), Warm (light flashing)." },
    { name: "WASH STEPS", desc: "Select process: SOAK, WASH, RINSE, SPIN." },
    { name: "DELAYED WASH", desc: "Delay the start of washing by 2 to 24 hours." },
  ];

  const steps = language === "es" ? [
    { number: 1, title: "Abre la tapa y carga la ropa", desc: "Coloca la ropa dentro del tambor sin sobrecargarlo. Llena máximo hasta 3/4 de la capacidad." },
    { number: 2, title: "Agrega detergente", desc: "Localiza el dispensador de detergente en la parte superior. NO viertas detergente directamente sobre la ropa." },
    { number: 3, title: "Cierra la tapa", desc: "Asegúrate de que esté completamente cerrada antes de iniciar." },
    { number: 4, title: "Presiona ON/OFF", desc: "La pantalla digital se iluminará." },
    { number: 5, title: "Selecciona programa", desc: "Recomendamos 'Normal/Automático' para ropa cotidiana." },
    { number: 6, title: "Presiona INICIO", desc: "La máquina comenzará a llenar con agua." },
    { number: 7, title: "Espera a que termine", desc: "La pantalla mostrará el tiempo restante. Se apagará automáticamente." },
    { number: 8, title: "Retira la ropa", desc: "No dejes la ropa húmeda mucho tiempo para evitar malos olores." },
  ] : [
    { number: 1, title: "Open the lid and load clothes", desc: "Place clothes inside the drum without overloading. Fill maximum to 3/4 capacity." },
    { number: 2, title: "Add detergent", desc: "Locate the detergent dispenser at the top. DON'T pour detergent directly on clothes." },
    { number: 3, title: "Close the lid", desc: "Make sure it's completely closed before starting." },
    { number: 4, title: "Press ON/OFF", desc: "The digital display will light up." },
    { number: 5, title: "Select program", desc: "We recommend 'Normal/Automatic' for everyday clothes." },
    { number: 6, title: "Press START", desc: "The machine will start filling with water." },
    { number: 7, title: "Wait for cycle to complete", desc: "The display will show remaining time. It turns off automatically." },
    { number: 8, title: "Remove clothes", desc: "Don't leave wet clothes too long to avoid bad odors." },
  ];

  const donts = language === "es" ? [
    "No llenes el tambor hasta el tope",
    "No laves prendas con objetos metálicos en los bolsillos",
    "No uses exceso de detergente",
    "No dejes ropa húmeda en el tambor por mucho tiempo",
  ] : [
    "Don't fill the drum to the top",
    "Don't wash items with metallic objects in pockets",
    "Don't use excess detergent",
    "Don't leave wet clothes in the drum for too long",
  ];

  const dos = language === "es" ? [
    "Revisa todos los bolsillos antes de lavar",
    "Separa la ropa clara de la oscura",
    "Cierra cremalleras y broches",
    "Deja la tapa abierta después de usar",
  ] : [
    "Check all pockets before washing",
    "Separate light from dark clothes",
    "Close zippers and fasteners",
    "Leave the lid open after use",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header 
        title={language === "es" ? "Lavadora" : "Washing Machine"} 
        backPath="/house-guide"
        sidebarType="house-guide"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Machine Info */}
        <InfoCard icon={WashingMachine} title="Mademsa 9.5 kg BZG" variant="highlight" delay={0.1}>
          <p>{language === "es" ? "Lavadora de carga superior automática con 10 programas inteligentes y tecnología Fuzzy." : "Automatic top-load washer with 10 smart programs and Fuzzy technology."}</p>
        </InfoCard>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img src="/images/panel_lavadora.jpg" alt={language === "es" ? "Panel de control de la lavadora" : "Washing machine control panel"} className="w-full h-auto" />
        </motion.div>

        {/* Control Panel */}
        <div className="bg-[#1a1a1a] rounded-xl p-6">
          <h3 className="text-[#D4A574] text-lg font-semibold mb-4">
            {language === "es" ? "🏛️ Panel de Control" : "🏛️ Control Panel"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {controlButtons.map((btn, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="bg-white rounded-lg p-4"
              >
                <p className="font-semibold text-[#1a1a1a] text-sm">{btn.name}</p>
                <p className="text-gray-600 text-xs mt-1">{btn.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-[#1a1a1a]">
            {language === "es" ? "🧺 Cómo Lavar" : "🧺 How to Wash"}
          </h3>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm"
            >
              <div className="w-8 h-8 bg-[#D4A574] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">{step.number}</span>
              </div>
              <div>
                <p className="font-medium text-[#1a1a1a]">{step.title}</p>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Do's and Don'ts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-red-50 rounded-xl p-5 border-l-4 border-red-400">
            <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              {language === "es" ? "Qué NO Hacer" : "What NOT to Do"}
            </h4>
            <ul className="space-y-2">
              {donts.map((item, index) => (
                <li key={index} className="text-red-700 text-sm flex items-start gap-2">
                  <span>✗</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-5 border-l-4 border-green-400">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              {language === "es" ? "Recomendaciones" : "Recommendations"}
            </h4>
            <ul className="space-y-2">
              {dos.map((item, index) => (
                <li key={index} className="text-green-700 text-sm flex items-start gap-2">
                  <span>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

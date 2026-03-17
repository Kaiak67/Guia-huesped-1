"use client";

import { useLanguage } from "@/lib/language-context";
import { Header } from "@/components/header";
import { InfoCard } from "@/components/info-card";
import { PhotoPlaceholder } from "@/components/photo-placeholder";
import { Coffee, AlertTriangle, Droplets, Hand, CircleDot, ThermometerSun, Square, Trash } from "lucide-react";
import { motion } from "framer-motion";

export default function NespressoPage() {
  const { language } = useLanguage();

  const steps = language === "es" ? [
    {
      number: 1,
      title: "Verificar el Depósito de Agua",
      icon: Droplets,
      content: "Asegúrate de que el depósito de agua (ubicado en el lado derecho de la máquina) esté lleno con agua potable fresca.",
      photo: "Foto del depósito de agua lleno, mostrando la línea MAX"
    },
    {
      number: 2,
      title: "Abrir la Manija de Bloqueo",
      icon: Hand,
      content: "Levanta la manija de bloqueo en la parte frontal superior de la máquina. Este es el asa metálica/plástica sobre el área de las cápsulas.",
      photo: "Foto de la manija en posición abierta"
    },
    {
      number: 3,
      title: "Retirar el Soporte de la Cápsula",
      icon: CircleDot,
      content: "Saca el soporte magnético de la cápsula (pieza negra con forma de embudo). AL RETIRARLO, LA MÁQUINA SE ENCIENDE AUTOMÁTICAMENTE. Espera unos 40 segundos mientras la luz roja parpadea. Cuando la luz se ponga verde fija, la máquina está lista.",
      photo: "Foto mostrando cómo retirar el soporte de la cápsula"
    },
    {
      number: 4,
      title: "Insertar la Cápsula Dolce Gusto",
      icon: Coffee,
      content: "Coloca una cápsula Dolce Gusto dentro del soporte (con el lado ancho hacia abajo). Luego, vuelve a insertar el soporte en la máquina y cierra la manija de bloqueo firmemente.",
      photo: "Foto de la cápsula siendo insertada en el soporte"
    },
    {
      number: 5,
      title: "Posicionar la Taza",
      icon: Coffee,
      content: "La bandeja recoge gotas es ajustable. Coloca tu taza bajo la salida de café y ajusta la altura según el tamaño de tu taza.",
      photo: "Foto mostrando taza posicionada bajo la salida"
    },
    {
      number: 6,
      title: "Seleccionar Temperatura y Preparar",
      icon: ThermometerSun,
      content: "En la parte superior hay una palanca con tres posiciones: FRÍA (izquierda/azul), PARADA (centro), CALIENTE (derecha/rojo). Mueve la palanca a CALIENTE para café o FRÍA para bebidas heladas.",
      photo: "Foto de la palanca de selección mostrando las tres posiciones"
    },
    {
      number: 7,
      title: "Detener la Preparación",
      icon: Square,
      content: "Cuando tu bebida alcance el nivel deseado, mueve la palanca de regreso a la posición central (PARADA). IMPORTANTE: Esta máquina es MANUAL, NO se detiene automáticamente.",
      photo: "Foto de la taza con café preparado"
    },
    {
      number: 8,
      title: "Retirar y Desechar la Cápsula",
      icon: Trash,
      content: "¡Cuidado! La cápsula estará caliente. Voltea el soporte sobre el basurero para que la cápsula caiga. Enjuaga el soporte con agua y vuelve a insertarlo.",
      photo: "Foto del soporte siendo enjuagado bajo el grifo"
    }
  ] : [
    {
      number: 1,
      title: "Check the Water Tank",
      icon: Droplets,
      content: "Make sure the water tank (located on the right side of the machine) is filled with fresh drinking water.",
      photo: "Photo of the full water tank showing the MAX line"
    },
    {
      number: 2,
      title: "Open the Locking Handle",
      icon: Hand,
      content: "Lift the locking handle at the top front of the machine. This is the metal/plastic handle located above the capsule area.",
      photo: "Photo of the handle in open position"
    },
    {
      number: 3,
      title: "Remove the Capsule Holder",
      icon: CircleDot,
      content: "Remove the magnetic capsule holder (black funnel-shaped piece). WHEN YOU REMOVE IT, THE MACHINE TURNS ON AUTOMATICALLY. Wait about 40 seconds while the red light flashes. When the light turns solid green, the machine is ready.",
      photo: "Photo showing how to remove the capsule holder"
    },
    {
      number: 4,
      title: "Insert the Dolce Gusto Capsule",
      icon: Coffee,
      content: "Place a Dolce Gusto capsule inside the holder (wide side down). Then, reinsert the holder into the machine and firmly close the locking handle.",
      photo: "Photo of capsule being inserted into the holder"
    },
    {
      number: 5,
      title: "Position the Cup",
      icon: Coffee,
      content: "The drip tray is adjustable. Place your cup under the coffee outlet and adjust the tray height according to your cup size.",
      photo: "Photo showing cup positioned under the outlet"
    },
    {
      number: 6,
      title: "Select Temperature and Brew",
      icon: ThermometerSun,
      content: "At the top there's a lever with three positions: COLD (left/blue), STOP (center), HOT (right/red). Move the lever to HOT for coffee or COLD for iced drinks.",
      photo: "Photo of the selection lever showing all three positions"
    },
    {
      number: 7,
      title: "Stop the Brewing",
      icon: Square,
      content: "When your drink reaches the desired level, move the lever back to the center position (STOP). IMPORTANT: This machine is MANUAL, it does NOT stop automatically.",
      photo: "Photo of cup with prepared coffee"
    },
    {
      number: 8,
      title: "Remove and Discard the Capsule",
      icon: Trash,
      content: "Careful! The capsule will be hot. Turn the holder over the trash bin so the capsule falls out. Rinse the holder with water and reinsert it.",
      photo: "Photo of holder being rinsed under the tap"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Header 
        title={language === "es" ? "Máquina de Café" : "Coffee Machine"} 
        backPath="/house-guide"
        sidebarType="house-guide"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Important Note */}
        <InfoCard icon={AlertTriangle} title={language === "es" ? "NOTA IMPORTANTE" : "IMPORTANT NOTE"} variant="warning" delay={0.1}>
          <p className="font-medium">
            {language === "es" 
              ? "Esta máquina NO tiene botón de encendido. Se enciende automáticamente al retirar el soporte de la cápsula."
              : "This machine does NOT have a power button. It turns on automatically when you remove the capsule holder."
            }
          </p>
        </InfoCard>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="rounded-lg overflow-hidden shadow-md"
        >
          <img src="/images/nespresso_general.jpg" alt={language === "es" ? "Máquina Dolce Gusto Piccolo XS" : "Dolce Gusto Piccolo XS machine"} className="w-full h-auto" />
        </motion.div>

        {/* Steps */}
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="space-y-3"
            >
              <div className="bg-white rounded-xl p-5 shadow-sm border-l-4 border-[#D4A574]">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5 text-[#D4A574]" />
                      <h3 className="font-semibold text-[#1a1a1a]">{step.title}</h3>
                    </div>
                    <p className="text-gray-700">{step.content}</p>
                  </div>
                </div>
              </div>
              {[1,2,3,4,5,6,8].includes(step.number) && (
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src={`/images/nespresso_paso${step.number}.jpg`} 
                    alt={step.title} 
                    className="w-full h-auto" 
                  />
                </div>
              )}
            </motion.div>
          );
        })}

        {/* Tips */}
        <InfoCard emoji="💡" title={language === "es" ? "Consejos Útiles" : "Helpful Tips"} variant="highlight" delay={1}>
          <ul className="space-y-2 text-sm">
            <li>• {language === "es" ? "Si preparas una bebida que requiere dos cápsulas (como Cappuccino), repite los pasos 4-7 con la segunda cápsula." : "If preparing a drink that requires two capsules (like Cappuccino), repeat steps 4-7 with the second capsule."}</li>
            <li>• {language === "es" ? "NO uses esta máquina para preparar solo agua caliente sin una cápsula." : "DO NOT use this machine to prepare just hot water without a capsule."}</li>
            <li>• {language === "es" ? "Si la luz se vuelve naranja, significa que la máquina necesita descalcificación. Por favor, avisa al anfitrión." : "If the light turns orange, it means the machine needs descaling. Please notify the host."}</li>
          </ul>
        </InfoCard>
      </div>
    </main>
  );
}

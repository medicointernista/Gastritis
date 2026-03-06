"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Necesito cambiar mi dieta?",
    answer: "Sí, como parte del tratamiento recibirás recomendaciones prácticas y realistas adaptadas a tu estilo de vida para mejorar tu digestión sin privaciones innecesarias."
  },
  {
    question: "¿Es urgente la consulta?",
    answer: "Si presentas vómitos intensos, sangre en heces o dolor severo, debes buscar atención de urgencia inmediata. Para síntomas crónicos o recurrentes, la consulta especializada es el mejor camino."
  },
  {
    question: "¿Hay atención después de la consulta?",
    answer: "Sí, el Dr. Willmer Obregón ofrece seguimiento continuo vía WhatsApp para resolver dudas rápidas y ajustar el tratamiento según tu evolución."
  },
  {
    question: "¿La consulta incluye pruebas?",
    answer: "Durante la consulta se evalúa cada caso y se solicitan las pruebas diagnósticas necesarias (como endoscopias o exámenes de laboratorio) para confirmar el diagnóstico."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Ghosting Text */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1080A0]/10 bg-[#E1F1F6] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1080A0] mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              Resolviendo tus dudas
            </div>
            
            <h2 className="text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] mb-6">
              Preguntas Frecuentes sobre Gastritis en Medellín
            </h2>
            
            <p className="text-base md:text-[1.125rem] leading-[1.6] text-[#64748B]">
              Encuentra respuestas a las preguntas más comunes sobre la consulta y los servicios médicos del Dr. Willmer Obregón.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="overflow-hidden rounded-[1.25rem] border border-[#E2E8F0] bg-white transition-all duration-300"
                    style={{
                      boxShadow: isOpen ? '0 10px 15px -3px rgba(0, 0, 0, 0.05)' : 'none'
                    }}
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#F8F9FA]"
                      aria-expanded={isOpen}
                    >
                      <span className="text-[1rem] font-semibold text-[#1E293B]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-[#64748B] transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#1080A0]" : ""
                        }`}
                      />
                    </button>
                    
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-6 pt-0">
                          <div className="h-[1px] w-full bg-[#E2E8F0] mb-5" />
                          <p className="text-[1rem] leading-[1.6] text-[#64748B]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Blob */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-[#E1F1F6] opacity-30 blur-[100px]" />
    </section>
  );
}
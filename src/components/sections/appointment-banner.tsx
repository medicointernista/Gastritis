import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const AppointmentBanner = () => {
  return (
    <section className="bg-white pt-10 pb-20">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Main rounded container with subtle border and gradient background feel */}
        <div className="rounded-[2.5rem] border border-[#E2E8F0] bg-[#F8F9FA] p-8 md:p-12 lg:p-16 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] relative overflow-hidden">
          {/* Background subtle glow effect to match the high-level design */}
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-[#E1F1F6] opacity-40 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center">
            {/* Text Content */}
            <div className="max-w-2xl text-left lg:text-left">
              <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
                Agenda tu cita para Gastritis en Medellín hoy
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
                La salud de tu sistema digestivo es prioridad. El Dr. Willmer Obregón te ofrece una consulta especializada en gastritis.{" "}
                <span className="font-bold text-[#1080A0]">
                  Quedan solo 3 citas disponibles esta semana.
                </span>
              </p>
            </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                {/* WhatsApp Button */}
                <a
                  href="https://api.whatsapp.com/send?phone=573009895852&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta."
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-[24px] bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-8 py-4 text-[15px] font-bold text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95"
                >
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle size={14} fill="currentColor" className="text-white" />
                  </div>
                  Enviar WhatsApp
                </a>

                {/* Phone Button test test test */}
                <a
                  href="tel:+573009895852"
                  className="inline-flex w-full tssts sm:w-auto items-center justify-center gap-2 whitespace-nowrap rounded-[24px] bg-white border border-[#E2E8F0] px-8 py-4 text-[15px] font-bold text-[#64748B] transition-all hover:bg-[#F8F9FA] hover:border-[#1080A0] hover:text-[#1080A0] hover:scale-[1.02] active:scale-95 shadow-sm"
                >
                  <Phone size={18} className="text-[#1080A0]" />
                  Llamar por teléfono
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
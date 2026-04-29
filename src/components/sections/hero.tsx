import React from 'react';
import { Sparkles, PhoneCall } from 'lucide-react';

/**
 * Hero component for the Dr. Willmer Obregón website.
 * Features a split layout with text and action buttons on the left,
 * and a medical illustration with an overlay caption on the right.
 */
const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative overflow-hidden bg-[#F8F9FA] min-h-[600px] flex items-center"
    >
      {/* Background glow effects */}
      <div className="hero-glow pointer-events-none absolute inset-0 opacity-40"></div>
      
      <div className="container relative mx-auto px-6 py-8 md:py-12 lg:py-14 max-w-[1280px]">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column: Content */}
          <div className="relative z-10">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#1E293B] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-md">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#E1F1F6] text-[#1080A0]">
                <Sparkles className="h-4 w-4" />
              </span>
              Recupera tu bienestar digestivo
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-balance text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.1] md:text-[3rem] lg:text-[3.75rem]">
              Gastritis y Colon Irritable en Medellín - <span className="text-[#1080A0]">Dr. Willmer Obregón</span>
            </h1>

            {/* Subheadline/Description */}
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[#64748B] md:text-lg">
              Alivio real y un plan médico personalizado para reducir el dolor, mejorar tu digestión y recuperar la energía, con seguimiento cercano y soluciones prácticas que se adaptan a tu día a día.
            </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a 
                  href="https://api.whatsapp.com/send?phone=573011505174&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta." 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-10 py-4 text-base font-bold text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.02] hover:opacity-95 active:scale-95"
                >
                  Contáctame vía WhatsApp
                </a>
                <a 
                  href="tel:+573011505174" 
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#E1F1F6] px-10 py-4 text-base font-bold text-[#1080A0] transition-all hover:bg-[#D4EAF1] hover:scale-[1.02] active:scale-95"
                >
                  <PhoneCall className="h-4 w-4" />
                  Llama para una cita
                </a>
              </div>

            {/* Info Cards Row */}
            <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]">
                <dt className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Atención</dt>
                <dd className="mt-1 text-sm font-semibold text-[#1E293B]">Personalizada</dd>
              </div>
              <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]">
                <dt className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Enfoque</dt>
                <dd className="mt-1 text-sm font-semibold text-[#1E293B]">Integral</dd>
              </div>
              <div className="col-span-2 sm:col-span-1 rounded-2xl border border-white bg-white/80 p-5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] backdrop-blur-sm transition-transform duration-300 hover:scale-[1.03]">
                <dt className="text-[10px] font-bold uppercase tracking-widest text-[#64748B]">Ubicación</dt>
                <dd className="mt-1 text-sm font-semibold text-[#1E293B]">Medellín</dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Image Asset */}
          <div className="relative z-0 group">
            {/* Background blur decorative element */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[#1080A0] opacity-10 blur-[50px] animate-pulse"></div>
            
            <figure className="relative overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.05)] transition-transform duration-500 hover:scale-[1.01]">
              <div className="relative h-[450px] w-full md:h-[650px]">
                <img 
                  alt="Dr. Willmer Obregón internista Medellín consulta gastritis y colon irritable" 
                  className="h-full w-full object-cover object-center" 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/d1704aa7-153e-49e3-b4b6-de0676c393f3/Consulta-para-Gastritis-1772647810599.webp?width=8000&height=8000&resize=contain"
                />
              </div>
              
              {/* Floating Caption Overlay */}
              <figcaption className="absolute bottom-6 left-6 right-6">
                <div className="rounded-2xl bg-white/75 p-6 shadow-lg backdrop-blur-xl border border-white/20">
                  <p className="text-base font-bold text-[#1E293B]">Especialista en Digestión</p>
                  <p className="mt-1 text-xs font-bold text-[#1080A0] uppercase tracking-widest">Gastritis y Colon Irritable</p>
                </div>
              </figcaption>
            </figure>
            
            {/* Decorative blob */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#E1F1F6] opacity-60 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Award, Cpu } from 'lucide-react';

const BiographySection = () => {
  const experiences = [
    "Obesidad y control de peso",
    "Diabetes e Hipertensión Arterial",
    "Enfermedades Renales",
    "Enfermedades de Tiroides",
    "Colon Irritable",
    "Gastritis",
    "Hipotiroidismo",
    "Fibromialgia",
    "Enfermedades Crónicas"
  ];

  return (
    <section id="biografia" className="relative py-10 md:py-16 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="max-w-6xl mx-auto">
            <div className="relative z-10 rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left Column: Image + Highlight Boxes */}
                <div className="flex flex-col bg-white">
                  {/* Image Section */}
                  <div className="relative w-full p-6 md:p-10 pb-2 flex items-center justify-center">
                    <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/d1704aa7-153e-49e3-b4b6-de0676c393f3/Dr.-Willmer-Obregon-1772655452848.jpg?width=1200&height=1200&resize=contain"
                      alt="Dr. Willmer Obregón - Médico Internista en Medellín"
                      width={800}
                      height={800}
                      className="w-full h-auto object-contain rounded-2xl shadow-sm border border-[#E2E8F0]"
                      priority
                    />
                  </div>

                  {/* Statistical Highlight Boxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 md:p-10 pt-4">
                    <div className="flex items-center gap-4 p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA]/50 shadow-sm transition-all hover:border-[#1080A0]/20 hover:bg-white group cursor-default">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[#1080A0] border border-[#E2E8F0] shadow-sm group-hover:bg-[#1080A0] group-hover:text-white transition-colors">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[18px] font-bold text-[#1E293B] leading-tight">15 años</p>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] mt-0.5">De experiencia</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA]/50 shadow-sm transition-all hover:border-[#1080A0]/20 hover:bg-white group cursor-default">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[#1080A0] border border-[#E2E8F0] shadow-sm group-hover:bg-[#1080A0] group-hover:text-white transition-colors">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-[#1E293B] uppercase tracking-wide leading-tight">Tecnología:</p>
                        <p className="text-[12px] font-medium text-[#64748B] mt-0.5">Diagnóstico avanzado + Seguimiento digital</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section (Right Column) */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  {/* Tag and Title */}
                  <div className="mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#1080A0]">
                      Conoce al especialista
                    </span>
                    <h2 className="mt-2 text-[1.875rem] md:text-[2.25rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2]">
                      Dr. Willmer Obregón: Internista con experiencia en Medellín
                    </h2>
                  </div>

                  {/* Main Bio Text */}
                  <p className="text-base md:text-[1.125rem] leading-[1.6] text-[#64748B] mb-8">
                    Médico con más de 15 años de experiencia, formado en Venezuela y consolidado en Medellín. 
                    Experto en tratamientos no quirúrgicos y cuidado integral de la salud con un enfoque empático y personalizado.
                  </p>

                  {/* Areas of Experience Tag Cloud */}
                  <div>
                    <h3 className="text-[14px] font-bold text-[#1E293B] mb-4 uppercase tracking-[0.1em]">
                      Áreas de experiencia:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experiences.map((item, index) => (
                        <div 
                          key={index}
                          className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-[#F8F9FA] px-3 py-1.5 transition-all hover:border-[#1080A0] hover:bg-[#E1F1F6] group cursor-default"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#1080A0]/60 group-hover:text-[#1080A0]" />
                          <span className="text-[12px] font-medium text-[#64748B] group-hover:text-[#1080A0]">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-64 w-[120%] rounded-[100%] bg-[#E1F1F6] opacity-30 blur-3xl"></div>
    </section>
  );
};

export default BiographySection;
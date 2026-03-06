import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section id="servicios" className="relative bg-white py-10 md:py-14 lg:py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#E1F1F6] rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="max-w-3xl mb-10 md:mb-16">
          <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
            Servicios Médicos Especializados en Medellín
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
            Atención médica integral y humana para diagnóstico y manejo efectivo de la gastritis, con tratamientos personalizados que incluyen cambios en dieta y medicamentos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Medicina Interna Card */}
            <div className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl hover:border-[#1080A0]/20">
              <figure className="relative h-64 w-full md:h-72 overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/d1704aa7-153e-49e3-b4b6-de0676c393f3/Medicina-interna-1772647827431.webp?width=8000&height=8000&resize=contain"
                  alt="Medicina Interna Medellín - Dr. Willmer Obregón"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </figure>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="text-[1.25rem] font-bold text-[#1E293B] mb-4 group-hover:text-[#1080A0] transition-colors duration-300">
                Medicina Interna
              </h3>
              <p className="text-[#64748B] text-[1rem] leading-[1.6]">
                Atención integral del adulto, diagnóstico y tratamiento de enfermedades crónicas y agudas.
              </p>
            </div>
          </div>

          {/* Consulta para Gastritis Card */}
          <div className="group flex flex-col overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl hover:border-[#1080A0]/20">
            <figure className="relative h-64 w-full md:h-72 overflow-hidden">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/d1704aa7-153e-49e3-b4b6-de0676c393f3/Consulta-para-Gastritis-1772647810599.webp?width=8000&height=8000&resize=contain"
                  alt="Tratamiento Gastritis Medellín - Consulta Especializada"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
            </figure>
            <div className="p-8 md:p-10 flex flex-col flex-grow">
              <h3 className="text-[1.25rem] font-bold text-[#1E293B] mb-4 group-hover:text-[#1080A0] transition-colors duration-300">
                Consulta para Gastritis
              </h3>
              <p className="text-[#64748B] text-[1rem] leading-[1.6]">
                Evaluación detallada y plan personalizado para el alivio de la gastritis y el colon irritable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
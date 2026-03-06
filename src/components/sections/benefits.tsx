import React from 'react';
import { Zap, Activity, Search, UserCheck, Apple, ShieldCheck } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Alivio sostenido del dolor: Reduce la molestia gástrica para que puedas realizar tus actividades diarias sin interrupciones."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      text: "Menos reflujo después de comer: Disminuye la acidez y la sensación de quemazón tras las comidas."
    },
    {
      icon: <Search className="w-6 h-6" />,
      text: "Diagnóstico preciso: Identificamos la causa real para evitar tratamientos innecesarios."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      text: "Atención Personalizada: El Dr. Willmer Obregón utiliza los datos para crear un plan de tratamiento adaptado a ti."
    },
    {
      icon: <Apple className="w-6 h-6" />,
      text: "Dieta práctica y realista: Recomendaciones alimentarias fáciles de aplicar que no te privan de disfrutar la comida."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      text: "Prevención de complicaciones: Control médico que reduce el riesgo de problemas digestivos a largo plazo."
    }
  ];

  return (
    <section 
      id="beneficios" 
      className="relative bg-white py-8 md:py-10 overflow-hidden"
      style={{ isolation: 'isolate' }}
    >
      {/* Decorative background blob */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#E1F1F6] rounded-full blur-[100px] opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="max-w-3xl mb-8">
          <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
            Beneficios del tratamiento de Gastritis en Medellín
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
            Alivio real y un plan médico personalizado para reducir el dolor, mejorar tu digestión y recuperar la energía.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-4 p-6 rounded-[1.5rem] border border-[#E2E8F0] bg-[#F8F9FA]/50 transition-all duration-300 hover:border-[#1080A0] hover:bg-white hover:shadow-lg hover:shadow-[#1080A0]/5"
            >
              <div 
                className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-white text-[#1080A0] shadow-sm border border-[#E2E8F0] group-hover:bg-[#1080A0] group-hover:text-white group-hover:border-[#1080A0] transition-all duration-300"
              >
                {/* Clone the icon with specific sizing */}
                {React.cloneElement(benefit.icon as React.ReactElement, {
                  className: "w-6 h-6"
                })}
              </div>
              <p className="text-[1rem] font-medium leading-[1.5] text-[#1E293B] mt-1 group-hover:text-[#0F172A] transition-colors duration-300">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
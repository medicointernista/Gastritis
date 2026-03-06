import React from 'react';

const SymptomsCTA = () => {
  const symptoms = [
    "Gastritis crónica o aguda",
    "Colon irritable (Síndrome de Intestino Irritable)",
    "Reflujo gastroesofágico y acidez",
    "Dolor abdominal y digestión pesada",
    "Estreñimiento o diarrea recurrente"
  ];

  return (
    <section className="bg-[#F8F9FA] py-10 md:py-14">
      <div className="container mx-auto px-6 max-w-[1280px]">
        {/* Main Glass-like Container */}
        <div className="rounded-[1.5rem] border border-[#E2E8F0] bg-white p-8 md:p-10 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] overflow-hidden">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            
            {/* Left Column: Symptoms List */}
            <div className="animate-in fade-in slide-in-from-left-4 duration-700">
              <h2 className="text-[1.875rem] font-semibold tracking-tight text-[#0F172A] leading-[1.2] md:text-[2.25rem]">
                ¿Cuándo consultar por Gastritis en Medellín?
              </h2>
              <p className="mt-6 text-[1rem] leading-[1.6] text-[#64748B] md:text-[1.125rem]">
                Si presentas alguno de estos síntomas de forma recurrente, es momento de recibir una evaluación especializada:
              </p>
              
              <ul className="mt-8 space-y-4">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#1080A0]"></span>
                    <span className="text-[1rem] font-medium text-[#1E293B]">
                      {symptom}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Profile Quote Block */}
            <div className="relative group animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
              {/* Decorative background border effect */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[1.25rem] border border-[#1080A0]/10 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              
              <div className="relative rounded-[1.25rem] bg-[#F1F5F9] p-8 md:p-10 shadow-sm border border-[#E2E8F0]/50 transition-all duration-300 hover:shadow-md">
                <blockquote className="relative">
                  {/* Decorative Quote Icon (Using a simple SVG for pixel perfection as per visual) */}
                  <div className="absolute -top-4 -left-2 opacity-10">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" className="text-[#1080A0]">
                      <path d="M0 30V15C0 6.71573 6.71573 0 15 0V7.5C10.8579 7.5 7.5 10.8579 7.5 15H15V30H0ZM22.5 30V15C22.5 6.71573 29.2157 0 37.5 0V7.5C33.3579 7.5 30 10.8579 30 15H37.5V30H22.5Z" />
                    </svg>
                  </div>
                  
                  <p className="text-center text-[1.125rem] italic leading-relaxed text-[#64748B] md:text-[1.25rem] relative z-10">
                    &quot;Mi compromiso es ayudarte a recuperar tu bienestar digestivo con un tratamiento humano, ético y basado en evidencia.&quot;
                  </p>
                  
                  {/* Doctor Info Badge - Optional but adds to authenticity if visible in some layouts */}
                    <div className="mt-6 flex flex-col items-center">
                      <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#1080A0] to-transparent mb-3 opacity-30"></div>
                      <a 
                        href="https://api.whatsapp.com/send?phone=573009895852&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta."
                        className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#1080A0] px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.05] hover:opacity-90 active:scale-95"
                      >
                        Agendar Consulta Ahora
                      </a>
                    </div>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SymptomsCTA;
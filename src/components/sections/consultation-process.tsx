import React from 'react';
import { 
  Clock, 
  MessageSquare, 
  Stethoscope, 
  Utensils, 
  FileText, 
  Activity, 
  RotateCcw, 
  Smartphone,
  CheckCircle2
} from 'lucide-react';

const ConsultationProcess = () => {
  const inclusions = [
    {
      title: "60 Minutos de Consulta",
      description: "Sesión extendida para escucharte sin afanes, tiempo superior al promedio en consulta privada.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      title: "Enfoque Sin Límites",
      description: "Puedes explicarle todos tus problemas al doctor; no nos limitamos a un solo motivo de consulta.",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      title: "Evaluación Exhaustiva",
      description: "Examen físico detallado acompañado de un interrogatorio profundo de tus síntomas.",
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      title: "Plan de Bienestar",
      description: "Recomendaciones de dieta y ejercicio diseñadas acorde a las necesidades de cada paciente.",
      icon: <Utensils className="w-5 h-5" />,
    },
    {
      title: "Historia Clínica Dual",
      description: "Incluye el envío de Historia Electrónica e Impresa durante la atención presencial.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "Pruebas de Ingreso",
      description: "Incluye electrocardiograma y bioimpedancia antes de iniciar la atención médica.",
      icon: <Activity className="w-5 h-5" />,
    },
    {
      title: "Control Sin Costo",
      description: "Consulta de revisión para analizar cualquier examen solicitado adicional sin cargos extra.",
      icon: <RotateCcw className="w-5 h-5" />,
    },
    {
      title: "Seguimiento Directo",
      description: "Atención por WhatsApp desde el teléfono personal del doctor sin costo adicional.",
      icon: <Smartphone className="w-5 h-5" />,
    }
  ];

  return (
    <section id="experiencia" className="relative bg-[#F8FAFC] py-16 md:py-24 overflow-hidden">
      {/* Decorative background blob */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#E1F1F6] rounded-full blur-[120px] opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-[1280px] relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold tracking-tight text-[#0F172A] leading-[1.2] mb-6">
            Detalles técnicos de tu consulta médica
          </h2>
          <p className="text-[1.125rem] leading-[1.6] text-[#64748B]">
            Nuestra atención está diseñada para ser la más completa de Medellín, brindándote tiempo, tecnología y un seguimiento humano excepcional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inclusions.map((item, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-[2rem] border border-[#E2E8F0] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#1080A0]/20 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#E1F1F6] text-[#1080A0] mb-6 group-hover:bg-[#1080A0] group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-[1.25rem] font-bold text-[#1E293B] mb-3 group-hover:text-[#1080A0] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[0.9375rem] leading-[1.6] text-[#64748B]">
                {item.description}
              </p>
              
              {/* Subtle check indicator */}
              <div className="absolute top-8 right-8 text-[#1080A0]/10 group-hover:text-[#1080A0]/20 transition-colors duration-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
          ))}
        </div>

          {/* Closing note */}
          <div className="mt-16 text-center flex flex-col items-center gap-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#1080A0] animate-pulse"></span>
              <p className="text-[0.875rem] font-medium text-[#1E293B]">
                Comprometidos con un diagnóstico preciso y un trato humano.
              </p>
            </div>

            <a 
              href="https://api.whatsapp.com/send?phone=573053979628&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta."
              className="inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-[24px] bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] px-10 py-5 text-[16px] font-bold text-white shadow-[0_4px_14px_0_rgba(16,128,160,0.39)] transition-all hover:scale-[1.05] hover:opacity-95 active:scale-95"
            >
              <Smartphone className="w-5 h-5" />
              Agendar mi cita extendida
            </a>
          </div>
      </div>
    </section>
  );
};

export default ConsultationProcess;
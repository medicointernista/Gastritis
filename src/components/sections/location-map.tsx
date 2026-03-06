import React from 'react';
import { MapPin, Star } from 'lucide-react';

const LocationMap = () => {
  return (
    <section className="pt-20 pb-12 bg-white">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Map Info */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <h2 className="text-[2.5rem] font-bold text-[#1E293B] leading-[1.2]">
                Nuestra <span className="text-[#1080A0]">Ubicación</span>
              </h2>
              <p className="text-[#64748B] text-[1.125rem] leading-[1.6]">
                Visítanos en nuestro consultorio en Medellín. Contamos con instalaciones modernas y cómodas para tu atención integral.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-8 rounded-[2rem] border border-[#E2E8F0] space-y-6 shadow-sm relative overflow-hidden group/card">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1080A0]/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover/card:scale-110"></div>
              
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 bg-[#1080A0] rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#1080A0]/30 animate-pulse-marker">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#1E293B] text-[1.125rem] mb-1">Dirección</h4>
                  <p className="text-[#64748B]">Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E2E8F0] relative z-10">
                <a 
                  href="https://maps.app.goo.gl/KMcPrSdWheWr6zRK8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={20} fill="#F59E0B" className="text-[#F59E0B]" />
                      ))}
                    </div>
                    <span className="font-bold text-[#1E293B] text-[1.125rem]">4.9 <span className="text-[#64748B] font-normal">(234 reseñas)</span></span>
                  </div>
                  <div className="text-[#1080A0] font-bold group-hover:translate-x-1 transition-transform">
                    Ver en Google Maps →
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:w-2/3 w-full h-[500px] rounded-[2.5rem] overflow-hidden border border-[#E2E8F0] shadow-xl relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1668478465495!2d-75.60338162412852!3d6.241720826372134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44299b8004f29d%3A0xe5495115264b3096!2sBiencrecer!5e0!3m2!1ses!2sco!4v1715874563452!5m2!1ses!2sco" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] brightness-[1.05] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
            ></iframe>
            
            {/* Custom Location Highlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+20px)] pointer-events-none">
              <div className="flex flex-col items-center">
                <div className="bg-[#1080A0] text-white text-[12px] font-bold px-4 py-1.5 rounded-full shadow-2xl mb-1 border-2 border-white animate-bounce">
                  ¡Estamos aquí!
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 bg-[#1080A0]/30 rounded-full animate-pulse-ring"></div>
                  <div className="w-6 h-6 bg-[#1080A0] border-4 border-white rounded-full shadow-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;

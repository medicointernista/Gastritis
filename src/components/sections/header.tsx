import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="relative w-full z-50">
      {/* Top Alert Bar */}
      <div className="bg-[#1080A0] text-[#F8FAFC]">
        <div className="container mx-auto px-6 h-[40px] flex items-center justify-center max-w-[1400px]">
          <div className="text-center">
            <span className="text-[14px] font-semibold tracking-wide uppercase">
              Gastritis y Colon Irritable
            </span>
          </div>
        </div>
      </div>

      {/* Sticky Main Navbar */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 border-b border-[#E2E8F0] shadow-sm">
        <div className="container mx-auto px-6 py-4 max-w-[1400px]">
          <div className="flex items-center justify-between gap-4 h-[72px]">
            {/* Logo Section */}
            <a 
              className="inline-flex items-center gap-2 rounded-lg py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0]" 
              aria-label="Ir al inicio" 
              href="/"
            >
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d1704aa7-153e-49e3-b4b6-de0676c393f3-gastritis-internistamedellin-com/assets/images/wilmer-obregon-logo-DT1tnFmb-1-1-1-1.png" 
                alt="Logo del Dr. Willmer Obregón" 
                className="h-14 md:h-16 w-auto object-contain"
                width={205}
                height={64}
              />
            </a>

            {/* CTA Section */}
            <div className="flex items-center gap-3">
              <a 
                href="https://api.whatsapp.com/send?phone=573053979628&text=Hola%20vi%20el%20sitio%20en%20Google%2C%20quiero%20informaci%C3%B3n%20de%20la%20consulta." 
                className="items-center justify-center gap-2 whitespace-nowrap rounded-[24px] text-[15px] font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1080A0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 inline-flex bg-gradient-to-r from-[#1080A0] to-[#0D6E8A] text-white shadow-lg [box-shadow:0_4px_14px_0_rgba(16,128,160,0.39)] hover:opacity-95 hover:scale-[1.02] h-[48px] px-6 py-2"
              >
                Agendar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
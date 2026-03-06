"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronUp 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F8F9FA] pt-16 pb-8 border-t border-[#E2E8F0]">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Column 1: Dr. Bio & Social */}
          <div className="bg-white rounded-[1.5rem] border border-[#E2E8F0] p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] h-full">
            <h3 className="text-[1.125rem] font-bold text-[#1E293B] mb-4">Dr. Willmer Obregón</h3>
            <p className="text-[#64748B] text-[0.875rem] leading-[1.6] mb-6">
              Médico con más de 15 años de experiencia, experto en tratamientos no quirúrgicos y cuidado integral. Especializado en infiltraciones de ácido hialurónico para mejorar tu movilidad y calidad de vida.
            </p>
              <div className="flex items-center gap-4">
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#1080A0] transition-colors hover:bg-[#1080A0] hover:text-white">
                  <Facebook size={18} />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#1080A0] transition-colors hover:bg-[#1080A0] hover:text-white">
                  <Instagram size={18} />
                </a>
                <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#1080A0] transition-colors hover:bg-[#1080A0] hover:text-white">
                  <Youtube size={18} />
                </a>
                <a href="https://www.tiktok.com/search?q=internista&t=1772648128170" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full border border-[#E2E8F0] text-[#1080A0] transition-colors hover:bg-[#1080A0] hover:text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                  </svg>
                </a>
              </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="bg-white rounded-[1.5rem] border border-[#E2E8F0] p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] h-full">
            <h3 className="text-[1.125rem] font-bold text-[#1E293B] mb-6">Información de contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1080A0] mt-0.5" />
                <span className="text-[#64748B] text-[0.875rem]">Biencrecer Cra 81 #27-17 Consultorio 1, Belén La Palma, Medellín, Antioquia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1080A0]" />
                <a href="tel:+573053979628" className="text-[#64748B] text-[0.875rem] hover:text-[#1080A0] transition-colors">+57 305 3979628</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1080A0]" />
                <a href="tel:+573011505174" className="text-[#64748B] text-[0.875rem] hover:text-[#1080A0] transition-colors">+57 301 150 5174</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1080A0]" />
                <a href="tel:+573009895852" className="text-[#64748B] text-[0.875rem] hover:text-[#1080A0] transition-colors">+57 300 989 5852</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Email & Hours */}
          <div className="bg-white rounded-[1.5rem] border border-[#E2E8F0] p-8 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] h-full">
            <h3 className="text-[1.125rem] font-bold text-[#1E293B] mb-6">Correo y horarios</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1080A0]" />
                <a href="mailto:consulta@internistamedellin.com" className="text-[#64748B] text-[0.875rem] hover:text-[#1080A0] transition-colors">consulta@internistamedellin.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1080A0]" />
                <a href="mailto:asistente@internistamedellin.com" className="text-[#64748B] text-[0.875rem] hover:text-[#1080A0] transition-colors">asistente@internistamedellin.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1080A0]" />
                <a href="mailto:estudios@internistamedellin.com" className="text-[#64748B] text-[0.875rem] hover:text-[#1080A0] transition-colors">estudios@internistamedellin.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1080A0]" />
                <a href="mailto:procedimientos@internistamedellin.com" className="text-[#64748B] text-[0.875rem] hover:text-[#1080A0] transition-colors">procedimientos@internistamedellin.com</a>
              </li>
            </ul>
            
            <div className="pt-4 border-t border-[#E2E8F0]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-[#1080A0]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1080A0]">Horario de Atención</span>
              </div>
                <p className="text-[#64748B] text-[0.875rem]">Lunes a viernes: 8:00 am a 5:00 pm</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-[#64748B] text-[0.875rem]">
            {currentYear} LocalRank. Todos los derechos reservados
          </div>
          
          <div className="opacity-80">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d1704aa7-153e-49e3-b4b6-de0676c393f3-gastritis-internistamedellin-com/assets/icons/logotipo-1769353677967-3.png" 
              alt="Logo Dr. Willmer Obregón" 
              width={180} 
              height={50}
              className="h-10 object-contain"
            />
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#64748B] text-[0.875rem] hover:text-[#1080A0] transition-colors group"
          >
            Volver arriba
            <div className="flex items-center justify-center w-6 h-6 rounded-full border border-[#E2E8F0] group-hover:border-[#1080A0] group-hover:bg-[#E1F1F6]">
              <ChevronUp size={14} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

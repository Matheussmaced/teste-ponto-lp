"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 w-full z-50 px-4 sm:px-6 flex justify-center">
      <nav
        className={`w-full max-w-6xl rounded-full transition-all duration-300 border ${isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm border-slate-200"
            : "bg-white/50 backdrop-blur-sm border-white/20"
          }`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Image src="/assets/Logo-InterCert.png" alt="Ponto Intercert Logo" width={140} height={40} className="h-20 w-auto object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#funcionalidades" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Funcionalidades</a>
              <a href="#beneficios" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Benefícios</a>
              <a href="#precos" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Preços</a>
              <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Acesso
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-900 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-4 shadow-lg absolute w-full left-0 top-20">
            <a href="#funcionalidades" className="block text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Funcionalidades</a>
            <a href="#beneficios" className="block text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Benefícios</a>
            <a href="#precos" className="block text-base font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Preços</a>
            <button className="w-full bg-slate-900 text-white px-5 py-3 rounded-full text-base font-medium mt-4">
              Acesso
            </button>
          </div>
        )}
      </nav>
    </div>
  );
}

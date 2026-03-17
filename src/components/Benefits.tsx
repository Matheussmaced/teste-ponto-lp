"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Geolocalização Inteligente",
      desc: "Controle total de localização com cercas virtuais. Ideal para equipes externas e filiais.",
    },
    {
      title: "Validação com Foto",
      desc: "Auditoria simples e rápida com confirmação visual do colaborador em cada registro.",
    },
    {
      title: "Automação de Horas",
      desc: "Economia de tempo no RH com redução drástica de erros manuais no fechamento.",
    },
    {
      title: "Histórico Rastreável",
      desc: "Dados sempre atualizados com data, hora, local exato da marcação e foto vinculada.",
    },
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 lg:pr-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              Transforme a gestão de ponto digital.
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Pensada para empresas que exigem precisão, segurança e praticidade no dia a dia. Chega de processos manuais e falhos.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-slate-800" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{benefit.title}</h4>
                    <p className="text-slate-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visual Container */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-2xl shadow-slate-200/50">
              <div className="rounded-2xl bg-slate-50 border border-slate-100 p-6 flex flex-col gap-4">
                {/* Fake Graph */}
                <div className="flex justify-between items-center mb-4">
                  <div className="h-6 w-32 bg-slate-200 rounded animate-pulse"></div>
                  <div className="flex gap-2 items-center">
                    <div className="h-4 w-16 bg-slate-200 rounded"></div>
                    <div className="w-10 h-6 bg-slate-800 rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="h-32 bg-white rounded-xl border border-slate-100 flex items-center justify-center p-4">
                   <div className="w-full h-full relative">
                      <svg viewBox="0 0 100 30" className="w-full h-full preserve-aspect-ratio-none">
                        <path d="M0,20 Q10,5 20,20 T40,15 T60,25 T80,10 T100,20" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="20" cy="20" r="1.5" fill="#0f172a" />
                        <circle cx="40" cy="15" r="1.5" fill="#0f172a" />
                        <circle cx="60" cy="25" r="1.5" fill="#0f172a" />
                        <circle cx="80" cy="10" r="1.5" fill="#0f172a" />
                      </svg>
                   </div>
                </div>

                <div className="flex gap-4 mt-2">
                   <div className="flex-1 bg-white border border-slate-100 p-4 rounded-xl">
                      <p className="text-xs text-slate-400 font-medium tracking-wider mb-1 uppercase">Produtividade</p>
                      <p className="text-2xl font-bold text-slate-900">+45%</p>
                   </div>
                   <div className="flex-1 bg-white border border-slate-100 p-4 rounded-xl">
                      <p className="text-xs text-slate-400 font-medium tracking-wider mb-1 uppercase">Confiabilidade</p>
                      <p className="text-2xl font-bold text-slate-900">99.9%</p>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      phase: "PASSO 01",
      title: "Registro com Localização",
      desc: "O colaborador faz o login no app e bate o ponto dentro da cerca virtual. O app captura geolocalização exata.",
    },
    {
      phase: "PASSO 02",
      title: "Selfie e Validação",
      desc: "O sistema exige uma foto do colaborador e valida a autenticidade facial, barrando anomalias e possíveis fraudes.",
    },
    {
      phase: "PASSO 03",
      title: "Horas e Histórico",
      desc: "O sistema processa a marcação, calcula adicionais ou atrasos automaticamente em tempo real e salva no histórico.",
    },
  ];

  return (
    <section id="como-funciona" className="scroll-mt-32 py-24 bg-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-orange-100 border border-slate-100 rounded-full text-xs font-bold tracking-widest text-orange-500 uppercase mb-8"
        >
          Na Prática
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
        >
          Controle inteligente <p className="text-orange-500"> do início ao fim.</p>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500 mb-20 max-w-2xl mx-auto"
        >
          O sistema garante que os registros sejam feitos exatamente onde devem ser, unindo praticidade para quem bate o ponto e auditoria simples para o RH.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Vertical Line Container */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-0">
          {steps.map((step, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>

              {/* Dot mapping to line */}
              <div className="absolute left-[20px] md:left-1/2 w-3 h-3 bg-orange-500 rounded-full transform -translate-x-1/2 mt-6 md:mt-0 z-10 ring-4 ring-white"></div>

              {/* Content box */}
              <div className="w-full md:w-1/2 flex">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 !== 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`w-full pl-12 pr-4 md:px-12 py-6 flex ${i % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className={`bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/40 w-full md:max-w-[400px] text-left ${i % 2 !== 0 ? 'md:text-left' : 'md:text-right text-left'}`}>
                    <span className="text-xs font-bold tracking-widest text-orange-400 uppercase mb-3 block">{step.phase}</span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

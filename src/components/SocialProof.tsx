"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function SocialProof() {
  const testimonials = [
    {
      text: "\"O Ponto Intercert reduziu nossas horas de fechamento de 3 dias para algumas horas no primeiro mês. A análise de relatórios é simplesmente perfeita.\"",
      author: "Sarah Jenkins",
      role: "VP de RH, DataFlow",
      initials: "SJ",
      bgColor: "bg-blue-600",
    },
    {
      text: "\"Substituímos três ferramentas antigas pelo Ponto Intercert. A interface é linda, mas a validação por geolocalização e fotos foi o divisor de águas.\"",
      author: "Michael Chang",
      role: "Diretor de Operações, Acme Corp",
      initials: "MC",
      bgColor: "bg-indigo-600",
    },
    {
      text: "\"A fraude no ponto noturno estava destruindo o moral da equipe e nosso orçamento. As validações barraram todas as inconsistências no primeiro dia.\"",
      author: "Elena Rostova",
      role: "Líder de Departamento Pessoal, Sentinel",
      initials: "ER",
      bgColor: "bg-slate-800",
    },
  ];

  return (
    <section id="depoimentos" className="scroll-mt-32 py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-orange-100 border border-slate-100 rounded-full text-xs font-bold tracking-widest text-orange-500 uppercase mb-8"
          >
            Depoimentos
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Amado por líderes de RH
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 mt-6"
          >
            Equipes confiam no Ponto Intercert para reduzir erros manuais, acelerar o fechamento e trazer segurança jurídica às operações.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: [0, -10, 0],
              }}
              viewport={{ once: true }}
              transition={{ 
                opacity: { duration: 0.5, delay: i * 0.1 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: i * 0.4
                }
              }}
              whileHover={{ 
                scale: 1.02,
                y: -15,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-white rounded-3xl p-8 border border-slate-100 
              shadow-xl shadow-slate-200/40 overflow-hidden
              cursor-pointer"
            >
              {/* Glow gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-purple-400/20 blur-xl"></div>
              </div>

              {/* Shine effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute -left-[150%] top-0 h-full w-[50%] 
                  bg-gradient-to-r from-transparent via-white/40 to-transparent 
                  skew-x-[-20deg] group-hover:left-[150%] transition-all duration-1000"
                ></div>
              </div>

              {/* Conteúdo */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-yellow-500 gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-400">
                    5.0 RATING
                  </span>
                </div>

                <p className="text-slate-600 mb-8 text-sm leading-relaxed min-h-[100px]">
                  {testi.text}
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${testi.bgColor} text-white flex items-center justify-center font-bold text-lg shadow-sm border-2 border-white`}
                  >
                    {testi.initials}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">
                      {testi.author}
                    </h4>
                    <p className="text-slate-500 text-xs">{testi.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
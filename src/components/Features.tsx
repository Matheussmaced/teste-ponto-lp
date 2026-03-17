"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, ShieldCheck, Fingerprint, CalendarClock, History } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Geolocalização Inteligente",
    description: "Garanta que os registros sejam feitos exatamente onde devem ser feitos. Configure cercas virtuais (geofencing) e permita ponto apenas dentro de locais autorizados.",
  },
  {
    icon: Fingerprint,
    title: "Validação com Foto",
    description: "Mais segurança em cada registro. Evite fraudes e aumente a confiabilidade das marcações com captura de foto no momento do ponto.",
  },
  {
    icon: CalendarClock,
    title: "Cálculo Automático",
    description: "Chega de planilhas complicadas. Contabilização automática das horas, incluindo jornada, extras e intervalos — pronto para consulta.",
  },
  {
    icon: History,
    title: "Histórico Completo",
    description: "Histórico detalhado com data, hora, local exato e foto. Tudo organizado para facilitar auditorias, gestão e tomada de decisão.",
  },
  {
    icon: ShieldCheck,
    title: "Controle Total",
    description: "Mais segurança nas marcações e redução total de inconsistências em operações distribuídas, obras e filiais.",
  },
  {
    icon: Clock,
    title: "Mais Eficiência",
    description: "Centralize toda a gestão de ponto em um único lugar e tenha visão completa da sua equipe em tempo real, sem burocracia.",
  }
];

export default function Features() {
  return (
    <section id="funcionalidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Mais eficiência. Menos burocracia. <br className="hidden md:block" /> Total controle.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-500"
          >
            Centralize toda a gestão de ponto em um único lugar e tenha visão 
            completa da sua equipe em tempo real.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

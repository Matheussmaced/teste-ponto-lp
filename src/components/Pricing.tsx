"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const phone = "558821015901";

  const plans = [
    {
      name: "Starter",
      desc: "Ideal para pequenas equipes, a partir de 10 colaboradores.",
      features: [
        "Registro via App",
        "Geolocalização Simples",
        "Cálculo Básico de Horas",
        "Suporte por Email",
      ],
      featured: false,
    },
    {
      name: "Professional",
      desc: "Controle rígido e automação para operações em crescimento.",
      features: [
        "Tudo do Starter",
        "Geofencing avançado",
        "Reconhecimento Facial (Foto)",
        "Banco de Horas Integrado",
        "Suporte Prioritário",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      desc: "Escalabilidade completa e integração para grandes corporações.",
      features: [
        "Tudo do Professional",
        "Integração API/ERP",
        "Single Sign-On (SSO)",
        "Gerente de Conta Dedicado",
        "Treinamento in-company",
      ],
      featured: false,
    },
  ];

  return (
    <section id="planos" className="scroll-mt-32 py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Planos que crescem{" "}
            <span className="text-orange-500">com a sua empresa</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500"
          >
            Soluções a partir de 10 colaboradores, com estrutura escalável.
            Ideal para pequenas, médias e grandes empresas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => {
            const message =
              plan.name === "Enterprise"
                ? "Olá! Gostaria de falar com um especialista sobre uma solução personalizada de controle de ponto."
                : `Olá! Quero melhorar o controle de ponto da minha empresa e tenho interesse no plano ${plan.name}.`;

            const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(
              message
            )}`;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2 ${plan.featured
                  ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/30 scale-105 z-10"
                  : "bg-white text-slate-900 border border-slate-100 shadow-xl shadow-slate-200/40"
                  }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <h3
                    className={`text-xl font-bold mb-2 ${plan.featured ? "text-white" : "text-slate-900"
                      }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm h-12 ${plan.featured ? "text-slate-300" : "text-slate-500"
                      }`}
                  >
                    {plan.desc}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check
                        className={`w-5 h-5 ${plan.featured
                          ? "text-blue-400"
                          : "text-slate-800"
                          }`}
                      />
                      <span
                        className={`text-sm ${plan.featured
                          ? "text-slate-200"
                          : "text-slate-600"
                          }`}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${plan.featured
                    ? "bg-white text-slate-900 hover:bg-slate-50"
                    : "bg-slate-50 text-slate-900 hover:bg-slate-100"
                    }`}
                >
                  {plan.name === "Enterprise"
                    ? "Falar com especialista"
                    : "Solicitar proposta"}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
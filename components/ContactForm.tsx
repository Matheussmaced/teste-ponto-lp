"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-900 -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Comece agora e transforme <br /> sua gestão
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
              Não perca tempo com processos manuais e falhos. Solicite uma demonstração gratuita e descubra como levar sua empresa para o próximo nível com um controle de ponto realmente inteligente.
            </p>
            
            <div className="flex items-center gap-4 text-slate-300">
               <div className="flex -space-x-3">
                 <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-slate-900"></div>
                 <div className="w-10 h-10 rounded-full bg-teal-500 border-2 border-slate-900"></div>
                 <div className="w-10 h-10 rounded-full bg-violet-500 border-2 border-slate-900"></div>
               </div>
               <p className="text-sm font-medium">Junte-se a +500 empresas inovadoras</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white text-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {isSuccess ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Solicitação Enviada!</h3>
                <p className="text-slate-500">Nossa equipe entrará em contato em breve com sua proposta personalizada.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold mb-8">Fale com um especialista</h3>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                  <input required type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="Seu nome completo" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Corporativo</label>
                  <input required type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="nome@empresa.com.br" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
                    <input required type="text" id="company" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="Nome da empresa" />
                  </div>
                  <div>
                    <label htmlFor="employees" className="block text-sm font-medium text-slate-700 mb-2">Nº Funcionários</label>
                    <select required id="employees" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all appearance-none bg-white">
                      <option value="" disabled selected>Selecione</option>
                      <option value="1-50">1 - 50</option>
                      <option value="51-200">51 - 200</option>
                      <option value="201-500">201 - 500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar proposta"}
                </button>
                <p className="text-xs text-slate-400 text-center mt-4">Ao enviar, você concorda com nossos Termos de Uso e Política de Privacidade.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

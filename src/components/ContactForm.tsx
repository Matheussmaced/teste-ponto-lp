"use client";

import { createLead } from "../leads";
import { CreateLeadDTO } from "../leads/types";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { User, Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    mensagem:
      "Quero melhorar o controle de ponto da minha empresa, principalmente na parte de ",
  });

  function formatTelefone(value: string) {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 10) {
      return numbers
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
    }

    return numbers
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }

  function isValidTelefone(value: string) {
    const numbers = value.replace(/\D/g, "");
    return numbers.length === 10 || numbers.length === 11;
  }

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === "whatsapp") {
      setForm((prev) => ({
        ...prev,
        whatsapp: formatTelefone(value),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const telefoneNumeros = form.whatsapp.replace(/\D/g, "");

    if (!form.nome) {
      toast.error("Nome é obrigatório");
      return;
    }

    if (!form.whatsapp) {
      toast.error("WhatsApp é obrigatório");
      return;
    }

    if (!isValidTelefone(form.whatsapp)) {
      toast.error("Digite um WhatsApp válido com DDD");
      return;
    }

    if (form.email && !isValidEmail(form.email)) {
      toast.error("Digite um e-mail válido");
      return;
    }

    setIsSubmitting(true);

    const payload: CreateLeadDTO = {
      nome: form.nome,
      id_origem: "8",
      telefone: telefoneNumeros,
      interesses: "",
      anotacoes: form.mensagem,
    };

    if (form.email) {
      payload.email = form.email;
    }

    try {
      const response = (await createLead(payload)) as {
        success: boolean;
        error?: string;
      };

      if (!response.success) {
        toast.error(response.error || "Erro ao enviar formulário");
        return;
      }

      setIsSuccess(true);
      toast.success("Contato enviado com sucesso!");
    } catch {
      toast.error("Erro de conexão com o servidor");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="scroll-mt-32 py-24 bg-slate-900 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-slate-800 to-slate-900 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO (inalterado) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold tracking-widest text-blue-400 uppercase mb-8">
              Contato imediato
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight bg-clip-text text-transparent bg-linear-to-br from-white via-white to-slate-500">
              Pronto para transformar sua gestão?
            </h2>

            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
              Deixe seus dados e um de nossos especialistas em RH entrará em contato para uma demonstração personalizada do Ponto Intercert.
            </p>

            <div className="space-y-4">
              {[
                "Demonstração gratuita em 15 min",
                "Sem taxas de implementação",
                "Suporte prioritário via WhatsApp"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative background for the form */}
            <div className="absolute -inset-4 bg-linear-to-br from-blue-600/20 to-purple-600/20 blur-3xl -z-10 rounded-[3rem]"></div>

            <div className="bg-white/3 backdrop-blur-xl border border-white/10 text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Subtle grid pattern */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

              {isSuccess ? (
                <div className="text-center py-10 relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-3xl font-bold mb-4 text-white">Solicitação Enviada!</h3>
                  <p className="text-slate-400 text-lg">
                    Nossa equipe entrará em contato em breve com sua proposta personalizada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Fale com um especialista</h3>
                    <p className="text-slate-400 text-sm">Preencha os campos abaixo e entraremos em contato.</p>
                  </div>

                  {/* NOME */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Nome Completo</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        id="nome"
                        value={form.nome}
                        type="text"
                        onChange={handleChange}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-white placeholder:text-slate-600"
                        placeholder="Seu nome completo"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* EMAIL */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">E-mail</label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          id="email"
                          value={form.email}
                          type="email"
                          onChange={handleChange}
                          className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-white placeholder:text-slate-600"
                          placeholder="nome@empresa.com"
                        />
                      </div>
                    </div>

                    {/* WHATSAPP */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">WhatsApp</label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                          <Phone className="w-5 h-5" />
                        </div>
                        <input
                          id="whatsapp"
                          value={form.whatsapp}
                          maxLength={15}
                          onChange={handleChange}
                          className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-white placeholder:text-slate-600"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>
                  </div>

                  {/* MENSAGEM */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Como podemos ajudar?</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-6 text-slate-500 group-focus-within:text-blue-500 transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        id="mensagem"
                        value={form.mensagem}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500/50 transition-all text-white placeholder:text-slate-600 resize-none"
                      />
                    </div>
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="cursor-pointer w-full relative group overflow-hidden bg-white text-slate-900 px-8 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-white/10 transition-all disabled:opacity-70 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10">{isSubmitting ? "Enviando..." : "Solicitar proposta agora"}</span>
                    {!isSubmitting && <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>

                  <p className="text-xs text-slate-500 text-center mt-6">
                    Seus dados estão protegidos. Ao enviar, você concorda com nossos <span className="text-slate-400 underline cursor-pointer">Termos</span>.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
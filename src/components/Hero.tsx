"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-32 relative pt-32 pb-20 lg:pt-12 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Decor */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

          {/* Left Content */}
          <div className="text-left w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-600 mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
              Controle de ponto inteligente, seguro e sem complicação
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]"
            >
              Transforme a gestão <br />
              <span className="text-orange-500">da sua equipe.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed"
            >
              Com nosso sistema, sua empresa ganha mais controle, reduz erros operacionais e elimina fraudes — tudo isso com uma experiência simples para gestores e colaboradores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <a
                href="#contato"
                className="bg-orange-500 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-orange-600 transition-all shadow-md shadow-slate-900/10 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer inline-block text-center"
              >
                Começar agora
              </a>
            </motion.div>
          </div>

          {/* Right Content - Mockup */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            {/* Glow effect behind the phone */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-1/2 left-1/2 md:left-auto md:right-10 -translate-x-1/2 md:translate-x-0 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-blue-100/50 rounded-full blur-3xl -z-10"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                {/* Render the user's raw transparent phone image directly */}
                <div className="relative w-[280px] md:w-[320px] lg:w-[350px] aspect-[1/2.1]">
                  <Image
                    src="/assets/celular.png"
                    alt="Aplicativo Ponto Intercert"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

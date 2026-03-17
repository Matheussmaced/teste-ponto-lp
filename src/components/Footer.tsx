import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/assets/Logo-InterCert.png" alt="Ponto Intercert Logo" width={320} height={90} className="h-30 w-auto object-contain" />
            </div>
            <p className="text-slate-500 text-sm">
              Simplificando a gestão de tempo para empresas que não tem tempo a perder.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Produto</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Funcionalidades</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Integrações</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Preços</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Empresa</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Sobre nós</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Carreiras</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Segurança</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">Portarias MTP</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Ponto Intercert. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

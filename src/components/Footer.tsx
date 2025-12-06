"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="py-12 sm:py-16 bg-paper-dark text-paper border-t border-dotted border-graphite"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <h2 className="font-serif text-3xl mb-6 lg:text-4xl text-paper">
              VINHEDO SAMARIAS
            </h2>
            <p className="font-sans text-sm opacity-80 leading-relaxed max-w-md text-graphite-lighter">
              Localizado nas colinas de Minas Gerais, nosso vinhedo combina
              tradição mineira e terroir brasileiro em produtos que expressam a
              alma de nossa terra através de três gerações de conhecimento.
            </p>
          </div>

          <div className="font-sans text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="uppercase tracking-widest opacity-50 mb-4 text-paper">
                  Contato
                </h3>
                <ul className="space-y-3 opacity-80 text-graphite-lighter">
                  <li>contato@samarias.org</li>
                  <li>+55 (32) 99988-8075</li>
                  <li>
                    Rua Belo Horizonte, 74
                    <br />
                    Ritápolis, MG - Brasil
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="uppercase tracking-widest opacity-50 mb-4 text-paper">
                  Visite-nos
                </h3>
                <ul className="space-y-3 opacity-80 text-graphite-lighter">
                  <li>
                    Visitas guiadas com
                    <br />
                    agendamento prévio.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 pt-6 border-t border-graphite flex flex-col sm:flex-row justify-between items-center">
          <p className="font-sans text-xs opacity-50 mb-4 sm:mb-0 text-graphite-lighter">
            © {new Date().getFullYear()} Vinhedo Samarias. Todos os direitos
            reservados.
          </p>
          <div className="font-sans text-xs opacity-50">
            <Link
              href="/termos-e-condicoes"
              className="mr-4 text-graphite-lighter no-underline hover:opacity-100 transition-opacity hover:text-paper"
            >
              Termos e Condições
            </Link>
            <Link
              href="/politica-de-privacidade"
              className="mr-4 text-graphite-lighter no-underline hover:opacity-100 transition-opacity hover:text-paper"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/keystatic"
              className="text-graphite-lighter no-underline opacity-30 hover:opacity-100 transition-opacity hover:text-paper"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

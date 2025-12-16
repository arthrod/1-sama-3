"use client";

import Link from "next/link";

export default function Footer() {
	return (
		<footer id="contato" className="py-16 bg-black text-paper border-t border-graphite">
			<div className="max-w-7xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{/* Brand */}
					<div className="lg:col-span-2">
						<h2 className="font-script text-4xl mb-6 text-paper">Sá Marias</h2>
						<p className="text-graphite-lighter text-sm leading-relaxed max-w-md mb-6">
							Localizado nas colinas de Minas Gerais, nosso vinhedo combina
							tradição mineira e terroir brasileiro em produtos que expressam
							a alma de nossa terra através de três gerações de conhecimento.
						</p>
						<div className="flex gap-4">
							<a
								href="https://instagram.com/vinhedosamarias" /* TODO: Substituir pela URL correta */
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 border border-graphite flex items-center justify-center text-graphite-lighter hover:text-paper hover:border-paper transition-colors no-underline"
							>
								<span>IG</span>
							</a>
							<a
								href="https://facebook.com/vinhedosamarias" /* TODO: Substituir pela URL correta */
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 border border-graphite flex items-center justify-center text-graphite-lighter hover:text-paper hover:border-paper transition-colors no-underline"
							>
								<span>FB</span>
							</a>
						</div>
					</div>

					{/* Contact */}
					<div>
						<h3 className="text-xs uppercase tracking-widest text-graphite-light mb-6">
							Contato
						</h3>
						<ul className="space-y-3 text-graphite-lighter text-sm">
							<li>contato@samarias.org</li>
							<li>+55 (32) 99988-8075</li>
							<li>
								Rua Belo Horizonte, 74
								<br />
								Ritápolis, MG - Brasil
							</li>
						</ul>
					</div>

					{/* Visit */}
					<div>
						<h3 className="text-xs uppercase tracking-widest text-graphite-light mb-6">
							Visite-nos
						</h3>
						<ul className="space-y-3 text-graphite-lighter text-sm">
							<li>Visitas guiadas com agendamento prévio.</li>
							<li>
								<Link
									href="/sitio-dutra"
									className="text-merlot-light no-underline hover:text-paper transition-colors"
								>
									Hospede-se no Sítio Dutra →
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="pt-8 border-t border-graphite flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-xs text-graphite-light">
						© {new Date().getFullYear()} Vinhedo Sá Marias. Todos os direitos
						reservados.
					</p>
					<div className="text-xs text-graphite-light flex gap-6">
						<Link
							href="/termos-e-condicoes"
							className="hover:text-paper transition-colors no-underline"
						>
							Termos
						</Link>
						<Link
							href="/politica-de-privacidade"
							className="hover:text-paper transition-colors no-underline"
						>
							Privacidade
						</Link>
						<Link
							href="/llms.txt"
							className="hover:text-paper transition-colors no-underline"
						>
							llms.txt
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

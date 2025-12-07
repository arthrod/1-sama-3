"use client";

import Link from "next/link";

export function Newsletter() {
	return (
		<div className="relative bg-paper-dark dark:bg-black text-paper py-24 px-6 border-y-4 border-double border-graphite">
			<div className="max-w-4xl mx-auto text-center relative z-10">
				<div className="inline-block border-2 border-dotted border-graphite px-8 py-12 bg-ink/50 backdrop-blur-sm relative">
					{/* Corner Accents */}
					<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-paper"></div>
					<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-paper"></div>
					<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-paper"></div>
					<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-paper"></div>

					<Link href="/posts" className="block no-underline hover:no-underline">
						<h2 className="font-serif text-4xl md:text-6xl mb-6 text-paper hover:text-merlot transition-colors duration-300 cursor-pointer">
							Crônicas da Adega
						</h2>
					</Link>

					<p className="font-serif italic text-graphite-lighter mb-10 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
						&ldquo;Apenas o essencial permanece.&rdquo; <br />
						Junte-se à nossa lista para acesso exclusivo à Colheita de Inverno
						2025.
					</p>

					<form
						className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
						onSubmit={(e) => e.preventDefault()}
					>
						<input
							type="email"
							placeholder="Endereço de E-mail"
							className="flex-1 bg-transparent border-b border-graphite py-3 px-4 text-paper placeholder-graphite focus:outline-none focus:border-merlot transition-colors font-serif text-center md:text-left"
						/>
						<button
							type="submit"
							className="bg-paper text-ink hover:bg-merlot hover:text-white font-sans font-bold uppercase tracking-widest text-xs py-4 px-8 transition-colors duration-300"
						>
							Cadastrar
						</button>
					</form>
				</div>

				<p className="mt-12 text-[10px] text-graphite uppercase tracking-[0.3em]">
					Ritápolis • Minas Gerais • Brasil
				</p>
			</div>
		</div>
	);
}
